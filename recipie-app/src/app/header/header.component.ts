import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: '../header/header.component.html',
  styles: [],
  styleUrls: ['../header/header.component.scss'],
})
export class HeaderComponent {
  navbarCollapsed = true;
}
