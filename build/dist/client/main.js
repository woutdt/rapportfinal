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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/account/account.component.css":
/*!***********************************************!*\
  !*** ./src/app/account/account.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page {\n    position: absolute;\n    width: 80%;\n    left: 10%;\n    right: 10%;\n    top: 80px;\n    height: 80%;\n    text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC9hY2NvdW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFNBQVM7SUFDVCxVQUFVO0lBQ1YsU0FBUztJQUNULFdBQVc7SUFDWCxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9hY2NvdW50L2FjY291bnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBsZWZ0OiAxMCU7XG4gICAgcmlnaHQ6IDEwJTtcbiAgICB0b3A6IDgwcHg7XG4gICAgaGVpZ2h0OiA4MCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/account/account.component.html":
/*!************************************************!*\
  !*** ./src/app/account/account.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='page'>\n  <h2>{{res.name}}</h2>\n  <p><i class=\"fas fa-envelope-open-text\"></i>&nbsp;{{res.email}}</p>\n  <p><i class=\"fas fa-school\"></i>&nbsp;{{res.school}}</p>\n  <p><i class=\"fas fa-map-signs\"></i>&nbsp;{{res.richting}}</p>\n  <p><i class=\"fas fa-users\"></i>&nbsp;{{res.klas}}</p>\n</div>\n"

/***/ }),

/***/ "./src/app/account/account.component.ts":
/*!**********************************************!*\
  !*** ./src/app/account/account.component.ts ***!
  \**********************************************/
/*! exports provided: AccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountComponent", function() { return AccountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var AccountComponent = /** @class */ (function () {
    function AccountComponent(http, router, cookie) {
        this.http = http;
        this.router = router;
        this.cookie = cookie;
    }
    AccountComponent.prototype.ngOnInit = function () {
        this.identify();
    };
    AccountComponent.prototype.identify = function () {
        var _this = this;
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'responseType': 'application/json',
                'Access-Control-Allow-Credentials': 'true',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET',
                'Access-Control-Allow-Headers': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('jwt')
            })
        };
        this.user = localStorage.getItem('jwt');
        this.http.get("http://localhost:3000/api/userinfo", httpOptions)
            .subscribe(function (data) {
            _this.res = data;
            console.log(_this.res);
        }, function (error) {
            _this.error = error;
            console.log("error");
        });
    };
    AccountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-account',
            template: __webpack_require__(/*! ./account.component.html */ "./src/app/account/account.component.html"),
            styles: [__webpack_require__(/*! ./account.component.css */ "./src/app/account/account.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"]])
    ], AccountComponent);
    return AccountComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signin/signin.component */ "./src/app/signin/signin.component.ts");
/* harmony import */ var _authenticated_authenticated_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./authenticated/authenticated.component */ "./src/app/authenticated/authenticated.component.ts");
/* harmony import */ var _account_account_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./account/account.component */ "./src/app/account/account.component.ts");
/* harmony import */ var _rapport_rapport_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rapport/rapport.component */ "./src/app/rapport/rapport.component.ts");







var routes = [
    { path: 'signin', component: _signin_signin_component__WEBPACK_IMPORTED_MODULE_3__["SigninComponent"] },
    { path: '', redirectTo: '/signin', pathMatch: 'full' },
    { path: 'authenticated', component: _authenticated_authenticated_component__WEBPACK_IMPORTED_MODULE_4__["AuthenticatedComponent"] },
    { path: 'account', component: _account_account_component__WEBPACK_IMPORTED_MODULE_5__["AccountComponent"] },
    { path: 'rapport', component: _rapport_rapport_component__WEBPACK_IMPORTED_MODULE_6__["RapportComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navigation *ngIf=\"show == true\"></app-navigation>\n    <router-outlet>\n    </router-outlet>\n\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");





var AppComponent = /** @class */ (function () {
    function AppComponent(cookie, router, location) {
        var _this = this;
        this.cookie = cookie;
        this.router = router;
        this.location = location;
        this.title = 'client';
        router.events.subscribe(function (val) {
            if (location.path() == '/signin') {
                _this.show = false;
            }
            else {
                _this.show = true;
            }
            ;
        });
    }
    ;
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.cookiesl = function () {
        this.cookies = this.cookie.get('jwt');
        if (this.cookies == undefined) {
            this.show = false;
        }
        else if (this.cookies.length >= 10) {
            this.show = true;
        }
        else {
            this.show = false;
        }
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./signin/signin.component */ "./src/app/signin/signin.component.ts");
/* harmony import */ var _authenticated_authenticated_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./authenticated/authenticated.component */ "./src/app/authenticated/authenticated.component.ts");
/* harmony import */ var _account_account_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./account/account.component */ "./src/app/account/account.component.ts");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./navigation/navigation.component */ "./src/app/navigation/navigation.component.ts");
/* harmony import */ var _rapport_rapport_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./rapport/rapport.component */ "./src/app/rapport/rapport.component.ts");













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _signin_signin_component__WEBPACK_IMPORTED_MODULE_8__["SigninComponent"],
                _authenticated_authenticated_component__WEBPACK_IMPORTED_MODULE_9__["AuthenticatedComponent"],
                _account_account_component__WEBPACK_IMPORTED_MODULE_10__["AccountComponent"],
                _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_11__["NavigationComponent"],
                _rapport_rapport_component__WEBPACK_IMPORTED_MODULE_12__["RapportComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
            ],
            providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/authenticated/authenticated.component.css":
