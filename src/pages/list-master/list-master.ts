import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Platform } from 'ionic-angular';
import { Api } from '../../providers/api/api';
import { Storage } from '@ionic/storage';
import { PricevaluePage } from '../pricevalue/pricevalue';


@IonicPage()
@Component({
  selector: 'page-list-master',
  templateUrl: 'list-master.html'
})
export class ListMasterPage {
  private transactions: any[] = [];
  private merchid: string;

  constructor(
    private storage:Storage,
    private loadingCtrl:LoadingController,
    public navCtrl: NavController,
    public navParams: NavParams,
    private autService: Api) {

  }

  async ionViewWillEnter() {

    const loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: `Please Wait..
          
          <div class="custom-spinner-container">
            <div class="custom-spinner-box"></div>
          </div>`
    });

    await this.storage.get('merchant').then((val) => {
      console.log('Your age is', val);
      this.merchid = val;
      
    });
    console.log(this.merchid);

    this.laodTransactions();
    
    loading.dismiss();
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

    let trans: any = await this.autService.serviceTransaction(databasecreds, "?getTransactionsMerch=" + "99");
    console.log(trans.results);

    this.transactions = trans.results;


  }

  async getMerchantData(id: string) {

    let databasecreds = {
      username: "merchantbackuser",
      password: "150498AV",
      reference: "",
      customerid: this.merchid,
      token: "",
      id: id
    };
    console.log(databasecreds);

    //let merch: any = await this.autService.serviceTransaction(databasecreds, "?getMerchant=" + "99");
    let merch: any = await this.autService.serviceTransaction(databasecreds, "?getMerchant=" + "99");

    console.log(merch);
    return merch;

  }

  addItem(){
    console.log("added");
    this.navCtrl.push(PricevaluePage);
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

  changeDate(date1:string){
    var a = new Date(Number(date1) * 1000);
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
  var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
  return time;

  }
}
