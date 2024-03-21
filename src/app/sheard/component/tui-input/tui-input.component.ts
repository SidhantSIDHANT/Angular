import { Component, DoCheck, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tui-input',
  templateUrl: './tui-input.component.html',
  styleUrls: ['./tui-input.component.scss']
})
export class TuiInputComponent implements OnInit {
  searchKey: string = "";
  searchTravellingKey !: string;
  @Input("search") search !: string;
  @Output() searchKeyEvent = new EventEmitter();
  isVisibleMode !: false;

  constructor(private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getQueryParams();
  }

  getQueryParams(): void {
    this._route.queryParams.subscribe((data) => {
      if (data) {
        this.isVisibleMode = data['param'];
        this.searchKey = data['plane'];
      }
    })
  }

  onChanges(): void {
    this.searchKeyEvent.emit(this.searchKey);
  }
}
