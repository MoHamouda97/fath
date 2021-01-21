import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'spa';

  constructor(private router: Router) { }

  ngOnInit() {    
    this.router.events.subscribe((evt) => {
        if (!(evt instanceof NavigationEnd)) {
            return;
        }
        $("html, body").animate({ scrollTop: 0 }, 0);
    });
  } 
}
