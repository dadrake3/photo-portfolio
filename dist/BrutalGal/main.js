(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gallery/gallery.component */ "./src/app/gallery/gallery.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: 'gallery/:gallery', component: _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_3__["GalleryComponent"] },
    // { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<router-outlet></router-outlet>\n\n<!--&lt;!&ndash; HIDDEN IMAGE PRE LOADER &ndash;&gt;-->\n<!--<div *ngFor=\"let image of images\">-->\n  <!--<img src={{image.url}} style=\"display:none;\" />-->\n<!--</div>-->\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// TODO: CLOUDFRONT TO CONFIGURE THE URL CACHING AND ROUTING
// TODO: ADD A CUSTOM DOMAIN NAME
var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var angular_tag_cloud_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-tag-cloud-module */ "./node_modules/angular-tag-cloud-module/fesm5/angular-tag-cloud-module.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gallery/gallery.component */ "./src/app/gallery/gallery.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-lazyload-image */ "./node_modules/ng-lazyload-image/index.js");
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ng_lazyload_image__WEBPACK_IMPORTED_MODULE_8__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_6__["GalleryComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_7__["NavComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                angular_tag_cloud_module__WEBPACK_IMPORTED_MODULE_3__["TagCloudModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                ng_lazyload_image__WEBPACK_IMPORTED_MODULE_8__["LazyLoadImageModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/gallery/gallery.component.css":
/*!***********************************************!*\
  !*** ./src/app/gallery/gallery.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img.ng-lazyloaded {\n  -webkit-animation: fadein 0.5s !important; /* Safari, Chrome and Opera > 12.1 */ /* Firefox < 16 */ /* Internet Explorer */ /* Opera < 12.1 */\n  animation: fadein 0.5s;\n}\n@-webkit-keyframes fadein {\n  from { opacity: 0; }\n  to   { opacity: 1; }\n}\n@keyframes fadein {\n  from { opacity: 0; }\n  to   { opacity: 1; }\n}\n@media only screen and (min-width: 600px) {\n  img {\n    width: auto;\n    height: 70vh;\n    min-height: 400px;\n    margin-top: 5vh;\n    /*max-width: 50%;*/\n    box-shadow: 10px 10px black;\n    margin-left: 10%;\n    z-index: 9999;\n    transition: all .05s ease-in-out;\n  }\n\n  img:hover {\n    /*transform: scale(1.3);*/\n    height: 95vh !important;\n    width: auto !important;\n    z-index: 9999999 !important;\n    box-shadow: 13px 13px black !important;\n    /*border-style: solid;*/\n    /*border-width: 10px;*/\n  }\n}\n.gal{\n  position: relative;\n  margin-top: 150px;\n  margin-bottom: 50px;\n}\n.box{\n  display: flex;\n  flex-direction: row;\n}\np{\n  margin-top: calc(5vh + 10px);\n  width: auto;\n  margin-left: 20px;\n\n}\n#accent{\n  position: fixed;\n  width: 500px;\n  height: 500px;\n  border-radius: 250px;\n  left: 30px;\n  top: 60px;\n  -webkit-transform: rotate(-30deg);\n          transform: rotate(-30deg);\n  text-align: center;\n  padding-top: 20px;\n\n  /*background-color: antiquewhite;*/\n}\n.controls{\n  position: absolute;\n  display: flex;\n  flex-direction: row;\n  left: 151px;\n  margin-bottom: 40px;\n  padding-right: 10px;\n  margin-bottom: 60px;\n}\n.title{\n  text-decoration: line-through;\n}\n.imageInfo{\n  margin-top: -5px;\n  margin-bottom: 5vh;\n}\n.goBack{\n  position: absolute;\n  right: 50px;\n  top: 20px;\n}\n.prev .next{\n  position: absolute;\n\n}\n.next{\n  margin-left: 20px;\n}\n#accentMobile{\n  display: none;\n}\n@media only screen and (max-width: 600px) {\n  img{\n    width: 90% !important;\n    /*height: auto !important;*/\n    margin-top: 5vh;\n    /*max-width: 50%;*/\n    box-shadow: 5px 5px black;\n    margin-left: 5%;\n    z-index: 9999;\n  }\n\n  .box{\n    display: block !important;\n    flex-direction: column;\n  }\n  #accent{\n    display: none;\n  }\n\n  #accentMobile{\n    top: 20px;\n    margin-left: 14px !important;\n    display: block;\n    position: fixed;\n    width: 90% !important;\n    height: 30px;\n    text-align: left;\n    -webkit-transform: rotate(90deg);\n    transform: rotate(90deg);\n    -o-transform: rotate(90deg);\n\n    -webkit-transform-origin: left top 0;\n    transform-origin: left top 0;\n    -o-transform-origin: left top 0;\n  }\n\n\n}\n"

/***/ }),

