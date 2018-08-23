
import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import { filter, flatMap, map, toArray } from 'rxjs/operators';
import * as AWS from 'aws-sdk';
import {fromPromise} from 'rxjs/internal-compatibility';



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
  BUCKET = 'photo-portfolio-1';
  url = 'https://s3.us-east-1.amazonaws.com/photo-portfolio-1/';
  S3Client;
  galleries = [];
  AWSCredObservable;
  /**
   * @name constructor
   */
  constructor() {
    this.initAWS();
    this.getGalleries().subscribe(result => this.galleries = result);
  }
  /**
   * @name initAWS
   * @desc gets credentials for aws, initializes s3 client
   */
  public initAWS() {
    AWS.config.region = 'us-east-1';
    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
      IdentityPoolId: 'us-east-1:ca237576-1df4-40e3-a767-71100fb37af3'
    });
    const credPromise = (AWS.config.credentials as AWS.Credentials).getPromise();
    // this observable gets the credentials and then initializes the correct resources
    this.AWSCredObservable = fromPromise(credPromise).pipe(
      flatMap(() => {
        this.S3Client = new AWS.S3;
        return of({status: 'success'});
      })
    );
  }
  /**
   * @name getGalleries
   * @desc gets the list of galleries
   * @returns {Observable<any[]>}
   */
  public getGalleries(): Observable<any[]> {
    const listObjParams = {
      Bucket: this.BUCKET,
      Delimiter: '/',
      // Prefix: 'test/'
    };
    return this.AWSCredObservable.pipe(
      flatMap(() => fromPromise(this.S3Client.listObjectsV2(listObjParams).promise())),
      flatMap(result => result['CommonPrefixes'])       ,
      map(result => result['Prefix']),
      map(result => result.toString().slice(0, -1)),
      toArray(),
    );
  }
  /**
   * @name getTheme
   * @param {string} gallery
   * @desc gets the theme for the page
   * @returns {Observable<any[]>}
   */
  public getTheme(gallery): Observable<any> {
    const params = {
      Bucket: this.BUCKET,
      Key: 'themes.json'
    };
    return this.AWSCredObservable.pipe(
      flatMap( () => fromPromise(this.S3Client.getObject(params).promise())),
      flatMap( result => of(JSON.parse(result['Body'].toString())) ),
      map( result => result[gallery])
    );
  }
  /**
   * @name getImages
   * @param {string} gallery
   * @desc gets the images for the gallery
   * @returns {Observable<any[]>}
   */
  public getImages(gallery): Observable<any[]> {
    const listObjParams = {
      Bucket: this.BUCKET,
      Prefix: gallery
    };
    return this.AWSCredObservable.pipe(
      flatMap(() => fromPromise(this.S3Client.listObjectsV2(listObjParams).promise())),
      flatMap(result => result['Contents']),
      filter(result => result['Key'].includes('.jpg')),
      flatMap(result => {
        result['url'] = this.url + result['Key'];
        return of(result);
      }),
      flatMap(result => {
        return this.getTags(result);
      }),
      toArray()
    );
  }
  /**
   * @name getTags
   * @param {string} obj
   * @desc gets the tags for the object
   * @returns {Observable<any[]>}
   */
  public getTags(obj): Observable<any[]> {
    const objTagParams = {
      Bucket: this.BUCKET,
      Key: obj['Key']
    };

    return fromPromise(this.S3Client.getObjectTagging(objTagParams).promise()).pipe(
      flatMap(result => result['TagSet']),
      map(result => {
        obj[result['Key']] = result['Value'];
      }),
      toArray(),
      flatMap( () => of(obj))
    );

  }
  /**
   * @name getNext
   * @param {string} curr
   * @desc gets the next gallery
   * @returns {string}
   */
  public getNext(curr) {
    let next = this.galleries.indexOf(curr);
    next++;
    if (next >= this.galleries.length) {
      next = 0;
    }
    return this.galleries[next];
  }
  /**
   * @name getPrev
   * @param {string} curr
   * @desc gets the previous gallery
   * @returns {string}
   */
  public getPrev(curr) {
    let prev = this.galleries.indexOf(curr);
    prev--;
    if (prev < 0) {
      prev = this.galleries.length - 1;
    }
    return this.galleries[prev];
  }
}


