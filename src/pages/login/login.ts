import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController, Platform } from 'ionic-angular';
import { User } from '../../providers/providers';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio';
import { MainPage } from '../pages';
import { Storage } from '@ionic/storage';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  account: { email: string, password: string } = {
    email: '',
    password: ''
  };

  // Our translated text strings
  private loginErrorString: string;
  private merchid: string;

  constructor(public navCtrl: NavController,
    private fingerprint: FingerprintAIO,
    private storage:Storage,
    public user: User,
    public platform: Platform,
    public toastCtrl: ToastController,
    public translateService: TranslateService) {

    this.translateService.get('LOGIN_ERROR').subscribe((value) => {
      this.loginErrorString = value;
    })
    this.platform.ready().then((ready) => {
      this.checkData();
      
    });
  }

  async setData(merchid:string) {

    this.storage.set('merchant', merchid);
    this.storage.set('loginnameMerch', merchid);
  

  }

  async checkData() {
    if (!this.platform.is('core')) {

     await this.storage.get('loginname').then((val) => {
      if (val != null && val != undefined) {
        this.account.email = val;
      }
      });

      await this.storage.get('merchant').then((val) => {
        if (val != null && val != undefined) {
          this.merchid = val;
          
          this.fingerprintLogin();        }
        });

    }
  }

  async fingerprintLogin() {
    await this.fingerprint.isAvailable().then(result => {

      this.fingerprint.show({
        clientId: "freedom-choice",
        clientSecret: "password",
        localizedReason: "please authenticate"
      }).then(result => {
        this.navCtrl.setRoot(MainPage);
      }).catch((err) => {
        console.log(err);
      });
    });
  }

  // Attempt to login in through our User service
  doLogin() {

    let type = "merchantLogin.php?email=" + this.account.email + "&password=" + this.account.password;

    this.user.login(this.account, type).subscribe((resp: any) => {

      if (resp.status === "Success" && resp.message === "Merchant logged in successfully") {
        let merchid:string = resp.merchantId;       
        this.platform.ready().then((ready) => {
          //this.storage.set('merchant', merchid);
          
          this.setData(merchid);
          
        }); 

        this.navCtrl.setRoot(MainPage);
      } else {
        let toast = this.toastCtrl.create({
          message: "Username or Password wrong",
          duration: 3000,
          position: 'top'
        });
        toast.present();
      }

      //this.navCtrl.push(MainPage);
    }, (err) => {
      console.log(err);
      //this.navCtrl.push(MainPage);

      // Unable to log in
      let toast = this.toastCtrl.create({
        message: this.loginErrorString,
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });
  }

  doSignup() {
    this.navCtrl.push('SignupPage');
  }

  getPassword() {
    this.navCtrl.push('PasswordPage');
  }
}
