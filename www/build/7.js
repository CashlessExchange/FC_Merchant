webpackJsonp([7],{

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login__ = __webpack_require__(361);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LoginPageModule = (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__login__["a" /* LoginPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__login__["a" /* LoginPage */]
            ]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_providers__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_fingerprint_aio__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var LoginPage = (function () {
    function LoginPage(navCtrl, fingerprint, storage, user, platform, toastCtrl, translateService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.fingerprint = fingerprint;
        this.storage = storage;
        this.user = user;
        this.platform = platform;
        this.toastCtrl = toastCtrl;
        this.translateService = translateService;
        // The account fields for the login form.
        // If you're using the username field with or without email, make
        // sure to add it to the type
        this.account = {
            email: '',
            password: ''
        };
        this.translateService.get('LOGIN_ERROR').subscribe(function (value) {
            _this.loginErrorString = value;
        });
        this.platform.ready().then(function (ready) {
            _this.checkData();
        });
    }
    LoginPage.prototype.setData = function (merchid) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.storage.set('merchant', merchid);
                this.storage.set('loginnameMerch', merchid);
                return [2 /*return*/];
            });
        });
    };
    LoginPage.prototype.checkData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.platform.is('core')) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.storage.get('loginname').then(function (val) {
                                if (val != null && val != undefined) {
                                    _this.account.email = val;
                                }
                            })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.storage.get('merchant').then(function (val) {
                                if (val != null && val != undefined) {
                                    _this.merchid = val;
                                    _this.fingerprintLogin();
                                }
                            })];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.fingerprintLogin = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fingerprint.isAvailable().then(function (result) {
                            _this.fingerprint.show({
                                clientId: "freedom-choice",
                                clientSecret: "password",
                                localizedReason: "please authenticate"
                            }).then(function (result) {
                                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages__["b" /* MainPage */]);
                            }).catch(function (err) {
                                console.log(err);
                            });
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // Attempt to login in through our User service
    LoginPage.prototype.doLogin = function () {
        var _this = this;
        var type = "merchantLogin.php?email=" + this.account.email + "&password=" + this.account.password;
        this.user.login(this.account, type).subscribe(function (resp) {
            if (resp.status === "Success" && resp.message === "Merchant logged in successfully") {
                var merchid_1 = resp.merchantId;
                _this.platform.ready().then(function (ready) {
                    //this.storage.set('merchant', merchid);
                    _this.setData(merchid_1);
                });
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages__["b" /* MainPage */]);
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: "Username or Password wrong",
                    duration: 3000,
                    position: 'top'
                });
                toast.present();
            }
            //this.navCtrl.push(MainPage);
        }, function (err) {
            console.log(err);
            //this.navCtrl.push(MainPage);
            // Unable to log in
            var toast = _this.toastCtrl.create({
                message: _this.loginErrorString,
                duration: 3000,
                position: 'top'
            });
            toast.present();
        });
    };
    LoginPage.prototype.doSignup = function () {
        this.navCtrl.push('SignupPage');
    };
    LoginPage.prototype.getPassword = function () {
        this.navCtrl.push('PasswordPage');
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/mariaschanz/Desktop/ionic-test/merchantapp2/src/pages/login/login.html"*/`<ion-content padding class="background">\n<div class="spacer" style="height:100px;"></div>\n<h1>Merchant App</h1>\n\n<form (submit)="doLogin()">\n\n  <ion-list>\n\n    <ion-item>\n      <ion-label fixed>EMAIL</ion-label>\n      <ion-input type="email" [(ngModel)]="account.email" name="email"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label fixed>PASSWORD</ion-label>\n      <ion-input type="password" [(ngModel)]="account.password" name="password"></ion-input>\n    </ion-item>\n\n    <div padding>\n      <button ion-button color="primary" block>Login</button>\n    </div>\n\n  </ion-list>\n</form>\n\n<button ion-button clear color="negative" block (click)="getPassword()">\n  Forgot Password ?\n</button>\n<div class="spacer" style="height:30px;"></div>\n\n\n\n</ion-content>`/*ion-inline-end:"/Users/mariaschanz/Desktop/ionic-test/merchantapp2/src/pages/login/login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_fingerprint_aio__["a" /* FingerprintAIO */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__providers_providers__["d" /* User */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=7.js.map