/***/ "./src/app/gallery/gallery.component.html":
/*!************************************************!*\
  !*** ./src/app/gallery/gallery.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div id=\"accent\" #accent>\n  THIS ONES CALLED: {{gallery}}!\n</div>\n\n<div id=\"accentMobile\">\n  THIS ONES CALLED: {{gallery}}\n</div>\n\n<div class=\"goBack\" (click)=\"goBack()\">\n  go back\n</div>\n\n<div class=\"gal\" >\n  <div class=\"\" *ngFor=\"let image of images$\">\n   <span class=\"box\">\n      <!--<img src={{image.url}}>-->\n     <img [lazyLoad]=\"image.url\">\n      <span>\n        <p class=\"title\">{{image.title}}</p>\n        <p class=\"imageInfo\">{{image.info}}</p>\n      </span>\n   </span>\n  </div>\n</div>\n\n<span class=\"controls\">\n  <div class=\"prev\" (click)=\"getPrev()\" (window:keyup.arrowleft)=\"getPrev()\">\n    prev\n  </div>\n  <div class=\"next\" (click)=\"getNext()\" (window:keyup.arrowright)=\"getNext()\">\n    next\n  </div>\n</span>\n\n\n"

/***/ }),

/***/ "./src/app/gallery/gallery.component.ts":
/*!**********************************************!*\
  !*** ./src/app/gallery/gallery.component.ts ***!
  \**********************************************/
