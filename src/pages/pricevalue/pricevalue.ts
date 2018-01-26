import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, ToastController } from 'ionic-angular';
import { QrcodePage } from '../qrcode/qrcode';
import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';
import { Api } from '../../providers/api/api';

/**
 * Generated class for the PricevaluePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pricevalue',
  templateUrl: 'pricevalue.html',
})

export class PricevaluePage {

  private merchid: string;
  private merchantid: string;
  private dealid: string;
  
  private reference: string;
  private discount: string;
  private vaucherid: string;
  private encodedData:any;
  constructor(
    private platform: Platform,
    private autService: Api,
    private storage: Storage,
    private toastCtrl: ToastController,
    private alertCtrl: AlertController,
    public nav: NavController,
    public navParams: NavParams) {
    this.merchid = this.navParams.get('id');
      storage.get('merchant').then((val) => {
        console.log('Your age is', val);
        this.merchid = val;
        
      });
    console.log(this.navParams);


    //this.merchantid = navParams.get('merchant');
  }
  async ionViewWillEnter() {
    this.dealid = this.merchid + this.merchantid + this.makeid();
    this.reference = String(Math.floor(Math.random() * 90000) + 10000);


  }

  async addPrice(value: any) {
    console.log(value);

    let price: string = value.price;
    price = price.replace(",", ".");
    console.log(price.indexOf('.') !== -1);

    if (price.indexOf('.') === -1) {
      console.log(price);
      price = price + ".00";
    }
    let calculated:number =0;

    this.lastSTep(value,price);


  }

  async lastSTep(value: any, price){

    let priceForDb = price.replace(".", "");
    console.log(this.discount);
    this.reference = this.makeid()

    let databasecreds =
      {
        username: "freedom-app",
        password: "150498AV",
        reference: this.reference,
        value: priceForDb,
        //customerid: this.customerid,
        merchantid: this.merchid,
        //transaction: "32423"
      };
    let result = await this.autService.serviceTransaction(databasecreds, "?addTransaction=" + this.reference);
    console.log(result);
      //this.barcode.encode(this.barcode.Encode.TEXT_TYPE, this.reference);

    this.nav.push(QrcodePage, { ref: this.reference , merchant:this.merchid});
  }

  makeid() {
    var text = "";
    var possible = "0123456789";

    for (var i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }

}