/*!***********************************************************!*\
  !*** ./src/app/authenticated/authenticated.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page {\n    position: absolute;\n    width: 80%;\n    left: 10%;\n    right: 10%;\n    top: 80px;\n    height: 80%;\n    text-align: center;\n}\n.container {\n    position: relative;\n}\n.bold {\n    font-weight: bold;\n}\nbutton {\n    margin: 5px;\n}\n.spannerd {\n    font-size: 5rem;\n    color: #007bff;\n    cursor: pointer;\n}\n.card-header {\n    cursor: pointer;\n}\n.hidecard {\n    display: none;\n}\n.showcard {\n    display: block;\n}\n.card {\n    -webkit-animation-duration: 1s;\n            animation-duration: 1s;\n}\n@media (min-width: 0) {\n    .card-deck .card {\n      flex: 0 0 calc(100% - 30px);\n    }\n  }\n@media (min-width: 576px) {\n    .card-deck .card {\n      flex: 0 0 calc(50% - 30px);\n    }\n  }\n@media (min-width: 768px) {\n    .card-deck .card {\n      flex: 0 0 calc(33.33333% - 30px);\n    }\n  }\n@media (min-width: 992px) {\n    .card-deck .card {\n      flex: 0 0 calc(25% - 30px);\n    }\n  }\n@media (min-width: 1200px) {\n    .card-deck .card {\n      flex: 0 0 calc(20% - 30px);\n    }\n  }\n.fa-times {\n      font-size: 1.5em;\n      position: absolute;\n      right: 5%;\n      color: red;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aGVudGljYXRlZC9hdXRoZW50aWNhdGVkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFNBQVM7SUFDVCxVQUFVO0lBQ1YsU0FBUztJQUNULFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0ksOEJBQXNCO1lBQXRCLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0k7TUFDRSwyQkFBMkI7SUFDN0I7RUFDRjtBQUNBO0lBQ0U7TUFDRSwwQkFBMEI7SUFDNUI7RUFDRjtBQUNBO0lBQ0U7TUFDRSxnQ0FBZ0M7SUFDbEM7RUFDRjtBQUNBO0lBQ0U7TUFDRSwwQkFBMEI7SUFDNUI7RUFDRjtBQUNBO0lBQ0U7TUFDRSwwQkFBMEI7SUFDNUI7RUFDRjtBQUNBO01BQ0ksZ0JBQWdCO01BQ2hCLGtCQUFrQjtNQUNsQixTQUFTO01BQ1QsVUFBVTtFQUNkIiwiZmlsZSI6InNyYy9hcHAvYXV0aGVudGljYXRlZC9hdXRoZW50aWNhdGVkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbGVmdDogMTAlO1xuICAgIHJpZ2h0OiAxMCU7XG4gICAgdG9wOiA4MHB4O1xuICAgIGhlaWdodDogODAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5ib2xkIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cbmJ1dHRvbiB7XG4gICAgbWFyZ2luOiA1cHg7XG59XG4uc3Bhbm5lcmQge1xuICAgIGZvbnQtc2l6ZTogNXJlbTtcbiAgICBjb2xvcjogIzAwN2JmZjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY2FyZC1oZWFkZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5oaWRlY2FyZCB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cbi5zaG93Y2FyZCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG4uY2FyZCB7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbn1cbkBtZWRpYSAobWluLXdpZHRoOiAwKSB7XG4gICAgLmNhcmQtZGVjayAuY2FyZCB7XG4gICAgICBmbGV4OiAwIDAgY2FsYygxMDAlIC0gMzBweCk7XG4gICAgfVxuICB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xuICAgIC5jYXJkLWRlY2sgLmNhcmQge1xuICAgICAgZmxleDogMCAwIGNhbGMoNTAlIC0gMzBweCk7XG4gICAgfVxuICB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAgIC5jYXJkLWRlY2sgLmNhcmQge1xuICAgICAgZmxleDogMCAwIGNhbGMoMzMuMzMzMzMlIC0gMzBweCk7XG4gICAgfVxuICB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAgIC5jYXJkLWRlY2sgLmNhcmQge1xuICAgICAgZmxleDogMCAwIGNhbGMoMjUlIC0gMzBweCk7XG4gICAgfVxuICB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgICAuY2FyZC1kZWNrIC5jYXJkIHtcbiAgICAgIGZsZXg6IDAgMCBjYWxjKDIwJSAtIDMwcHgpO1xuICAgIH1cbiAgfVxuICAuZmEtdGltZXMge1xuICAgICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHJpZ2h0OiA1JTtcbiAgICAgIGNvbG9yOiByZWQ7XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/authenticated/authenticated.component.html":
/*!************************************************************!*\
  !*** ./src/app/authenticated/authenticated.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"page\">\n    <div class=\"card-deck card-columns\">\n        <div class=\"card border-primary mb-3\" style=\"max-width: 18rem;\" *ngFor=\"let rapport of res.rapporten\">\n            <div class=\"card-header bold\" (click)=\"openRapport(rapport._id)\">{{rapport.periode | uppercase}}</div>\n            <div class=\"card-body\" >\n            <h5 class=\"card-title\" *ngIf=\"rapport.totaal != undefined\">&nbsp;<i class=\"fas fa-medal\"></i>&nbsp;{{ rapport.totaal }}%</h5>\n            <h5 class=\"card-title\" *ngIf=\"rapport.totaal == undefined\" title=\"to be determined\">&nbsp;totaal: TBD </h5>\n            <h6 class=\"card-title\"><i class=\"fas fa-table\"></i>&nbsp;{{ rapport.datum | date }}</h6>\n            <span (click)=\"openRapport(rapport._id)\"><button type=\"button\" class=\"btn btn-outline-primary\">view <i class=\"fas fa-book-open\"></i></button></span>\n            <span (click)=\"editFunc()\"><button type=\"button\" class=\"btn btn-outline-warning\">edit <i class=\"fas fa-edit\"></i></button></span>\n            <span (click)=\"deleteFunc(rapport._id)\"><button type=\"button\" class=\"btn btn-outline-danger btn-sm\">Delete <i class=\"fas fa-trash-alt\"></i></button></span>\n            </div>\n        </div>\n        <div class=\"card border-primary mb-3\" style=\"max-width: 18rem;\" [ngClass]=\"{ 'showcard': showcard, 'hidecard': !showcard  }\">\n            <div class=\"card-header bold\">toevoegen</div>\n            <div class=\"card-body\">\n            <p style=\"font-weight: bold\"> Click op de blueberry!</p>\n            <span class=\"spannerd\" (click)=\"addNewRapport()\">\n                    <i class=\"fab fa-raspberry-pi\"></i>\n            </span>\n            </div>\n        </div>\n        <div class=\"card border-primary mb-3\" style=\"max-width: 18rem;\" [ngClass]=\"{ 'showcard': !showcard, 'hidecard': showcard  }\">\n            <div class=\"card-header bold\">New Rapport<i class=\"fas fa-times\" (click)='normalMode()'></i></div>\n            <div class=\"card-body\">\n                <form [formGroup]=\"checkoutForm\" (ngSubmit)=\"onSubmit(checkoutForm.value)\">\n                    <div>\n                        <input type=\"text\" class=\"form-control\"  placeholder=\"Periode\" formControlName=\"periode\">\n                    </div>\n                    <button class=\"button btn btn-primary mb-2\" type=\"submit\">submit</button>\n                </form>\n            </div>\n        </div>\n        </div>\n</div>\n"

/***/ }),

