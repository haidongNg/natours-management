import { Component, OnInit } from '@angular/core';
import { ITour } from 'src/app/core/models';
import { ToursService } from 'src/app/core/services';
@Component({
  selector: 'app-tour-list',
  templateUrl: './tour-list.component.html',
  styleUrls: ['./tour-list.component.scss']
})
export class TourListComponent implements OnInit {
  tours: ITour[] = [];
  constructor(private _tourService: ToursService) { }

  ngOnInit(): void {
    this._tourService.getAllTour().subscribe(resp => this.tours = resp);
  }

}
