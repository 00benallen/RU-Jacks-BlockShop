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

module.exports = "<router-outlet></router-outlet>\n"

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

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent.prototype.shopperLogin = function () {
    };
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _seller_settings_seller_settings_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../seller-settings/seller-settings.component */ "./src/seller-settings/seller-settings.component.ts");
/* harmony import */ var _shopper_settings_shopper_settings_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shopper-settings/shopper-settings.component */ "./src/shopper-settings/shopper-settings.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../page-not-found/page-not-found.component */ "./src/page-not-found/page-not-found.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../login/login.component */ "./src/login/login.component.ts");
/* harmony import */ var _user_service_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../user-service/user.service */ "./src/user-service/user.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shopper_main_shopper_main_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shopper-main/shopper-main.component */ "./src/shopper-main/shopper-main.component.ts");
/* harmony import */ var _shop_service_shop_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shop-service/shop.service */ "./src/shop-service/shop.service.ts");
/* harmony import */ var _seller_main_seller_main_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../seller-main/seller-main.component */ "./src/seller-main/seller-main.component.ts");
/* harmony import */ var _app_material_material_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../app/material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../main-page/main-page.component */ "./src/main-page/main-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var appRoutes = [
    { path: '',
        redirectTo: '/main',
        pathMatch: 'full'
    },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"] },
    { path: 'shopper',
        component: _shopper_settings_shopper_settings_component__WEBPACK_IMPORTED_MODULE_5__["ShopperSettingsComponent"] },
    { path: 'shopper/main/:walletId', component: _shopper_main_shopper_main_component__WEBPACK_IMPORTED_MODULE_10__["ShopperMainComponent"] },
    { path: 'seller/main/:shopName', component: _seller_main_seller_main_component__WEBPACK_IMPORTED_MODULE_12__["SellerMainComponent"] },
    { path: 'main', component: _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_15__["MainPageComponent"] },
    {
        path: 'seller',
        component: _seller_settings_seller_settings_component__WEBPACK_IMPORTED_MODULE_4__["SellerSettingsComponent"],
    },
    { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_6__["PageNotFoundComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _seller_settings_seller_settings_component__WEBPACK_IMPORTED_MODULE_4__["SellerSettingsComponent"],
                _shopper_settings_shopper_settings_component__WEBPACK_IMPORTED_MODULE_5__["ShopperSettingsComponent"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_6__["PageNotFoundComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _shopper_main_shopper_main_component__WEBPACK_IMPORTED_MODULE_10__["ShopperMainComponent"],
                _seller_main_seller_main_component__WEBPACK_IMPORTED_MODULE_12__["SellerMainComponent"],
                _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_15__["MainPageComponent"],
                _shopper_main_shopper_main_component__WEBPACK_IMPORTED_MODULE_10__["ShopperMainComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                _app_material_material_module__WEBPACK_IMPORTED_MODULE_13__["MaterialModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"]
            ],
            providers: [_user_service_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"], _shop_service_shop_service__WEBPACK_IMPORTED_MODULE_11__["ShopService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/material/material.module.ts":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
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
    production: false,
    userServiceUri: 'http://rujacksuserservice-env.p2ietcafym.us-east-2.elasticbeanstalk.com',
    vendorServiceUri: 'http://rujacksvendorservice-env.wnv9mmfbvj.us-east-1.elasticbeanstalk.com'
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/login/login.component.css":
/*!***************************************!*\
  !*** ./src/login/login.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/login/login.component.html":
/*!****************************************!*\
  !*** ./src/login/login.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field>\n        <input matInput placeholder=\"Wallet ID or Shop Name\" #identifier (change)=\"onIdentifierChange(identifier.value)\">\n</mat-form-field>\n\n<button mat-button (click)=\"attemptLogin()\">Login</button>"

/***/ }),

/***/ "./src/login/login.component.ts":
/*!**************************************!*\
  !*** ./src/login/login.component.ts ***!
  \**************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user-service/user.service */ "./src/user-service/user.service.ts");
/* harmony import */ var _shop_service_shop_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shop-service/shop.service */ "./src/shop-service/shop.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(userService, shopService, router) {
        this.userService = userService;
        this.shopService = shopService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onIdentifierChange = function (identifier) {
        if (identifier.length >= 8) {
            console.log("Identifier stored.");
            this.identifier = identifier;
        }
    };
    LoginComponent.prototype.attemptLogin = function () {
        var _this = this;
        if (this.identifier.length == 66) {
            console.log("Etherium Wallet ID Detected.");
            this.userService.getUser(this.identifier).then(function (user) {
                _this.router.navigate(['shopper/main/' + _this.identifier]);
            });
        }
        else {
            console.log("Shop name detected.");
            this.shopService.getShop(this.identifier).then(function (shop) {
                _this.router.navigate(['seller/main/' + _this.identifier]);
            });
        }
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_user_service_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _shop_service_shop_service__WEBPACK_IMPORTED_MODULE_2__["ShopService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/main-page/main-page.component.css":
/*!***********************************************!*\
  !*** ./src/main-page/main-page.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\n    margin: 10px;\n    width: 50%;\n    padding: 10px;\n    top: 50%;\n    position: absolute;\n    left: 0%\n}\n\nbutton.login {\n    left: 25%;\n    top: 60%;\n}\n\nbutton.signup-seller {\n    left: 50%\n}\n\nimg {\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    width: 50%;\n \n}"

/***/ }),

/***/ "./src/main-page/main-page.component.html":
/*!************************************************!*\
  !*** ./src/main-page/main-page.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img src=\"../assets/RUJacks-Logo.png\">\n\n<button mat-raised-button color=\"primary\" routerLink='/shopper' class='signup-shopper'>Signup as a shopper</button>\n\n<button mat-raised-button color=\"primary\" routerLink='/seller' class='signup-seller'>Signup as a seller</button>\n\n<p></p>\n<button mat-raised-button color=\"accent\" routerLink='/login' class='login'>Login</button>"

/***/ }),

