import {Component, ElementRef, ViewChild, AfterViewInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ImageProviderService} from '../image-provider.service';
import {flatMap, toArray, map} from 'rxjs/operators';

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
    route.params.pipe(
      flatMap( () => {
        this.gallery = this.route.snapshot.paramMap.get('gallery');
        return this.imageProviderService.getImages(this.gallery);
      })
    ).subscribe(images => this.images$ = images);
  }
  ngAfterViewInit() {
    // this will reload the theme every time the route param changes
    this.route.params.pipe(
      flatMap(() => this.imageProviderService.getTheme(this.gallery)),
    ).subscribe(theme => {
      console.log(theme);
      if (typeof theme === 'undefined') {
        this.router.navigateByUrl('/');
      }
      document.body.style.backgroundColor = theme.background;
      document.body.style.color = theme.text;
      this.accent.nativeElement.style.backgroundColor = theme.accent;
    });
  }
  /**
   * @name getNext
   * @desc navigates to the next gallery
   */
  public getNext() {
    const next = this.imageProviderService.getNext(this.gallery);
    this.images$ = [];
    this.router.navigateByUrl('/gallery/' + next);
  }
  /**
   * @name getPrev
   * @desc navigates to the previous gallery
   */
  public getPrev() {
    const prev = this.imageProviderService.getPrev(this.gallery);
    this.images$ = [];
    this.router.navigateByUrl('/gallery/' + prev);
  }
  /**
   * @name goBack
   * @desc navigates to the home page
   */
  public goBack() {
    this.router.navigateByUrl('');
  }
}
