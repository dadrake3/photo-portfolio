import {Component, ElementRef, ViewChild, OnInit} from '@angular/core';
import {ImageProviderService} from '../image-provider.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
    galleries = [];
    el;
  constructor(el: ElementRef,
              private router: Router,
              public imageProviderService: ImageProviderService ) {
    this.el = el;
  }
  ngOnInit() {
    this.imageProviderService.getGalleries().subscribe(result => {
      this.galleries = this.galleries.concat(result);
    });
  }
  public onClick(gallery) {
    this.router.navigateByUrl('/gallery/' + gallery);
  }
}


