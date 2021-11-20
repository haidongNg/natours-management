import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'natours-management';
  constructor(private _router: Router) {}

  ngOnInit() {
    this._router.events.subscribe((route) => {
      if (route instanceof NavigationStart) {

      }

      if (route instanceof NavigationEnd) {

      }
    });
  }

}
