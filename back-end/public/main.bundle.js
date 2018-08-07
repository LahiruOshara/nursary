webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Admin/account-register/account-register.component.css":
/***/ (function(module, exports) {

module.exports = ".login {\r\n  margin: auto;\r\n  width: 500px;\r\n  border: 3px solid #008CBA;\r\n  padding: 10px;\r\n}\r\n\r\n\r\n/* Full-width inputs */\r\n\r\n\r\ninput[type=text], input[type=password] {\r\n  width: 100%;\r\n  padding: 12px 20px;\r\n  margin: 8px 0;\r\n  display: inline-block;\r\n  border: 1px solid #ccc;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n}\r\n\r\n\r\n/* Set a style for all buttons */\r\n\r\n\r\nbutton {\r\n  background-color: #008CBA;\r\n  color: white;\r\n  padding: 14px 20px;\r\n  margin: 8px 0;\r\n  border: none;\r\n  cursor: pointer;\r\n  width: 100%;\r\n}\r\n\r\n\r\n/* Add a hover effect for buttons */\r\n\r\n\r\nbutton:hover {\r\n  opacity: 0.8;\r\n}\r\n\r\n\r\n/* Extra style for the cancel button (red) */\r\n\r\n\r\n.cancelbtn {\r\n  width: auto;\r\n  padding: 10px 18px;\r\n  background-color: #f44336;\r\n}\r\n\r\n\r\n/* Center the avatar image inside this container */\r\n\r\n\r\n.imgcontainer {\r\n  text-align: center;\r\n  margin: 24px 0 12px 0;\r\n}\r\n\r\n\r\n/* Add padding to containers */\r\n\r\n\r\n.container {\r\n  margin-left: 20%;\r\n  padding: 16px;\r\n\r\n}\r\n\r\n\r\n/* The \"Forgot password\" text */\r\n\r\n\r\nspan.psw {\r\n  float: right;\r\n  padding-top: 16px;\r\n}\r\n\r\n\r\n/* Change styles for span and cancel button on extra small screens */\r\n\r\n\r\n@media screen and (max-width: 600px) {\r\n  span.psw {\r\n    display: block;\r\n    float: none;\r\n  }\r\n  .cancelbtn {\r\n    width: 100%;\r\n  }\r\n  .column {\r\n  width: 100%;\r\n}\r\n}\r\n\r\n\r\n.column {\r\n    float: left;\r\n    width: 30%;\r\n    padding: 15px;\r\n}\r\n\r\n\r\n.row:after {\r\n  content: \"\";\r\n  display: table;\r\n  clear: both;\r\n}\r\n\r\n\r\n.column2 {\r\n  float: left;\r\n  width:40%;\r\n  padding: 15px;\r\n}\r\n\r\n\r\n.row2:after {\r\ncontent: \"\";\r\ndisplay: table;\r\nclear: both;\r\n}\r\n\r\n\r\n.column3 {\r\n  float: left;\r\n  width:10%;\r\n  }\r\n\r\n\r\n.row3:after {\r\ncontent: \"\";\r\ndisplay: table;\r\nclear: both;\r\n}\r\n"

/***/ }),

/***/ "./src/app/Admin/account-register/account-register.component.html":
/***/ (function(module, exports) {

module.exports = "<app-admin-side-bar></app-admin-side-bar>\r\n<br><br><br><br>\r\n<h1 style = \"text-align: center; margin-left: 5%;margin-top: -30px\">Register New Account</h1>\r\n\r\n<form (submit)=\"onRegisterSubmit()\">\r\n\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n  <div class=\"column\">\r\n    <div class=\"name\">\r\n    <label><b>First Name</b></label>\r\n\r\n    <input [(ngModel)]=\"firstName\" name='firstName' type=\"text\" placeholder=\"Name\" required>\r\n    </div>\r\n  </div>\r\n  <div class=\"column\">\r\n    <div class=\"name\" >\r\n    <label><b>Middle Name</b></label>\r\n\r\n    <input [(ngModel)]=\"middleName\" name='middleName' type=\"text\" placeholder=\"Name\" required>\r\n    </div>\r\n  </div>\r\n    <div class=\"column\">\r\n      <div class=\"name\" style = \"float: left; width : 100%\">\r\n      <label><b>Last Name</b></label>\r\n\r\n      <input [(ngModel)]=\"lastName\" name='lastName' type=\"text\" placeholder=\"Name\" required>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n  <div style=\"padding : 15px\">\r\n\r\n<div class=\"row3\">\r\n  <div class=\"column3\">\r\n    <label><b>Account Type</b></label>\r\n  </div>\r\n  <div class=\"column3\" >\r\n    <select [(ngModel)] = \"accountType\" name=\"accountType\">\r\n  <option value=\"Admin\">Administrator</option>\r\n  <option value=\"Teacher\">Teacher</option>\r\n  <option value=\"Student\">Student</option>\r\n\r\n</select>\r\n  </div>\r\n\r\n</div>\r\n<br>\r\n\r\n\r\n\r\n\r\n  <!--  <input [(ngModel)]=\"accountType\" name='accountType' type=\"text\" placeholder=\"Type\" required> -->\r\n\r\n    <label><b>Address</b></label>\r\n    <input [(ngModel)]=\"address\" name='address' type=\"text\" placeholder=\"address\" required>\r\n\r\n    <label><b>Mobile No</b></label>\r\n    <input [(ngModel)]=\"mobileNo\" name='mobileNo' type=\"text\" placeholder=\"Mobile No\" required>\r\n\r\n\r\n    <label><b>Email Address</b></label>\r\n    <input [(ngModel)]=\"email\" name='email' type=\"text\" placeholder=\"Email\" required>\r\n\r\n</div>\r\n\r\n\r\n\r\n    <div class=\"row2\">\r\n      <div class=\"column2\">\r\n        <label><b>Username</b></label>\r\n        <input [(ngModel)]=\"username\" name='username'type=\"text\" placeholder=\"Username\" required>\r\n      </div>\r\n      <div class=\"column2\">\r\n        <label><b>Password</b></label>\r\n        <input [(ngModel)]=\"password\" name='password' type=\"password\" placeholder=\"Password\"  required>\r\n      </div>\r\n\r\n    </div>\r\n\r\n\r\n    <button type=\"submit\">submit</button>\r\n  </div>\r\n</form>\r\n<flash-messages></flash-messages>\r\n"

/***/ }),

/***/ "./src/app/Admin/account-register/account-register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountRegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__("./src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__("./src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AccountRegisterComponent = /** @class */ (function () {
    function AccountRegisterComponent(validateService, authService, router, messages) {
        this.validateService = validateService;
        this.authService = authService;
        this.router = router;
        this.messages = messages;
    }
    AccountRegisterComponent.prototype.ngOnInit = function () {
    };
    AccountRegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            firstName: this.firstName,
            middleName: this.middleName,
            lastName: this.lastName,
            accountType: this.accountType,
            address: this.address,
            email: this.email,
            mobileNo: this.mobileNo,
            username: this.username,
            password: this.password,
            teacherName: this.teacherName
        };
        console.log('Submit button pressed');
        // validating
        if (!this.validateService.validateRegister(user)) {
            this.messages.show('Fill in all fields', {
                cssClass: 'alert-danger',
                timeOut: 5000
            });
            return false;
        }
        if (!this.validateService.validateEmail(this.email)) {
            this.messages.show('Enter valid email', {
                cssClass: 'alert-danger',
                timeOut: 5000
            });
            return false;
        }
        if (!this.validateService.validatePhoneNo(this.mobileNo)) {
            this.messages.show('Enter valid phone number', {
                cssClass: 'alert-danger',
                timeOut: 5000
            });
            return false;
        }
        console.log(user);
        // register user
        this.authService.registerUser(user).subscribe(function (data) {
            console.log('Trying to register');
            if (data.success) {
                _this.messages.show(data.msg, {
                    cssClass: 'alert-success',
                    timeOut: 5000
                });
                // this.router.navigate(['teachers']);
            }
            else {
                _this.messages.show(data.msg, {
                    cssClass: 'alert-danger',
                    timeOut: 5000
                });
            }
        });
    };
    // giving access only to the appropiate user
    AccountRegisterComponent.prototype.onClickReg = function () {
        var type = localStorage.getItem('type');
        if (type === 'Admin') {
            this.router.navigate(['accountRegister']);
            return true;
        }
        if (type === 'Teacher') {
            this.router.navigate(['Home']);
            return false;
        }
        if (type === 'Parent') {
            this.router.navigate(['Home']);
            return false;
        }
        this.router.navigate(['Home']);
        return false;
    };
    AccountRegisterComponent.prototype.isParent = function () {
        console.log("is parent");
        if (this.accountType === "Parent") {
            return true;
        }
        else {
            return false;
        }
    };
    AccountRegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-account-register',
            template: __webpack_require__("./src/app/Admin/account-register/account-register.component.html"),
            styles: [__webpack_require__("./src/app/Admin/account-register/account-register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]])
    ], AccountRegisterComponent);
    return AccountRegisterComponent;
}());



/***/ }),

/***/ "./src/app/Admin/admin-side-bar/admin-side-bar.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n/* The sidebar menu */\r\n.admin-side-bar {\r\n  height: 100%; /* Full-height: remove this if you want \"auto\" height */\r\n  width: 15%; /* Set the width of the sidebar */\r\n  position : fixed; /* Fixed Sidebar (stay in place on scroll) */\r\n  left: 40px;\r\n  top:48px;\r\n  background-color: black; /* Black */\r\n  overflow-x: hidden; /* Disable horizontal scroll */\r\n}\r\n/* The navigation menu links */\r\n.admin-side-bar li {\r\n  padding: 6px 8px 6px 16px;\r\n  text-decoration: none;\r\n  font-size: 17px;\r\n  color: white;  \r\n}\r\n/* When you mouse over the navigation links, change their color */\r\n.admin-side-bar li:hover {\r\n  color: white;\r\n  background-color:  rgb(175, 113, 233);\r\n}\r\n/* Style page content */\r\n.main {\r\n  margin-left: 160px; /* Same as the width of the sidebar */\r\n  padding: 0px 10px;\r\n}\r\n/* On smaller screens, where height is less than 450px, change the style of the sidebar (less padding and a smaller font size) */\r\n@media screen and (max-height: 450px) {\r\n  .admin-side-bar {padding-top: 15px;}\r\n  .admin-side-bar a {font-size: 18px;}\r\n}\r\n"

/***/ }),

/***/ "./src/app/Admin/admin-side-bar/admin-side-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"admin-side-bar\">\r\n        <ul>\r\n        <li routerLink='/accountRegister'>Account Register</li>\r\n        <li routerLink='/approveLeave'>Approve leave form</li>\r\n        <li routerLink='/studentDetailsA'>Get student details</li>\r\n        <li routerLink=\"/declareholiday\">Declare a holiday</li>\r\n        </ul>\r\n      </div>\r\n      "

/***/ }),

/***/ "./src/app/Admin/admin-side-bar/admin-side-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminSideBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminSideBarComponent = /** @class */ (function () {
    function AdminSideBarComponent() {
    }
    AdminSideBarComponent.prototype.ngOnInit = function () {
    };
    AdminSideBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-admin-side-bar',
            template: __webpack_require__("./src/app/Admin/admin-side-bar/admin-side-bar.component.html"),
            styles: [__webpack_require__("./src/app/Admin/admin-side-bar/admin-side-bar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminSideBarComponent);
    return AdminSideBarComponent;
}());



/***/ }),

/***/ "./src/app/Admin/admin/admin.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Admin/admin/admin.component.html":
/***/ (function(module, exports) {

module.exports = "<app-admin-side-bar></app-admin-side-bar>\r\n<app-profile></app-profile>"

/***/ }),