/*! exports provided: GalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryComponent", function() { return GalleryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _image_provider_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../image-provider.service */ "./src/app/image-provider.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// TODO: MAKE BACKGROUND DARKER WHEN HOVERING AN IMAGE POSSIBLY?
var GalleryComponent = /** @class */ (function () {
    function GalleryComponent(route, imageProviderService, router) {
        var _this = this;
        this.route = route;
        this.imageProviderService = imageProviderService;
        this.router = router;
        // this will reload the images every time the route param changes
        route.params.subscribe(function (val) {
            _this.gallery = _this.route.snapshot.paramMap.get('gallery');
            var _ = _this;
            _this.imageProviderService.getImages(_this.gallery, function (len) {
                if (len === 0) {
                    _.router.navigateByUrl('');
                }
            }).subscribe(function (images) { return _this.images$ = images; }, function (err) { return console.log(err); }, function () { });
        });
        this.imageProviderService.getGalleries(function () { });
    }
    // TODO: THESE NEED TO BE FIXED ON SPECIFIC URL LOAD
    GalleryComponent.prototype.getNext = function () {
        var next = this.imageProviderService.getNext(this.gallery);
        this.router.navigateByUrl('/gallery/' + next);
    };
    GalleryComponent.prototype.getPrev = function () {
        var prev = this.imageProviderService.getPrev(this.gallery);
        this.router.navigateByUrl('/gallery/' + prev);
    };
    GalleryComponent.prototype.goBack = function () {
        this.router.navigateByUrl('');
    };
    GalleryComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var _ = this;
        // this will reload the theme every time the route param changes
        this.route.params.subscribe(function (val) {
            _this.imageProviderService.getTheme(_this.gallery, function (theme) {
                document.body.style.backgroundColor = theme.background;
                document.body.style.color = theme.text;
                _.accent.nativeElement.style.backgroundColor = theme.accent;
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('accent'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], GalleryComponent.prototype, "accent", void 0);
    GalleryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gallery',
            template: __webpack_require__(/*! ./gallery.component.html */ "./src/app/gallery/gallery.component.html"),
            styles: [__webpack_require__(/*! ./gallery.component.css */ "./src/app/gallery/gallery.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _image_provider_service__WEBPACK_IMPORTED_MODULE_2__["ImageProviderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], GalleryComponent);
    return GalleryComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\n  /*font-family: Courier;*/\n}\n\n.test{\n\n}\n\n#accent{\n  position: absolute;\n  width: 500px;\n  height: 500px;\n  border-radius: 250px;\n  left: 100px;\n  top: 50px;\n\n}\n\n@media only screen and (max-width: 600px) {\n  body {\n    overflow-x: hidden;\n    overflow-y: scroll;\n  }\n}\n\n\n\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"accent\" #accent>\n\n</div>\n\n<app-nav></app-nav>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _image_provider_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../image-provider.service */ "./src/app/image-provider.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(el, imageProviderService) {
        this.imageProviderService = imageProviderService;
        this.el = el;
    }
    HomeComponent.prototype.ngAfterViewInit = function () {
        console.log();
        var _ = this;
        this.imageProviderService.getTheme('home', function (theme) {
            document.body.style.backgroundColor = theme.background;
            document.body.style.color = theme.text;
            _.accent.nativeElement.style.backgroundColor = theme.accent;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('accent'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HomeComponent.prototype, "accent", void 0);
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _image_provider_service__WEBPACK_IMPORTED_MODULE_1__["ImageProviderService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/image-provider.service.ts":
/*!*******************************************!*\
  !*** ./src/app/image-provider.service.ts ***!
  \*******************************************/
/*! exports provided: ImageProviderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageProviderService", function() { return ImageProviderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var aws_sdk_clients_s3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aws-sdk/clients/s3 */ "./node_modules/aws-sdk/clients/s3.js");
/* harmony import */ var aws_sdk_clients_s3__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(aws_sdk_clients_s3__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ImageProviderService = /** @class */ (function () {
    function ImageProviderService() {
        this.BUCKET = 'photo-portfollio';
        this.accessKeyId = 'AKIAJVOAXFXOQLKYKAIA';
        this.secretAccessKey = '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';
        this.url = 'https://s3.us-east-2.amazonaws.com/photo-portfollio/';
        this.previewImages = { all: [] };
        this.galleries = [];
        this.S3Client = new aws_sdk_clients_s3__WEBPACK_IMPORTED_MODULE_2__({
            accessKeyId: this.accessKeyId,
            secretAccessKey: this.secretAccessKey,
            region: 'us-east-2'
        });
    }
    //
    //
    //
    ImageProviderService.prototype.getImages = function (gallery, callback) {
        var listObjParams = {
            Bucket: this.BUCKET,
            Prefix: gallery
        };
        var images = [];
        var url = this.url;
        var s3 = this.S3Client;
        var bucket = this.BUCKET;
        this.S3Client.listObjectsV2(listObjParams, function (err, objList) {
            if (err) {
                console.log('There was an error getting your files: ' + err);
                return;
            }
            var list = objList.Contents;
            var _loop_1 = function (i) {
                if (list[i].Key.includes('.jpg')) {
                    var objTagParams = { Bucket: bucket, Key: list[i].Key };
                    s3.getObjectTagging(objTagParams, function (err1, tagset) {
                        var fullUrl = (url + list[i].Key).replace(new RegExp(' ', 'g'), '+');
                        var currImage = { url: fullUrl };
                        if (tagset.TagSet.length > 0) {
                            currImage[tagset.TagSet[0].Key] = tagset.TagSet[0].Value;
                            currImage[tagset.TagSet[1].Key] = tagset.TagSet[1].Value;
                            currImage[tagset.TagSet[2].Key] = tagset.TagSet[2].Value;
                        }
                        images.push(currImage);
                    });
                }
            };
            for (var i = 0; i < list.length; i++) {
                _loop_1(i);
            }
            callback(list.length);
        });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(images);
    };
    //
    //
    //
    ImageProviderService.prototype.getGalleries = function (callback) {
        var listObjParams = {
            Bucket: this.BUCKET,
            Delimiter: '/',
        };
        var galleries = [
            { text: 'DARYL DRAKE', weight: 7, rotate: this.randRange(-30, 30), color: '#000000' },
            // { text: 'all', weight: 7, rotate: this.randRange(-30, 30), color: '#000000' },
            { text: 'dadrake3@gmail.com',
                weight: 4,
                rotate: this.randRange(-30, 30),
                color: '#000000',
                link: 'mailto:dadrake3@gmail.com',
            }
        ];
        var _this = this;
        this.S3Client.listObjectsV2(listObjParams, function (err, objList) {
            if (err) {
                console.log('There was an error getting your files: ' + err);
                return;
            }
            var list = objList.CommonPrefixes;
            var _loop_2 = function (i) {
                var gallery = list[i].Prefix.replace('/', '');
                var temp = { text: gallery, weight: _this.randRange(2, 7), rotate: _this.randRange(-30, 30), color: '#000000' };
                galleries.push(temp);
                _this.galleries.push(gallery);
                _this.getImages(gallery, function () { })
                    .subscribe(function (images) { _this.previewImages[gallery] = images; });
            };
            for (var i = 0; i < list.length; i++) {
                _loop_2(i);
            }
            callback();
        });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(galleries);
    };
    //
    //
    //
    ImageProviderService.prototype.randRange = function (min, max) {
        return Math.random() * (max - min) + min;
    };
    //
    //
    //
    ImageProviderService.prototype.getBkgrdImg = function (key) {
        if (this.previewImages.hasOwnProperty(key)) {
            return this.previewImages[key][Math.floor(this.randRange(0, 16))].url;
        }
        else {
            return '';
        }
    };
    //
    //
    //
    ImageProviderService.prototype.getNext = function (curr) {
        var next = this.galleries.indexOf(curr);
        next++;
        if (next >= this.galleries.length) {
            next = 0;
        }
        return this.galleries[next];
    };
    //
    //
    //
    ImageProviderService.prototype.getPrev = function (curr) {
        var prev = this.galleries.indexOf(curr);
        prev--;
        if (prev < 0) {
            prev = this.galleries.length - 1;
        }
        return this.galleries[prev];
    };
    //
    //
    //
    ImageProviderService.prototype.getTheme = function (key, callback) {
        var params = {
            Bucket: this.BUCKET,
            Key: 'themes.json'
        };
        var theme;
        this.S3Client.getObject(params, function (err, data) {
            var themes = JSON.parse(data.Body.toString());
            if (themes.hasOwnProperty(key)) {
                theme = themes[key];
            }
            else {
                theme = themes.default;
            }
            callback(theme);
        });
    };
    ImageProviderService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ImageProviderService);
    return ImageProviderService;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.css":
/*!***************************************!*\
  !*** ./src/app/nav/nav.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n#navCloud{\n  width: 100% !important;\n  height: 100vh !important;\n  z-index: 99999;\n}\n\na{\n  text-decoration: none !important;\n}\n\na:hover{\n  text-decoration: none !important;\n  color: black !important;\n}\n\na{\n  text-decoration: none !important;\n  color: black !important;\n}\n\n#previewImage{\n  position: absolute;\n  width: 800px;\n  height: 500px;\n  left: 400px;\n  top: 200px;\n  background-size: contain;\n  background-repeat: no-repeat;\n  font-family: 'Merienda', cursive;\n  -webkit-filter:drop-shadow(10px 10px black);\n          filter:drop-shadow(10px 10px black);\n}\n\n@media only screen and (min-width: 600px) {\n  #navMobile{\n    display: none;\n    z-index: 999999999;\n  }\n  #navCloud{\n    display: block;\n  }\n\n}\n\n@media only screen and (max-width: 600px) {\n\n  #navMobile{\n    display: block;\n    padding: 10px;\n  }\n  #navCloud{\n    display: none;\n  }\n  .navItem{\n    margin-top: 5px;\n  }\n\n}\n\n"

/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"previewImage\">\n  <p *ngIf=\"description\">\n    I LIKE TO TAKE PICTURES OF THINGS.\n    I LIKE TO TAKE PICTURES OF THINGS.\n    I LIKE TO TAKE PICTURES OF THINGS.\n    I LIKE TO TAKE PICTURES OF THINGS.\n    I LIKE TO TAKE PICTURES OF THINGS.\n    I LIKE TO TAKE PICTURES OF THINGS.\n    I LIKE TO TAKE PICTURES OF THINGS.\n    I LIKE TO TAKE PICTURES OF THINGS.\n    I LIKE TO TAKE PICTURES OF THINGS.\n    I LIKE TO TAKE PICTURES OF THINGS.\n    I LIKE TO TAKE PICTURES OF THINGS.\n    I LIKE TO TAKE PICTURES OF THINGS.\n    I LIKE TO TAKE PICTURES OF THINGS.\n    I LIKE TO TAKE PICTURES OF THINGS.\n    I LIKE TO TAKE PICTURES OF THINGS.\n  </p>\n</div>\n\n<angular-tag-cloud\n  id=\"navCloud\"\n  (mousemove)=\"onHover($event)\"\n  (clicked)=\"onClick($event)\"\n  [data]=\"galleries\"\n  [zoomOnHover]=\"zoomOnHoverOptions\"\n  [width]=\"options.width\"\n  [height]=\"options.height\"\n  [overflow]=\"options.overflow\"\n>\n</angular-tag-cloud>\n\n<div  id=\"navMobile\">\n  <div *ngFor=\"let gallery of galleries\" (click)=\"onClick(gallery)\" class=\"navItem\">{{gallery.text}} </div>\n</div>\n\n<!-- HIDDEN IMAGE PRE LOADER -->\n<div *ngFor=\"let gallery of galleries\">\n  <div *ngFor=\"let image of imageProviderService.previewImages[gallery.text]\">\n    <img src={{image.url}} style=\"display:none;\" />\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _image_provider_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../image-provider.service */ "./src/app/image-provider.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_tag_cloud_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-tag-cloud-module */ "./node_modules/angular-tag-cloud-module/fesm5/angular-tag-cloud-module.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavComponent = /** @class */ (function () {
    function NavComponent(el, router, imageProviderService) {
        this.router = router;
        this.imageProviderService = imageProviderService;
        this.nonGalleryLinks = ['dadrake3@gmail.com', 'DARYL DRAKE'];
        this.description = false;
        this.options = {
            // if width is between 0 and 1 it will be set to the size of the upper element multiplied by the value
            width: 1000,
            height: 400,
            overflow: false,
        };
        this.zoomOnHoverOptions = {
            scale: 2.0,
            transitionTime: 0.3,
            delay: 0 // Zoom will take affect after 0.8 seconds
        };
        this.prev = '';
        this.el = el;
    }
    NavComponent.prototype.ngOnInit = function () {
        var _this = this;
        var _ = this;
        this.imageProviderService.getGalleries(function () {
            _.tagCloudComponent.reDraw();
        })
            .subscribe(function (galleries) { _this.galleries = galleries; }, function (err) { return console.log(err); }, function () {
        });
    };
    NavComponent.prototype.onHover = function (event) {
        var target = document.getElementById('previewImage');
        var x = event.x, y = event.y, elementMouseIsOver = document.elementFromPoint(x, y);
        if (elementMouseIsOver.parentElement.id === 'navCloud' && elementMouseIsOver.innerHTML !== this.prev) {
            if (elementMouseIsOver.innerHTML === 'DARYL DRAKE') {
                this.description = true;
            }
            else {
                try {
                    var bkdImage = this.imageProviderService.getBkgrdImg(elementMouseIsOver.innerHTML);
                    target.style.backgroundImage = 'url(' + bkdImage + ')';
                    // target.style.webkitAnimation = 'fadein 0.5s !important';
                    // target.style.animation = 'fadein 0.5s !important';
                    this.prev = elementMouseIsOver.innerHTML;
                    this.description = false;
                }
                catch (e) {
                    console.log(e);
                }
            }
        }
        else if (elementMouseIsOver.innerHTML !== this.prev) {
            target.style.backgroundImage = '';
            this.prev = elementMouseIsOver.innerHTML;
            this.description = false;
        }
        else {
            this.description = false;
        }
    };
    NavComponent.prototype.onClick = function (event) {
        if (this.nonGalleryLinks.indexOf(event.text) < 0) {
            var gallery = event.text;
            this.router.navigateByUrl('/gallery/' + gallery);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(angular_tag_cloud_module__WEBPACK_IMPORTED_MODULE_3__["TagCloudComponent"]),
        __metadata("design:type", angular_tag_cloud_module__WEBPACK_IMPORTED_MODULE_3__["TagCloudComponent"])
    ], NavComponent.prototype, "tagCloudComponent", void 0);
    NavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _image_provider_service__WEBPACK_IMPORTED_MODULE_1__["ImageProviderService"]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/daryldrake/Desktop/CS_Projects/Active/Personal Gallery/BrutalGal/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map