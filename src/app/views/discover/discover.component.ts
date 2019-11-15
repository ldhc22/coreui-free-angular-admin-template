import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  templateUrl: './discover.component.html'
})
export class DiscoverComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    let currentRoute = this.route.root;
    do {
      const childRoutes = currentRoute.children;
      currentRoute = null;
      childRoutes.forEach(r => {
        if (r.outlet === 'primary') {
          console.log('Route %o Data %o Url %o', r.snapshot.url, r.snapshot.data, r.snapshot.url.map(segment => segment.path).join('/'));
          currentRoute = r;
        }
      });
    } while (currentRoute);

  }
}