/***/ "./src/app/Admin/admin/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminComponent = /** @class */ (function () {
    function AdminComponent() {
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__("./src/app/Admin/admin/admin.component.html"),
            styles: [__webpack_require__("./src/app/Admin/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/Admin/approve-leave-application/approve-leave-application.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n/* Add padding to containers */\r\n.container {\r\n  padding: 16px;\r\n  margin-left: 18%;\r\n}\r\n.selected {\r\n  background-color: rgb(20, 119, 233) !important;\r\n  color: white;\r\n  \r\n}\r\n.list {\r\n  margin: 0 0 2em 0;\r\n  list-style-type: none;\r\n  padding: 0;\r\n  width: 15em;\r\n}\r\n.list li {\r\n  cursor: pointer;\r\n  position: relative;\r\n  left: 0;\r\n  background-color: #EEE;\r\n  margin: .5em;\r\n  padding: .3em 0;\r\n  height: 1.6em;\r\n  border-radius: 4px;\r\n}\r\n/*.list li.selected:hover {\r\n  background-color: #BBD8DC !important;\r\n  color: white;\r\n}*/\r\n.list li:hover {\r\n  /*color: #607D8B;*/\r\n  background-color: #DDD;\r\n  left: .1em;\r\n}\r\n.list .text {\r\n  position: relative;\r\n  top: -3px;\r\n}\r\n.list .badge {\r\n\r\n  font-size: small;\r\n  color: white;\r\n  padding: 0.8em 0.7em 0 0.7em;\r\n  background-color: #607D8B;\r\n  line-height: 1em;\r\n  position: relative;\r\n  left: -1px;\r\n  top: -4px;\r\n  height: 1.8em;\r\n  margin-right: .8em;\r\n  border-radius: 4px 0 0 4px;\r\n\r\n}\r\n.container {\r\n  border-radius: 5px;\r\n  background-color: #f2f2f2;\r\n  padding: 20px;\r\n  height:50%;\r\n  overflow-y: hidden;\r\n  width:150%;\r\n  margin-left: 400px;\r\n  margin-top: -130px\r\n\r\n}\r\n.btn{display:inline-block;padding:6px 12px;margin-bottom:0;\r\n  font-size:14px;font-weight:bold;color: black;line-height:1.42857143;\r\n  text-align:center;white-space:nowrap;vertical-align:middle;\r\n  -ms-touch-action:manipulation;touch-action:manipulation;\r\n  cursor:pointer;-webkit-user-select:none;-moz-user-select:none;\r\n  -ms-user-select:none;user-select:none;background-image:none;\r\n  border:1px solid transparent;border-radius:4px }\r\n.btn-success.focus,.btn-success:focus{color:#fff;\r\n    background-color:#449d44;\r\n    border-color:#255625}\r\n.btn-success:hover{color:#fff;\r\n    background-color:#449d44;\r\n    border-color:#398439}\r\n.center{\r\n    margin-top: 25px;\r\n    margin-left: 225px;\r\n    width: 50%;\r\n    padding: 10px;\r\n}\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/Admin/approve-leave-application/approve-leave-application.component.html":
/***/ (function(module, exports) {

module.exports = "<app-nav-bar></app-nav-bar>\r\n<app-admin-side-bar></app-admin-side-bar>\r\n<h1 style=\"margin-left: 500px; margin-top: 75px\">Leave Applications</h1>\r\n<div class=\"center\">\r\n<ul class=\"list\">\r\n  <li *ngFor=\"let application of applications\"\r\n  [class.selected]=\"application === selectedApplication\"\r\n  (click)=\"onSelect(application)\"\r\n  >\r\n    <span class=\"badge\">$</span>{{application.username}}\r\n  </li>\r\n\r\n  <div *ngIf=\"selectedApplication\" >\r\n     \r\n      <form (submit)=\"onFormSubmit(selectedApplication)\" class=\"container\" >\r\n        <label for=\"sdate\" style=\"color: #4c5552;font-family:Cambria;font-size: 20px\">Starting date &#8658;</label> {{selectedApplication.sdate}} <br>\r\n        <label for=\"edate\" style=\"color: #4c5552;font-family: Cambria;font-size: 20px\">End date &#8658;</label>{{selectedApplication.edate}} <br>\r\n        <label for=\"reason\"style=\"color: #4c5552; font-family: Cambria;font-size: 20px\">Reason &#8658;</label>{{selectedApplication.reason}} <br>\r\n        <!--<label for=\"comment\"  style=\"color: #4c5552;font-family: Cambria;font-size: 20px\">Comment</label>\r\n        <textarea name=\"comment\" id=\"\" cols=\"30\" rows=\"10\"></textarea>\r\n        <ul class=\"middleList\">\r\n            <input type=\"radio\" value=\"Accept\" name=\"gender\"  checked>Accept  <input type=\"radio\" value=\"Decline\" name=\"gender\"  >Decline \r\n        </ul><br>-->\r\n        <button type=\"submit\" class=\"btn btn-success\">Submit</button>\r\n      </form><br>\r\n    </div>\r\n</ul>\r\n</div>\r\n\r\n<flash-messages></flash-messages>"

/***/ }),

/***/ "./src/app/Admin/approve-leave-application/approve-leave-application.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApproveLeaveApplicationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_leave_app_service_service__ = __webpack_require__("./src/app/services/leave-app-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ApproveLeaveApplicationComponent = /** @class */ (function () {
    function ApproveLeaveApplicationComponent(leaveAppService, messages, router) {
        this.leaveAppService = leaveAppService;
        this.messages = messages;
        this.router = router;
    }
    ApproveLeaveApplicationComponent.prototype.ngOnInit = function () {
        this.getApplications();
    };
    // get leave application
    ApproveLeaveApplicationComponent.prototype.getApplications = function () {
        var _this = this;
        this.leaveAppService.getLeaveApplications().subscribe(function (data) {
            _this.applications = data;
            console.log(data);
        }, function (error) {
            console.log(error);
            return false;
        });
        console.log(this.applications);
    };
    // approve leave application
    ApproveLeaveApplicationComponent.prototype.approveleaveApplication = function (application) {
        var _this = this;
        this.leaveAppService.returnedApprovedApplication(application).subscribe(function (data) {
            console.log('Trying to register');
            if (data.success) {
                _this.messages.show('Submited', {
                    cssClass: 'alert-success',
                    timeOut: 30
                });
                return true;
            }
            else {
                _this.messages.show(data.msg, {
                    cssClass: 'alert-danger',
                    timeOut: 5000
                });
                return false;
            }
        });
        this.selectedApplication = null;
        this.sleep(600);
        this.router.navigate(['/admin']); // reload the page again
    };
    ApproveLeaveApplicationComponent.prototype.onSelect = function (application) {
        console.log(application);
        this.selectedApplication = application;
        // console.log(this.selectedApplication);
    };
    ApproveLeaveApplicationComponent.prototype.onFormSubmit = function (selectedApplication) {
        console.log('here');
        this.approveleaveApplication(selectedApplication);
        return true;
    };
    ApproveLeaveApplicationComponent.prototype.sleep = function (milliseconds) {
        var start = new Date().getTime();
        while (true) {
            if ((new Date().getTime() - start) < milliseconds) {
                break;
            }
        }
    };
    ApproveLeaveApplicationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-approve-leave-application',
            template: __webpack_require__("./src/app/Admin/approve-leave-application/approve-leave-application.component.html"),
            styles: [__webpack_require__("./src/app/Admin/approve-leave-application/approve-leave-application.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_leave_app_service_service__["a" /* LeaveAppServiceService */],
            __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]])
    ], ApproveLeaveApplicationComponent);
    return ApproveLeaveApplicationComponent;
}());



/***/ }),

/***/ "./src/app/Admin/declareholiday/declareholiday.component.css":
/***/ (function(module, exports) {

module.exports = ".login {\r\n    margin: auto;\r\n    width: 500px;\r\n    border: 3px solid #008CBA;\r\n    padding: 10px;\r\n  }\r\n\r\n\r\n  /* Full-width inputs */\r\n\r\n\r\n  input[type=text], input[type=password] {\r\n    width: 100%;\r\n    padding: 12px 20px;\r\n    margin: 8px 0;\r\n    display: inline-block;\r\n    border: 1px solid #ccc;\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n  }\r\n\r\n\r\n  /* Set a style for all buttons */\r\n\r\n\r\n  button {\r\n    background-color: #008CBA;\r\n    color: white;\r\n    padding: 14px 20px;\r\n    margin: 8px 0;\r\n    border: none;\r\n    cursor: pointer;\r\n    width: 100%;\r\n  }\r\n\r\n\r\n  /* Add a hover effect for buttons */\r\n\r\n\r\n  button:hover {\r\n    opacity: 0.8;\r\n  }\r\n\r\n\r\n  /* Extra style for the cancel button (red) */\r\n\r\n\r\n  .cancelbtn {\r\n    width: auto;\r\n    padding: 10px 18px;\r\n    background-color: #f44336;\r\n  }\r\n\r\n\r\n  /* Center the avatar image inside this container */\r\n\r\n\r\n  .imgcontainer {\r\n    text-align: center;\r\n    margin: 24px 0 12px 0;\r\n  }\r\n\r\n\r\n  /* Add padding to containers */\r\n\r\n\r\n  .container {\r\n    margin-left: 18%;\r\n    padding: 16px;\r\n  }\r\n\r\n\r\n  /* The \"Forgot password\" text */\r\n\r\n\r\n  span.psw {\r\n    float: right;\r\n    padding-top: 16px;\r\n  }\r\n\r\n\r\n  /* Change styles for span and cancel button on extra small screens */\r\n\r\n\r\n  @media screen and (max-width: 300px) {\r\n    span.psw {\r\n      display: block;\r\n      float: none;\r\n    }\r\n    .cancelbtn {\r\n      width: 100%;\r\n    }\r\n  }\r\n"

/***/ }),

/***/ "./src/app/Admin/declareholiday/declareholiday.component.html":
/***/ (function(module, exports) {

module.exports = "<app-nav-bar></app-nav-bar>\r\n<app-admin-side-bar></app-admin-side-bar>\r\n<br><br><br><br>\r\n\r\n\r\n<h1 style = \"text-align : center;margin-top: -30px\"> Declare a holiday </h1>\r\n<form (submit)=\"onSubmit()\">\r\n\r\n  <div class=\"container\">\r\n    <label><b>Date</b></label>\r\n    <input [(ngModel)]= \"date\" name='date' type=\"date\" required>\r\n    <br><br><br>\r\n\r\n    <label><b>Reason</b></label>\r\n\r\n        <input class=\"resizedText\" [(ngModel)]=\"reason\" name='reason'type=\"text\" placeholder=\"Reason\" required>\r\n\r\n    <button type=\"submit\">submit</button>\r\n  </div>\r\n</form>\r\n<flash-messages></flash-messages>"

/***/ }),

/***/ "./src/app/Admin/declareholiday/declareholiday.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeclareholidayComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__("./src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_declaare_holiday_service__ = __webpack_require__("./src/app/services/declaare-holiday.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DeclareholidayComponent = /** @class */ (function () {
    function DeclareholidayComponent(validateService, messages, holiday) {
        this.validateService = validateService;
        this.messages = messages;
        this.holiday = holiday;
    }
    DeclareholidayComponent.prototype.ngOnInit = function () {
    };
    DeclareholidayComponent.prototype.onSubmit = function () {
        var _this = this;
        var msg = {
            date: this.date,
            reason: this.reason
        };
        // validate date
        if (!this.validateService.validateDate(msg.date)) {
            this.messages.show('Date is not valid', {
                cssClass: 'alert-danger',
                timeOut: 5000
            });
            return false;
        }
        console.log('validated');
        // register user
        this.holiday.submit(msg).subscribe(function (data) {
            console.log('Trying to register');
            if (data.success) {
                _this.messages.show('Successfully Declared', {
                    cssClass: 'alert-success',
                    timeOut: 5000
                });
                // this.router.navigate(['teachers']);
            }
            else {
                console.log('Something went wrong');
            }
        });
    };
    DeclareholidayComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-declareholiday',
            template: __webpack_require__("./src/app/Admin/declareholiday/declareholiday.component.html"),
            styles: [__webpack_require__("./src/app/Admin/declareholiday/declareholiday.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_3__services_declaare_holiday_service__["a" /* DeclaareHolidayService */]])
    ], DeclareholidayComponent);
    return DeclareholidayComponent;
}());



/***/ }),

/***/ "./src/app/Admin/get-student/get-student.component.css":
/***/ (function(module, exports) {

module.exports = "#customers {\r\n    font-family: \"Trebuchet MS\", Arial, Helvetica, sans-serif;\r\n    border-collapse: collapse;\r\n    width: 70%;\r\n    margin-left: 18%; \r\n}\r\n\r\n#customers td, #customers th {\r\n    border: 1px solid #ddd;\r\n    padding: 8px;\r\n}\r\n\r\n#customers tr:nth-child(even){background-color: #f2f2f2;}\r\n\r\n#customers tr:hover {background-color: #ddd;}\r\n\r\n#customers th {\r\n    padding-top: 12px;\r\n    padding-bottom: 12px;\r\n    text-align: left;\r\n    background-color:rgb(0, 71, 95);\r\n    color: white;\r\n}"

/***/ }),

/***/ "./src/app/Admin/get-student/get-student.component.html":
/***/ (function(module, exports) {

module.exports = "<app-admin-side-bar></app-admin-side-bar>\r\n<br><br><br><br>\r\n<table id=\"customers\">\r\n  <tr>\r\n    <th>Name</th> \r\n    <th>Username</th>\r\n    <th>Address</th>\r\n    <th>Phone Number</th>\r\n  </tr>\r\n  <tr *ngFor=\"let student of studentList\">\r\n      <td>{{student.firstName}} {{student.middleName}} {{student.lastName}}</td>\r\n    <td>{{student.username}}</td>\r\n    <td>{{student.address}}</td>\r\n    <td>{{student.mobileNo}}</td>\r\n  </tr>\r\n  \r\n</table>\r\n"

/***/ }),

/***/ "./src/app/Admin/get-student/get-student.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetStudentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_student_info_service__ = __webpack_require__("./src/app/services/student-info.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GetStudentComponent = /** @class */ (function () {
    function GetStudentComponent(infoService) {
        this.infoService = infoService;
    }
    GetStudentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.infoService.getInfo().subscribe(function (data) {
            _this.studentList = data;
            console.log(data);
        }, function (error) {
            console.log(error);
            return false;
        });
    };
    GetStudentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-get-student',
            template: __webpack_require__("./src/app/Admin/get-student/get-student.component.html"),
            styles: [__webpack_require__("./src/app/Admin/get-student/get-student.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_student_info_service__["a" /* StudentInfoService */]])
    ], GetStudentComponent);
    return GetStudentComponent;
}());



/***/ }),

/***/ "./src/app/Admin/user-register/user-register.component.css":
/***/ (function(module, exports) {

module.exports = ".line{\r\n    background-color:rgb(0, 71, 95);\r\n    padding: 25px;\r\n   }\r\n   \r\n   .button {\r\n     background-color: #008CBA; /* Green */\r\n     border: none;\r\n     color: white;\r\n     padding: 15px 32px;\r\n     text-align: center;\r\n     text-decoration: none;\r\n     display: inline-block;\r\n     font-size: 30px;\r\n     margin: 4px 20px;\r\n     cursor: pointer;\r\n     border-radius: 10%\r\n   }\r\n   \r\n   .button:hover {background-color: rgb(1, 105, 139);}\r\n   \r\n   .wrapper {\r\n       text-align: center;\r\n   }\r\n   \r\n   .wrapper {\r\n       position: center;\r\n       margin-top: 10%;\r\n   }\r\n   "

/***/ }),

/***/ "./src/app/Admin/user-register/user-register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"line\"></div>\r\n<div class=\"wrapper\">\r\n    <div class=\"center\" align=\"center\">\r\n        <a routerLinkActive='active' \r\n            routerLink=\"/accountLogIn\" \r\n            [routerLinkActiveOptions]=\"{exact:true}\">\r\n            <button class=\"button\">SignIn</button>\r\n        </a>\r\n   \r\n            <a routerLinkActive='active' \r\n            routerLink=\"/accountRegister\" \r\n            [routerLinkActiveOptions]=\"{exact:true}\">\r\n            <button class=\"button\">Register</button>\r\n            </a>\r\n    </div>\r\n\r\n    \r\n</div>"

/***/ }),

/***/ "./src/app/Admin/user-register/user-register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserRegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserRegisterComponent = /** @class */ (function () {
    function UserRegisterComponent() {
    }
    UserRegisterComponent.prototype.ngOnInit = function () {
    };
    UserRegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user-register',
            template: __webpack_require__("./src/app/Admin/user-register/user-register.component.html"),
            styles: [__webpack_require__("./src/app/Admin/user-register/user-register.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserRegisterComponent);
    return UserRegisterComponent;
}());



/***/ }),

