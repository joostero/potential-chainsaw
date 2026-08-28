import { Component } from '@angular/core';
import { NgbNavConfig, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [NgbNavModule],
  templateUrl: './navigation.html',
  styleUrl: './navigation.scss',
  providers: [NgbNavConfig],
})
export class Navigation {
  constructor(nav: NgbNavConfig) {
		// customize default values of navs used by this component tree
		nav.destroyOnHide = false;
		nav.roles = false;
	}
}
