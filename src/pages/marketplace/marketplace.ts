import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Api } from '../../providers/api/api';
import { Storage } from '@ionic/storage';


@IonicPage()
@Component({
  selector: 'page-marketplace',
  templateUrl: 'marketplace.html',
})
export class MarketplacePage {

  private merchid:String;

  constructor(public navCtrl: NavController, 
    private autService: Api,
    private alertctrl:AlertController,
    private storage:Storage,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MarketplacePage');
    this.storage.get('merchant').then((val) => {
      console.log('Your age is', val);
      this.merchid = val;
      
    });
    console.log(this.merchid);
  }
  async addCoupon(value: any) {
    console.log(value.coupon);

    let databasecreds =
    {
      username: 'merchantApp'
    };

    let param = "coupon_code="+value.coupon+
                "&redeeming_merchant="+this.merchid;

    let coupon:any = await this.autService.serviceMarketplace(databasecreds,'redeemCoupon.php?'+param);
    let alert = this.alertctrl.create({
      title: 'Marketplace Info',
      subTitle: coupon.message,
      buttons: ['OK']
    });
    alert.present();
  }

}
