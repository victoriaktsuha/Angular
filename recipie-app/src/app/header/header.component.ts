import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: '../header/header.component.html',
  styles: [],
  styleUrls: ['../header/header.component.scss'],
})
export class HeaderComponent {
  navbarCollapsed = true;

  @Output() featureSelected = new EventEmitter<string>();

  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }
}
