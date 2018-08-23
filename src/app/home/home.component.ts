import {Component, ElementRef, ViewChild, AfterViewInit} from '@angular/core';
import {ImageProviderService} from '../image-provider.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('accent') accent: ElementRef;
  el;

  constructor(el: ElementRef,
              private imageProviderService: ImageProviderService) {
    this.el = el;
  }

  ngAfterViewInit() {
    console.log();
    const _ = this;

    // this.imageProviderService.credPromise.then(function(data) {
    //   // console.log('sucess');
    //   _.imageProviderService.getTheme('home', function (theme) {
    //     document.body.style.backgroundColor = theme.background;
    //     document.body.style.color = theme.text;
    //     _.accent.nativeElement.style.backgroundColor = theme.accent;
    //   });
    // }).catch(function(err) {
    //   console.log(err);
    // });
  }
}

