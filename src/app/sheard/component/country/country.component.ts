import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {

  countries: any = [];
  searchKey: string = "";

  constructor(private _apiService: ApiService, private router: Router) {
  }

  ngOnInit(): void {
    this._apiService.getCountry()
      .subscribe((data) => {
        this.countries = data;
        // data.forEach((element: any, i: any) => {
        //   if (element.ccn3 > 200 && element.ccn3 < 230) {
        //     this.countries.push(element)
        //   }
        // })
      })
  }

  keyEnter(enter: any): void {
    // if (enter) {
    //   if (this.searchKey) {
    //     this.isTravellingMode = false;
    //     this.countries = this.countries.filter((element: any) => {
    //       return element.name.common.toLowerCase().includes(this.searchKey.toLowerCase())
    //     })
    //   }
    // }
  }

  onSingleCountryClick(element: any): void {
    if (element) {
      this.searchKey = element.target.innerText;
      this.router.navigate(["/plains"])
    }
  }
}
