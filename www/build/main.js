webpackJsonp([18],{

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PricevaluePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__qrcode_qrcode__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_api_api__ = __webpack_require__(33);
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






/**
 * Generated class for the PricevaluePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PricevaluePage = (function () {
    function PricevaluePage(platform, autService, storage, toastCtrl, alertCtrl, nav, navParams) {
        var _this = this;
        this.platform = platform;
        this.autService = autService;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.nav = nav;
        this.navParams = navParams;
        this.merchid = this.navParams.get('id');
        storage.get('merchant').then(function (val) {
            console.log('Your age is', val);
            _this.merchid = val;
        });
        console.log(this.navParams);
        //this.merchantid = navParams.get('merchant');
    }
    PricevaluePage.prototype.ionViewWillEnter = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.dealid = this.merchid + this.merchantid + this.makeid();
                this.reference = String(Math.floor(Math.random() * 90000) + 10000);
                return [2 /*return*/];
            });
        });
    };
    PricevaluePage.prototype.addPrice = function (value) {
        return __awaiter(this, void 0, void 0, function () {
            var price, calculated;
            return __generator(this, function (_a) {
                console.log(value);
                price = value.price;
                price = price.replace(",", ".");
                console.log(price.indexOf('.') !== -1);
                if (price.indexOf('.') === -1) {
                    console.log(price);
                    price = price + ".00";
                }
                calculated = 0;
                this.lastSTep(value, price);
                return [2 /*return*/];
            });
        });
    };
    PricevaluePage.prototype.lastSTep = function (value, price) {
        return __awaiter(this, void 0, void 0, function () {
            var priceForDb, databasecreds, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        priceForDb = price.replace(".", "");
                        console.log(this.discount);
                        this.reference = this.makeid();
                        databasecreds = {
                            username: "freedom-app",
                            password: "150498AV",
                            reference: this.reference,
                            value: priceForDb,
                            //customerid: this.customerid,
                            merchantid: this.merchid,
                        };
                        return [4 /*yield*/, this.autService.serviceTransaction(databasecreds, "?addTransaction=" + this.reference)];
                    case 1:
                        result = _a.sent();
                        console.log(result);
                        //this.barcode.encode(this.barcode.Encode.TEXT_TYPE, this.reference);
                        this.nav.push(__WEBPACK_IMPORTED_MODULE_2__qrcode_qrcode__["a" /* QrcodePage */], { ref: this.reference, merchant: this.merchid });
                        return [2 /*return*/];
                }
            });
        });
    };
    PricevaluePage.prototype.makeid = function () {
        var text = "";
        var possible = "0123456789";
        for (var i = 0; i < 5; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    };
    PricevaluePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pricevalue',template:/*ion-inline-start:"/Users/mariaschanz/Desktop/ionic-test/merchantapp2/src/pages/pricevalue/pricevalue.html"*/`<ion-header>\n    \n    <ion-navbar>\n      <ion-title>Enter Price\n      </ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content padding class="background">\n  \n    <form (ngSubmit)="addPrice(f.value)" #f="ngForm">\n      <div style="margin-left:-10px;width:calc(100% + 20px);">\n      </div>\n      <ion-label>\n        Enter Price here\n      </ion-label>\n      <ion-list>\n        <ion-item class="text">\n          <ion-label>\n            Price\n          </ion-label>\n          <ion-input type="number" placeholder="" name="price" ngModel required></ion-input>\n        </ion-item>\n        <ion-item class="text">\n            <ion-label>\n              Item Name\n            </ion-label>\n            <ion-input type="text" placeholder="" name="name" ngModel></ion-input>\n          </ion-item>\n      </ion-list>\n      <div class="spacer" style="height:40px;"></div>\n      <button ion-button color="assertive" block>\n        ENTER\n      </button>\n  \n    </form>\n\n  </ion-content>`/*ion-inline-end:"/Users/mariaschanz/Desktop/ionic-test/merchantapp2/src/pages/pricevalue/pricevalue.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_4__providers_api_api__["a" /* Api */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], PricevaluePage);
    return PricevaluePage;
}());