/***/ "./src/app/authenticated/authenticated.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/authenticated/authenticated.component.ts ***!
  \**********************************************************/
/*! exports provided: AuthenticatedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticatedComponent", function() { return AuthenticatedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







var AuthenticatedComponent = /** @class */ (function () {
    function AuthenticatedComponent(cookie, http, router, formBuilder) {
        this.cookie = cookie;
        this.http = http;
        this.router = router;
        this.formBuilder = formBuilder;
        this.checkoutForm = this.formBuilder.group({
            name: '',
            periode: ''
        });
    }
    AuthenticatedComponent.prototype.ngOnInit = function () {
        this.identify();
        this.showcard = true;
        this.showedit = false;
    };
    AuthenticatedComponent.prototype.identify = function () {
        var _this = this;
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'responseType': 'application/json',
                'Access-Control-Allow-Credentials': 'true',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET',
                'Access-Control-Allow-Headers': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('jwt')
            })
        };
        this.user = localStorage.getItem('jwt');
        this.http.get("http://localhost:3000/api/userinfo", httpOptions)
            .subscribe(function (data) {
            _this.res = data;
            console.log(_this.res);
        }, function (error) {
            _this.error = error;
            console.log("error");
        });
    };
    AuthenticatedComponent.prototype.onSubmit = function (card) {
        var _this = this;
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'responseType': 'application/json',
                'Access-Control-Allow-Credentials': 'true',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET',
                'Access-Control-Allow-Headers': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('jwt')
            })
        };
        this.http.post("http://localhost:3000/api/rapport", card, httpOptions)
            .subscribe(function (data) {
            _this.useless = data;
        });
        window.location.reload();
    };
    AuthenticatedComponent.prototype.deleteFunc = function (rapportid) {
        var _this = this;
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'responseType': 'application/json',
                'Access-Control-Allow-Credentials': 'true',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET',
                'Access-Control-Allow-Headers': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('jwt')
            })
        };
        this.rapportidObj = {
            "rapportid": rapportid
        };
        this.http.put("http://localhost:3000/api/delrapport", this.rapportidObj, httpOptions)
            .subscribe(function (data) {
            console.log(data);
            _this.useless = data;
            window.location.reload();
        });
    };
    AuthenticatedComponent.prototype.editFunc = function () {
        alert("coming soon...");
    };
    AuthenticatedComponent.prototype.openRapport = function (id) {
        this.cookie.set('rapport', id, new Date(new Date().getTime() + 60 * 60 * 24 * 1000));
        this.router.navigate(['/rapport']);
    };
    AuthenticatedComponent.prototype.logOut = function () {
        this.cookie.delete('jwt');
        this.router.navigate(['/signin']);
    };
    AuthenticatedComponent.prototype.navAcc = function () {
        this.router.navigate(['/account']);
    };
    AuthenticatedComponent.prototype.addNewRapport = function () {
        this.showcard = false;
    };
    AuthenticatedComponent.prototype.normalMode = function () {
        this.showcard = true;
    };
    AuthenticatedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-authenticated',
            template: __webpack_require__(/*! ./authenticated.component.html */ "./src/app/authenticated/authenticated.component.html"),
            styles: [__webpack_require__(/*! ./authenticated.component.css */ "./src/app/authenticated/authenticated.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])
    ], AuthenticatedComponent);
    return AuthenticatedComponent;
}());



