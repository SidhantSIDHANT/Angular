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
  search: string = "";

  constructor(private _apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.fetchCountry();
  }

  fetchCountry(): void {
    this._apiService.getCountry()
      .subscribe((data) => {
        this.countries = data;
      })
  }

  keyEnter(enter: any): void { }

  searchEvent(key: any): void {
    this.search = key;
  }

  onSingleCountryClick(element: any): void {
    if (element) {
      this.search = element.target.innerText;
      setTimeout(() => {
        this.router.navigate(["/plains"], {
          queryParams: {
            param: true, plane: this.search
          }
        })
      }, 500)
    }
  }
}
