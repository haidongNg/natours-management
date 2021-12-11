import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TourManagementRoutingModule } from './tour-management-routing.module';
import { TourManagementComponent } from './tour-management.component';
import { PopupComponent } from 'src/app/core/components';
import { TourListComponent } from './tour-list/tour-list.component';


@NgModule({
  declarations: [
    TourManagementComponent,
    PopupComponent,
    TourListComponent,
  ],
  imports: [
    CommonModule,
    TourManagementRoutingModule
  ]
})
export class TourManagementModule { }
