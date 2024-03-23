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
  
  isActive: number = 1;
  days !: Array<{ days: string, id?: number }>;
  isPlansVisibleMode: boolean = false;

  constructor(
    private _apiService: ApiService,
    private router: Router,
    private _subjectService: SubjectService
  ) {
  }

  ngOnInit(): void {
    this.travellingDaysData();
  }

  fetchSubscriber(): void {
    this._subjectService.getSubscriber().subscribe((data: boolean) => {
      this.isPlansVisibleMode = data;
    })
  }

  async travellingDaysData(): Promise<void> {
    try {
      this.days = await this._apiService.getTravellingDays();
      this.fetchSubscriber();
    } catch (err) {
      alert("504 Gateway Timeout Error") // use snack-bar also for error
    }
  }

  plansActive(id: any): void {
    this.isActive = id;
    // this.isPlansVisibleMode= true; // click on plans open card template view
  }

  onOpenBestPlans(): void {
    this.isPlansVisibleMode = true;
  }
}