/***/ }),

/***/ "./src/app/navigation/navigation.component.css":
/*!*****************************************************!*\
  !*** ./src/app/navigation/navigation.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".full {\n    position: absolute;\n    width: 100%;\n    padding: 0;\n    height: 70px;\n    max-height: 70px;\n}\n.hover {\n    text-decoration: none;\n}\n.hover:hover {\n    background-color: #d1e0e0;\n}\n.fab {\n    color: blue;\n}\n.card {\n    width: 20%;\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%);\n}\n.workspace {\n    position: absolute;\n    top: 20%;\n    width: 100%;\n}\na {\n    cursor: pointer;\n}\n.btn {\n    margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFVBQVU7SUFDVixZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxxQkFBcUI7QUFDekI7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsU0FBUztJQUNULG1DQUEyQjtZQUEzQiwyQkFBMkI7QUFDL0I7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsV0FBVztBQUNmO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mdWxsIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMDtcbiAgICBoZWlnaHQ6IDcwcHg7XG4gICAgbWF4LWhlaWdodDogNzBweDtcbn1cbi5ob3ZlciB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLmhvdmVyOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDFlMGUwO1xufVxuLmZhYiB7XG4gICAgY29sb3I6IGJsdWU7XG59XG4uY2FyZCB7XG4gICAgd2lkdGg6IDIwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xufVxuLndvcmtzcGFjZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMjAlO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuYSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmJ0biB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/navigation/navigation.component.html":
/*!******************************************************!*\
  !*** ./src/app/navigation/navigation.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow full\">\n    <h5 class=\"my-0 mr-md-auto font-weight-normal\">Blueberry <i class=\"fab fa-raspberry-pi\"></i></h5>\n    <nav class=\"my-2 my-md-0 mr-md-3\">\n        <a class=\"p-2 text-dark hover\" (click)=\"navHome()\">Home</a>\n        <a class=\"p-2 text-dark hover\"  (click)=\"navAcc()\">{{res.name}}</a>\n        <a class=\"p-2 text-dark hover\" href=\"#\">Settings</a>\n    </nav>\n      <a class=\"btn btn-outline-danger\" href=\"#\" (click)=\"logOut()\"><i class=\"fas fa-sign-out-alt\"></i></a>\n      <a class=\"btn btn-outline-warning\" style=\"color: orange\"(click)=\"help()\"><i class=\"fas fa-info\"></i></a>\n  </div>"

/***/ }),

