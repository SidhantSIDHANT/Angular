import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-process-travelling',
  templateUrl: './process-travelling.component.html',
  styleUrls: ['./process-travelling.component.scss']
})
export class ProcessTravellingComponent implements OnInit {
  isActive : number = 1;
  days !: Array<{days : string, id ?: number}>;
  isPlansVisibleMode : boolean = false;
  searchKey !: string;

  constructor(private _apiService: ApiService, private router : Router) {
  }

  ngOnInit(): void {
    this.travellingDaysData();  
   }

   travellingDaysData():void{
     this.days = this._apiService.getTravellingDays();
   }

  plansActive(id: any): void {
    this.isActive = id;
  }

  onOpenBestPlans():void{
    this.isPlansVisibleMode = true;
  }
}