//# sourceMappingURL=pricevalue.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QrcodePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(33);
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



var QrcodePage = (function () {
    function QrcodePage(navCtrl, alertCtrl, toastCtrl, autService, navParams) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.autService = autService;
        this.navParams = navParams;
        this.ref = navParams.get('ref');
        this.merchid = navParams.get('merchant');
        this.checkStatus();
    }
    QrcodePage.prototype.checkStatus = function () {
        return __awaiter(this, void 0, void 0, function () {
            function delay(ms) {
                return new Promise(function (resolve) { return setTimeout(resolve, ms); });
            }
            var databasecreds, i, finished, result, alert_1, sub, alert_2, sub, alert_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        databasecreds = {
                            username: "freedom-app",
                            password: "150498AV",
                            reference: this.ref,
                            //customerid: this.customerid,
                            merchantid: this.merchid,
                        };
                        i = 0;
                        finished = false;
                        _a.label = 1;
                    case 1:
                        if (!(i < 90 && !finished)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.autService.serviceTransaction(databasecreds, "?getTransactions2=" + this.ref)];
                    case 2:
                        result = _a.sent();
                        console.log(result.results);
                        console.log(result.results.canceled);
                        if (result.results.canceled === '1') {
                            finished = true;
                            this.navCtrl.popToRoot();
                            alert_1 = this.alertCtrl.create({
                                title: 'Attention',
                                subTitle: 'Your Transaction got cancelled!',
                                buttons: ['OK']
                            });
                            alert_1.present();
                        }
                        if (result.results.cash === '1') {
                            finished = true;
                            sub = 'Please Collect the amount of $' + this.addPoint(result.results.value) + ' and press Paid if you have collected the Money.';
                            this.navCtrl.popToRoot();
                            alert_2 = this.alertCtrl.create({
                                title: 'Cash Payment',
                                subTitle: sub,
                                buttons: ['PAID']
                            });
                            alert_2.present();
                        }
                        if (result.results.card_type !== '' && result.results.cash === '0') {
                            finished = true;
                            sub = 'Your Customer paid with Card. Cardtype: ' + result.results.card_type;
                            this.navCtrl.popToRoot();
                            alert_3 = this.alertCtrl.create({
                                title: 'Card Payment',
                                subTitle: sub,
                                buttons: ['OK']
                            });
                            alert_3.present();
                        }
                        return [4 /*yield*/, delay(10000)];
                    case 3:
                        _a.sent();
                        i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    QrcodePage.prototype.addPoint = function (num) {
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
    QrcodePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-qrcode',template:/*ion-inline-start:"/Users/mariaschanz/Desktop/ionic-test/merchantapp2/src/pages/qrcode/qrcode.html"*/`<!--\n  Generated template for the QrcodePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>qrcode</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="background">\n\n    <ion-item *ngIf="ref != undefined" id="qr" no-line> \n        <qr-code [value]="ref" [size]="300"></qr-code>\n    \n    </ion-item>\n\n    <ion-label id="ref"> Reference: {{ref}} </ion-label>\n    \n</ion-content>\n`/*ion-inline-end:"/Users/mariaschanz/Desktop/ionic-test/merchantapp2/src/pages/qrcode/qrcode.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* Api */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], QrcodePage);
    return QrcodePage;
}());

//# sourceMappingURL=qrcode.js.map

/***/ }),

/***/ 134:
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
webpackEmptyAsyncContext.id = 134;

/***/ }),

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/cards/cards.module": [
		337,
		13
	],
	"../pages/category/category.module": [
		338,
		12
	],
	"../pages/content/content.module": [
		339,
		11
	],
	"../pages/home/home.module": [
		340,
		17
	],
	"../pages/item-create/item-create.module": [
		341,
		10
	],
	"../pages/item-detail/item-detail.module": [
		342,
		9
	],
	"../pages/list-master/list-master.module": [
		343,
		8
	],
	"../pages/login/login.module": [
		344,
		7
	],
	"../pages/marketplace/marketplace.module": [
		345,
		6
	],
	"../pages/menu/menu.module": [
		346,
		16
	],
	"../pages/pricevalue/pricevalue.module": [
		347,
		15
	],
	"../pages/qrcode/qrcode.module": [
		348,
		14
	],
	"../pages/search/search.module": [
		349,
		5
	],
	"../pages/settings/settings.module": [
		350,
		4
	],
	"../pages/signup/signup.module": [
		351,
		3
	],
	"../pages/tabs/tabs.module": [
		352,
		2
	],
	"../pages/tutorial/tutorial.module": [
		353,
		1
	],
	"../pages/welcome/welcome.module": [
		354,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 184;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Items; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_item__ = __webpack_require__(313);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Items = (function () {
    function Items() {
        this.items = [];
        this.defaultItem = {
            "name": "Burt Bear",
            "profilePic": "assets/img/speakers/bear.jpg",
            "about": "Burt is a Bear.",
        };
        var items = [
            {
                "name": "Burt Bear",
                "profilePic": "assets/img/speakers/bear.jpg",
                "about": "Burt is a Bear."
            },
            {
                "name": "Charlie Cheetah",
                "profilePic": "assets/img/speakers/cheetah.jpg",
                "about": "Charlie is a Cheetah."
            },
            {
                "name": "Donald Duck",
                "profilePic": "assets/img/speakers/duck.jpg",
                "about": "Donald is a Duck."
            },
            {
                "name": "Eva Eagle",
                "profilePic": "assets/img/speakers/eagle.jpg",
                "about": "Eva is an Eagle."
            },
            {
                "name": "Ellie Elephant",
                "profilePic": "assets/img/speakers/elephant.jpg",
                "about": "Ellie is an Elephant."
            },
            {
                "name": "Molly Mouse",
                "profilePic": "assets/img/speakers/mouse.jpg",
                "about": "Molly is a Mouse."
            },
            {
                "name": "Paul Puppy",
                "profilePic": "assets/img/speakers/puppy.jpg",
                "about": "Paul is a Puppy."
            }
        ];
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
            var item = items_1[_i];
            this.items.push(new __WEBPACK_IMPORTED_MODULE_1__models_item__["a" /* Item */](item));
        }
    }
    Items.prototype.query = function (params) {
        if (!params) {
            return this.items;
        }
        return this.items.filter(function (item) {
            for (var key in params) {
                var field = item[key];
                if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
                    return item;
                }
                else if (field == params[key]) {
                    return item;
                }
            }
            return null;
        });
    };
    Items.prototype.add = function (item) {
        this.items.push(item);
    };
    Items.prototype.delete = function (item) {
        this.items.splice(this.items.indexOf(item), 1);
    };
    Items = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], Items);
    return Items;
}());

