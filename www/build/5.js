webpackJsonp([5],{

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageModule", function() { return SearchPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__search__ = __webpack_require__(363);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SearchPageModule = (function () {
    function SearchPageModule() {
    }
    SearchPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__search__["a" /* SearchPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__search__["a" /* SearchPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__search__["a" /* SearchPage */]
            ]
        })
    ], SearchPageModule);
    return SearchPageModule;
}());

//# sourceMappingURL=search.module.js.map

/***/ }),

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(58);
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




var SearchPage = (function () {
    function SearchPage(platform, auth, storage, navCtrl, toastctrl, navParams, loadingCtrl) {
        var _this = this;
        this.platform = platform;
        this.auth = auth;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.toastctrl = toastctrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.merchid = "";
        this.logo = "";
        this.splitted = [];
        //private certs: any = [];
        this.transactions = [];
        this.merch = {
            merchantlogo: this.logo
        };
        storage.get('merchant').then(function (val) {
            console.log('Your age is', val);
            _this.merchid = val;
        });
        console.log(this.merchid);
        this.getMerchantData();
    }
    SearchPage.prototype.ionViewWillEnter = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loading;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        loading = this.loadingCtrl.create({
                            spinner: 'hide',
                            content: "Please Wait..\n          \n          <div class=\"custom-spinner-container\">\n            <div class=\"custom-spinner-box\"></div>\n          </div>"
                        });
                        return [4 /*yield*/, this.getMerchantData()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.laodTransactions()];
                    case 2:
                        _a.sent();
                        loading.dismiss();
                        return [2 /*return*/];
                }
            });
        });
    };
    SearchPage.prototype.readCustomerData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var type, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        type = "customer_data.php?customerid=" + this.merchid;
                        console.log(type);
                        _a = this;
                        return [4 /*yield*/, this.auth.serviceFreedom("", type)];
                    case 1:
                        _a.customer = _b.sent();
                        console.log(this.customer);
                        return [2 /*return*/];
                }
            });
        });
    };
    SearchPage.prototype.getMerchantData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var databasecreds, merch;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        databasecreds = {
                            username: "merchantbackuser",
                            password: "150498AV",
                            reference: "",
                            token: "",
                            id: this.merchid
                        };
                        console.log(databasecreds);
                        return [4 /*yield*/, this.auth.serviceTransaction(databasecreds, "?getMerchant=" + "99")];
                    case 1:
                        merch = _a.sent();
                        console.log(merch);
                        this.merch.merchantname = merch.name;
                        if (merch.logo != undefined) {
                            this.merch.merchtlogo = merch.logo;
                        }
                        this.merch.merchantaddress = merch.address;
                        this.merch.merchantmail = merch.mail;
                        return [2 /*return*/];
                }
            });
        });
    };
    SearchPage.prototype.laodTransactions = function () {
        return __awaiter(this, void 0, void 0, function () {
            var databasecreds, trans, length_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        databasecreds = {
                            username: "freedom-app",
                            password: "150498AV",
                            reference: "",
                            merchantid: this.merchid,
                            token: ""
                        };
                        console.log(databasecreds);
                        return [4 /*yield*/, this.auth.serviceTransaction(databasecreds, "?getTransactionsMerch=" + "99")];
                    case 1:
                        trans = _a.sent();
                        console.log(trans.results);
                        this.transactions = trans.results;
                        if (this.transactions != undefined) {
                            length_1 = this.transactions.length;
                            if (length_1 > 5) {
                                console.log(this.transactions.slice(length_1 - 4, length_1));
                                this.transactions = this.transactions.slice(length_1 - 4, length_1);
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    SearchPage.prototype.filter = function (value) {
        if (value === "1") {
            return "yes";
        }
        else {
            return "no";
        }
    };
    SearchPage.prototype.addPoint = function (num) {
        console.log(num);
        var temp = num.toString();
        if (temp.length === 1) {
            temp = "0.0" + temp;
        }
        else if (temp.length === 2) {
            temp = "0." + temp;
        }
        else {
            var lengthnum = temp.length;
            temp = temp.substring(0, lengthnum - 2) + "." + temp.substring(lengthnum - 2, lengthnum);
        }
        return temp;
    };
    SearchPage.prototype.exit = function () {
        console.log("exit");
        var toast = this.toastctrl.create({
            message: 'You have been succesfully logged out',
            duration: 3000,
            position: 'top'
        });
        toast.present();
        this.navCtrl.setRoot('LoginPage');
    };
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-search',template:/*ion-inline-start:"/Users/mariaschanz/Desktop/ionic-test/merchantapp2/src/pages/search/search.html"*/`<ion-header>\n\n  <ion-navbar>\n    <ion-title>Home</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="exit()">\n        <ion-icon name="exit"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="background">\n\n  <div>\n    <img src="assets/img/screenplay.png" style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;" />\n  </div>\n    <ion-item no-line>\n      <h2>Merchant: {{merch.merchantaddress}}</h2>\n      <h2>{{merch.merchantmail}}</h2>\n      <h2>Your Merchant ID: {{merchid}}</h2>\n    </ion-item>\n\n\n  <ion-item color="none" id="home-list-item20">\n    Most Recent Transactions:\n  </ion-item>\n  <ion-list>\n    <span *ngIf="transactions === undefined"> There are no transactions available</span>\n\n    <ion-spinner *ngIf="transactions != undefined && transactions.length == 0"> </ion-spinner>\n    <ion-card *ngFor="let option of transactions">\n\n      <ion-item>\n        <div class="show-list-numbers-and-dots">\n          <p style="margin-top:0px;color:#000000;">\n            Referencenumber = {{option.ref}}\n          </p>\n          <p>\n            Value = $ {{addPoint(option.value)}}\n          </p>\n        </div>\n      </ion-item>\n    </ion-card>\n  </ion-list>\n</ion-content>`/*ion-inline-end:"/Users/mariaschanz/Desktop/ionic-test/merchantapp2/src/pages/search/search.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* Api */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ })

});
//# sourceMappingURL=5.js.map