/***/ "./src/app/Parent/apply-transport/apply-transport.component.css":
/***/ (function(module, exports) {

module.exports = "/* Full-width inputs */\r\ninput[type=text] {\r\n    width: 70%;\r\n    padding: 12px 20px;\r\n    margin: 8px 0;\r\n    display: inline-block;\r\n    border: 1px solid #ccc;\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n  }\r\ninput[type=date]{\r\n    width: 13%; /* half width */\r\n    padding: 12px 20px;\r\n    margin: 8px 0;\r\n    display: inline-block;\r\n    border: 1px solid #ccc;\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n  }\r\n.resizedText{\r\n    height: 200px;\r\n    width: 500px;\r\n  }\r\n/* Set a style for all buttons */\r\nbutton {\r\n    background-color: #008CBA;\r\n    color: white;\r\n    padding: 14px 20px;\r\n    margin: 8px 0;\r\n    border: none;\r\n    cursor: pointer;\r\n    width: 80%;\r\n  }\r\n/* Add a hover effect for buttons */\r\nbutton:hover {\r\n    opacity: 0.8;\r\n  }\r\n/* Extra style for the cancel button (red) */\r\n.cancelbtn {\r\n    width: auto;\r\n    padding: 10px 18px;\r\n    background-color: #f44336;\r\n  }\r\n/* Add padding to containers */\r\n.container {\r\n    padding: 16px;\r\n    margin-left: 18%;\r\n  }\r\n/* The \"Forgot password\" text */\r\nspan.psw {\r\n    float: right;\r\n    padding-top: 16px;\r\n  }\r\n/* Change styles for span and cancel button on extra small screens */\r\n@media screen and (max-width: 300px) {\r\n    span.psw {\r\n      display: block;\r\n      float: none;\r\n    }\r\n    .cancelbtn {\r\n      width: 100%;\r\n    }\r\n  }\r\n.amount{\r\n    width:10%\r\n  }\r\n.alert-danger{\r\n    color:#a94442;\r\n    background-color:#f2dede;\r\n    border-color:#ebccd1;\r\n    color:#843534;\r\n    width:50%\r\n  \r\n  }\r\n.alert{\r\n   padding:15px;\r\n   margin-bottom:20px;\r\n   border:1px solid transparent;\r\n   border-radius:4px;\r\n   width:50%\r\n  \r\n  }\r\n.alert-danger hr{border-top-color:#e4b9c0;width:50%}\r\n  "

/***/ }),

/***/ "./src/app/Parent/apply-transport/apply-transport.component.html":
/***/ (function(module, exports) {

module.exports = "<app-parent-side-bar></app-parent-side-bar>\r\n\r\n<form (submit)=\"onFormSubmit()\">\r\n\r\n  <div class=\"container\"> \r\n    <label><b>Username : </b></label>{{username}}\r\n\r\n    <br><br>\r\n    <label><b>From :</b></label>\r\n    <input [(ngModel)]=\"from\" name='from' #name1=\"ngModel\" width=\"10%\" type=\"text\" required >\r\n    <br>\r\n    <button type=\"submit\">submit</button>\r\n  </div>\r\n</form>\r\n<flash-messages></flash-messages>\r\n"

/***/ }),

/***/ "./src/app/Parent/apply-transport/apply-transport.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApplyTransportComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_parent_services_service__ = __webpack_require__("./src/app/services/parent-services.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_validate_service__ = __webpack_require__("./src/app/services/validate.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ApplyTransportComponent = /** @class */ (function () {
    function ApplyTransportComponent(validate, router, messages, parentService) {
        this.validate = validate;
        this.router = router;
        this.messages = messages;
        this.parentService = parentService;
    }
    ApplyTransportComponent.prototype.ngOnInit = function () {
        this.username = localStorage.getItem('username');
    };
    ApplyTransportComponent.prototype.onFormSubmit = function () {
        var _this = this;
        var temp = {
            'username': this.username,
            'from': this.from
        };
        /*console.log(temp);
        const res = this.parentService.submitTr(temp);
        console.log('here');
        console.log(res);*/
        if (!this.validate.validateTrasportRequest(temp)) {
            this.messages.show("Enter a address to request transport!", {
                cssClass: 'alert-danger',
                timeOut: 5000
            });
        }
        else {
            this.parentService.submitTr(temp).subscribe(function (data) {
                console.log('Trying to register');
                if (data.success) {
                    console.log('success');
                    _this.messages.show("Transport request sent!", {
                        cssClass: 'alert-success',
                        timeOut: 5000
                    });
                    _this.router.navigate(['applyTransport']);
                    /*this.messages.show( 'Successfully Declared', {
                      cssClass: 'alert-success',
                      timeOut: 5000 });
                    // this.router.navigate(['teachers']);*/
                }
                else {
                    console.log(data);
                    console.log('Something went wrong');
                }
            });
        }
    };
    ApplyTransportComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-apply-transport',
            template: __webpack_require__("./src/app/Parent/apply-transport/apply-transport.component.html"),
            styles: [__webpack_require__("./src/app/Parent/apply-transport/apply-transport.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_1__services_parent_services_service__["a" /* ParentServicesService */]])
    ], ApplyTransportComponent);
    return ApplyTransportComponent;
}());



/***/ }),

/***/ "./src/app/Parent/check-homework/check-homework.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n#customers {\r\n    font-family: \"Trebuchet MS\", Arial, Helvetica, sans-serif;\r\n    border-collapse: collapse;\r\n    width: 70%;\r\n    margin-left: 18%; \r\n}\r\n\r\n#customers td, #customers th {\r\n    border: 1px solid #ddd;\r\n    padding: 8px;\r\n}\r\n\r\n#customers tr:nth-child(even){background-color: #f2f2f2;}\r\n\r\n#customers tr:hover {background-color: #ddd;}\r\n\r\n#customers th {\r\n    padding-top: 12px;\r\n    padding-bottom: 12px;\r\n    text-align: left;\r\n    background-color:rgb(0, 71, 95);\r\n    color: white;\r\n}"

/***/ }),

/***/ "./src/app/Parent/check-homework/check-homework.component.html":
/***/ (function(module, exports) {

module.exports = "<app-parent-side-bar></app-parent-side-bar>\r\n\r\n<h1 style=\"margin-left: 600px\">homework Details</h1>\r\n<table id=\"customers\">\r\n  <tr>\r\n    <th>Home Work</th> \r\n    <th>Due Date</th>\r\n\r\n  </tr>\r\n  <tr *ngFor=\"let hw of hwList\">\r\n    <td>{{hw.work}}</td>\r\n    <td>{{hw.dueDate}}</td>\r\n\r\n  </tr>\r\n\r\n</table>"

/***/ }),

/***/ "./src/app/Parent/check-homework/check-homework.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckHomeworkComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_parent_services_service__ = __webpack_require__("./src/app/services/parent-services.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CheckHomeworkComponent = /** @class */ (function () {
    function CheckHomeworkComponent(parentService) {
        this.parentService = parentService;
    }
    CheckHomeworkComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.username = localStorage.getItem('username');
        console.log(this.username);
        this.parentService.getUser(this.username).subscribe(function (data) {
            console.log('Trying to get user');
            _this.user = data;
            console.log('success');
            _this.parentService.getHW(_this.user.teacherName).subscribe(function (home) {
                _this.hwList = home;
            });
        });
    };
    CheckHomeworkComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-check-homework',
            template: __webpack_require__("./src/app/Parent/check-homework/check-homework.component.html"),
            styles: [__webpack_require__("./src/app/Parent/check-homework/check-homework.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_parent_services_service__["a" /* ParentServicesService */]])
    ], CheckHomeworkComponent);
    return CheckHomeworkComponent;
}());



/***/ }),

/***/ "./src/app/Parent/parent-side-bar/parent-side-bar.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n/* The sidebar menu */\r\n.teacher-side-bar {\r\n    height: auto; /* Full-height: remove this if you want \"auto\" height */\r\n    width: 15%; /* Set the width of the sidebar */\r\n    position : fixed; /* Fixed Sidebar (stay in place on scroll) */\r\n    left: 32px;\r\n    background-color: black; /* Black */\r\n    overflow-x: hidden; /* Disable horizontal scroll */\r\n    padding-top: 20px;\r\n  }\r\n/* The navigation menu links */\r\n.teacher-side-bar li {\r\n    padding: 6px 8px 6px 16px;\r\n    text-decoration: none;\r\n    font-size: 17px;\r\n    color: white;\r\n  \r\n  }\r\n/* When you mouse over the navigation links, change their color */\r\n.teacher-side-bar li:hover {\r\n    color: blue;\r\n  }\r\n/* Style page content */\r\n.main {\r\n    margin-left: 160px; /* Same as the width of the sidebar */\r\n    padding: 0px 10px;\r\n  }\r\n/* On smaller screens, where height is less than 450px, change the style of the sidebar (less padding and a smaller font size) */\r\n@media screen and (max-height: 450px) {\r\n    .teacher-side-bar {padding-top: 15px;}\r\n    .teacher-side-bar a {font-size: 18px;}\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/Parent/parent-side-bar/parent-side-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<app-nav-bar></app-nav-bar>\r\n<div class=\"teacher-side-bar\">\r\n  <ul>\r\n  <!--<li routerLinkActive='active' routerLink=\"/applyTransport\" [routerLinkActiveOptions]=\"{exact:true}\">Apply Transport</li> -->\r\n  <li routerLinkActive='active' routerLink=\"/applyTransport\" [routerLinkActiveOptions]=\"{exact:true}\">Apply Transport</li>\r\n  <li routerLinkActive='active' routerLink=\"/checkHomework\" [routerLinkActiveOptions]=\"{exact:true}\">Check Homework</li>\r\n  <li routerLinkActive='active' routerLink=\"/viweTeacher\" [routerLinkActiveOptions]=\"{exact:true}\">Teacher Details</li>\r\n  </ul>\r\n</div>\r\n\r\n<!-- Page content -->\r\n<div class=\"main\">\r\n  ...\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/Parent/parent-side-bar/parent-side-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParentSideBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ParentSideBarComponent = /** @class */ (function () {
    function ParentSideBarComponent() {
    }
    ParentSideBarComponent.prototype.ngOnInit = function () {
    };
    ParentSideBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-parent-side-bar',
            template: __webpack_require__("./src/app/Parent/parent-side-bar/parent-side-bar.component.html"),
            styles: [__webpack_require__("./src/app/Parent/parent-side-bar/parent-side-bar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ParentSideBarComponent);
    return ParentSideBarComponent;
}());



/***/ }),

/***/ "./src/app/Parent/parent/parent.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Parent/parent/parent.component.html":
/***/ (function(module, exports) {

module.exports = "<app-parent-side-bar></app-parent-side-bar>\r\n<app-profile></app-profile>"

/***/ }),

/***/ "./src/app/Parent/parent/parent.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ParentComponent = /** @class */ (function () {
    function ParentComponent() {
    }
    ParentComponent.prototype.ngOnInit = function () {
    };
    ParentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-parent',
            template: __webpack_require__("./src/app/Parent/parent/parent.component.html"),
            styles: [__webpack_require__("./src/app/Parent/parent/parent.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ParentComponent);
    return ParentComponent;
}());



/***/ }),

/***/ "./src/app/Parent/viwe-teacher/viwe-teacher.component.css":
/***/ (function(module, exports) {

module.exports = ".card {\r\n    -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\r\n            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\r\n    margin: auto;\r\n    text-align: center;\r\n    font-family: arial;\r\n    border: 2px solid rgb(2, 14, 116); /* Green */\r\n    height: 60%;\r\n    width: 40%;\r\n  }\r\n  \r\n  .title {\r\n    color: grey;\r\n    font-size: 18px;\r\n  }\r\n  \r\n  button {\r\n    border: none;\r\n    outline: 0;\r\n    display: inline-block;\r\n    padding: 8px;\r\n    color: white;\r\n    background-color: #000;\r\n    text-align: center;\r\n    cursor: pointer;\r\n    width: 100%;\r\n    font-size: 18px;\r\n  }\r\n  \r\n  a {\r\n    text-decoration: none;\r\n    font-size: 22px;\r\n    color: black;\r\n  }\r\n  \r\n  button:hover, a:hover {\r\n    opacity: 0.7;\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/Parent/viwe-teacher/viwe-teacher.component.html":
/***/ (function(module, exports) {

module.exports = "<app-parent-side-bar></app-parent-side-bar>\r\n<br><br>\r\n<h2 style=\"text-align:center\">Teacher's Profile</h2>\r\n\r\n<div class=\"card\">\r\n    <br>\r\n  <img src=\"../../assets/profile.jpg\" style=\"width:20%\">\r\n  <h1>{{teacher.username}}</h1>\r\n  <h3><b>Name:</b> {{teacher.firstName}} {{teacher.middleName}} {{teacher.lastName}}</h3>\r\n\r\n  <h3><b>Address:</b> {{teacher.address}}</h3>\r\n  <h3><b>E-mail:</b> {{teacher.email}}</h3>\r\n  <h3><b>Mobile No:</b> {{teacher.mobileNo}}</h3>\r\n  \r\n  </div>"

/***/ }),

/***/ "./src/app/Parent/viwe-teacher/viwe-teacher.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViweTeacherComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__ = __webpack_require__("./src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_parent_services_service__ = __webpack_require__("./src/app/services/parent-services.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ViweTeacherComponent = /** @class */ (function () {
    function ViweTeacherComponent(authenticationService, router, parentService) {
        this.authenticationService = authenticationService;
        this.router = router;
        this.parentService = parentService;
    }
    ViweTeacherComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.username = localStorage.getItem('username');
        console.log(this.username);
        this.parentService.getUser(this.username).subscribe(function (data) {
            console.log('Trying to get user');
            _this.user = data;
            console.log('success');
            console.log(_this.user, "================");
            _this.parentService.viweTeacher(_this.user.teacherName.toString()).subscribe(function (data) {
                _this.teacher = data[0];
                console.log(data[0]);
            });
        });
        this.parentService.viweTeacher(this.user.teacherName).subscribe(function (data) {
            console.log(data);
        });
    };
    ViweTeacherComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-viwe-teacher',
            template: __webpack_require__("./src/app/Parent/viwe-teacher/viwe-teacher.component.html"),
            styles: [__webpack_require__("./src/app/Parent/viwe-teacher/viwe-teacher.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_3__services_parent_services_service__["a" /* ParentServicesService */]])
    ], ViweTeacherComponent);
    return ViweTeacherComponent;
}());



/***/ }),