//# sourceMappingURL=items.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirstRunPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MainPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Tab1Root; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Tab2Root; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Tab3Root; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return Tab4Root; });
// The page the user lands on after opening the app and without a session
var FirstRunPage = 'LoginPage';
// The main page the user will see as they use the app over a long period of time.
// Change this if not using tabs
var MainPage = 'TabsPage';
// The initial root pages for our tabs (remove if not using tabs)
var Tab1Root = 'SearchPage';
var Tab2Root = 'ListMasterPage';
var Tab3Root = 'SettingsPage';
var Tab4Root = 'MarketplacePage';
//# sourceMappingURL=pages.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HomePage = (function () {
    function HomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomePage');
    };
    HomePage.prototype.exit = function () {
        console.log("exit");
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/mariaschanz/Desktop/ionic-test/merchantapp2/src/pages/home/home.html"*/`<!--\n  Generated template for the HomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>home</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="exit()">\n        <ion-icon name="exit"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n`/*ion-inline-end:"/Users/mariaschanz/Desktop/ionic-test/merchantapp2/src/pages/home/home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pricevalue_pricevalue__ = __webpack_require__(119);
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





var MenuPage = (function () {
    function MenuPage(platform, toasCtrl, alertCtrl, autService, navCtrl, navParams, app) {
        this.platform = platform;
        this.toasCtrl = toasCtrl;
        this.alertCtrl = alertCtrl;
        this.autService = autService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
        this.rootPage = 'HomePage';
        this.showReg = true;
        this.pages = [
            { title: 'Home', pageName: 'HomePage', icon: 'home' },
            //{ title: 'My Cards', pageName: 'PaymethodsPage', icon: 'card' },
            //{ title: 'My Certificates', pageName: 'SpecialPage', icon: 'paper' },
            { title: 'Recent Transactions', pageName: 'TransactionsPage', icon: 'pricetags' }
        ];
        this.merchid = this.navParams.get('id');
        //const browser = this.iab.create('https://ionicframework.com/');
    }
    MenuPage.prototype.ionViewWillEnter = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    MenuPage.prototype.openPage = function (page) {
        var params = {};
        if (page.index) {
            params = { tabIndex: page.index, id: this.merchid };
            console.log(params);
        }
        if (this.nav.getActiveChildNav() && page.index != undefined) {
            this.nav.getActiveChildNav().select(page.index);
        }
        else {
            this.nav.setRoot(page.pageName, params);
        }
    };
    MenuPage.prototype.isActive = function (page) {
        var childNav = this.nav.getActiveChildNav();
        if (childNav) {
            if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
                return 'primary';
            }
            return;
        }
        if (this.nav.getActive() && this.nav.getActive().name === page.pageName) {
            return 'primary';
        }
    };
    MenuPage.prototype.enterBarcode = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.nav.push(__WEBPACK_IMPORTED_MODULE_3__pricevalue_pricevalue__["a" /* PricevaluePage */], { id: this.merchid });
                return [2 /*return*/];
            });
        });
    };
    MenuPage.prototype.goToSearch = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.nav.push("SearchPage");
                return [2 /*return*/];
            });
        });
    };
    MenuPage.prototype.goToReferral = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.nav.push("ReferalPage");
                return [2 /*return*/];
            });
        });
    };
    MenuPage.prototype.goToRegistration = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.nav.push("RegisteraffiliatePage");
                return [2 /*return*/];
            });
        });
    };
    MenuPage.prototype.doLogout = function () {
        var toast = this.toasCtrl.create({
            message: 'You have been succesfully logged out',
            duration: 3000,
            position: 'top'
        });
        toast.present();
        this.navCtrl.setRoot('LoginPage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */])
    ], MenuPage.prototype, "nav", void 0);
    MenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-menu',template:/*ion-inline-start:"/Users/mariaschanz/Desktop/ionic-test/merchantapp2/src/pages/menu/menu.html"*/`<ion-menu [content]="content">\n  <ion-header>\n\n    <ion-navbar>\n      <ion-title>menu</ion-title>\n    </ion-navbar>\n\n  </ion-header>\n\n\n  <ion-content>\n    <ion-list no-lines>\n      <button ion-item menuClose *ngFor="let p of pages" (click)="openPage(p)">\n        <ion-icon item-start [name]="p.icon" [color]="isActive(p)" style="font-size:23px !important;">\n          {{p.title}}\n        </ion-icon>\n      </button>\n\n    </ion-list>\n    <ion-list no-lines>\n\n      <button ion-item menuClose (click)="enterBarcode()">\n        <ion-icon item-start name="document" color="red" style="font-size:23px !important;">\n          Create Transaction\n        </ion-icon>\n      </button>\n\n\n\n     <!--    <button ion-item menuClose (click)="testToke()">\n          <ion-icon item-start name="people" color="red" style="font-size:23px !important;">\n            tEST\n          </ion-icon>\n        </button>-->\n    </ion-list>\n\n    <div class="spacer" style="height:20px;"></div>\n\n    <ion-list no-lines>\n      <button ion-item menuClose (click)="doLogout()">\n        <ion-icon item-start name="exit" color="red" style="font-size:23px !important;">\n          Logout\n        </ion-icon>\n      </button>\n    </ion-list>\n\n  </ion-content>\n</ion-menu>\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>`/*ion-inline-end:"/Users/mariaschanz/Desktop/ionic-test/merchantapp2/src/pages/menu/menu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* Api */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]])
    ], MenuPage);
    return MenuPage;
}());

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(244);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* unused harmony export provideSettings */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_translate_http_loader__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_fingerprint_aio__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__mocks_providers_items__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_providers__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_component__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_menu_menu__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_home_home__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_pricevalue_pricevalue__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_qrcode_qrcode__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angular2_qrcode__ = __webpack_require__(335);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.
function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_8__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
function provideSettings(storage) {
    /**
     * The Settings provider takes a set of default settings for your app.
     *
     * You can add new settings options at any time. Once the settings are saved,
     * these values will not overwrite the saved values (this can be done manually if desired).
     */
    return new __WEBPACK_IMPORTED_MODULE_12__providers_providers__["c" /* Settings */](storage, {
        option1: true,
        option2: 'Ionitron J. Framework',
        option3: '3',
        option4: 'Hello'
    });
}
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_14__pages_menu_menu__["a" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_pricevalue_pricevalue__["a" /* PricevaluePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_qrcode_qrcode__["a" /* QrcodePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_18_angular2_qrcode__["a" /* QRCodeModule */],
                __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: (createTranslateLoader),
                        deps: [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]]
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/cards/cards.module#CardsPageModule', name: 'CardsPage', segment: 'cards', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/category/category.module#CategoryPageModule', name: 'CategoryPage', segment: 'category', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/content/content.module#ContentPageModule', name: 'ContentPage', segment: 'content', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-create/item-create.module#ItemCreatePageModule', name: 'ItemCreatePage', segment: 'item-create', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-detail/item-detail.module#ItemDetailPageModule', name: 'ItemDetailPage', segment: 'item-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list-master/list-master.module#ListMasterPageModule', name: 'ListMasterPage', segment: 'list-master', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/marketplace/marketplace.module#MarketplacePageModule', name: 'MarketplacePage', segment: 'marketplace', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pricevalue/pricevalue.module#PricevaluePageModule', name: 'PricevaluePage', segment: 'pricevalue', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/qrcode/qrcode.module#QrcodePageModule', name: 'QrcodePage', segment: 'qrcode', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search/search.module#SearchPageModule', name: 'SearchPage', segment: 'search', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tutorial/tutorial.module#TutorialPageModule', name: 'TutorialPage', segment: 'tutorial', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/welcome/welcome.module#WelcomePageModule', name: 'WelcomePage', segment: 'welcome', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_14__pages_menu_menu__["a" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_pricevalue_pricevalue__["a" /* PricevaluePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_qrcode_qrcode__["a" /* QrcodePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__providers_providers__["a" /* Api */],
                __WEBPACK_IMPORTED_MODULE_11__mocks_providers_items__["a" /* Items */],
                __WEBPACK_IMPORTED_MODULE_12__providers_providers__["d" /* User */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_fingerprint_aio__["a" /* FingerprintAIO */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                { provide: __WEBPACK_IMPORTED_MODULE_12__providers_providers__["c" /* Settings */], useFactory: provideSettings, deps: [__WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */]] },
                // Keep this to enable Ionic's runtime error handling during development
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["e" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Item; });
/**
 * A generic model that our Master-Detail pages list, create, and delete.
 *
 * Change "Item" to the noun your app will use. For example, a "Contact," or a
 * "Customer," or a "Animal," or something like that.
 *
 * The Items service manages creating instances of Item, so go ahead and rename
 * that something that fits your app as well.
 */