/***/ "./src/app/navigation/navigation.component.ts":
/*!****************************************************!*\
  !*** ./src/app/navigation/navigation.component.ts ***!
  \****************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var NavigationComponent = /** @class */ (function () {
    function NavigationComponent(cookie, http, router) {
        this.cookie = cookie;
        this.http = http;
        this.router = router;
    }
    NavigationComponent.prototype.ngOnInit = function () {
        this.identify();
    };
    NavigationComponent.prototype.cookiesl = function () {
        this.cookies = localStorage.getItem('jwt');
        if (this.cookies == undefined) {
            this.show = false;
        }
        else if (this.cookies.length >= 10) {
            this.show = true;
        }
        else {
            this.show = false;
        }
    };
    ;
    NavigationComponent.prototype.identify = function () {
        var _this = this;
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'responseType': 'application/json',
                'Access-Control-Allow-Credentials': 'true',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET',
                'Access-Control-Allow-Headers': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('jwt')
            })
        };
        this.user = localStorage.getItem('jwt');
        this.http.get("http://localhost:3000/api/userinfo", httpOptions)
            .subscribe(function (data) {
            _this.res = data;
            console.log(_this.res);
        }, function (error) {
            _this.error = error;
            console.log("error");
            _this.router.navigate(['/']);
        });
    };
    NavigationComponent.prototype.logOut = function () {
        localStorage.removeItem('jwt');
        this.router.navigate(['/signin']);
    };
    NavigationComponent.prototype.navAcc = function () {
        this.router.navigate(['/account']);
    };
    NavigationComponent.prototype.navHome = function () {
        this.router.navigate(['/authenticated']);
    };
    NavigationComponent.prototype.help = function () {
        window.alert("Soms moet je eens refreshen: het programma heeft waarschijnlijk jouw opdracht al verwerkt maar toont dit nog niet op de 'client' \n \n © Wout De Tollenaere");
    };
    NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! ./navigation.component.html */ "./src/app/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.css */ "./src/app/navigation/navigation.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/rapport/rapport.component.css":
