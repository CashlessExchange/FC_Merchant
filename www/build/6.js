webpackJsonp([6],{

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketplacePageModule", function() { return MarketplacePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__marketplace__ = __webpack_require__(362);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MarketplacePageModule = (function () {
    function MarketplacePageModule() {
    }
    MarketplacePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__marketplace__["a" /* MarketplacePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__marketplace__["a" /* MarketplacePage */]),
            ],
        })
    ], MarketplacePageModule);
    return MarketplacePageModule;
}());

//# sourceMappingURL=marketplace.module.js.map

/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarketplacePage; });
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




var MarketplacePage = (function () {
    function MarketplacePage(navCtrl, autService, alertctrl, storage, navParams) {
        this.navCtrl = navCtrl;
        this.autService = autService;
        this.alertctrl = alertctrl;
        this.storage = storage;
        this.navParams = navParams;
    }
    MarketplacePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad MarketplacePage');
        this.storage.get('merchant').then(function (val) {
            console.log('Your age is', val);
            _this.merchid = val;
        });
        console.log(this.merchid);
    };
    MarketplacePage.prototype.addCoupon = function (value) {
        return __awaiter(this, void 0, void 0, function () {
            var databasecreds, param, coupon, alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(value.coupon);
                        databasecreds = {
                            username: 'merchantApp'
                        };
                        param = "coupon_code=" + value.coupon +
                            "&redeeming_merchant=" + this.merchid;
                        return [4 /*yield*/, this.autService.serviceMarketplace(databasecreds, 'redeemCoupon.php?' + param)];
                    case 1:
                        coupon = _a.sent();
                        alert = this.alertctrl.create({
                            title: 'Marketplace Info',
                            subTitle: coupon.message,
                            buttons: ['OK']
                        });
                        alert.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    MarketplacePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-marketplace',template:/*ion-inline-start:"/Users/mariaschanz/Desktop/ionic-test/merchantapp2/src/pages/marketplace/marketplace.html"*/`<!--\n  Generated template for the MarketplacePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Marketplace</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="background" padding>\n  <h2>Redeem Coupon</h2>\n  <form (ngSubmit)="addCoupon(f.value)" #f="ngForm">\n      <div style="margin-left:-10px;width:calc(100% + 20px);">\n      </div>\n      <ion-label>\n        Enter Code here\n      </ion-label>\n      <ion-list>\n        <ion-item class="text">\n          <ion-label>\n            Code\n          </ion-label>\n          <ion-input type="text" placeholder="" name="coupon" ngModel required></ion-input>\n        </ion-item>\n      </ion-list>\n      <div class="spacer" style="height:40px;"></div>\n      <button ion-button color="assertive" block>\n        ENTER\n      </button>\n  \n    </form>\n\n</ion-content>\n`/*ion-inline-end:"/Users/mariaschanz/Desktop/ionic-test/merchantapp2/src/pages/marketplace/marketplace.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* Api */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], MarketplacePage);
    return MarketplacePage;
}());

//# sourceMappingURL=marketplace.js.map

/***/ })

});
//# sourceMappingURL=6.js.map