var Item = (function () {
    function Item(fields) {
        // Quick and dirty extend/assign fields to this model
        for (var f in fields) {
            this[f] = fields[f];
        }
    }
    return Item;
}());

//# sourceMappingURL=item.js.map

/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Settings; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * A simple settings/config class for storing key/value pairs with persistence.
 */
var Settings = (function () {
    function Settings(storage, defaults) {
        this.storage = storage;
        this.SETTINGS_KEY = '_settings';
        this._defaults = defaults;
    }
    Settings.prototype.load = function () {
        var _this = this;
        return this.storage.get(this.SETTINGS_KEY).then(function (value) {
            if (value) {
                _this.settings = value;
                return _this._mergeDefaults(_this._defaults);
            }
            else {
                return _this.setAll(_this._defaults).then(function (val) {
                    _this.settings = val;
                });
            }
        });
    };
    Settings.prototype._mergeDefaults = function (defaults) {
        for (var k in defaults) {
            if (!(k in this.settings)) {
                this.settings[k] = defaults[k];
            }
        }
        return this.setAll(this.settings);
    };
    Settings.prototype.merge = function (settings) {
        for (var k in settings) {
            this.settings[k] = settings[k];
        }
        return this.save();
    };
    Settings.prototype.setValue = function (key, value) {
        this.settings[key] = value;
        return this.storage.set(this.SETTINGS_KEY, this.settings);
    };
    Settings.prototype.setAll = function (value) {
        return this.storage.set(this.SETTINGS_KEY, value);
    };
    Settings.prototype.getValue = function (key) {
        return this.storage.get(this.SETTINGS_KEY)
            .then(function (settings) {
            return settings[key];
        });
    };
    Settings.prototype.save = function () {
        return this.setAll(this.settings);
    };
    Object.defineProperty(Settings.prototype, "allSettings", {
        get: function () {
            return this.settings;
        },
        enumerable: true,
        configurable: true
    });
    Settings = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */], Object])
    ], Settings);
    return Settings;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_api__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Most apps have the concept of a User. This is a simple provider
 * with stubs for login/signup/etc.
 *
 * This User provider makes calls to our API at the `login` and `signup` endpoints.
 *
 * By default, it expects `login` and `signup` to return a JSON object of the shape:
 *
 * ```json
 * {
 *   status: 'success',
 *   user: {
 *     // User fields your app needs, like "id", "name", "email", etc.
 *   }
 * }Ø
 * ```
 *
 * If the `status` field is not `success`, then an error is detected and returned.
 */
