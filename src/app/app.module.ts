import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpinnerComponent, NotificationComponent, DropdownComponent } from './core/components';
import { ErrorInterceptor } from './core/interceptors';
import { HeaderComponent, NavbarComponent, PagesComponent } from './core/layouts';
import { Page404Component } from './pages/errors/page404/page404.component';


@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    NotificationComponent,
    PagesComponent,
    NavbarComponent,
    HeaderComponent,
    DropdownComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
