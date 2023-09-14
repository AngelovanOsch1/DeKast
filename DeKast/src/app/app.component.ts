import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'DeKast';
  showHeaderAndFooter: boolean = true;

  constructor(private router: Router) { }

  async ngOnInit(): Promise<any> {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Exclude the header and footer on specific pages
        const excludePages = ['/login', '/register'];
        this.showHeaderAndFooter = !excludePages.includes(event.url);
      }
    });
  }
}