var User = (function () {
    function User(api) {
        this.api = api;
    }
    /**
     * Send a POST request to our login endpoint with the data
     * the user entered on the form.
     */
    User.prototype.login = function (credentials, type) {
        var seq = this.api.login(credentials, type);
        return seq;
    };
    /**
     * Send a POST request to our signup endpoint with the data
     * the user entered on the form.
     */
    User.prototype.signup = function (accountInfo) {
        var _this = this;
        var seq = this.api.post('signup', accountInfo).share();
        seq.subscribe(function (res) {
            // If the API returned a successful response, mark the user as logged in
            if (res.status == 'success') {
                _this._loggedIn(res);
            }
        }, function (err) {
            console.error('ERROR', err);
        });
        return seq;
    };
    /**
     * Log the user out, which forgets the session
     */
    User.prototype.logout = function () {
        this._user = null;
    };
    /**
     * Process a login/signup response to store user data
     */
    User.prototype._loggedIn = function (resp) {
        this._user = resp.user;
    };
    User = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__api_api__["a" /* Api */]])
    ], User);
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Api; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Api is a generic REST Api handler. Set your API url first.
 */
var Api = (function () {
    function Api(http) {
        this.http = http;
        this.url = 'https://example.com/api/v1';
        this.merchantApiLogin = "http://www.cashlessexchange-sb.com/cashlessmerchant/api/merchant/";
        this.loginApi = "http://173.212.238.108/api/";
        this.tokenex = "https://test-api.tokenex.com/TokenServices.svc/REST/";
        this.marketplaceApi = "http://www.cashlessexchange-sb.com/cashlessmerchant/api/marketplace/";
        this.transactioApi = "http://173.212.238.108/api/freedomchoice.php";
        //transactioApi = "https://cashlessexchange-sb.com/cashlessexchangeaffiliate/api/freedomchoiceforte/freedomchoice.php";
        //cardServiceApi = "http://173.212.238.108/api/card_service.php";
        //cardServiceApi = "https://cashlessexchange-sb.com/cashlessexchangeaffiliate/api/freedomchoiceforte/card_service.php";
        //certServiceApi = "https://cashlessexchange-sb.com/cashlessexchangeaffiliate/api/freedomchoiceforte/cert_service.php";
        //certServiceApi = "http://173.212.238.108/api/cert_service.php";
        //merchantServiceApi = "http://173.212.238.108/api/merchant_fees.php";
        this.merchantServiceApi = "https://cashlessexchange-sb.com/cashlessexchangeaffiliate/api/freedomchoiceforte/merchant_fees.php";
        this.affiliateApi = "https://cashlessexchange-sb.com/cashlessexchangeaffiliate/api/affiliate_freedomchoice_commission.php";
        //affiliateApi= "http://173.212.238.108/api/affiliate_freedomchoice_commission.php";
        this.refermailApi = "https://cashlessexchange-sb.com/cashlessexchangeaffiliate/api/affiliate_freedomchoice_referralmail.php";
        //refermailApi = "http://173.212.238.108/api/affiliate_freedomchoice_referralmail.php";
        this.registerAffiliateApi = "https://cashlessexchange-sb.com/cashlessexchangeaffiliate/api/affiliate_freedomchoice_registercustomerasaffiliate.php";
        //registerAffiliateApi = "http://173.212.238.108/api/affiliate_freedomchoice_registercustomerasaffiliate.php";
        this.freedomApi = "http://cashlessexchange-sb.com/marketplace/webservices/";
        this.freedomTemp = "http://173.212.238.108/api/";
        this.googleMapsApi = "https://maps.googleapis.com/maps/api/geocode/json?address=";
    }
    Api.prototype.serviceTransaction = function (credentials, type) {
        var _this = this;
        console.log("in service" + type);
        var response;
        return new Promise(function (resolve) {
            _this.http.post(_this.transactioApi + type, JSON.stringify(credentials))
                .map(function (res) { return res; }).subscribe(function (data) {
                data;
                console.log(response);
                resolve(data);
            });
        });
    };
    Api.prototype.serviceMarketplace = function (credentials, type) {
        var _this = this;
        var response;
        return new Promise(function (resolve) {
            _this.http.post(_this.marketplaceApi + type, "")
                .map(function (res) { return res; }).subscribe(function (data) {
                data;
                console.log(response);
                resolve(data);
            });
        });
    };
    Api.prototype.serviceFreedom = function (credentials, type) {
        var _this = this;
        var response;
        return new Promise(function (resolve) {
            _this.http.post(_this.freedomTemp + type, "")
                .map(function (res) { return res; }).subscribe(function (data) {
                data;
                console.log(response);
                resolve(data);
            });
        });
    };
    Api.prototype.login = function (credentials, type) {
        return this.http.post(this.merchantApiLogin + type, "");
    };
    Api.prototype.get = function (endpoint, params, reqOpts) {
        if (!reqOpts) {
            reqOpts = {
                params: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpParams */]()
            };
        }
        // Support easy query params for GET requests
        if (params) {
            reqOpts.params = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpParams */]();
            for (var k in params) {
                reqOpts.params.set(k, params[k]);
            }
        }
        return this.http.get(this.url + '/' + endpoint, reqOpts);
    };
    Api.prototype.post = function (endpoint, body, reqOpts) {
        return this.http.post(this.url + '/' + endpoint, body, reqOpts);
    };
    Api.prototype.put = function (endpoint, body, reqOpts) {
        return this.http.put(this.url + '/' + endpoint, body, reqOpts);
    };
    Api.prototype.delete = function (endpoint, reqOpts) {
        return this.http.delete(this.url + '/' + endpoint, reqOpts);
    };
    Api.prototype.patch = function (endpoint, body, reqOpts) {
        return this.http.put(this.url + '/' + endpoint, body, reqOpts);
    };
    Api = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], Api);
    return Api;
}());