/*!***********************************************!*\
  !*** ./src/app/rapport/rapport.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page {\n    position: absolute;\n    width: 80%;\n    left: 10%;\n    right: 10%;\n    top: 80px;\n    height: 80%;\n    text-align: center;\n}\n.green {\n    color: green;\n    cursor: pointer;\n}\n.not-active {\n    pointer-events: none;\n    cursor: default;\n}\n.topper {\n    color: white;\n}\n.warningSelf {\n    color: orangered !important;\n}\n.dangerSelf {\n    color: red !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmFwcG9ydC9yYXBwb3J0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFNBQVM7SUFDVCxVQUFVO0lBQ1YsU0FBUztJQUNULFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFlBQVk7SUFDWixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxvQkFBb0I7SUFDcEIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksMkJBQTJCO0FBQy9CO0FBQ0E7SUFDSSxxQkFBcUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9yYXBwb3J0L3JhcHBvcnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBsZWZ0OiAxMCU7XG4gICAgcmlnaHQ6IDEwJTtcbiAgICB0b3A6IDgwcHg7XG4gICAgaGVpZ2h0OiA4MCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmdyZWVuIHtcbiAgICBjb2xvcjogZ3JlZW47XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuLm5vdC1hY3RpdmUge1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbn1cbi50b3BwZXIge1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbi53YXJuaW5nU2VsZiB7XG4gICAgY29sb3I6IG9yYW5nZXJlZCAhaW1wb3J0YW50O1xufVxuLmRhbmdlclNlbGYge1xuICAgIGNvbG9yOiByZWQgIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/rapport/rapport.component.html":
/*!************************************************!*\
  !*** ./src/app/rapport/rapport.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page\">\n  <div class=\"list-group\">\n    <a  class=\"list-group-item list-group-item-action flex-column align-items-start active topper\">\n      <div class=\"d-flex w-100 justify-content-between\">\n          <h5 class=\"mb-3 center\" style=\"color: white\"><i class=\"far fa-calendar-times\"></i>&nbsp;{{ rapportelement.periode }}</h5>\n        <small style=\"color: white\">{{ rapportelement.datum | date }}</small>\n      </div>\n      <p class=\"mb-1\" style=\"font-size: 1.5em; color: white\">{{ rapportelement.totaal }}%</p>\n    </a>\n    <a class=\"list-group-item list-group-item-action flex-column align-items-start justify-content-between\" *ngFor=\"let vak of rapportelement.vakken\" [ngClass]=\"{'list-group-item-danger': vak.danger, 'list-group-item-warning': vak.warning, 'list-group-item-success': vak.success}\">\n      <div class=\"d-flex w-100 justify-content-between\">\n        <h5 class=\"mb-1\">{{vak.naam}}</h5>\n        <span class=\"badge badge-info badge-pill\" title=\"aantal lesuren\">{{vak.lesuren}}</span>\n      </div>\n      <p class=\"mb-1\"><span *ngFor=\"let toets of vak.toetsen; last as isLast\">{{toets.procent}}%&nbsp;&nbsp;<span *ngIf=\"!isLast\">+</span><span *ngIf=\"isLast\">= &nbsp;</span></span><span>{{ vak.finale }}</span>%</p>\n      <a ><i class=\"fas fa-trash\" style=\"color: red\"></i></a>&nbsp;&nbsp;<a><i class=\"fas fa-edit\" style=\"color: darkorange\"></i></a>\n    </a>\n    <a  class=\"list-group-item list-group-item-action flex-column align-items-start\">\n        <div class=\"d-flex w-100 justify-content-between\">\n          <h5 class=\"mb-1\">Add Vak</h5>\n          <small class=\"text-muted\"><input type=\"text\" placeholder=\"naam\" class=\"form-control\" [(ngModel)]=\"name\"><input type=\"text\" placeholder=\"lesuren\" class=\"form-control\" [(ngModel)]=\"lesuren\"></small>\n        </div>\n        <p class=\"mb-1\">toetsen: <input type=\"text\" placeholder=\"behaald/totaal_\" class=\"form-control\" title=\"behaald/totaal_\" style=\"width: 50%; left: 50%; position: relative; transform: translateX(-50%);\" [(ngModel)]=\"toetsen\"></p>\n        <small class=\"text-muted\"><button  class=\"btn btn-outline-primary mb-2\" (click)=\"alert(rapportelement._id)\">submit</button></small>\n        &nbsp;&nbsp;\n        <small class=\"text-muted\"><button type=\"button\" class=\"btn btn-outline-warning mb-2\"><i class=\"fas fa-info-circle\"></i></button></small>\n      </a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/rapport/rapport.component.ts":
/*!**********************************************!*\
  !*** ./src/app/rapport/rapport.component.ts ***!
  \**********************************************/
