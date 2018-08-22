import {Component, ElementRef, ViewChild, OnInit} from '@angular/core';
import {ImageProviderService} from '../image-provider.service';
import {Router} from '@angular/router';
import {TagCloudComponent, CloudOptions, ZoomOnHoverOptions} from 'angular-tag-cloud-module';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
    @ViewChild(TagCloudComponent) tagCloudComponent: TagCloudComponent;

    nonGalleryLinks = ['dadrake3@gmail.com', 'DARYL DRAKE'];
    galleries;
    description = false;
    options: CloudOptions = {
      // if width is between 0 and 1 it will be set to the size of the upper element multiplied by the value
      width : 1000,
      height : 400,
      overflow: false,
    };
    zoomOnHoverOptions: ZoomOnHoverOptions = {
      scale: 2.0, // Elements will become 130 % of current zize on hover
      transitionTime: 0.3, // it will take 1.2 seconds until the zoom level defined in scale property has been reached
      delay: 0 // Zoom will take affect after 0.8 seconds
    };
    el;
    prev = '';


  public dragEnd(event) {
    console.log('Element was dragged', event);
  }

  constructor(el: ElementRef,
              private router: Router,
              public imageProviderService: ImageProviderService ) {
    this.el = el;
  }


  ngOnInit() {
    const _this = this;
    this.imageProviderService.credPromise.then(function () {
      _this.imageProviderService.getGalleries(function () {
        // _this.tagCloudComponent.reDraw();
      })
        .subscribe(
          galleries => {_this.galleries = galleries; },
          err => console.log(err),
          () => {
          });
    });
  }


  public onHover(event) {
    const target = document.getElementById('previewImage');
    const x = event.x, y = event.y, elementMouseIsOver = document.elementFromPoint(x, y);
    if (elementMouseIsOver.parentElement.id === 'navCloud' && elementMouseIsOver.innerHTML !== this.prev) {
      if (elementMouseIsOver.innerHTML === 'DARYL DRAKE') {
        this.description = true;
      } else {
        try {
          const bkdImage = this.imageProviderService.getBkgrdImg(elementMouseIsOver.innerHTML);
          target.style.backgroundImage = 'url(' + bkdImage + ')';
          // target.style.webkitAnimation = 'fadein 0.5s !important';
          // target.style.animation = 'fadein 0.5s !important';


          this.prev = elementMouseIsOver.innerHTML;
          this.description = false;
        } catch (e) { /*console.log(e);*/ }
      }
    } else if (elementMouseIsOver.innerHTML !== this.prev) {
      target.style.backgroundImage = '';
      this.prev = elementMouseIsOver.innerHTML;
      this.description = false;
    } else { this.description = false; }
  }
  public onClick(event) {

    if (this.nonGalleryLinks.indexOf(event.text) < 0) {
      const gallery = event.text;

      this.router.navigateByUrl('/gallery/' + gallery);
    }
  }
}


