import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { PagesComponent } from './core/layouts';
import { Page404Component } from './pages/errors/page404/page404.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'tour-management',
        loadChildren: () => import('./pages/tour-management/tour-management.module').then(m => m.TourManagementModule),
      },
      {
        path: 'user-management',
        loadChildren: () => import('./pages/user-management/user-management.module').then(m => m.UserManagementModule),
      }
    ],
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: 'page-404',
    component: Page404Component,
    data: {
      title: 'Không tìm thấy trang yêu cầu'
    }
  },
  {
    path: "**",
    redirectTo: "page-404",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
