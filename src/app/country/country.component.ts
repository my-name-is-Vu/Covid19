import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss'],
})
export class CountryComponent implements OnChanges {
  @Input() VNData: any;
  constructor() {}

  ngOnChanges() {
    console.log(this.VNData);
  }
}