/***/ "./src/main-page/main-page.component.ts":
/*!**********************************************!*\
  !*** ./src/main-page/main-page.component.ts ***!
  \**********************************************/
/*! exports provided: MainPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageComponent", function() { return MainPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainPageComponent = /** @class */ (function () {
    function MainPageComponent() {
    }
    MainPageComponent.prototype.ngOnInit = function () {
    };
    MainPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main-page',
            template: __webpack_require__(/*! ./main-page.component.html */ "./src/main-page/main-page.component.html"),
            styles: [__webpack_require__(/*! ./main-page.component.css */ "./src/main-page/main-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MainPageComponent);
    return MainPageComponent;
}());



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

/***/ "./src/page-not-found/page-not-found.component.css":
/*!*********************************************************!*\
  !*** ./src/page-not-found/page-not-found.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/page-not-found/page-not-found.component.html":
/*!**********************************************************!*\
  !*** ./src/page-not-found/page-not-found.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  page-not-found works!\n</p>\n"

/***/ }),

/***/ "./src/page-not-found/page-not-found.component.ts":
/*!********************************************************!*\
  !*** ./src/page-not-found/page-not-found.component.ts ***!
  \********************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/seller-main/seller-main.component.css":
/*!***************************************************!*\
  !*** ./src/seller-main/seller-main.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/seller-main/seller-main.component.html":
/*!****************************************************!*\
  !*** ./src/seller-main/seller-main.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Your store!</h1>\n\n<p *ngIf=\"!storeIsLoading\">Full Store Name: {{ store.fullStoreName }}</p>\n\n<p *ngIf=\"!storeIsLoading\">Store banner text: {{ store.storeBannerText }}</p>\n\n<p *ngIf=\"!storeIsLoading\">Etherium Wallet ID: {{ store.walletId }}</p>\n\n<p>Poster number 1:</p>\n<img [src]=\"firstPosterPic\" *ngIf=\"!storeIsLoading\">\n\n<p>Poster number 2:</p>\n<img [src]=\"secondPosterPic\" *ngIf=\"!storeIsLoading\">\n\n<p>Products:</p>\n<div class=\"table-container\" *ngIf=\"!storeIsLoading\">\n  <table >\n    <tr>\n      <th>Product Name</th>\n      <th>Product Picture</th>\n      <th>Price (ETH)</th> \n      <th>Stock</th>\n      <th>Featured</th>\n    </tr>\n    <tr *ngFor=\"let product of store.products\">\n      <td>\n        <p>{{product.productName}}</p>\n      </td>\n      <td>\n          <img [src]=\"product.productPicture\">\n      </td> \n      <td>\n        <p>{{product.price}}</p>\n      </td>\n      <td>\n        <p>{{product.stock}}</p>\n      </td>\n      <td>\n          {{product.featured}}\n      </td>\n    </tr>\n  </table>\n</div>\n\n"

/***/ }),

