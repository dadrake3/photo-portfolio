
import {Injectable} from '@angular/core';
import { Observable, of } from 'rxjs';
import * as AWS from 'aws-sdk';



export interface Image {
  url: string;
  info: string;
  date: string;
  title: string;
}

export interface Theme {
  accent: string;
  background: string;
  text: string;
}


@Injectable({
  providedIn: 'root'
})

export class ImageProviderService {


  BUCKET = 'photo-portfollio';
  url = 'https://s3.us-east-2.amazonaws.com/photo-portfollio/';
  S3Client;
  public previewImages = {all: []};
  galleries = [];
  themes;
  credPromise;

  constructor() {
    AWS.config.region = 'us-east-1';
    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
      IdentityPoolId: 'us-east-1:ca237576-1df4-40e3-a767-71100fb37af3'
    });

    const _this = this;

    const credPromise = (AWS.config.credentials as AWS.Credentials).getPromise();
    this.credPromise = credPromise;
    credPromise.then(function(data) {
      console.log('sucess');
      _this.S3Client = new AWS.S3;
    }).catch(function(err) {
      console.log(err);
    });

  }
  //
  //
  //
  public getImages(gallery, callback): Observable<Image[]> {
    const listObjParams = {
      Bucket: this.BUCKET,
      Prefix: gallery
    };


    const images = [];


    const url = this.url;
    const s3 = this.S3Client;
    const bucket = this.BUCKET;
    this.S3Client.listObjectsV2(listObjParams, function (err, objList) {
      if (err) {
        console.log('There was an error getting your files: ' + err);
        return;
      }
      const list = objList.Contents;
      for (let i = 0; i < list.length; i++) {
        if (list[i].Key.includes('.jpg')) {
          const objTagParams = { Bucket: bucket, Key: list[i].Key };
          s3.getObjectTagging(objTagParams, function(err1, tagset) {
            const fullUrl = (url + list[i].Key).replace(new RegExp(' ', 'g'), '+');
            const currImage = {url: fullUrl};
            if (tagset.TagSet.length > 0) {
              currImage[tagset.TagSet[0].Key] = tagset.TagSet[0].Value;
              currImage[tagset.TagSet[1].Key] = tagset.TagSet[1].Value;
              currImage[tagset.TagSet[2].Key] = tagset.TagSet[2].Value;
            }
            images.push(currImage);
          });
        }
      }
      callback(list.length);
    });

    return of(images);
  }
  //
  //
  //
  public getGalleries(callback): Observable<any[]> {

    const listObjParams = {
      Bucket: this.BUCKET,
      Delimiter: '/',
      // Prefix: 'test/'
    };

    const galleries = [
      { text: 'DARYL DRAKE', weight: 7, rotate: this.randRange(-30, 30), color: '#000000' },
      // { text: 'all', weight: 7, rotate: this.randRange(-30, 30), color: '#000000' },
      { text: 'dadrake3@gmail.com',
        weight: 4,
        rotate: this.randRange(-30, 30),
        color: '#000000',
        link: 'mailto:dadrake3@gmail.com',
      }
    ];
    const _this = this;

    this.S3Client.listObjectsV2(listObjParams, function (err, objList) {
      if (err) {
        console.log('There was an error getting your files: ' + err);
        return;
      }
      const list = objList.CommonPrefixes;
      for (let i = 0; i < list.length; i++) {
        const gallery = list[i].Prefix.replace('/', '');
        const temp = {text: gallery, weight: _this.randRange(2, 7), rotate: _this.randRange(-30, 30), color: '#000000'};
        galleries.push(temp);
        _this.galleries.push(gallery);
        _this.getImages(gallery, function () {})
          .subscribe(images => {_this.previewImages[gallery] = images; });
      }
      callback();
    });
    return of(galleries);
  }
  //
  //
  //
  private randRange(min, max) {

    return Math.random() * (max - min) + min;
  }
  //
  //
  //
  public getBkgrdImg(key) {

    if (this.previewImages.hasOwnProperty(key)) {
      return this.previewImages[key][Math.floor(this.randRange(0, 16))].url;
    } else { return ''; }
  }
  //
  //
  //
  public getNext(curr) {
    let next = this.galleries.indexOf(curr);
    next++;
    if (next >= this.galleries.length) {
      next = 0;
    }
    return this.galleries[next];
  }
  //
  //
  //
  public getPrev(curr) {
    let prev = this.galleries.indexOf(curr);
    prev--;
    if (prev < 0) {
      prev = this.galleries.length - 1;
    }
    return this.galleries[prev];
  }
  //
  //
  //
  public getTheme(key, callback) {


    const params = {
      Bucket: this.BUCKET,
      Key: 'themes.json'
    };
    let theme;
    this.S3Client.getObject(params, function(err, data) {
      const themes = JSON.parse(data.Body.toString());
      if (themes.hasOwnProperty(key)) {
        theme = themes[key];
      } else {
        theme = themes.default;
      }
      callback(theme);
    });
  }
}