/***/ "./src/app/Teacher/add-homework/add-homework.component.css":
/***/ (function(module, exports) {

module.exports = "/* Full-width inputs */\r\ninput[type=text] {\r\n    width: 70%;\r\n    padding: 12px 20px;\r\n    margin: 8px 0;\r\n    display: inline-block;\r\n    border: 1px solid #ccc;\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n  }\r\ninput[type=date]{\r\n    width: 13%; /* half width */\r\n    padding: 12px 20px;\r\n    margin: 8px 0;\r\n    display: inline-block;\r\n    border: 1px solid #ccc;\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n  }\r\n.resizedText{\r\n    height: 200px;\r\n    width: 500px;\r\n  }\r\n/* Set a style for all buttons */\r\nbutton {\r\n    background-color: #008CBA;\r\n    color: white;\r\n    padding: 14px 20px;\r\n    margin: 8px 0;\r\n    border: none;\r\n    cursor: pointer;\r\n    width: 80%;\r\n  }\r\n/* Add a hover effect for buttons */\r\nbutton:hover {\r\n    opacity: 0.8;\r\n  }\r\n/* Extra style for the cancel button (red) */\r\n.cancelbtn {\r\n    width: auto;\r\n    padding: 10px 18px;\r\n    background-color: #f44336;\r\n  }\r\n/* Add padding to containers */\r\n.container {\r\n    padding: 16px;\r\n    margin-left: 18%;\r\n  }\r\n/* The \"Forgot password\" text */\r\nspan.psw {\r\n    float: right;\r\n    padding-top: 16px;\r\n  }\r\n/* Change styles for span and cancel button on extra small screens */\r\n@media screen and (max-width: 300px) {\r\n    span.psw {\r\n      display: block;\r\n      float: none;\r\n    }\r\n    .cancelbtn {\r\n      width: 100%;\r\n    }\r\n  }\r\n.amount{\r\n    width:10%\r\n  }\r\n.alert-danger{\r\n    color:#a94442;\r\n    background-color:#f2dede;\r\n    border-color:#ebccd1;\r\n    color:#843534;\r\n    width:50%\r\n  \r\n  }\r\n.alert{\r\n   padding:15px;\r\n   margin-bottom:20px;\r\n   border:1px solid transparent;\r\n   border-radius:4px;\r\n   width:50%\r\n  \r\n  }\r\n.alert-danger hr{border-top-color:#e4b9c0;width:50%}\r\n  "

/***/ }),

/***/ "./src/app/Teacher/add-homework/add-homework.component.html":
/***/ (function(module, exports) {

module.exports = "<app-teacher-side-bar></app-teacher-side-bar>\r\n\r\n<form (submit)=\"onFormSubmit()\">\r\n\r\n  <div class=\"container\"> \r\n    <label><b>Username : </b></label>{{username}}\r\n\r\n    <br><br>\r\n    <label><b>Home Work :</b></label>\r\n    <input [(ngModel)]=\"homework\" name='from' #name1=\"ngModel\" width=\"10%\" type=\"text\" required >\r\n    <br>\r\n\r\n    <label><b>Due Date :</b></label>\r\n    <input [(ngModel)]=\"dueDate\" name='from' #name1=\"ngModel\" width=\"10%\" type=\"date\" required >\r\n    <br>\r\n    <button type=\"submit\">submit</button>\r\n  </div>\r\n</form>\r\n<flash-messages></flash-messages>\r\n"

/***/ }),

/***/ "./src/app/Teacher/add-homework/add-homework.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddHomeworkComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_validate_service__ = __webpack_require__("./src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_teacher_service_service__ = __webpack_require__("./src/app/services/teacher-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddHomeworkComponent = /** @class */ (function () {
    function AddHomeworkComponent(validate, router, messages, teacherService) {
        this.validate = validate;
        this.router = router;
        this.messages = messages;
        this.teacherService = teacherService;
    }
    AddHomeworkComponent.prototype.ngOnInit = function () {
        this.username = localStorage.getItem('username');
    };
    AddHomeworkComponent.prototype.onFormSubmit = function () {
        var _this = this;
        console.log();
        var temp = {
            'teacherName': this.username,
            'homeWork': this.homework,
            'dueDate': this.dueDate
        };
        console.log(temp);
        if (!this.validate.validatehomework(temp)) {
            console.log(temp);
            this.messages.show("Enter a valid homework details", {
                cssClass: 'alert-danger',
                timeOut: 5000
            });
        }
        else {
            console.log(temp);
            this.teacherService.addHW(temp).subscribe(function (data) {
                console.log('Trying to add homework');
                if (data.success) {
                    console.log('success');
                    _this.messages.show("Home work added", {
                        cssClass: 'alert-success',
                        timeOut: 5000
                    });
                    /*this.messages.show( 'Successfully Declared', {
                      cssClass: 'alert-success',
                      timeOut: 5000 });
                    // this.router.navigate(['teachers']);*/
                }
                else {
                    console.log(data);
                    console.log('Something went wrong');
                }
            });
        }
    };
    AddHomeworkComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-homework',
            template: __webpack_require__("./src/app/Teacher/add-homework/add-homework.component.html"),
            styles: [__webpack_require__("./src/app/Teacher/add-homework/add-homework.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_4__services_teacher_service_service__["a" /* TeacherServiceService */]])
    ], AddHomeworkComponent);
    return AddHomeworkComponent;
}());



/***/ }),

/***/ "./src/app/Teacher/ask-for-advance-payment/ask-for-advance-payment.component.css":
/***/ (function(module, exports) {

module.exports = "/* Full-width inputs */\r\ninput[type=text] {\r\n  width: 70%;\r\n  padding: 12px 20px;\r\n  margin: 8px 0;\r\n  display: inline-block;\r\n  border: 1px solid #ccc;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n}\r\ninput[type=date]{\r\n  width: 13%; /* half width */\r\n  padding: 12px 20px;\r\n  margin: 8px 0;\r\n  display: inline-block;\r\n  border: 1px solid #ccc;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n}\r\n.resizedText{\r\n  height: 200px;\r\n  width: 500px;\r\n}\r\n/* Set a style for all buttons */\r\nbutton {\r\n  background-color: #008CBA;\r\n  color: white;\r\n  padding: 14px 20px;\r\n  margin: 8px 0;\r\n  border: none;\r\n  cursor: pointer;\r\n  width: 80%;\r\n}\r\n/* Add a hover effect for buttons */\r\nbutton:hover {\r\n  opacity: 0.8;\r\n}\r\n/* Extra style for the cancel button (red) */\r\n.cancelbtn {\r\n  width: auto;\r\n  padding: 10px 18px;\r\n  background-color: #f44336;\r\n}\r\n/* Add padding to containers */\r\n.container {\r\n  padding: 16px;\r\n  margin-left: 18%;\r\n}\r\n/* The \"Forgot password\" text */\r\nspan.psw {\r\n  float: right;\r\n  padding-top: 16px;\r\n}\r\n/* Change styles for span and cancel button on extra small screens */\r\n@media screen and (max-width: 300px) {\r\n  span.psw {\r\n    display: block;\r\n    float: none;\r\n  }\r\n  .cancelbtn {\r\n    width: 100%;\r\n  }\r\n}\r\n.amount{\r\n  width:10%\r\n}\r\n.alert-danger{\r\n  color:#a94442;\r\n  background-color:#f2dede;\r\n  border-color:#ebccd1;\r\n  color:#843534;\r\n  width:50%\r\n\r\n}\r\n.alert{\r\n padding:15px;\r\n margin-bottom:20px;\r\n border:1px solid transparent;\r\n border-radius:4px;\r\n width:50%\r\n\r\n}\r\n.alert-danger hr{border-top-color:#e4b9c0;width:50%}\r\n"

/***/ }),

/***/ "./src/app/Teacher/ask-for-advance-payment/ask-for-advance-payment.component.html":
/***/ (function(module, exports) {

module.exports = "<app-teacher-side-bar></app-teacher-side-bar>\r\n<h1 style=\"margin-left: 500px\">Payment Details</h1>\r\n<form (submit)=\"onFormSubmit()\">\r\n\r\n  <div class=\"container\"> \r\n    <label><b>Username : </b></label>{{username}}\r\n\r\n    <br><br>\r\n    <label><b>Amount(in LKR)</b></label>\r\n    <input [(ngModel)]=\"amount\" name='amount' #name1=\"ngModel\" width=\"10%\" type=\"text\" required >\r\n    <br>\r\n\r\n    <label ><b>Reason</b></label>\r\n    <input class=\"resizedText\" [(ngModel)]=\"reason\" name='reason' #name2=\"ngModel\" type=\"text\" placeholder=\"Type here\" required>\r\n\r\n    <button type=\"submit\">submit</button>\r\n  </div>\r\n</form>\r\n<flash-messages></flash-messages>\r\n"

/***/ }),

/***/ "./src/app/Teacher/ask-for-advance-payment/ask-for-advance-payment.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AskForAdvancePaymentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__("./src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_adv_payment_form_service__ = __webpack_require__("./src/app/services/adv-payment-form.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AskForAdvancePaymentComponent = /** @class */ (function () {
    function AskForAdvancePaymentComponent(messages, validateService, advPaymentService) {
        this.messages = messages;
        this.validateService = validateService;
        this.advPaymentService = advPaymentService;
    }
    AskForAdvancePaymentComponent.prototype.ngOnInit = function () {
        this.username = localStorage.getItem('username');
    };
    AskForAdvancePaymentComponent.prototype.onFormSubmit = function () {
        var _this = this;
        var advPaymentForm = {
            username: this.username,
            amount: this.amount,
            reason: this.reason
        };
        //validating rupees
        if (!this.validateService.validateAmount(this.amount)) {
            this.messages.show('Enter valid amount', {
                cssClass: 'alert-danger',
                timeOut: 5000
            });
            return false;
        }
        // validating
        if (!this.validateService.validateAdvForm(advPaymentForm)) {
            this.messages.show('Enter Details', {
                cssClass: 'alert-danger',
                timeOut: 5000
            });
            return false;
        }
        // submitting
        this.advPaymentService.submitAdvPaymentForm(advPaymentForm).subscribe(function (data) {
            if (data.success) {
                _this.messages.show('Submited', {
                    cssClass: 'alert-success',
                    timeOut: 300
                });
                return true;
            }
            else {
                _this.messages.show(data.msg, {
                    cssClass: 'alert-danger',
                    timeOut: 5000
                });
                return false;
            }
        });
    };
    AskForAdvancePaymentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-ask-for-advance-payment',
            template: __webpack_require__("./src/app/Teacher/ask-for-advance-payment/ask-for-advance-payment.component.html"),
            styles: [__webpack_require__("./src/app/Teacher/ask-for-advance-payment/ask-for-advance-payment.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_3__services_adv_payment_form_service__["a" /* AdvPaymentFormService */]])
    ], AskForAdvancePaymentComponent);
    return AskForAdvancePaymentComponent;
}());



/***/ }),

/***/ "./src/app/Teacher/display-student/display-student.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n#customers {\r\n    font-family: \"Trebuchet MS\", Arial, Helvetica, sans-serif;\r\n    border-collapse: collapse;\r\n    width: 70%;\r\n    margin-left: 18%; \r\n}\r\n\r\n#customers td, #customers th {\r\n    border: 1px solid #ddd;\r\n    padding: 8px;\r\n}\r\n\r\n#customers tr:nth-child(even){background-color: #f2f2f2;}\r\n\r\n#customers tr:hover {background-color: #ddd;}\r\n\r\n#customers th {\r\n    padding-top: 12px;\r\n    padding-bottom: 12px;\r\n    text-align: left;\r\n    background-color:rgb(0, 71, 95);\r\n    color: white;\r\n}"

/***/ }),

/***/ "./src/app/Teacher/display-student/display-student.component.html":
/***/ (function(module, exports) {

module.exports = "<app-teacher-side-bar></app-teacher-side-bar>\r\n\r\n<!--\r\n<li *ngFor=\"let student of studentList\">\r\n  {{student.username}}\r\n</li>\r\n-->\r\n<h1 style=\"margin-left: 600px\">Student Details</h1>\r\n<table id=\"customers\">\r\n  <tr>\r\n    <th>Name</th> \r\n    <th>Username</th>\r\n    <th>Address</th>\r\n    <th>Phone Number</th>\r\n  </tr>\r\n  <tr *ngFor=\"let student of studentList\">\r\n      <td>{{student.firstName}} {{student.middleName}} {{student.lastName}}</td>\r\n    <td>{{student.username}}</td>\r\n    <td>{{student.address}}</td>\r\n    <td>{{student.mobileNo}}</td>\r\n  </tr>\r\n\r\n</table>\r\n\r\n"

/***/ }),

/***/ "./src/app/Teacher/display-student/display-student.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DisplayStudentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_student_info_service__ = __webpack_require__("./src/app/services/student-info.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DisplayStudentComponent = /** @class */ (function () {
    function DisplayStudentComponent(infoService) {
        this.infoService = infoService;
    }
    DisplayStudentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.infoService.getInfo().subscribe(function (data) {
            _this.studentList = data;
            console.log(data);
        }, function (error) {
            console.log(error);
            return false;
        });
    };
    DisplayStudentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-display-student',
            template: __webpack_require__("./src/app/Teacher/display-student/display-student.component.html"),
            styles: [__webpack_require__("./src/app/Teacher/display-student/display-student.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_student_info_service__["a" /* StudentInfoService */]])
    ], DisplayStudentComponent);
    return DisplayStudentComponent;
}());



/***/ }),

