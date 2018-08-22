import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { TagCloudModule } from 'angular-tag-cloud-module';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { NavComponent } from './nav/nav.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { DragAndDropModule } from 'angular-draggable-droppable';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GalleryComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    TagCloudModule,
    AppRoutingModule,
    AppRoutingModule,
    LazyLoadImageModule,
    DragAndDropModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
