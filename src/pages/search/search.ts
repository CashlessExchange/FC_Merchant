import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Platform, ToastController} from 'ionic-angular';
import { Api } from '../../providers/api/api';
import { Item } from '../../models/item';
import { Items } from '../../providers/providers';
import { Storage } from '@ionic/storage';


@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {

  private merchid: string = "";
  //private locationid: string = "";
  private customer: any;
  private certificates: any;
  private logo: string = "";
  private splitted: string[] = [];
  //private certs: any = [];
  private transactions: any[] = [];
  private merch:any={
    merchantlogo: this.logo
  
  };


  constructor(
    public platform: Platform,
    private auth: Api,
    private storage:Storage,
    public navCtrl: NavController,
    public toastctrl:ToastController,
    public navParams: NavParams,
    private loadingCtrl: LoadingController) {
      
    storage.get('merchant').then((val) => {
      console.log('Your age is', val);
      this.merchid = val;
      
    });
    console.log(this.merchid);
    this.getMerchantData();


  }
  async ionViewWillEnter() {

    const loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: `Please Wait..
          
          <div class="custom-spinner-container">
            <div class="custom-spinner-box"></div>
          </div>`
    });

    await this.getMerchantData();
    
    await this.laodTransactions();
    
    loading.dismiss();
  }

  async readCustomerData() {

    //await this.storage.ready().then((data) => {
    //  data.setItem('user-id', "44");
    //});




    let type = "customer_data.php?customerid=" + this.merchid;
    console.log(type);
    this.customer = await this.auth.serviceFreedom("", type);
    console.log(this.customer);

  }


  async getMerchantData() {

    let databasecreds = {
      username: "merchantbackuser",
      password: "150498AV",
      reference: "",
      token: "",
      id: this.merchid
    };
    console.log(databasecreds);

    let merch: any = await this.auth.serviceTransaction(databasecreds, "?getMerchant=" + "99");
    console.log(merch);

    this.merch.merchantname = merch.name;
    if (merch.logo != undefined) {

      this.merch.merchtlogo = merch.logo;
    }
    this.merch.merchantaddress = merch.address;
    this.merch.merchantmail = merch.mail;

  }



  async laodTransactions() {



    let databasecreds = {
      username: "freedom-app",
      password: "150498AV",
      reference: "",
      merchantid: this.merchid,
      token: ""
    };
    console.log(databasecreds);

    let trans: any = await this.auth.serviceTransaction(databasecreds, "?getTransactionsMerch=" + "99");
    console.log(trans.results);

    
    this.transactions = trans.results;
    if (this.transactions != undefined) {

      let length = this.transactions.length;
      if (length > 5) {
        console.log(this.transactions.slice(length - 4, length));
        this.transactions = this.transactions.slice(length - 4, length);
      }
    }


  }


  filter(value: string) {
    if (value === "1") {
      return "yes";
    }
    else {
      return "no";
    }
  }

  addPoint(num) {
    console.log(num);
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

  exit(){
    console.log("exit");
    let toast = this.toastctrl.create({
      message: 'You have been succesfully logged out',
      duration: 3000,
      position: 'top'
    });
    toast.present();
    this.navCtrl.setRoot('LoginPage');
  
  }

}
