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
        console.log(this.gallery);
        return this.imageProviderService.getImagesObs(this.gallery);
      })
    ).subscribe(images => this.images$ = images);
  }

  public getNext() {
    const next = this.imageProviderService.getNext(this.gallery);
    this.images$ = [];
    this.router.navigateByUrl('/gallery/' + next);
  }
  public getPrev() {
    const prev = this.imageProviderService.getPrev(this.gallery);
    this.images$ = [];
    this.router.navigateByUrl('/gallery/' + prev);
  }
  public goBack() {
    this.router.navigateByUrl('');
  }
  ngAfterViewInit() {
    // this will reload the theme every time the route param changes
    this.route.params.pipe(
      flatMap(() => this.imageProviderService.getThemeObs()),
      map( result => result[this.gallery])
    ).subscribe(theme => {
        document.body.style.backgroundColor = theme.background;
        document.body.style.color = theme.text;
        this.accent.nativeElement.style.backgroundColor = theme.accent;
    });
  }
}