//# sourceMappingURL=api.js.map

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_splash_screen__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_pages__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_providers__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = (function () {
    function MyApp(translate, platform, settings, config, statusBar, splashScreen) {
        var _this = this;
        this.translate = translate;
        this.config = config;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_pages__["a" /* FirstRunPage */];
        this.pages = [
            { title: 'Tutorial', component: 'TutorialPage' },
            { title: 'Welcome', component: 'WelcomePage' },
            { title: 'Tabs', component: 'TabsPage' },
            { title: 'Cards', component: 'CardsPage' },
            { title: 'Content', component: 'ContentPage' },
            { title: 'Login', component: 'LoginPage' },
            { title: 'Signup', component: 'SignupPage' },
            { title: 'Master Detail', component: 'ListMasterPage' },
            { title: 'Menu', component: 'MenuPage' },
            { title: 'Settings', component: 'SettingsPage' },
            { title: 'Marketplace', component: 'MarketplacePage' },
            { title: 'Search', component: 'SearchPage' }
        ];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
        this.initTranslate();
    }
    MyApp.prototype.initTranslate = function () {
        var _this = this;
        // Set the default language for translation strings, and the current language.
        this.translate.setDefaultLang('en');
        var browserLang = this.translate.getBrowserLang();
        if (browserLang) {
            if (browserLang === 'zh') {
                var browserCultureLang = this.translate.getBrowserCultureLang();
                if (browserCultureLang.match(/-CN|CHS|Hans/i)) {
                    this.translate.use('zh-cmn-Hans');
                }
                else if (browserCultureLang.match(/-TW|CHT|Hant/i)) {
                    this.translate.use('zh-cmn-Hant');
                }
            }
            else {
                this.translate.use(this.translate.getBrowserLang());
            }
        }
        else {
            this.translate.use('en'); // Set your language here
        }
        this.translate.get(['BACK_BUTTON_TEXT']).subscribe(function (values) {
            _this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["j" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["j" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            template: "<ion-menu [content]=\"content\">\n    <ion-header>\n      <ion-toolbar>\n        <ion-title>Pages</ion-title>\n      </ion-toolbar>\n    </ion-header>\n\n    <ion-content>\n      <ion-list>\n        <button menuClose ion-item *ngFor=\"let p of pages\" (click)=\"openPage(p)\">\n          {{p.title}}\n        </button>\n      </ion-list>\n    </ion-content>\n\n  </ion-menu>\n  <ion-nav #content [root]=\"rootPage\"></ion-nav>"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_6__providers_providers__["c" /* Settings */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["c" /* Config */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_1__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_api__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mocks_providers_items__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_settings__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_user__ = __webpack_require__(315);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__api_api__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__mocks_providers_items__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__settings_settings__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__user_user__["a"]; });





//# sourceMappingURL=providers.js.map

/***/ })

},[230]);
//# sourceMappingURL=main.js.map