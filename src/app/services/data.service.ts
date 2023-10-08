import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {

  constructor(public http: HttpClient) {}

  getCurrencyData(currency: string = 'USD'): any {
    // mock response
    // return of({
    //   base: 'USD',
    //   timestamp: 1692914400,
    //   rates: {
    //     EUR: 0.925240562546262,
    //     USD: 1,
    //     JPY: 145.95669874167282,
    //     BGN: 1.8095854922279793,
    //     CZK: 22.3140266469282,
    //     DKK: 6.896465581051073,
    //     GBP: 0.7924037749814952,
    //     HUF: 353.23834196891187,
    //     PLN: 4.134900074019245,
    //     RON: 4.569763138415988,
    //     SEK: 11.005736491487786,
    //     CHF: 0.884900074019245,
    //     ISK: 132.4019245003701,
    //     NOK: 10.656920799407846,
    //     TRY: 26.47705403404885,
    //     AUD: 1.555236861584012,
    //     BRL: 4.859733530717987,
    //     CAD: 1.3575129533678756,
    //     CNY: 7.2893227239082155,
    //     HKD: 7.843264248704663,
    //     IDR: 15286.001110288675,
    //     ILS: 3.7933012583271655,
    //     INR: 82.62768319763138,
    //     KRW: 1323.6306439674315,
    //     MXN: 16.769337527757216,
    //     MYR: 4.639988897113249,
    //     NZD: 1.6883789785344188,
    //     PHP: 56.64970392301998,
    //     SGD: 1.3546447076239823,
    //     THB: 35.06476683937824,
    //     ZAR: 18.650814211695042,
    //   },
    // });

      return this.http.get(`https://exchange-rate.unicornapi.co/v1/latest?api_key=rXAaLxOn9rK1vCSNAmYYFfs0GkrWbFVA&base=${currency}`);
  }

}
