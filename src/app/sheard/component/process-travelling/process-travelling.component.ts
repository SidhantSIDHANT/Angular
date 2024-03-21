import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { Router } from '@angular/router';
import { SubjectService } from '../../service/subject.service';

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

  constructor(
    private _apiService: ApiService,
     private router : Router,
    private _subjectService : SubjectService
     ) {
  }

  ngOnInit(): void {
    this.travellingDaysData(); 
    this._subjectService.getSubscriber().subscribe((data:boolean)=>{
      this.isPlansVisibleMode = data;
      console.log(data)
    })
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
