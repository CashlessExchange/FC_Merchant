webpackJsonp([8],{

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListMasterPageModule", function() { return ListMasterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__list_master__ = __webpack_require__(360);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ListMasterPageModule = (function () {
    function ListMasterPageModule() {
    }
    ListMasterPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__list_master__["a" /* ListMasterPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__list_master__["a" /* ListMasterPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__list_master__["a" /* ListMasterPage */]
            ]
        })
    ], ListMasterPageModule);
    return ListMasterPageModule;
}());

//# sourceMappingURL=list-master.module.js.map

/***/ }),

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListMasterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pricevalue_pricevalue__ = __webpack_require__(119);
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





var ListMasterPage = (function () {
    function ListMasterPage(storage, loadingCtrl, navCtrl, navParams, autService) {
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.autService = autService;
        this.transactions = [];
    }
    ListMasterPage.prototype.ionViewWillEnter = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var loading;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        loading = this.loadingCtrl.create({
                            spinner: 'hide',
                            content: "Please Wait..\n          \n          <div class=\"custom-spinner-container\">\n            <div class=\"custom-spinner-box\"></div>\n          </div>"
                        });
                        return [4 /*yield*/, this.storage.get('merchant').then(function (val) {
                                console.log('Your age is', val);
                                _this.merchid = val;
                            })];
                    case 1:
                        _a.sent();
                        console.log(this.merchid);
                        this.laodTransactions();
                        loading.dismiss();
                        return [2 /*return*/];
                }
            });
        });
    };
    ListMasterPage.prototype.laodTransactions = function () {
        return __awaiter(this, void 0, void 0, function () {
            var databasecreds, trans;
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
                        return [4 /*yield*/, this.autService.serviceTransaction(databasecreds, "?getTransactionsMerch=" + "99")];
                    case 1:
                        trans = _a.sent();
                        console.log(trans.results);
                        this.transactions = trans.results;
                        return [2 /*return*/];
                }
            });
        });
    };
    ListMasterPage.prototype.getMerchantData = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var databasecreds, merch;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        databasecreds = {
                            username: "merchantbackuser",
                            password: "150498AV",
                            reference: "",
                            customerid: this.merchid,
                            token: "",
                            id: id
                        };
                        console.log(databasecreds);
                        return [4 /*yield*/, this.autService.serviceTransaction(databasecreds, "?getMerchant=" + "99")];
                    case 1:
                        merch = _a.sent();
                        console.log(merch);
                        return [2 /*return*/, merch];
                }
            });
        });
    };
    ListMasterPage.prototype.addItem = function () {
        console.log("added");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pricevalue_pricevalue__["a" /* PricevaluePage */]);
    };
    ListMasterPage.prototype.filter = function (value) {
        if (value === "1") {
            return "yes";
        }
        else {
            return "no";
        }
    };
    ListMasterPage.prototype.addPoint = function (num) {
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
    ListMasterPage.prototype.changeDate = function (date1) {
        var a = new Date(Number(date1) * 1000);
        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        var year = a.getFullYear();
        var month = months[a.getMonth()];
        var date = a.getDate();
        var hour = a.getHours();
        var min = a.getMinutes();
        var sec = a.getSeconds();
        var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
        return time;
    };
    ListMasterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list-master',template:/*ion-inline-start:"/Users/mariaschanz/Desktop/ionic-test/merchantapp2/src/pages/list-master/list-master.html"*/`<ion-header>\n\n  <ion-navbar>\n    <ion-title>Transaction</ion-title>\n\n    <ion-buttons end>\n      <button ion-button icon-only (click)="addItem()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header >\n\n<ion-content padding class="background">\n\n    <ion-list>\n    \n        <ion-card *ngFor="let option of transactions">\n    \n          <ion-item>\n            <div class="show-list-numbers-and-dots">\n              <p style="margin-top:0px;color:#000000;">\n                Referencenumber = {{option.ref}}\n              </p>\n              <p style="margin-top:0px;color:#000000;">\n                Customer ID = {{option.customer_id}}\n              </p>\n              <p style="margin-top:0px;color:#000000;">\n                Fees = {{addPoint(option.convenience_fee)}}\n              </p>\n              <p style="margin-top:0px;color:#000000;">\n                Date = {{changeDate(option.timestamp_completed)}}\n              </p>\n              <p style="margin-top:0px;color:#000000;">\n                  Value = $ {{addPoint(option.value)}}\n                </p>\n            </div>\n          </ion-item>\n        </ion-card>\n      </ion-list>\n</ion-content>`/*ion-inline-end:"/Users/mariaschanz/Desktop/ionic-test/merchantapp2/src/pages/list-master/list-master.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* Api */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* Api */]) === "function" && _e || Object])
    ], ListMasterPage);
    return ListMasterPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=list-master.js.map

/***/ })

});
//# sourceMappingURL=8.js.map