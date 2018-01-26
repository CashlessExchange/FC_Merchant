import { Component } from '@angular/core';
import { IonicPage, NavController, Platform, NavParams, ToastController, AlertController} from 'ionic-angular';
import { Api } from '../../providers/api/api';
import { QRCodeModule } from 'angular2-qrcode';

@IonicPage()
@Component({
  selector: 'page-qrcode',
  templateUrl: 'qrcode.html',

})


export class QrcodePage {

  private ref:string;
  private merchid:string;
  constructor(public navCtrl: NavController,
    public alertCtrl:AlertController,
    public toastCtrl: ToastController,    
    private autService: Api,    
    public navParams: NavParams) {
    this.ref = navParams.get('ref');
    this.merchid = navParams.get('merchant');

    this.checkStatus();
  }

  async checkStatus(){
    let databasecreds =
    {
      username: "freedom-app",
      password: "150498AV",
      reference: this.ref,
      //customerid: this.customerid,
      merchantid: this.merchid,
      //transaction: "32423"
    };

    let i = 0
    let finished :boolean = false;
    while (i < 90 && !finished) {
      let result:any = await this.autService.serviceTransaction(databasecreds, "?getTransactions2=" + this.ref);
      console.log(result.results);
      console.log(result.results.canceled );
      if (result.results.canceled ==='1'){
        finished=true;
        this.navCtrl.popToRoot();
        let alert = this.alertCtrl.create({
          title: 'Attention',
          subTitle: 'Your Transaction got cancelled!',
          buttons: ['OK']
        });
        alert.present();

      }
      if (result.results.cash === '1'){
        finished=true;
        let sub:string= 'Please Collect the amount of $'+this.addPoint(result.results.value)+' and press Paid if you have collected the Money.';
        this.navCtrl.popToRoot();
        let alert = this.alertCtrl.create({
          title: 'Cash Payment',
          subTitle: sub,
          buttons: ['PAID']
        });
        alert.present();

      }

      if (result.results.card_type !== '' && result.results.cash === '0'){
        finished=true;
        let sub:string= 'Your Customer paid with Card. Cardtype: '+result.results.card_type;
        this.navCtrl.popToRoot();
        let alert = this.alertCtrl.create({
          title: 'Card Payment',
          subTitle: sub,
          buttons: ['OK']
        });
        alert.present();

      }
      await delay(10000);      
      i++;
    }

    function delay(ms: number) {
      return new Promise(resolve => setTimeout(resolve, ms));
  }

    

  }

  addPoint(num) {
    let temp = num.toString();
    if (temp.length === 1) {
      temp = "0.0" + temp;
    } else if (temp.length === 2) {
      temp = "0." + temp;
    }
    else {
      let lengthnum = temp.length;
      temp = temp.substring(0, lengthnum - 2) + "." + temp.substring(lengthnum - 2, lengthnum);
    }
    return temp;
  }

}