/***/ "./src/seller-main/seller-main.component.ts":
/*!**************************************************!*\
  !*** ./src/seller-main/seller-main.component.ts ***!
  \**************************************************/
/*! exports provided: SellerMainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellerMainComponent", function() { return SellerMainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shop_service_shop_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shop-service/shop.service */ "./src/shop-service/shop.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SellerMainComponent = /** @class */ (function () {
    function SellerMainComponent(route, shopService, location, changeDetector, router) {
        this.route = route;
        this.shopService = shopService;
        this.location = location;
        this.changeDetector = changeDetector;
        this.router = router;
    }
    SellerMainComponent.prototype.ngOnInit = function () {
        this.getShopFromService();
    };
    SellerMainComponent.prototype.getShopFromService = function () {
        var _this = this;
        var shopName = this.route.snapshot.paramMap.get('shopName');
        this.storeIsLoading = true;
        this.shopService.getShop(shopName).then(function (store) {
            _this.store = store;
            _this.firstPosterPic = store.posterFiles[0];
            _this.secondPosterPic = store.posterFiles[1];
            _this.storeIsLoading = false;
            _this.changeDetector.detectChanges();
            console.log(_this.store);
        });
    };
    SellerMainComponent.prototype.edit = function () {
        this.router.navigate(['/seller']);
    };
    SellerMainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-seller-main',
            template: __webpack_require__(/*! ./seller-main.component.html */ "./src/seller-main/seller-main.component.html"),
            styles: [__webpack_require__(/*! ./seller-main.component.css */ "./src/seller-main/seller-main.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _shop_service_shop_service__WEBPACK_IMPORTED_MODULE_3__["ShopService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], SellerMainComponent);
    return SellerMainComponent;
}());



/***/ }),

/***/ "./src/seller-settings/seller-settings.component.css":
/*!***********************************************************!*\
  !*** ./src/seller-settings/seller-settings.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n    border: 1px solid black;\n    border-collapse: collapse;\n    width: 75%;\n}\n\ntd {\n    vertical-align: middle\n}\n\nth {\n    background-color:#3f51b5;\n    color: white;\n}\n\nth, td {\n    padding: 15px;\n    border-bottom: 1px solid #ddd;\n    height: 100%\n}\n\ntr:hover {background-color: #f5f5f5;}\n\ntr:nth-child(even) {background-color: #f2f2f2;}\n\ninput {\n    width: 90%;\n}\n\n.form-container {\n    display: flex;\n    flex-direction: column;\n}\n\n.form-container > * {\n    width: 50%;\n}\n\ndiv.component-container {\n    font-family: Roboto,\"Helvetica Neue\",sans-serif;\n}"

/***/ }),

