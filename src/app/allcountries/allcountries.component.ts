import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-allcountries',
  templateUrl: './allcountries.component.html',
  styleUrls: ['./allcountries.component.scss'],
})
export class AllcountriesComponent implements OnChanges {
  @Input() allCountriesData: any;
  constructor() {}

  ngOnChanges() {
    // sort increase of Covid19
    this.allCountriesData.sort((a: any, b: any) => {
      return a.TotalConfirmed - b.TotalConfirmed;
    });
    // console.log(this.allCountriesData);
  }
}
