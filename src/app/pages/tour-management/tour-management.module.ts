import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TourManagementRoutingModule } from './tour-management-routing.module';
import { TourManagementComponent } from './tour-management.component';
import { PopupComponent } from 'src/app/core/components';
import { TourListComponent } from './tour-list/tour-list.component';
import { CreateTourComponent } from './create-tour/create-tour.component';


@NgModule({
  declarations: [
    TourManagementComponent,
    PopupComponent,
    TourListComponent,
    CreateTourComponent,
  ],
  imports: [
    CommonModule,
    TourManagementRoutingModule
  ]
})
export class TourManagementModule { }