/***/ "./src/app/Teacher/leave-application/leave-application.component.css":
/***/ (function(module, exports) {

module.exports = "/* Full-width inputs */\r\ninput[type=text] {\r\n  width: 70%;\r\n  padding: 12px 20px;\r\n  margin: 8px 0;\r\n  display: inline-block;\r\n  border: 1px solid #ccc;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n}\r\ninput[type=date]{\r\n  width: 17%; /* half width */\r\n  padding: 12px 20px;\r\n  margin: 8px 0;\r\n  display: inline-block;\r\n  border: 1px solid #ccc;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n}\r\n.resizedText{\r\n  height: 200px;\r\n  width: 500px;\r\n}\r\n/* Set a style for all buttons */\r\nbutton {\r\n  background-color: #008CBA;\r\n  color: white;\r\n  padding: 14px 20px;\r\n  margin: 8px 0;\r\n  border: none;\r\n  cursor: pointer;\r\n  width: 80%;\r\n}\r\n/* Add a hover effect for buttons */\r\nbutton:hover {\r\n  opacity: 0.8;\r\n}\r\n/* Extra style for the cancel button (red) */\r\n.cancelbtn {\r\n  width: auto;\r\n  padding: 10px 18px;\r\n  background-color: #f44336;\r\n}\r\n/* Add padding to containers */\r\n.container {\r\n  padding: 16px;\r\n  margin-left: 18%;\r\n}\r\n/* The \"Forgot password\" text */\r\nspan.psw {\r\n  float: right;\r\n  padding-top: 16px;\r\n}\r\n/* Change styles for span and cancel button on extra small screens */\r\n@media screen and (max-width: 300px) {\r\n  span.psw {\r\n    display: block;\r\n    float: none;\r\n  }\r\n  .cancelbtn {\r\n    width: 100%;\r\n  }\r\n}\r\n.alert-danger{\r\n  color:#a94442;\r\n  background-color:#f2dede;\r\n  border-color:#ebccd1;\r\n  color:#843534;\r\n  width:50%\r\n\r\n}\r\n.alert{\r\n padding:15px;\r\n margin-bottom:20px;\r\n border:1px solid transparent;\r\n border-radius:4px;\r\n width:50%\r\n\r\n}\r\n.alert-danger hr{border-top-color:#e4b9c0;width:50%}\r\n"

/***/ }),

/***/ "./src/app/Teacher/leave-application/leave-application.component.html":
/***/ (function(module, exports) {

module.exports = "<app-teacher-side-bar></app-teacher-side-bar>\r\n<h1 style=\"margin-left: 500px\">Leave Application Form</h1>\r\n<form (submit)=\"onFormSubmit()\">\r\n  <div class=\"container\"> \r\n    <label><b>Username :</b></label> {{username}}\r\n   <!-- <input [(ngModel)]=\"username\" name='username'type=\"text\" placeholder=\"Username\" required > -->\r\n    <br><br>\r\n\r\n    <label><b>Starting Date</b></label>\r\n    <input [(ngModel)]=\"sdate\" name='sdate'type=\"date\" required>\r\n\r\n    <label><b>Ending Date</b></label>\r\n    <input [(ngModel)]=\"edate\" name='edate'type=\"date\" required>\r\n    <br><br>\r\n\r\n    <label ><b>Reason</b></label>\r\n    <input class=\"resizedText\" [(ngModel)]=\"reason\" name='reason'type=\"text\" placeholder=\"Type here\" required>\r\n    \r\n    \r\n    <button type=\"submit\">submit</button>\r\n  </div>\r\n</form>\r\n<flash-messages></flash-messages>\r\n"

/***/ }),

/***/ "./src/app/Teacher/leave-application/leave-application.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeaveApplicationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__("./src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_leave_app_service_service__ = __webpack_require__("./src/app/services/leave-app-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LeaveApplicationComponent = /** @class */ (function () {
    function LeaveApplicationComponent(validateService, messages, leaveAppService) {
        this.validateService = validateService;
        this.messages = messages;
        this.leaveAppService = leaveAppService;
    }
    LeaveApplicationComponent.prototype.ngOnInit = function () {
        this.username = localStorage.getItem('username');
    };
    LeaveApplicationComponent.prototype.onFormSubmit = function () {
        var _this = this;
        var leaveApplication = {
            username: this.username,
            sdate: this.sdate,
            edate: this.edate,
            reason: this.reason,
            accept: false
        };
        if (!this.validateService.validateLeaveForm(leaveApplication)) {
            this.messages.show('Enter Details', {
                cssClass: 'alert-danger',
                timeOut: 5000
            });
            // console.log('date not valid');
            return false;
        }
        if (!this.validateService.validateDates(leaveApplication.sdate, leaveApplication.edate)) {
            this.messages.show('Dates are not valid', {
                cssClass: 'alert-danger',
                timeOut: 5000
            });
            return false;
        }
        // console.log(leaveApplication);
        console.log('date validated');
        this.leaveAppService.submitLeaveApplication(leaveApplication).subscribe(function (data) {
            // console.log('Trying to register');
            if (data.success) {
                // console.log(data.msg);
                _this.messages.show('Submited', {
                    cssClass: 'alert-success',
                    timeOut: 300
                });
                // this.router.navigate(['teachers']);
            }
            else {
                _this.messages.show(data.msg, {
                    cssClass: 'alert-danger',
                    timeOut: 5000
                });
            }
        });
    };
    LeaveApplicationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-leave-application',
            template: __webpack_require__("./src/app/Teacher/leave-application/leave-application.component.html"),
            styles: [__webpack_require__("./src/app/Teacher/leave-application/leave-application.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_3__services_leave_app_service_service__["a" /* LeaveAppServiceService */]])
    ], LeaveApplicationComponent);
    return LeaveApplicationComponent;
}());



/***/ }),

/***/ "./src/app/Teacher/mock-teacher.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return teacher; });
var teacher = [
    { name: 'ms surangika', id: 1, key: '1' },
    { name: 'mr chandana', id: 2, key: '2' },
    { name: 'mr gihan', id: 3, key: '3' },
    { name: 'ms visaka', id: 4, key: '4' },
    { name: 'mr haritha', id: 5, key: '5' }
];


/***/ }),

/***/ "./src/app/Teacher/request-for-maintenance/request-for-maintenance.component.css":
/***/ (function(module, exports) {

module.exports = "/* Full-width inputs */\r\ninput[type=text] {\r\n  width: 70%;\r\n  padding: 12px 20px;\r\n  margin: 8px 0;\r\n  display: inline-block;\r\n  border: 1px solid #ccc;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n}\r\ninput[type=date]{\r\n  width: 13%; /* half width */\r\n  padding: 12px 20px;\r\n  margin: 8px 0;\r\n  display: inline-block;\r\n  border: 1px solid #ccc;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n}\r\n.resizedText{\r\n  height: 200px;\r\n  width: 500px;\r\n}\r\n/* Set a style for all buttons */\r\nbutton {\r\n  background-color: #008CBA;\r\n  color: white;\r\n  padding: 14px 20px;\r\n  margin: 8px 0;\r\n  border: none;\r\n  cursor: pointer;\r\n  width: 80%;\r\n}\r\n/* Add a hover effect for buttons */\r\nbutton:hover {\r\n  opacity: 0.8;\r\n}\r\n/* Extra style for the cancel button (red) */\r\n.cancelbtn {\r\n  width: auto;\r\n  padding: 10px 18px;\r\n  background-color: #f44336;\r\n}\r\n/* Add padding to containers */\r\n.container {\r\n  padding: 16px;\r\n  margin-left: 18%;\r\n}\r\n/* The \"Forgot password\" text */\r\nspan.psw {\r\n  float: right;\r\n  padding-top: 16px;\r\n}\r\n/* Change styles for span and cancel button on extra small screens */\r\n@media screen and (max-width: 300px) {\r\n  span.psw {\r\n    display: block;\r\n    float: none;\r\n  }\r\n  .cancelbtn {\r\n    width: 100%;\r\n  }\r\n}\r\n.alert-danger{\r\n  color:#a94442;\r\n  background-color:#f2dede;\r\n  border-color:#ebccd1;\r\n  color:#843534;\r\n  width:50%\r\n\r\n}\r\n.alert{\r\n padding:15px;\r\n margin-bottom:20px;\r\n border:1px solid transparent;\r\n border-radius:4px;\r\n width:50%\r\n\r\n}\r\n.alert-danger hr{border-top-color:#e4b9c0;width:50%}\r\n"

/***/ }),

/***/ "./src/app/Teacher/request-for-maintenance/request-for-maintenance.component.html":
/***/ (function(module, exports) {

module.exports = "<app-teacher-side-bar></app-teacher-side-bar>\r\n<form (submit)=\"onFormSubmit()\">\r\n\r\n  <div class=\"container\"> \r\n    <label><b>Username : </b></label>{{username}}\r\n\r\n    <br><br>\r\n    <label><b>Brief Description</b></label>\r\n    <input [(ngModel)]=\"briefDescription\" name='briefDescription' #name1=\"ngModel\" width=\"10%\" type=\"text\" required >\r\n    <br>\r\n\r\n\r\n    <button type=\"submit\">submit</button>\r\n  </div>\r\n</form>\r\n<flash-messages></flash-messages>"

/***/ }),

/***/ "./src/app/Teacher/request-for-maintenance/request-for-maintenance.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestForMaintenanceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__("./src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_maintenance_detail_service__ = __webpack_require__("./src/app/services/maintenance-detail.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RequestForMaintenanceComponent = /** @class */ (function () {
    function RequestForMaintenanceComponent(validateService, messages, maintenanceDetailService) {
        this.validateService = validateService;
        this.messages = messages;
        this.maintenanceDetailService = maintenanceDetailService;
    }
    RequestForMaintenanceComponent.prototype.ngOnInit = function () {
        this.username = localStorage.getItem("username");
    };
    RequestForMaintenanceComponent.prototype.onFormSubmit = function () {
        var _this = this;
        console.log(this.briefDescription);
        var application = {
            username: this.username,
            briefDescription: this.briefDescription
        };
        if (!this.validateService.validateMaintananceForm(application)) {
            this.messages.show('Enter Details', {
                cssClass: 'alert-danger',
                timeOut: 5000
            });
            // console.log('date not valid');
            return false;
        }
        //console.log('application validated');
        this.maintenanceDetailService.submitMaintenanceApplication(application).subscribe(function (data) {
            // console.log('Trying to register');
            if (data.success) {
                // console.log(data.msg);
                _this.messages.show('Submited', {
                    cssClass: 'alert-success',
                    timeOut: 300
                });
                // this.router.navigate(['teachers']);
            }
            else {
                _this.messages.show(data.msg, {
                    cssClass: 'alert-danger',
                    timeOut: 5000
                });
            }
        });
    };
    RequestForMaintenanceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-request-for-maintenance',
            template: __webpack_require__("./src/app/Teacher/request-for-maintenance/request-for-maintenance.component.html"),
            styles: [__webpack_require__("./src/app/Teacher/request-for-maintenance/request-for-maintenance.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_3__services_maintenance_detail_service__["a" /* MaintenanceDetailService */]])
    ], RequestForMaintenanceComponent);
    return RequestForMaintenanceComponent;
}());



/***/ }),

/***/ "./src/app/Teacher/salary-sheet/salary-sheet.component.css":
/***/ (function(module, exports) {

module.exports = "table {\r\n    margin-left: 18%;\r\n    color: #333;\r\n    font-family: Helvetica, Arial, sans-serif;\r\n    width: 640px;\r\n    border-collapse:\r\n    collapse; border-spacing: 0;\r\n}\r\n\r\ntd, th {\r\n    border: 1px solid transparent; /* No more visible border */\r\n    height: 30px;\r\n    -webkit-transition: all 0.3s;\r\n    transition: all 0.3s;  /* Simple transition for hover effect */\r\n}\r\n\r\nth {\r\n    background: #DFDFDF;  /* Darken header a bit */\r\n    font-weight: bold;\r\n}\r\n\r\ntd {\r\n    background: #FAFAFA;\r\n    text-align: center;\r\n}\r\n\r\n/* Cells in even rows (2,4,6...) are one color */\r\n\r\ntr:nth-child(even) td { background: #F1F1F1; }\r\n\r\n/* Cells in odd rows (1,3,5...) are another (excludes header cells)  */\r\n\r\ntr:nth-child(odd) td { background: #FEFEFE; }\r\n\r\ntr td:hover { background: #666; color: #FFF; }\r\n\r\n/* Hover cell effect! */\r\n"

/***/ }),

/***/ "./src/app/Teacher/salary-sheet/salary-sheet.component.html":
/***/ (function(module, exports) {

module.exports = "<app-teacher-side-bar></app-teacher-side-bar>\r\n<h2>SALARY SHEET</h2>\r\n<h2>{{username}}</h2>\r\n<table>\r\n  <tr>\r\n    <th>Month</th>\r\n    <th>Days</th>\r\n    <th>Leaves</th>\r\n    <th>Amount</th>\r\n    <th>Balance</th>\r\n  </tr>\r\n  <tr>\r\n    <td>{{details.Month}}</td>\r\n    <td>{{details.Days}}</td>\r\n    <td>{{details.leaves}}</td>\r\n    <td>{{details.Amount}}</td>\r\n    <td>{{details.Balance}}</td>\r\n  </tr>\r\n  </table>\r\n"

/***/ }),

/***/ "./src/app/Teacher/salary-sheet/salary-sheet.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SalarySheetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_transfer_salary_details_service__ = __webpack_require__("./src/app/services/transfer-salary-details.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SalarySheetComponent = /** @class */ (function () {
    function SalarySheetComponent(salaryDetail) {
        this.salaryDetail = salaryDetail;
    }
    SalarySheetComponent.prototype.ngOnInit = function () {
        this.getDetails();
    };
    SalarySheetComponent.prototype.getDetails = function () {
        var _this = this;
        this.username = localStorage.getItem('username');
        console.log(this.username);
        console.log('front1');
        this.salaryDetail.getInfo(this.username).subscribe(function (data) {
            _this.details = data;
            console.log('front2');
            console.log(data);
        }, function (error) { console.log(error); return false; });
    };
    SalarySheetComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-salary-sheet',
            template: __webpack_require__("./src/app/Teacher/salary-sheet/salary-sheet.component.html"),
            styles: [__webpack_require__("./src/app/Teacher/salary-sheet/salary-sheet.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_transfer_salary_details_service__["a" /* TransferSalaryDetailsService */]])
    ], SalarySheetComponent);
    return SalarySheetComponent;
}());



/***/ }),

/***/ "./src/app/Teacher/teacher-side-bar/teacher-side-bar.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n/* The sidebar menu */\r\n.teacher-side-bar {\r\n  height: 100%; /* Full-height: remove this if you want \"auto\" height */\r\n  width: 15%; /* Set the width of the sidebar */\r\n  position : fixed; /* Fixed Sidebar (stay in place on scroll) */\r\n  left: 40px;\r\n  top:48px;\r\n  background-color: black; /* Black */\r\n  overflow-x: hidden; /* Disable horizontal scroll */\r\n\r\n}\r\n/* The navigation menu links */\r\n.teacher-side-bar li {\r\n  padding: 6px 8px 6px 16px;\r\n  text-decoration: none;\r\n  font-size: 17px;\r\n  color: white;\r\n}\r\n/* When you mouse over the navigation links, change their color */\r\n.teacher-side-bar li:hover {\r\n  color: white;\r\n  background-color:  rgb(175, 113, 233);\r\n}\r\n/* Style page content */\r\n.main {\r\n  margin-left: 160px; /* Same as the width of the sidebar */\r\n  padding: 0px 10px;\r\n}\r\n/* On smaller screens, where height is less than 450px, change the style of the sidebar (less padding and a smaller font size) */\r\n@media screen and (max-height: 450px) {\r\n  .teacher-side-bar {padding-top: 15px;}\r\n  .teacher-side-bar a {font-size: 18px;}\r\n}\r\n"

