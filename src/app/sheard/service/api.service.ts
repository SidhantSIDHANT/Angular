import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


@Injectable({
  providedIn: "root"
})
export class ApiService {
  url: string = `https://restcountries.com/v3.1/all`;

  days: Array<{ days: string, id: number }> = [
    { days: "7-15 days", id: 1, },
    { days: "15-30 days", id: 2 },
    { days: "35-45 days", id: 7 },
    { days: "45-60 days", id: 3 },
    { days: "60-90 days", id: 6 },
  ]

  constructor(private _http: HttpClient) { }

  getCountry(): Observable<any> {
    let headers = new HttpHeaders({
      "contant-type": "application/json"
    })
    return this._http.get(this.url)
  }

  getTravellingDays(): Promise<any> {
    return new Promise((resolve, reject) => {
      if (this.days) {
        resolve(this.days)
      } else {
        reject("database connectivity error")
      }
    })
  }
}