/***/ "./src/seller-settings/seller-settings.component.html":
/*!************************************************************!*\
  !*** ./src/seller-settings/seller-settings.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"component-container\">\n  <h1>Design Your Store!</h1>\n  <h2>This is where you can design a store, which will be searchable in BlockShop for any user.</h2>\n\n  <div class=\"form-container\">\n    <mat-form-field>\n        <input matInput placeholder=\"Unique Full Store Name\" #fullStoreName (keyup)=\"onFullStoreNameChange(fullStoreName.value)\"> \n    </mat-form-field>\n\n    <mat-form-field>\n        <input matInput placeholder=\"Banner text\" #storeBannerText (keyup)=\"onStoreBannerTextChange(storeBannerText.value)\">\n    </mat-form-field>\n\n    <mat-form-field>\n        <input matInput placeholder=\"Etherium Wallet ID\" #storeWalletId (keyup)=\"onStoreWalletIdChange(storeWalletId.value)\">\n    </mat-form-field>\n\n    <p>Upload 2 poster images you want displayed in your store:</p>\n    <input type='file' (change)=\"onFirstPosterPicChange($event)\">    \n\n    <input type='file' (change)=\"onSecondPosterPicChange($event)\">\n\n  </div>\n\n  <h2>Enter products you want to provide in the store (you can add stock, and new products later):</h2>\n\n  <div style=\"overflow-x:auto;\">\n    <table>\n      <tr>\n        <th>Product Name (must be to unique to THIS STORE only)</th>\n        <th>Product Picture (medium sized JPEG for best results)</th>\n        <th>Price (ETH)</th> \n        <th>Stock</th>\n        <th>Featured</th>\n      </tr>\n      <tr *ngFor=\"let product of store.products\">\n        <td>\n          <input type='text' #productName (keyup)=\"onProductNameChange(product, productName.value)\">\n        </td>\n        <td>\n            <input type='file' (change)=\"onProductPicChange(product, $event)\">\n        </td> \n        <td>\n          <input type='text' #price (keyup)=\"onPriceChange(product, price.value)\">\n        </td>\n        <td>\n            <input type='text' #stock (keyup)=\"onStockChange(product, stock.value)\">\n        </td>\n        <td>\n            <input type=\"checkbox\" #featured (change)=\"onFeaturedChange(product, featured.value)\">\n        </td>\n      </tr>\n    </table>\n</div>\n\n  <p *ngIf=\"showStoreInvalidMsg\" style=\"color: red\">Store invalid, please fix input.</p>\n  <button (click)=\"onSubmitButtonPressed()\">I'm finished!</button>\n</div>"

/***/ }),

/***/ "./src/seller-settings/seller-settings.component.ts":
/*!**********************************************************!*\
  !*** ./src/seller-settings/seller-settings.component.ts ***!
  \**********************************************************/
