import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

/**
 * Api is a generic REST Api handler. Set your API url first.
 */
@Injectable()
export class Api {
  url: string = 'https://example.com/api/v1';
  merchantApiLogin = "http://www.cashlessexchange-sb.com/cashlessmerchant/api/merchant/";
  loginApi = "http://173.212.238.108/api/";
  tokenex = "https://test-api.tokenex.com/TokenServices.svc/REST/";
  marketplaceApi = "http://www.cashlessexchange-sb.com/cashlessmerchant/api/marketplace/";
  transactioApi = "http://173.212.238.108/api/freedomchoice.php";
  //transactioApi = "https://cashlessexchange-sb.com/cashlessexchangeaffiliate/api/freedomchoiceforte/freedomchoice.php";
  
  //cardServiceApi = "http://173.212.238.108/api/card_service.php";
  //cardServiceApi = "https://cashlessexchange-sb.com/cashlessexchangeaffiliate/api/freedomchoiceforte/card_service.php";
  
  //certServiceApi = "https://cashlessexchange-sb.com/cashlessexchangeaffiliate/api/freedomchoiceforte/cert_service.php";
  //certServiceApi = "http://173.212.238.108/api/cert_service.php";
  
  //merchantServiceApi = "http://173.212.238.108/api/merchant_fees.php";
  merchantServiceApi = "https://cashlessexchange-sb.com/cashlessexchangeaffiliate/api/freedomchoiceforte/merchant_fees.php";
  affiliateApi= "https://cashlessexchange-sb.com/cashlessexchangeaffiliate/api/affiliate_freedomchoice_commission.php";
  //affiliateApi= "http://173.212.238.108/api/affiliate_freedomchoice_commission.php";

  refermailApi = "https://cashlessexchange-sb.com/cashlessexchangeaffiliate/api/affiliate_freedomchoice_referralmail.php";
  //refermailApi = "http://173.212.238.108/api/affiliate_freedomchoice_referralmail.php";
  
  registerAffiliateApi = "https://cashlessexchange-sb.com/cashlessexchangeaffiliate/api/affiliate_freedomchoice_registercustomerasaffiliate.php";
  //registerAffiliateApi = "http://173.212.238.108/api/affiliate_freedomchoice_registercustomerasaffiliate.php";
  
  freedomApi: string = "http://cashlessexchange-sb.com/marketplace/webservices/";
  freedomTemp = "http://173.212.238.108/api/";
  
  googleMapsApi = "https://maps.googleapis.com/maps/api/geocode/json?address=";
  constructor(public http: HttpClient) {
  }

  serviceTransaction(credentials, type) {
    console.log("in service" + type);
    let response: { id: string, value: string };
    return new Promise(resolve => {
      this.http.post(this.transactioApi + type, JSON.stringify(credentials))
        .map(res  => res).subscribe(data => {
          data;
          console.log(response);
          resolve(data);
        })
    });
  }
  serviceMarketplace(credentials, type) {
    let response: { success: number, message: string };

    return new Promise(resolve => {
      this.http.post(this.marketplaceApi + type, "")
      .map(res => res).subscribe(data => {
          data;
          console.log(response);
          resolve(data);
        })
    });

  }
  serviceFreedom(credentials, type) {
    let response: { success: number, message: string };

    return new Promise(resolve => {
      this.http.post(this.freedomTemp + type, "")
      .map(res => res).subscribe(data => {
          data;
          console.log(response);
          resolve(data);
        })
    });

  }

  login(credentials, type) {
    return this.http.post(this.merchantApiLogin + type, "")
  }

  get(endpoint: string, params?: any, reqOpts?: any) {
    if (!reqOpts) {
      reqOpts = {
        params: new HttpParams()
      };
    }

    // Support easy query params for GET requests
    if (params) {
      reqOpts.params = new HttpParams();
      for (let k in params) {
        reqOpts.params.set(k, params[k]);
      }
    }

    return this.http.get(this.url + '/' + endpoint, reqOpts);
  }

  post(endpoint: string, body: any, reqOpts?: any) {
    return this.http.post(this.url + '/' + endpoint, body, reqOpts);
  }

  put(endpoint: string, body: any, reqOpts?: any) {
    return this.http.put(this.url + '/' + endpoint, body, reqOpts);
  }

  delete(endpoint: string, reqOpts?: any) {
    return this.http.delete(this.url + '/' + endpoint, reqOpts);
  }

  patch(endpoint: string, body: any, reqOpts?: any) {
    return this.http.put(this.url + '/' + endpoint, body, reqOpts);
  }
}
