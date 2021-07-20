import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  globalData: any = {};
  // allCountriesData should be [] because NgFor only supports binding to Iterables such as Array
  allCountriesData: any = [];
  VNData: any = {};
  constructor(public http: HttpClient) {
    this.http
      .get('https://api.covid19api.com/summary')
      .subscribe((value: any) => {
        this.globalData = value.Global;
        console.log(this.globalData);
        this.allCountriesData = value.Countries;

        this.allCountriesData.forEach((countryList: any) => {
          if (countryList.CountryCode == 'VN') {
            this.VNData = countryList;
          }
        });
      });
  }
}
