import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav, App ,Platform, ToastController} from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Api } from '../../providers/api/api';
import { PricevaluePage } from '../pricevalue/pricevalue';
import { Storage } from '@ionic/storage';



export interface PageInterface {
  title: string;
  pageName: string;
  tabComponent?: any;
  index?: number;
  icon: string;
}

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  rootPage = 'HomePage';
  results: { text: string, format: string, cancelled: boolean };
  private merchid;

  private showReg:boolean=true;
  @ViewChild(Nav) nav: Nav;

  pages: PageInterface[] = [
    { title: 'Home', pageName: 'HomePage', icon: 'home' },
    //{ title: 'My Cards', pageName: 'PaymethodsPage', icon: 'card' },
    //{ title: 'My Certificates', pageName: 'SpecialPage', icon: 'paper' },
    { title: 'Recent Transactions', pageName: 'TransactionsPage', icon: 'pricetags' }
    
  ]
  constructor(
    private platform:Platform,
    private toasCtrl:ToastController,
    private alertCtrl: AlertController,
    private autService: Api,
    public navCtrl: NavController,
    public navParams: NavParams,
    public app: App) {
    this.merchid=this.navParams.get('id');
      //const browser = this.iab.create('https://ionicframework.com/');
  }

  async ionViewWillEnter(){


 }

  openPage(page: PageInterface) {
    let params = {};

    if (page.index) {
      params = { tabIndex: page.index , id:this.merchid};
      console.log(params);
    }

    if (this.nav.getActiveChildNav() && page.index != undefined) {
      this.nav.getActiveChildNav().select(page.index);
    } else {
      this.nav.setRoot(page.pageName, params);
    }
  }

  isActive(page: PageInterface) {
    let childNav = this.nav.getActiveChildNav();

    if (childNav) {
      if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
        return 'primary';
      }
      return;
    }
    if (this.nav.getActive() && this.nav.getActive().name === page.pageName) {
      return 'primary';
    }
  }

  async enterBarcode() {
    this.nav.push(PricevaluePage, {id:this.merchid});
  }

  async goToSearch() {
    this.nav.push("SearchPage");
  }

  async goToReferral() {
    this.nav.push("ReferalPage");
  }

  async goToRegistration() {
    this.nav.push("RegisteraffiliatePage");
  }


  doLogout() {

    let toast = this.toasCtrl.create({
      message: 'You have been succesfully logged out',
      duration: 3000,
      position: 'top'
    });
    toast.present();
    this.navCtrl.setRoot('LoginPage');
  }
}