/*! exports provided: SellerSettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellerSettingsComponent", function() { return SellerSettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shop_service_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shop-service/store */ "./src/shop-service/store.ts");
/* harmony import */ var _shop_service_shop_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shop-service/shop.service */ "./src/shop-service/shop.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SellerSettingsComponent = /** @class */ (function () {
    function SellerSettingsComponent(shopService, router) {
        this.shopService = shopService;
        this.router = router;
        this.store = new _shop_service_store__WEBPACK_IMPORTED_MODULE_1__["Store"]();
        this.store.products = [];
        this.store.posterFiles = [];
        this.store.fullStoreName = "";
        this.store.storeBannerText = "";
        var emptyProduct = new _shop_service_store__WEBPACK_IMPORTED_MODULE_1__["Product"]();
        this.store.products.push(emptyProduct);
        this.showStoreInvalidMsg = false;
    }
    SellerSettingsComponent.prototype.ngOnInit = function () {
    };
    SellerSettingsComponent.prototype.onFullStoreNameChange = function (fullStoreName) {
        if (fullStoreName.length >= 8) {
            this.store.fullStoreName = fullStoreName;
            this.fullStoreNameReceived = true;
        }
        else {
            console.log("Store name invalid.");
            this.fullStoreNameReceived = false;
        }
    };
    SellerSettingsComponent.prototype.onStoreBannerTextChange = function (storeBannerText) {
        if (storeBannerText.length >= 8) {
            this.store.storeBannerText = storeBannerText;
            this.storeBannerTextReceived = true;
        }
        else {
            console.log("Store banner text invalid");
            this.storeBannerTextReceived = false;
        }
    };
    SellerSettingsComponent.prototype.onStoreWalletIdChange = function (storeWalletId) {
        if (storeWalletId.length == 66) {
            this.store.walletId = storeWalletId;
            this.storeWalletIdReceived = true;
        }
        else {
            console.log("Store wallet ID invalid");
            this.storeWalletIdReceived = false;
        }
    };
    SellerSettingsComponent.prototype.onFirstPosterPicChange = function (event) {
        var _this = this;
        console.log(event.target.files[0]);
        this.fileToBase64(event.target.files[0], function (base64String) {
            _this.store.posterFiles.push(base64String);
        });
    };
    SellerSettingsComponent.prototype.onSecondPosterPicChange = function (event) {
        var _this = this;
        this.fileToBase64(event.target.files[0], function (base64String) {
            _this.store.posterFiles.push(base64String);
        });
    };
    SellerSettingsComponent.prototype.onProductNameChange = function (product, productName) {
        product.productName = productName;
        this.makeNewProductRowIfReady();
    };
    SellerSettingsComponent.prototype.onProductPicChange = function (product, event) {
        var _this = this;
        this.fileToBase64(event.target.files[0], function (base64String) {
            product.productPicture = base64String;
            _this.makeNewProductRowIfReady();
        });
    };
    SellerSettingsComponent.prototype.onPriceChange = function (product, price) {
        product.price = price;
        this.makeNewProductRowIfReady();
    };
    SellerSettingsComponent.prototype.onStockChange = function (product, stock) {
        product.stock = stock;
        this.makeNewProductRowIfReady();
    };
    SellerSettingsComponent.prototype.onFeaturedChange = function (product, featured) {
        product.featured = featured;
        this.makeNewProductRowIfReady();
    };
    SellerSettingsComponent.prototype.makeNewProductRowIfReady = function () {
        var allValid = this.validateProducts();
        if (allValid) {
            this.store.products.push(new _shop_service_store__WEBPACK_IMPORTED_MODULE_1__["Product"]());
        }
    };
    SellerSettingsComponent.prototype.onSubmitButtonPressed = function () {
        var _this = this;
        var products = this.store.products;
        var lastProduct = products[this.store.products.length - 1];
        if (lastProduct.productName == null) {
            console.log("Empty product at end, removing");
            this.store.products = products.slice(0, this.store.products.length - 1);
        }
        if (this.validateStore()) {
            this.showStoreInvalidMsg = false;
            console.log("Store is valid, ready to go.");
            //Insert next step here
            this.shopService.registerShop(this.store).then(function () {
                _this.router.navigate(['/seller/main/' + _this.store.fullStoreName]);
            });
        }
        else {
            console.log("Store is invalid, fix.", this.store);
            this.store.products.push(new _shop_service_store__WEBPACK_IMPORTED_MODULE_1__["Product"]());
            this.showStoreInvalidMsg = true;
        }
    };
    SellerSettingsComponent.prototype.validateStore = function () {
        var store = this.store;
        return store.fullStoreName.length >= 8
            && store.posterFiles.length == 2
            && store.products.length >= 1
            && store.storeBannerText.length >= 8
            && this.validateProducts()
            && store.walletId.length == 66;
    };
    SellerSettingsComponent.prototype.validateProducts = function () {
        var allValid = true;
        for (var _i = 0, _a = this.store.products; _i < _a.length; _i++) {
            var product = _a[_i];
            allValid = allValid && this.validateProduct(product);
        }
        return allValid;
    };
    SellerSettingsComponent.prototype.validateProduct = function (product) {
        return product.price >= 0
            && product.productName.length >= 8
            && product.productPicture != null
            && product.stock >= 1;
    };
    SellerSettingsComponent.prototype.fileToBase64 = function (file, callback) {
        var myReader = new FileReader();
        myReader.onloadend = function (e) {
            var base64Image = myReader.result;
            callback(base64Image);
            //console.log(base64Image);
        };
        if (file) {
            myReader.readAsDataURL(file);
        }
    };
    SellerSettingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-seller-settings',
            template: __webpack_require__(/*! ./seller-settings.component.html */ "./src/seller-settings/seller-settings.component.html"),
            styles: [__webpack_require__(/*! ./seller-settings.component.css */ "./src/seller-settings/seller-settings.component.css")]
        }),
        __metadata("design:paramtypes", [_shop_service_shop_service__WEBPACK_IMPORTED_MODULE_2__["ShopService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SellerSettingsComponent);
    return SellerSettingsComponent;
}());



/***/ }),