/***/ }),

/***/ "./src/app/Teacher/teacher-side-bar/teacher-side-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<app-nav-bar></app-nav-bar>\r\n<div class=\"teacher-side-bar\">\r\n  <ul>\r\n  <li routerLinkActive='active' routerLink=\"/leaveApplication\" [routerLinkActiveOptions]=\"{exact:true}\">Apply for a leave</li>\r\n  <li routerLinkActive='active' routerLink=\"/salarySheet\" [routerLinkActiveOptions]=\"{exact:true}\">Check salary</li>\r\n  <li routerLinkActive='active' routerLink=\"/studentDetails\" [routerLinkActiveOptions]=\"{exact:true}\">Student details</li>\r\n  <li routerLinkActive='active' routerLink=\"/reqMantenance\" [routerLinkActiveOptions]=\"{exact:true}\">Maintenance</li>\r\n  <li routerLinkActive='active' routerLink=\"/addHomework\" [routerLinkActiveOptions]=\"{exact:true}\">Inform Homework</li>\r\n  </ul>\r\n</div>\r\n\r\n<!-- Page content -->\r\n<div class=\"main\">\r\n  ...\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/Teacher/teacher-side-bar/teacher-side-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeacherSideBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TeacherSideBarComponent = /** @class */ (function () {
    function TeacherSideBarComponent() {
    }
    TeacherSideBarComponent.prototype.ngOnInit = function () {
    };
    TeacherSideBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-teacher-side-bar',
            template: __webpack_require__("./src/app/Teacher/teacher-side-bar/teacher-side-bar.component.html"),
            styles: [__webpack_require__("./src/app/Teacher/teacher-side-bar/teacher-side-bar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TeacherSideBarComponent);
    return TeacherSideBarComponent;
}());



/***/ }),

/***/ "./src/app/Teacher/teacher/teacher.component.css":
/***/ (function(module, exports) {

module.exports = "/* HeroesComponent's private CSS styles */\r\n.selected {\r\n  background-color: #CFD8DC !important;\r\n  color: white;\r\n}\r\n.teachers {\r\n  margin: 0 0 2em 0;\r\n  list-style-type: none;\r\n  padding: 0;\r\n  width: 15em;\r\n}\r\n.teachers li {\r\n  cursor: pointer;\r\n  position: relative;\r\n  left: 0;\r\n  background-color: #EEE;\r\n  margin: .5em;\r\n  padding: .3em 0;\r\n  height: 1.6em;\r\n  border-radius: 4px;\r\n}\r\n.teachers li.selected:hover {\r\n  background-color: #BBD8DC !important;\r\n  color: white;\r\n}\r\n.teachers li:hover {\r\n  color: #607D8B;\r\n  background-color: #DDD;\r\n  left: .1em;\r\n}\r\n.teachers .text {\r\n  position: relative;\r\n  top: -3px;\r\n}\r\n.teachers .badge {\r\n  display: inline-block;\r\n  font-size: small;\r\n  color: white;\r\n  padding: 0.8em 0.7em 0 0.7em;\r\n  background-color: #607D8B;\r\n  line-height: 1em;\r\n  position: relative;\r\n  left: -1px;\r\n  top: -4px;\r\n  height: 1.8em;\r\n  margin-right: .8em;\r\n  border-radius: 4px 0 0 4px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/Teacher/teacher/teacher.component.html":
/***/ (function(module, exports) {

module.exports = "<app-teacher-side-bar></app-teacher-side-bar>\r\n<app-profile></app-profile>"

/***/ }),

/***/ "./src/app/Teacher/teacher/teacher.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeacherComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TeacherComponent = /** @class */ (function () {
    function TeacherComponent() {
    }
    TeacherComponent.prototype.ngOnInit = function () {
    };
    TeacherComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-teacher',
            template: __webpack_require__("./src/app/Teacher/teacher/teacher.component.html"),
            styles: [__webpack_require__("./src/app/Teacher/teacher/teacher.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TeacherComponent);
    return TeacherComponent;
}());



/***/ }),

/***/ "./src/app/Teacher/teacher/teacher.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeacherService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_teacher__ = __webpack_require__("./src/app/Teacher/mock-teacher.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/of.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TeacherService = /** @class */ (function () {
    function TeacherService() {
    }
    TeacherService.prototype.getTeachers = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])(__WEBPACK_IMPORTED_MODULE_1__mock_teacher__["a" /* teacher */]);
    };
    TeacherService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], TeacherService);
    return TeacherService;
}());



/***/ }),

/***/ "./src/app/account-login/account-login.component.css":
/***/ (function(module, exports) {

module.exports = ".login {\r\n  margin: 6% 36.6% 0 33% ; /*top right bottom left*/\r\n  width: 500px;\r\n  border: 3px solid #008CBA;\r\n  border-radius: 4%;\r\n  padding: 20px;\r\n  font-size:20px;\r\n}\r\n\r\n\r\n/* Full-width inputs */\r\n\r\n\r\ninput[type=text], input[type=password] {\r\n  width: 100%;\r\n  padding: 12px 20px;\r\n  margin: 8px 0;\r\n  display: inline-block;\r\n  border: 1px solid #ccc;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  font-size:16px;\r\n}\r\n\r\n\r\n/* Set a style for all buttons */\r\n\r\n\r\nbutton {\r\n  background-color: #008CBA;\r\n  color: white;\r\n  padding: 14px 20px;\r\n  margin: 8px 0;\r\n  border: none;\r\n  cursor: pointer;\r\n  width: 100%;\r\n  font-size:16px;\r\n}\r\n\r\n\r\n/* Add a hover effect for buttons */\r\n\r\n\r\nbutton:hover {\r\n  opacity: 0.8;\r\n}"

/***/ }),

/***/ "./src/app/account-login/account-login.component.html":
/***/ (function(module, exports) {

module.exports = "<br><br><br>\r\n<form (submit)=\"onLoginSubmit()\">\r\n<div class=\"login\">\r\n    <div class=\"container\">\r\n      <label><b>Username</b></label>\r\n      <input [(ngModel)]=\"username\" name=\"username\" type=\"text\" placeholder=\"Username\" required>\r\n\r\n      <label><b>Password</b></label>\r\n      <input [(ngModel)]=\"password\" name=\"password\" type=\"password\" placeholder=\"Password\"  required>\r\n\r\n      <button type=\"submit\">Login</button>\r\n      <label>\r\n        <input type=\"checkbox\" checked=\"checked\" name=\"remember\"> Remember me\r\n      </label>\r\n    </div>\r\n</div>\r\n</form>\r\n<flash-messages></flash-messages>\r\n\r\n"

/***/ }),