/*! exports provided: RapportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RapportComponent", function() { return RapportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







var RapportComponent = /** @class */ (function () {
    function RapportComponent(cookie, http, router, formBuilder) {
        this.cookie = cookie;
        this.http = http;
        this.router = router;
        this.formBuilder = formBuilder;
        this.nameControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('');
        this.lesuren = '';
        this.toetsen = '';
        this.name = '';
    }
    RapportComponent.prototype.ngOnInit = function () {
        this.identify();
    };
    RapportComponent.prototype.identify = function () {
        var _this = this;
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'responseType': 'application/json',
                'Access-Control-Allow-Credentials': 'true',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET',
                'Access-Control-Allow-Headers': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('jwt')
            })
        };
        this.user = localStorage.getItem('jwt');
        this.http.get("http://localhost:3000/api/userinfo", httpOptions)
            .subscribe(function (data) {
            _this.res = data;
            _this.identifyRapport();
        }, function (error) {
            _this.error = error;
            console.log("error");
        });
    };
    RapportComponent.prototype.identifyRapport = function () {
        this.rapportid = this.cookie.get('rapport');
        this.rapportelement = this.arrayCheck(this.rapportid);
        this.vakTotaal(this.rapportelement);
        this.rapportTotaal();
    };
    RapportComponent.prototype.arrayCheck = function (id) {
        for (this.i = 0; this.i < this.res.rapporten.length; this.i++) {
            if (this.res.rapporten[this.i]._id == id) {
                return this.res.rapporten[this.i];
            }
        }
    };
    RapportComponent.prototype.vakTotaal = function (rapportelement) {
        for (this.c = 0; this.c < rapportelement.vakken.length; this.c++) {
            this.vak = rapportelement.vakken[this.c];
            this.vak.totaal = 0;
            this.vak.behaald = 0;
            this.vak.finale = 0;
            this.vak.danger = false;
            this.vak.warning = false;
            this.vak.success = false;
            for (this.f = 0; this.f < this.vak.toetsen.length; this.f++) {
                this.toets = this.vak.toetsen[this.f];
                this.vak.totaal = this.vak.totaal + this.toets.maxscore;
                this.vak.behaald = this.vak.behaald + this.toets.score;
                this.vak.finale = Math.floor(this.vak.behaald / this.vak.totaal * 100);
            }
            if (this.vak.finale < 50) {
                this.vak.danger = true;
            }
            else if (this.vak.finale == 50) {
                this.vak.warning = true;
            }
            else if (this.vak.finale == 100) {
                this.vak.success = true;
            }
            else {
                this.vak.danger = false;
            }
            ;
        }
    };
    RapportComponent.prototype.rapportTotaal = function () {
        this.vakpunten = 0;
        this.totalelesuren = 0;
        console.log(this.rapportelement);
        for (this.x = 0; this.x < this.rapportelement.vakken.length; this.x++) {
            this.loopvak = this.rapportelement.vakken[this.x];
            if (this.loopvak.finale == undefined) {
                console.log("no toets");
            }
            else if (this.loopvak.finale) {
                this.totalelesuren = this.totalelesuren + this.loopvak.lesuren;
                this.vakpunten = this.vakpunten + (this.loopvak.finale * this.loopvak.lesuren);
            }
            ;
        }
        ;
        this.rapporttotaal = Math.round(this.vakpunten / this.totalelesuren);
        console.log(this.rapporttotaal);
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'responseType': 'application/json',
                'Access-Control-Allow-Credentials': 'true',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET',
                'Access-Control-Allow-Headers': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('jwt')
            })
        };
        this.body = {
            "rapportid": this.cookie.get('rapport'),
            "nieuwtotaal": this.rapporttotaal
        };
        this.http.put('http://localhost:3000/api/rapportTotaal', this.body, httpOptions)
            .subscribe(function (data) {
            console.log(data);
        });
    };
    RapportComponent.prototype.alert = function (rapportid) {
        var _this = this;
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'responseType': 'application/json',
                'Access-Control-Allow-Credentials': 'true',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET',
                'Access-Control-Allow-Headers': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('jwt')
            })
        };
        this.split1 = this.toetsen.split("_");
        this.split2 = [];
        for (this.i = 0; this.i < this.split1.length; this.i++) {
            this.split2.push(this.split1[this.i].split("/"));
        }
        this.body = {
            "lesuren": this.lesuren,
            "name": this.name,
            "rapportid": rapportid
        };
        this.http.put('http://localhost:3000/api/rapportvak', this.body, httpOptions)
            .subscribe(function (outcome) {
            _this.toetsArray = [];
            for (_this.i = 0; _this.i < _this.split2.length; _this.i++) {
                _this.array2 = _this.split2[_this.i];
                _this.body2 = {
                    "score": _this.array2[0],
                    "maxscore": _this.array2[1],
                    "rapportid": rapportid,
                    "vakid": outcome
                };
                _this.toetsArray.push(_this.body2);
                console.log(_this.body2);
                _this.http.put('http://localhost:3000/api/rapportvaktoets', _this.body2, httpOptions)
                    .subscribe(function (data) {
                    _this.ngOnInit();
                });
            }
            ;
        });
    };
    RapportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-rapport',
            template: __webpack_require__(/*! ./rapport.component.html */ "./src/app/rapport/rapport.component.html"),
            styles: [__webpack_require__(/*! ./rapport.component.css */ "./src/app/rapport/rapport.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])
    ], RapportComponent);
    return RapportComponent;
}());