/***/ "./src/shop-service/shop.service.ts":
/*!******************************************!*\
  !*** ./src/shop-service/shop.service.ts ***!
  \******************************************/
/*! exports provided: ShopService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopService", function() { return ShopService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ShopService = /** @class */ (function () {
    function ShopService(httpClient) {
        this.httpClient = httpClient;
    }
    ShopService.prototype.getShop = function (shopName) {
        return this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].vendorServiceUri + '/shop/' + shopName).toPromise();
    };
    ShopService.prototype.registerShop = function (store) {
        return this.httpClient.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].vendorServiceUri + '/shop/' + store.fullStoreName, store).toPromise().then(function () {
            console.log("Post successful");
        });
    };
    ShopService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ShopService);
    return ShopService;
}());



/***/ }),

/***/ "./src/shop-service/store.ts":
/*!***********************************!*\
  !*** ./src/shop-service/store.ts ***!
  \***********************************/
/*! exports provided: Store, Product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Store", function() { return Store; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
var Store = /** @class */ (function () {
    function Store() {
    }
    return Store;
}());

var Product = /** @class */ (function () {
    function Product() {
    }
    return Product;
}());



/***/ }),

/***/ "./src/shopper-main/shopper-main.component.css":
/*!*****************************************************!*\
  !*** ./src/shopper-main/shopper-main.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/shopper-main/shopper-main.component.html":
/*!******************************************************!*\
  !*** ./src/shopper-main/shopper-main.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Shopper Profile</h1>\n\n<p *ngIf=\"!userIsLoading\">WalletId: {{user.walletId}}</p>\n<p *ngIf=\"!userIsLoading\"> Shipping Address: {{user.shippingAddress}}</p>\n\n\n\n"

/***/ }),

/***/ "./src/shopper-main/shopper-main.component.ts":
/*!****************************************************!*\
  !*** ./src/shopper-main/shopper-main.component.ts ***!
  \****************************************************/
/*! exports provided: ShopperMainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopperMainComponent", function() { return ShopperMainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user-service/user.service */ "./src/user-service/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ShopperMainComponent = /** @class */ (function () {
    function ShopperMainComponent(userService, route, changeDetector) {
        this.userService = userService;
        this.route = route;
        this.changeDetector = changeDetector;
    }
    ShopperMainComponent.prototype.ngOnInit = function () {
        this.getShopFromService();
    };
    ShopperMainComponent.prototype.getShopFromService = function () {
        var _this = this;
        var walletId = this.route.snapshot.paramMap.get('walletId');
        this.userIsLoading = true;
        this.userService.getUser(walletId).then(function (user) {
            _this.user = user;
            _this.userIsLoading = false;
            _this.changeDetector.detectChanges();
            console.log(_this.user);
        });
    };
    ShopperMainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shopper-main',
            template: __webpack_require__(/*! ./shopper-main.component.html */ "./src/shopper-main/shopper-main.component.html"),
            styles: [__webpack_require__(/*! ./shopper-main.component.css */ "./src/shopper-main/shopper-main.component.css")]
        }),
        __metadata("design:paramtypes", [_user_service_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], ShopperMainComponent);
    return ShopperMainComponent;
}());



/***/ }),

