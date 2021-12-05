import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTourComponent } from './create-tour/create-tour.component';
import { TourListComponent } from './tour-list/tour-list.component';
import { TourManagementComponent } from './tour-management.component';

const routes: Routes = [
  {
    path: '',
    component: TourManagementComponent,
    children: [
      {
        path: 'list',
        component: TourListComponent,
      },
      {
        path: 'create',
        component: CreateTourComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TourManagementRoutingModule { }
