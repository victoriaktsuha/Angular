import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.scss'],
  styles: [
    `
      h3 {
        color: dodgerblue;
      }
    `
  ]
})
export class AppComponent {
  title = 'my-ng-app';
}
