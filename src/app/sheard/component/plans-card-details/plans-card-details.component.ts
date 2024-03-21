import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../../service/subject.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plans-card-details',
  templateUrl: './plans-card-details.component.html',
  styleUrls: ['./plans-card-details.component.scss']
})
export class PlansCardDetailsComponent implements OnInit {

  constructor(
    private _subjectService: SubjectService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  isNavigatePage(): void {
    this.router.navigate(["/plains"])
    setTimeout(() => {
      this._subjectService.sendToSubscriber(true);
    }, 0)
  }

}