/***/ "./src/shopper-settings/shopper-settings.component.css":
/*!*************************************************************!*\
  !*** ./src/shopper-settings/shopper-settings.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-container {\n    display: flex;\n    flex-direction: column;\n  }\n  \n.form-container > * {\n    width: 50%;\n}"

/***/ }),

/***/ "./src/shopper-settings/shopper-settings.component.html":
/*!**************************************************************!*\
  !*** ./src/shopper-settings/shopper-settings.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Create a shopper account!</h1>\n\n<div class=\"form-container\">\n    <mat-form-field>\n        <input matInput placeholder=\"Etherium Wallet ID\" #walletId (keyup)=\"onWalletIdEnter(walletId.value)\"> \n    </mat-form-field>\n\n    <mat-form-field>\n        <input matInput placeholder=\"Shipping Address\" #shippingAddress (keyup)=\"onShippingAddressEnter(shippingAddress.value)\"> \n    </mat-form-field>\n\n    <p *ngIf='submitIncorrectlyPressed' class='red'>Please enter your information fully.</p>\n    <button mat-raised-button color=\"primary\" (click)=\"onSubmit()\">Submit</button>\n</div>"

/***/ }),

/***/ "./src/shopper-settings/shopper-settings.component.ts":
/*!************************************************************!*\
  !*** ./src/shopper-settings/shopper-settings.component.ts ***!
  \************************************************************/
/*! exports provided: ShopperSettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopperSettingsComponent", function() { return ShopperSettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user-service/user.service */ "./src/user-service/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ShopperSettingsComponent = /** @class */ (function () {
    function ShopperSettingsComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.walletIdReceived = false;
        this.walletId = "";
        this.shippingAddress = "";
    }
    ShopperSettingsComponent.prototype.ngOnInit = function () {
    };
    ShopperSettingsComponent.prototype.onWalletIdEnter = function (walletId) {
        this.walletId = walletId;
        this.validateWalletId();
    };
    ShopperSettingsComponent.prototype.validateWalletId = function () {
        if (this.walletId.length == 66) {
            console.log("Wallet ID is valid.");
            this.walletIdReceived = true;
        }
    };
    ShopperSettingsComponent.prototype.onShippingAddressEnter = function (shippingAddress) {
        this.shippingAddress = shippingAddress;
        this.validateShippingAddress();
    };
    ShopperSettingsComponent.prototype.validateShippingAddress = function () {
        if (this.shippingAddress.length > 0) {
            console.log("Shipping address is valid.");
            this.shippingAddressReceived = true;
        }
    };
    ShopperSettingsComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log("Submit button pressed");
        this.validateShippingAddress();
        this.validateWalletId();
        if (this.shippingAddressReceived && this.walletIdReceived) {
            console.log("Submit button pressed, input valid.");
            this.userService.registerUser({
                walletId: this.walletId,
                shippingAddress: this.shippingAddress
            }).then(function () {
                _this.router.navigate(['/shopper/main/' + _this.walletId]);
            });
        }
    };
    ShopperSettingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shopper-settings',
            template: __webpack_require__(/*! ./shopper-settings.component.html */ "./src/shopper-settings/shopper-settings.component.html"),
            styles: [__webpack_require__(/*! ./shopper-settings.component.css */ "./src/shopper-settings/shopper-settings.component.css")]
        }),
        __metadata("design:paramtypes", [_user_service_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ShopperSettingsComponent);
    return ShopperSettingsComponent;
}());



/***/ }),

/***/ "./src/user-service/user.service.ts":
/*!******************************************!*\
  !*** ./src/user-service/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = /** @class */ (function () {
    function UserService(httpClient) {
        this.httpClient = httpClient;
    }
    UserService.prototype.getUser = function (walletId) {
        return this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].userServiceUri + '/' + walletId).toPromise();
    };
    UserService.prototype.registerUser = function (user) {
        return this.httpClient.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].userServiceUri + '/' + user.walletId, user).toPromise().then(function () {
            console.log("Post successful");
        });
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/benpinhorn/Documents/GitHub/RU-Jacks-BlockShop/Website/BlockShopUI/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map