/***/ "./src/app/account-login/account-login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountLoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__ = __webpack_require__("./src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_validate_service__ = __webpack_require__("./src/app/services/validate.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AccountLoginComponent = /** @class */ (function () {
    function AccountLoginComponent(authenticationService, router, messages, validate) {
        this.authenticationService = authenticationService;
        this.router = router;
        this.messages = messages;
        this.validate = validate;
    }
    AccountLoginComponent.prototype.ngOnInit = function () {
    };
    // on click
    AccountLoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        if (this.validate.validateSignIn(user)) {
            this.messages.show('Enter Details', {
                cssClass: 'alert-danger',
                timeOut: 5000
            });
            return false;
        }
        this.authenticationService.authenticateUser(user).subscribe(function (data) {
            // console.log(data);
            if (data.success) {
                // console.log(data.token);
                _this.authenticationService.storeUserdata(data.token, data.user);
                if (data.user.accountType === 'Admin') {
                    _this.router.navigate(['admin']);
                    return true;
                }
                if (data.user.accountType === 'Teacher') {
                    _this.router.navigate(['teachers']);
                    return true;
                }
                if (data.user.accountType === 'parent' || data.user.accountType === 'Parent') {
                    _this.router.navigate(['parent']);
                    return true;
                }
            }
            else {
                _this.messages.show(data.msg, {
                    cssClass: 'alert-danger',
                    timeOut: 5000
                });
            }
        });
    };
    AccountLoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-account-login',
            template: __webpack_require__("./src/app/account-login/account-login.component.html"),
            styles: [__webpack_require__("./src/app/account-login/account-login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_4__services_validate_service__["a" /* ValidateService */]])
    ], AccountLoginComponent);
    return AccountLoginComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "  h1.first-page {\r\n    color:rgb(0, 0, 0);\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-size: 50px;\r\n\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-nav-bar></app-nav-bar>\r\n<div class=\"container\">\r\n    \r\n    <router-outlet></router-outlet>\r\n    \r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Teacher_teacher_teacher_component__ = __webpack_require__("./src/app/Teacher/teacher/teacher.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Teacher_teacher_teacher_service__ = __webpack_require__("./src/app/Teacher/teacher/teacher.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__routing_app_routing_module__ = __webpack_require__("./src/app/routing/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_Teacher_teacher_side_bar_teacher_side_bar_component__ = __webpack_require__("./src/app/Teacher/teacher-side-bar/teacher-side-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__account_login_account_login_component__ = __webpack_require__("./src/app/account-login/account-login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__nav_bar_nav_bar_component__ = __webpack_require__("./src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_Admin_account_register_account_register_component__ = __webpack_require__("./src/app/Admin/account-register/account-register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_validate_service__ = __webpack_require__("./src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_authentication_service__ = __webpack_require__("./src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__profile_profile_component__ = __webpack_require__("./src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_guard_service__ = __webpack_require__("./src/app/services/guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__app_Teacher_leave_application_leave_application_component__ = __webpack_require__("./src/app/Teacher/leave-application/leave-application.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_leave_app_service_service__ = __webpack_require__("./src/app/services/leave-app-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__Admin_admin_side_bar_admin_side_bar_component__ = __webpack_require__("./src/app/Admin/admin-side-bar/admin-side-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__Admin_admin_admin_component__ = __webpack_require__("./src/app/Admin/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__Admin_user_register_user_register_component__ = __webpack_require__("./src/app/Admin/user-register/user-register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__Teacher_request_for_maintenance_request_for_maintenance_component__ = __webpack_require__("./src/app/Teacher/request-for-maintenance/request-for-maintenance.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__Teacher_ask_for_advance_payment_ask_for_advance_payment_component__ = __webpack_require__("./src/app/Teacher/ask-for-advance-payment/ask-for-advance-payment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__Admin_declareholiday_declareholiday_component__ = __webpack_require__("./src/app/Admin/declareholiday/declareholiday.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__Admin_approve_leave_application_approve_leave_application_component__ = __webpack_require__("./src/app/Admin/approve-leave-application/approve-leave-application.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__services_admin_link_guard_service__ = __webpack_require__("./src/app/services/admin-link-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__services_teacher_link_guard_service__ = __webpack_require__("./src/app/services/teacher-link-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__services_student_link_guard_service__ = __webpack_require__("./src/app/services/student-link-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__services_adv_payment_form_service__ = __webpack_require__("./src/app/services/adv-payment-form.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__services_student_info_service__ = __webpack_require__("./src/app/services/student-info.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__Teacher_display_student_display_student_component__ = __webpack_require__("./src/app/Teacher/display-student/display-student.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__services_transfer_salary_details_service__ = __webpack_require__("./src/app/services/transfer-salary-details.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__services_maintenance_detail_service__ = __webpack_require__("./src/app/services/maintenance-detail.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__Teacher_salary_sheet_salary_sheet_component__ = __webpack_require__("./src/app/Teacher/salary-sheet/salary-sheet.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__services_declaare_holiday_service__ = __webpack_require__("./src/app/services/declaare-holiday.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__Admin_get_student_get_student_component__ = __webpack_require__("./src/app/Admin/get-student/get-student.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__services_parent_services_service__ = __webpack_require__("./src/app/services/parent-services.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__Parent_parent_side_bar_parent_side_bar_component__ = __webpack_require__("./src/app/Parent/parent-side-bar/parent-side-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__Parent_parent_parent_component__ = __webpack_require__("./src/app/Parent/parent/parent.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__Parent_apply_transport_apply_transport_component__ = __webpack_require__("./src/app/Parent/apply-transport/apply-transport.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__Parent_viwe_teacher_viwe_teacher_component__ = __webpack_require__("./src/app/Parent/viwe-teacher/viwe-teacher.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__Parent_check_homework_check_homework_component__ = __webpack_require__("./src/app/Parent/check-homework/check-homework.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__Teacher_add_homework_add_homework_component__ = __webpack_require__("./src/app/Teacher/add-homework/add-homework.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__services_teacher_service_service__ = __webpack_require__("./src/app/services/teacher-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// first commit












































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__Teacher_teacher_teacher_component__["a" /* TeacherComponent */],
                __WEBPACK_IMPORTED_MODULE_7__app_Teacher_teacher_side_bar_teacher_side_bar_component__["a" /* TeacherSideBarComponent */],
                __WEBPACK_IMPORTED_MODULE_8__account_login_account_login_component__["a" /* AccountLoginComponent */],
                __WEBPACK_IMPORTED_MODULE_9__nav_bar_nav_bar_component__["a" /* NavBarComponent */],
                __WEBPACK_IMPORTED_MODULE_10__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_11__app_Admin_account_register_account_register_component__["a" /* AccountRegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_16__profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_18__app_Teacher_leave_application_leave_application_component__["a" /* LeaveApplicationComponent */],
                __WEBPACK_IMPORTED_MODULE_20__Admin_admin_side_bar_admin_side_bar_component__["a" /* AdminSideBarComponent */],
                __WEBPACK_IMPORTED_MODULE_21__Admin_admin_admin_component__["a" /* AdminComponent */],
                __WEBPACK_IMPORTED_MODULE_22__Admin_user_register_user_register_component__["a" /* UserRegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_23__Teacher_request_for_maintenance_request_for_maintenance_component__["a" /* RequestForMaintenanceComponent */],
                __WEBPACK_IMPORTED_MODULE_24__Teacher_ask_for_advance_payment_ask_for_advance_payment_component__["a" /* AskForAdvancePaymentComponent */],
                __WEBPACK_IMPORTED_MODULE_25__Admin_declareholiday_declareholiday_component__["a" /* DeclareholidayComponent */],
                __WEBPACK_IMPORTED_MODULE_26__Admin_approve_leave_application_approve_leave_application_component__["a" /* ApproveLeaveApplicationComponent */],
                __WEBPACK_IMPORTED_MODULE_32__Teacher_display_student_display_student_component__["a" /* DisplayStudentComponent */],
                __WEBPACK_IMPORTED_MODULE_35__Teacher_salary_sheet_salary_sheet_component__["a" /* SalarySheetComponent */],
                // tslint:disable-next-line:max-line-length
                __WEBPACK_IMPORTED_MODULE_37__Admin_get_student_get_student_component__["a" /* GetStudentComponent */], __WEBPACK_IMPORTED_MODULE_39__Parent_parent_side_bar_parent_side_bar_component__["a" /* ParentSideBarComponent */], __WEBPACK_IMPORTED_MODULE_40__Parent_parent_parent_component__["a" /* ParentComponent */], __WEBPACK_IMPORTED_MODULE_41__Parent_apply_transport_apply_transport_component__["a" /* ApplyTransportComponent */], __WEBPACK_IMPORTED_MODULE_42__Parent_viwe_teacher_viwe_teacher_component__["a" /* ViweTeacherComponent */], __WEBPACK_IMPORTED_MODULE_43__Parent_check_homework_check_homework_component__["a" /* CheckHomeworkComponent */], __WEBPACK_IMPORTED_MODULE_44__Teacher_add_homework_add_homework_component__["a" /* AddHomeworkComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__routing_app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_15_angular2_flash_messages__["FlashMessagesModule"].forRoot(),
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_5__Teacher_teacher_teacher_service__["a" /* TeacherService */], __WEBPACK_IMPORTED_MODULE_12__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_13__services_authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_17__services_guard_service__["a" /* GuardService */], __WEBPACK_IMPORTED_MODULE_19__services_leave_app_service_service__["a" /* LeaveAppServiceService */], __WEBPACK_IMPORTED_MODULE_27__services_admin_link_guard_service__["a" /* AdminLinkGuardService */], __WEBPACK_IMPORTED_MODULE_28__services_teacher_link_guard_service__["a" /* TeacherLinkGuardService */], __WEBPACK_IMPORTED_MODULE_29__services_student_link_guard_service__["a" /* StudentLinkGuardService */], __WEBPACK_IMPORTED_MODULE_30__services_adv_payment_form_service__["a" /* AdvPaymentFormService */], __WEBPACK_IMPORTED_MODULE_31__services_student_info_service__["a" /* StudentInfoService */], __WEBPACK_IMPORTED_MODULE_33__services_transfer_salary_details_service__["a" /* TransferSalaryDetailsService */], __WEBPACK_IMPORTED_MODULE_34__services_maintenance_detail_service__["a" /* MaintenanceDetailService */], __WEBPACK_IMPORTED_MODULE_36__services_declaare_holiday_service__["a" /* DeclaareHolidayService */], __WEBPACK_IMPORTED_MODULE_38__services_parent_services_service__["a" /* ParentServicesService */], __WEBPACK_IMPORTED_MODULE_45__services_teacher_service_service__["a" /* TeacherServiceService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ".home-bg{\r\n    background-image:url('homebg.bf45b980230b25d24679.jpg');\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n\r\n.center {\r\n    margin: auto;\r\n    width: 15%;\r\n    color: black;\r\n}\r\n\r\n.button {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n    -ms-transform: translate(-50%, -50%);\r\n    background-color: #0d79df;\r\n    color: rgb(250, 249, 249);\r\n    font-size: 18px;\r\n    padding: 16px 30px;\r\n    border: none;\r\n    cursor: pointer;\r\n    border-radius: 5px;\r\n    text-align: center;\r\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"home-bg\">\r\n    <br><br><br><br><br><br><br><br>\r\n    <h1 class=\"center\">Welcome</h1>\r\n    <a routerLink=\"/accountLogIn\" class=\"button\">Sign-In</a>\r\n    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () { };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.css":
/***/ (function(module, exports) {

module.exports = "ul {\r\n  list-style-type: none;\r\n  margin: 0;\r\n  padding: 0;\r\n  overflow: hidden;\r\n  background-color: rgb(0, 71, 95);\r\n  position: fixed;\r\n  top: 0;\r\n  width: 100%;\r\n}\r\n\r\nli {\r\n  float: left;\r\n}\r\n\r\nli a {\r\n  float: left;\r\n  color: #f2f2f2;\r\n  text-align: center;\r\n  padding: 15px 16px;\r\n  text-decoration: none;\r\n  font-size: 17px;\r\n}\r\n\r\n.topnav {\r\n    left: 0%;\r\n    overflow: hidden;\r\n  }\r\n\r\n/* Style the links inside the navigation bar */\r\n\r\n.topnav a {\r\n    float: left;\r\n    color: #f2f2f2;\r\n    text-align: center;\r\n    padding: 15px 16px;\r\n    text-decoration: none;\r\n    font-size: 17px;\r\n  }\r\n\r\n/* Change the color of links on hover */\r\n\r\nli a:hover {\r\n    background-color: rgb(115, 184, 209);\r\n    color: black;\r\n  }\r\n\r\n/* Add a color to the active/current link */\r\n\r\nli a.active {\r\n    background-color: #008CBA;\r\n    color: white;\r\n  }\r\n\r\n.btn{\r\n  \r\n    padding: 10px;\r\n  }\r\n\r\nbutton .btn-login {\r\n    border: none; /* Remove borders */\r\n    color: black; /* Add a text color */\r\n    padding: 14px 28px; /* Add some padding */\r\n    cursor: pointer; /* Add a pointer cursor on mouse-over */\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<ul>\r\n  <li *ngIf=\"!getAuthenticationService().loggedIn()\"><a href='/'>Home</a></li>\r\n  <li *ngIf=\"getAuthenticationService().loggedIn()\"><a (click)=\"onClickHome()\">Home</a></li>\r\n  <li *ngIf=\"getAuthenticationService().loggedIn()\" ><a routerLinkActive='active' routerLink=\"/profile\" [routerLinkActiveOptions]=\"{exact:true}\"> Profile</a></li>\r\n  <li *ngIf=\"getAuthenticationService().loggedIn()\"><a (click)=\"onLogoutClick()\" href=\"#\"> Logout</a></li>\r\n</ul>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__ = __webpack_require__("./src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavBarComponent = /** @class */ (function () {
    function NavBarComponent(authenticationService, router, messages) {
        this.authenticationService = authenticationService;
        this.router = router;
        this.messages = messages;
    }
    NavBarComponent.prototype.ngOnInit = function () {
    };
    NavBarComponent.prototype.getAuthenticationService = function () {
        return this.authenticationService;
    };
    NavBarComponent.prototype.onLogoutClick = function () {
        this.authenticationService.logOut();
        // this.messages.show('You are logged out', {cssClass: 'alert-success', timeout: 5000});
        this.router.navigate(['accountLogIn']);
        return false;
    };
    NavBarComponent.prototype.onClickHome = function () {
        var type = localStorage.getItem('type');
        if (type === 'Admin') {
            this.router.navigate(['admin']);
            return true;
        }
        if (type === 'Teacher') {
            this.router.navigate(['teachers']);
            return true;
        }
        if (type === undefined) {
            this.router.navigate(['/']);
            return false;
        }
    };
    NavBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-nav-bar',
            template: __webpack_require__("./src/app/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__("./src/app/nav-bar/nav-bar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]])
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/***/ (function(module, exports) {

module.exports = ".card {\r\n  -webkit-box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2);\r\n          box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2);\r\n  margin-left: 480px;\r\n  text-align: center;\r\n  font-family: arial;\r\n  border: 2px solid rgb(2, 14, 116); /* Green */\r\n  height: 60%;\r\n  width: 40%;\r\n  \r\n\r\n}\r\n\r\n.title {\r\n  color: grey;\r\n  font-size: 18px;\r\n\r\n}\r\n\r\nbutton {\r\n  border: none;\r\n  outline: 0;\r\n  display: inline-block;\r\n  padding: 8px;\r\n  color: white;\r\n  background-color: #000;\r\n  text-align: center;\r\n  cursor: pointer;\r\n  width: 100%;\r\n  font-size: 18px;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  font-size: 22px;\r\n  color: black;\r\n}\r\n\r\nbutton:hover, a:hover {\r\n  opacity: 0.7;\r\n}\r\n"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<br><br>\r\n<h2 style=\"margin-left: 650px\">User Profile</h2>\r\n\r\n<div class=\"card\">\r\n    <br>\r\n  <img src=\"../../assets/profile.jpg\" style=\"width:20%\">\r\n  <h1>{{user.username}}</h1>\r\n  <h3><b>Name:</b> {{user.firstName}} {{user.middleName}} {{user.lastName}}</h3>\r\n  <h3><b>Account Type:</b> {{user.accountType}}</h3>\r\n  <h3><b>Address:</b> {{user.address}}</h3>\r\n  <h3><b>E-mail:</b> {{user.email}}</h3>\r\n  <h3><b>Mobile No:</b> {{user.mobileNo}}</h3>\r\n  \r\n  </div>"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__ = __webpack_require__("./src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
        this.user = { firstName: String,
            middleName: String,
            lastName: String,
            accountType: String,
            address: String,
            mobileNo: String,
            username: String,
            email: String,
            password: String };
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authenticationService.getProfile().subscribe(function (profile) {
            console.log(profile.user);
            _this.user = profile.user;
        }, function (error) {
            console.log(error);
            return false;
        });
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__("./src/app/profile/profile.component.html"),
            styles: [__webpack_require__("./src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/routing/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Teacher_teacher_teacher_component__ = __webpack_require__("./src/app/Teacher/teacher/teacher.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__account_login_account_login_component__ = __webpack_require__("./src/app/account-login/account-login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Admin_account_register_account_register_component__ = __webpack_require__("./src/app/Admin/account-register/account-register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__profile_profile_component__ = __webpack_require__("./src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_services_guard_service__ = __webpack_require__("./src/app/services/guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Teacher_leave_application_leave_application_component__ = __webpack_require__("./src/app/Teacher/leave-application/leave-application.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Admin_admin_admin_component__ = __webpack_require__("./src/app/Admin/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Teacher_request_for_maintenance_request_for_maintenance_component__ = __webpack_require__("./src/app/Teacher/request-for-maintenance/request-for-maintenance.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Teacher_ask_for_advance_payment_ask_for_advance_payment_component__ = __webpack_require__("./src/app/Teacher/ask-for-advance-payment/ask-for-advance-payment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Admin_declareholiday_declareholiday_component__ = __webpack_require__("./src/app/Admin/declareholiday/declareholiday.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__Admin_approve_leave_application_approve_leave_application_component__ = __webpack_require__("./src/app/Admin/approve-leave-application/approve-leave-application.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_services_admin_link_guard_service__ = __webpack_require__("./src/app/services/admin-link-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_services_teacher_link_guard_service__ = __webpack_require__("./src/app/services/teacher-link-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__app_Teacher_display_student_display_student_component__ = __webpack_require__("./src/app/Teacher/display-student/display-student.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__Teacher_salary_sheet_salary_sheet_component__ = __webpack_require__("./src/app/Teacher/salary-sheet/salary-sheet.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__app_Admin_get_student_get_student_component__ = __webpack_require__("./src/app/Admin/get-student/get-student.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__app_Parent_parent_parent_component__ = __webpack_require__("./src/app/Parent/parent/parent.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__app_Parent_apply_transport_apply_transport_component__ = __webpack_require__("./src/app/Parent/apply-transport/apply-transport.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__app_Teacher_add_homework_add_homework_component__ = __webpack_require__("./src/app/Teacher/add-homework/add-homework.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__app_Parent_viwe_teacher_viwe_teacher_component__ = __webpack_require__("./src/app/Parent/viwe-teacher/viwe-teacher.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__app_Parent_check_homework_check_homework_component__ = __webpack_require__("./src/app/Parent/check-homework/check-homework.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_4__home_home_component__["a" /* HomeComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_4__home_home_component__["a" /* HomeComponent */] },
    { path: 'declareholiday', component: __WEBPACK_IMPORTED_MODULE_12__Admin_declareholiday_declareholiday_component__["a" /* DeclareholidayComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_7__app_services_guard_service__["a" /* GuardService */]] },
    { path: 'teachers', component: __WEBPACK_IMPORTED_MODULE_2__Teacher_teacher_teacher_component__["a" /* TeacherComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_7__app_services_guard_service__["a" /* GuardService */]] },
    { path: 'admin', component: __WEBPACK_IMPORTED_MODULE_9__Admin_admin_admin_component__["a" /* AdminComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_7__app_services_guard_service__["a" /* GuardService */]] },
    { path: 'accountLogIn', component: __WEBPACK_IMPORTED_MODULE_3__account_login_account_login_component__["a" /* AccountLoginComponent */] },
    { path: 'accountRegister', component: __WEBPACK_IMPORTED_MODULE_5__Admin_account_register_account_register_component__["a" /* AccountRegisterComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_14__app_services_admin_link_guard_service__["a" /* AdminLinkGuardService */]] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_6__profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_7__app_services_guard_service__["a" /* GuardService */]] },
    { path: 'leaveApplication', component: __WEBPACK_IMPORTED_MODULE_8__Teacher_leave_application_leave_application_component__["a" /* LeaveApplicationComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__app_services_teacher_link_guard_service__["a" /* TeacherLinkGuardService */]] },
    { path: 'reqMantenance', component: __WEBPACK_IMPORTED_MODULE_10__Teacher_request_for_maintenance_request_for_maintenance_component__["a" /* RequestForMaintenanceComponent */], },
    { path: 'advPayment', component: __WEBPACK_IMPORTED_MODULE_11__Teacher_ask_for_advance_payment_ask_for_advance_payment_component__["a" /* AskForAdvancePaymentComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_7__app_services_guard_service__["a" /* GuardService */]] },
    { path: 'salarySheet', component: __WEBPACK_IMPORTED_MODULE_17__Teacher_salary_sheet_salary_sheet_component__["a" /* SalarySheetComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_7__app_services_guard_service__["a" /* GuardService */]] },
    { path: 'approveLeave', component: __WEBPACK_IMPORTED_MODULE_13__Admin_approve_leave_application_approve_leave_application_component__["a" /* ApproveLeaveApplicationComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_14__app_services_admin_link_guard_service__["a" /* AdminLinkGuardService */]] },
    { path: 'studentDetails', component: __WEBPACK_IMPORTED_MODULE_16__app_Teacher_display_student_display_student_component__["a" /* DisplayStudentComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__app_services_teacher_link_guard_service__["a" /* TeacherLinkGuardService */]] },
    { path: 'studentDetailsA', component: __WEBPACK_IMPORTED_MODULE_18__app_Admin_get_student_get_student_component__["a" /* GetStudentComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_14__app_services_admin_link_guard_service__["a" /* AdminLinkGuardService */]] },
    { path: 'parent', component: __WEBPACK_IMPORTED_MODULE_19__app_Parent_parent_parent_component__["a" /* ParentComponent */] },
    { path: 'applyTransport', component: __WEBPACK_IMPORTED_MODULE_20__app_Parent_apply_transport_apply_transport_component__["a" /* ApplyTransportComponent */] },
    { path: 'viweTeacher', component: __WEBPACK_IMPORTED_MODULE_22__app_Parent_viwe_teacher_viwe_teacher_component__["a" /* ViweTeacherComponent */] },
    { path: 'checkHomework', component: __WEBPACK_IMPORTED_MODULE_23__app_Parent_check_homework_check_homework_component__["a" /* CheckHomeworkComponent */] },
    { path: 'addHomework', component: __WEBPACK_IMPORTED_MODULE_21__app_Teacher_add_homework_add_homework_component__["a" /* AddHomeworkComponent */] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/services/admin-link-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminLinkGuardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_service__ = __webpack_require__("./src/app/services/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminLinkGuardService = /** @class */ (function () {
    function AdminLinkGuardService(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
    }
    AdminLinkGuardService.prototype.canActivate = function () {
        if (this.authenticationService.returnType() === 'Admin') {
            return true;
        }
        else {
            if (this.authenticationService.loggedIn()) {
                if (localStorage.getItem('type') === 'Teacher') {
                    this.router.navigate(['/teachers']);
                    return true;
                }
                if (localStorage.getItem('type') === 'Student') {
                    this.router.navigate(['/students']);
                    return true;
                }
            }
            else {
                this.router.navigate(['/accountLogIn']);
                return true;
            }
        }
    };
    AdminLinkGuardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], AdminLinkGuardService);
    return AdminLinkGuardService;
}());



/***/ }),

/***/ "./src/app/services/adv-payment-form.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdvPaymentFormService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdvPaymentFormService = /** @class */ (function () {
    function AdvPaymentFormService(http) {
        this.http = http;
    }
    AdvPaymentFormService.prototype.submitAdvPaymentForm = function (form) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json');
        return this.http.post('teachers/advPayment', form, { headers: headers });
    };
    AdvPaymentFormService.prototype.getAdvPaymentForm = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json');
        return this.http.get('teachers/approveLeave', { headers: headers });
    };
    AdvPaymentFormService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AdvPaymentFormService);
    return AdvPaymentFormService;
}());



/***/ }),

/***/ "./src/app/services/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { tokenNotExpired } from 'angular2-jwt';
var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
    }
    // register user
    AuthenticationService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json');
        return this.http.post('users/register', user, { headers: headers });
    };
    // authenticate
    AuthenticationService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json');
        // console.log('auth service:' + headers.get('Content-Type'));
        return this.http.post('users/authenticate', user, { headers: headers });
    };
    AuthenticationService.prototype.getProfile = function () {
        // tslint:disable-next-line:prefer-const
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', "Bearer " + this.loadToken());
        // console.log(`Bearer ${this.loadToken()}`);
        // console.log('auth service');
        // headers.set('Content-Type', 'application/json');
        // console.log('auth service:' + headers.get('Authorization'));
        return this.http.get('users/profile', { headers: headers });
    };
    AuthenticationService.prototype.storeUserdata = function (token, user) {
        // localStorage.setItem('id_token', token);
        // console.log(token);
        sessionStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('type', user.accountType);
        localStorage.setItem('username', user.username);
        this.token = token;
        this.user = user;
    };
    AuthenticationService.prototype.loadToken = function () {
        var token = sessionStorage.getItem('id_token');
        this.token = token;
        // console.log(token);
        return token;
    };
    AuthenticationService.prototype.logOut = function () {
        this.token = null;
        this.user = null;
        localStorage.clear();
        sessionStorage.clear();
    };
    AuthenticationService.prototype.loggedIn = function () {
        return !(sessionStorage.getItem('id_token') === null);
        // tokenNotExpired();
    };
    AuthenticationService.prototype.returnType = function () {
        return (localStorage.getItem('type'));
    };
    AuthenticationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/services/declaare-holiday.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeclaareHolidayService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DeclaareHolidayService = /** @class */ (function () {
    function DeclaareHolidayService(http) {
        this.http = http;
    }
    DeclaareHolidayService.prototype.submit = function (holiday) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json');
        return this.http.post('teachers/holiday', holiday, { headers: headers });
    };
    DeclaareHolidayService.prototype.getHolidays = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json');
        return this.http.get('teachers/holidayDec', { headers: headers });
    };
    DeclaareHolidayService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], DeclaareHolidayService);
    return DeclaareHolidayService;
}());



/***/ }),

/***/ "./src/app/services/guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GuardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_service__ = __webpack_require__("./src/app/services/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GuardService = /** @class */ (function () {
    function GuardService(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
    }
    GuardService.prototype.canActivate = function () {
        if (this.authenticationService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/accountLogIn']);
            return true;
        }
    };
    GuardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], GuardService);
    return GuardService;
}());



/***/ }),

/***/ "./src/app/services/leave-app-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeaveAppServiceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LeaveAppServiceService = /** @class */ (function () {
    function LeaveAppServiceService(http) {
        this.http = http;
    }
    LeaveAppServiceService.prototype.submitLeaveApplication = function (form) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json');
        return this.http.post('teachers/leaveApplication', form, { headers: headers });
    };
    LeaveAppServiceService.prototype.getLeaveApplications = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json');
        return this.http.get('teachers/approveLeave', { headers: headers });
    };
    LeaveAppServiceService.prototype.returnedApprovedApplication = function (application) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json');
        return this.http.post('teachers/deleteApplication', application, { headers: headers });
    };
    LeaveAppServiceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], LeaveAppServiceService);
    return LeaveAppServiceService;
}());



