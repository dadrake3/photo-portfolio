import {Component, ElementRef, ViewChild, AfterViewInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ImageProviderService} from '../image-provider.service';

// TODO: MAKE BACKGROUND DARKER WHEN HOVERING AN IMAGE POSSIBLY?


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements AfterViewInit {
  @ViewChild('accent') accent: ElementRef;
  images$;
  gallery;
  constructor(private route: ActivatedRoute,
              private imageProviderService: ImageProviderService,
              private router: Router) {
    // this will reload the images every time the route param changes
    route.params.subscribe(val => {
      this.gallery = this.route.snapshot.paramMap.get('gallery');
      const _ = this;
      this.imageProviderService.getImages(this.gallery, function (len) {
        if (len === 0) {_.router.navigateByUrl(''); }
      }).subscribe(
          images => this.images$ = images,
          err => console.log(err),
          () => {}
          );
    });
    this.imageProviderService.getGalleries(function () {});
  }
  // TODO: THESE NEED TO BE FIXED ON SPECIFIC URL LOAD
  public getNext() {
    const next = this.imageProviderService.getNext(this.gallery);
    this.router.navigateByUrl('/gallery/' + next);
  }
  public getPrev() {
    const prev = this.imageProviderService.getPrev(this.gallery);
    this.router.navigateByUrl('/gallery/' + prev);
  }
  public goBack() {
    this.router.navigateByUrl('');
  }
  ngAfterViewInit() {
    const _ = this;
    // this will reload the theme every time the route param changes
    this.route.params.subscribe(val => {
      this.imageProviderService.getTheme(this.gallery, function (theme) {
        document.body.style.backgroundColor = theme.background;
        document.body.style.color = theme.text;
        _.accent.nativeElement.style.backgroundColor = theme.accent;
      });
    });
  }
}
