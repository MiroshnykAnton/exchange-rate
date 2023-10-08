import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { forkJoin } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html',
  styleUrls: ['./conversion.component.css'],
})
export class ConversionComponent implements OnInit {
  form!: FormGroup;
  result: string = 'No current value';
  usdResponse!: any;
  eurResponse!: any;
  gbpResponse!: any;

  usdGbp = 0;
  eurGbp = 0; 

  constructor(private dataService: DataService) {}
  ngOnInit() {
    this.form = new FormGroup({
      amount: new FormControl('100', Validators.required),
      currency1: new FormControl('GBP', Validators.required),
      currency2: new FormControl('USD', Validators.required),
    });
    // console.log(this.form);
    forkJoin([
      this.dataService.getCurrencyData('USD'),
      this.dataService.getCurrencyData('EUR'),
      this.dataService.getCurrencyData('GBP'),
    ]).subscribe((data:any) => {
      const [usdResponse, eurResponse, gbpResponse] = data;
      this.usdResponse = usdResponse;
      this.eurResponse = eurResponse;
      this.gbpResponse = gbpResponse;
      this.usdGbp = usdResponse.rates['GBP'];
      this.eurGbp = eurResponse.rates['GBP'];
    });
  }

  onConvert() {
    const { amount, currency1, currency2 } = this.form.getRawValue();
    let rate;
    if (currency1 === 'USD') {
      rate = this.usdResponse.rates[currency2];
    }
    if (currency1 === 'EUR') {
      rate = this.eurResponse.rates[currency2];
    }
    if (currency1 === 'GBP') {
      rate = this.gbpResponse.rates[currency2];
    }
    this.result = (amount * rate).toFixed(2);
  }
}