/***/ }),

/***/ "./src/app/signin/signin.component.css":
/*!*********************************************!*\
  !*** ./src/app/signin/signin.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ25pbi9zaWduaW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/signin/signin.component.html":
/*!**********************************************!*\
  !*** ./src/app/signin/signin.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='text-center fullpage1'>\n    <form class=\"form-signin\" #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\">\n        <img class=\"mb-4\" src=\"./assets/raspberry-pi.svg\" alt=\"\" width=\"72\" height=\"72\">\n        <h1 class=\"h3 mb-3 font-weight-normal\">Please sign in</h1>\n        <label for=\"inputEmail\" class=\"sr-only\">Email address</label>\n        <input type=\"email\" id=\"inputEmail\" class=\"form-control\" placeholder=\"Email address\" required=\"\" autofocus=\"\" ngModel name=\"name\" required>\n        <label for=\"inputPassword\" class=\"sr-only\">Password</label>\n        <input type=\"password\" id=\"inputPassword\" class=\"form-control\" placeholder=\"Password\" required=\"\" ngModel name=\"password\" required>\n        <div class=\"checkbox mb-3\">\n          <label>\n            <input type=\"checkbox\" value=\"remember-me\"> Remember me\n          </label>\n        </div>\n        <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Sign in</button>\n        <p class=\"mt-5 mb-3 text-muted\">© Wout De Tollenaere</p>\n      </form>\n</div>\n"

/***/ }),

/***/ "./src/app/signin/signin.component.ts":
/*!********************************************!*\
  !*** ./src/app/signin/signin.component.ts ***!
  \********************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var SigninComponent = /** @class */ (function () {
    function SigninComponent(http, cookie, router) {
        this.http = http;
        this.cookie = cookie;
        this.router = router;
    }
    SigninComponent.prototype.ngOnInit = function () {
        this.testAuthenticated();
    };
    SigninComponent.prototype.testAuthenticated = function () {
        this.cookies = localStorage.getItem('jwt');
        if (this.cookies == undefined || this.cookies == null || this.cookies == '') {
            console.log(false);
        }
        else if (this.cookies != undefined) {
            this.router.navigate(['/authenticated']);
        }
        ;
    };
    ;
    SigninComponent.prototype.onSubmit = function (f) {
        var _this = this;
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'email': f.value.name,
                'toegang': f.value.password
            })
        };
        console.log(f.value);
        console.log(f.valid);
        if (f.valid == false) {
            return alert("vergeet je email / wachtwoord niet in te vullen");
        }
        ;
        if (f.valid == true) {
            this.http.get("http://localhost:3000/api/authenticate", httpOptions)
                .subscribe(function (data) {
                _this.res = data;
                _this.now = Date.now();
                // this.cookie.set('jwt', this.res, new Date(new Date().getTime() + 60 * 60 * 24 * 1000), '/');
                localStorage.setItem('jwt', _this.res);
                console.log(_this.res);
                console.log(_this.cookie.get('jwt'));
                _this.router.navigate(['/authenticated']);
            }, function (error) {
                _this.error = error;
                alert("incorrect email / password. status: " + error.status + ' ' + error);
            });
        }
        ;
    };
    ;
    SigninComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signin',
            template: __webpack_require__(/*! ./signin.component.html */ "./src/app/signin/signin.component.html"),
            styles: [__webpack_require__(/*! ./signin.component.css */ "./src/app/signin/signin.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], SigninComponent);
    return SigninComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\woutd\Downloads\rapport-master\rapport-master\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map