/***/ }),

/***/ "./src/app/services/maintenance-detail.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaintenanceDetailService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MaintenanceDetailService = /** @class */ (function () {
    function MaintenanceDetailService(http) {
        this.http = http;
    }
    MaintenanceDetailService.prototype.submitMaintenanceApplication = function (form) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json');
        return this.http.post('teachers/requestMaintenance', form, { headers: headers });
    };
    MaintenanceDetailService.prototype.getMaintenanceApplication = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json');
        return this.http.get('teachers/requestMaintenance', { headers: headers });
    };
    MaintenanceDetailService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], MaintenanceDetailService);
    return MaintenanceDetailService;
}());



/***/ }),

/***/ "./src/app/services/parent-services.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParentServicesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ParentServicesService = /** @class */ (function () {
    function ParentServicesService(http) {
        this.http = http;
    }
    ParentServicesService.prototype.submitTr = function (username) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json');
        var res = this.http.post('parent/transportReq', username, { headers: headers });
        console.log(res);
        return res;
    };
    ParentServicesService.prototype.getHolidays = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json');
        return this.http.get('teachers/holidayDec', { headers: headers });
    };
    ParentServicesService.prototype.getUser = function (username) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json');
        return this.http.post('parent/getUsers', { 'username': username }, { headers: headers });
    };
    ParentServicesService.prototype.viweTeacher = function (username) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json');
        // tslint:disable-next-line:max-line-length
        var resu = this.http.post('parent/viweTeacher', { username: username, accountType: 'Teacher' }, { headers: headers });
        console.log(resu);
        return resu;
    };
    ParentServicesService.prototype.getHW = function (teacherName) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json');
        var resu = this.http.post('parent/checkHomework', { teacherName: teacherName }, { headers: headers });
        console.log(resu);
        return resu;
    };
    ParentServicesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ParentServicesService);
    return ParentServicesService;
}());



/***/ }),

/***/ "./src/app/services/student-info.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentInfoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StudentInfoService = /** @class */ (function () {
    function StudentInfoService(http) {
        this.http = http;
    }
    // form should be json object
    StudentInfoService.prototype.getInfo = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json');
        return this.http.get('student/getStudentDetails', { headers: headers });
    };
    StudentInfoService.prototype.postAttendanceInfo = function (form) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('content-type', 'application/json');
        return this.http.post('teachers/markAttendance', form, { headers: headers });
    };
    StudentInfoService.prototype.getStudentList = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json');
        return this.http.get('student/studentList', { headers: headers });
    };
    // get the relevant students to mark the attendnce
    StudentInfoService.prototype.getReleventStudents = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json');
        // tslint:disable-next-line:max-line-length
        return this.http.post('users/relevantUsers', { teacherName: localStorage.getItem('username'), accountType: 'parent' }, { headers: headers });
    };
    StudentInfoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], StudentInfoService);
    return StudentInfoService;
}());



/***/ }),

/***/ "./src/app/services/student-link-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentLinkGuardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_service__ = __webpack_require__("./src/app/services/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StudentLinkGuardService = /** @class */ (function () {
    function StudentLinkGuardService(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
    }
    StudentLinkGuardService.prototype.canActivate = function () {
        if (this.authenticationService.returnType() === 'Student') {
            return true;
        }
        else {
            if (this.authenticationService.loggedIn()) {
                if (localStorage.getItem('type') === 'Teacher') {
                    this.router.navigate(['/teachers']);
                    return true;
                }
                if (localStorage.getItem('type') === 'Admin') {
                    this.router.navigate(['/students']);
                    return true;
                }
            }
            else {
                this.router.navigate(['/accountLogIn']);
                return true;
            }
        }
    };
    StudentLinkGuardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], StudentLinkGuardService);
    return StudentLinkGuardService;
}());



/***/ }),

/***/ "./src/app/services/teacher-link-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeacherLinkGuardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_service__ = __webpack_require__("./src/app/services/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TeacherLinkGuardService = /** @class */ (function () {
    function TeacherLinkGuardService(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
    }
    TeacherLinkGuardService.prototype.canActivate = function () {
        if (this.authenticationService.returnType() === 'Teacher') {
            return true;
        }
        else {
            if (this.authenticationService.loggedIn()) {
                if (localStorage.getItem('type') === 'Admin') {
                    this.router.navigate(['/admin']);
                    return true;
                }
                if (localStorage.getItem('type') === 'Student') {
                    this.router.navigate(['/students']);
                    return true;
                }
            }
            else {
                this.router.navigate(['/accountLogIn']);
                return true;
            }
        }
    };
    TeacherLinkGuardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], TeacherLinkGuardService);
    return TeacherLinkGuardService;
}());



/***/ }),

/***/ "./src/app/services/teacher-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeacherServiceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TeacherServiceService = /** @class */ (function () {
    function TeacherServiceService(http) {
        this.http = http;
    }
    TeacherServiceService.prototype.addHW = function (home) {
        console.log('==============', home.homeWork);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json');
        var res = this.http.post('http://localhost:4000/teachers/addhomework', home, { headers: headers });
        console.log(res);
        return res;
    };
    TeacherServiceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], TeacherServiceService);
    return TeacherServiceService;
}());



/***/ }),

/***/ "./src/app/services/transfer-salary-details.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransferSalaryDetailsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TransferSalaryDetailsService = /** @class */ (function () {
    function TransferSalaryDetailsService(http) {
        this.http = http;
    }
    TransferSalaryDetailsService.prototype.getInfo = function (username) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json');
        // tslint:disable-next-line:max-line-length
        return this.http.post('users/salarySheet', { username: username }, { headers: headers });
    };
    TransferSalaryDetailsService.prototype.submitMaintenanceApplication = function (form) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json');
        return this.http.post('teachers/salarySheet', form, { headers: headers });
    };
    TransferSalaryDetailsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], TransferSalaryDetailsService);
    return TransferSalaryDetailsService;
}());

// include the service from back end


/***/ }),

/***/ "./src/app/services/validate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = /** @class */ (function () {
    function ValidateService() {
    }
    // validate form fields
    ValidateService.prototype.validateRegister = function (user) {
        // tslint:disable-next-line:max-line-length
        if (user.firstName === undefined || user.middleName === undefined || user.lastName === undefined
            || user.email === undefined || user.username === undefined || user.password === undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    // validate email
    ValidateService.prototype.validateEmail = function (email) {
        // tslint:disable-next-line:max-line-length
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };
    // validate signin
    ValidateService.prototype.validateSignIn = function (user) {
        if (user.username === undefined || user.password === undefined) {
            return true;
        }
        return false;
    };
    // validate leave form
    ValidateService.prototype.validateLeaveForm = function (form) {
        if (form.username === undefined || form.edate === undefined || form.sdate === undefined || form.reason === undefined) {
            return false;
        }
        return true;
    };
    // validate advanced payment form
    ValidateService.prototype.validateAdvForm = function (form) {
        if (form.username === undefined || form.amount === undefined || form.reason === undefined) {
            return false;
        }
        return true;
    };
    ValidateService.prototype.validateAmount = function (amount) {
        var am = /^\d+(?:\.\d{0,2})$/;
        return am.test(String(amount));
    };
    ValidateService.prototype.validateDates = function (date1, date2) {
        var temp1 = new Date(date1);
        var temp2 = new Date(date2);
        var today = new Date(); // today date
        if (today < temp1 && today < temp2) {
            if (temp1 <= temp2) {
                return true;
            }
            return false;
        }
        return false;
    };
    ValidateService.prototype.validateDate = function (date1) {
        var temp1 = new Date(date1);
        var today = new Date(); // today date
        if (today < temp1) {
            return true;
        }
        return false;
    };
    ValidateService.prototype.validateMaintananceForm = function (form) {
        if (form.username === undefined || form.briefDescription === undefined) {
            return false;
        }
        return true;
    };
    ValidateService.prototype.validatePhoneNo = function (number) {
        var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
        return re.test(String(number));
    };
    ValidateService.prototype.validateTrasportRequest = function (form) {
        if (form.from === undefined) {
            return false;
        }
        return true;
    };
    ValidateService.prototype.validatehomework = function (data) {
        if (data.homeWork === undefined || data.dueDate === undefined) {
            console.log(data.homeWork, data.dueDate);
            return false;
        }
        else {
            console.log('validated');
            return true;
        }
    };
    ValidateService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map