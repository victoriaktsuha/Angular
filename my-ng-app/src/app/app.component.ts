import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
  /* styles: [
    `
      h3 {
        color: dodgerblue;
      }
    `
  ] */
})
export class AppComponent {
  title = 'My Angular Journey 📚';

  username = '';

  showSecret = false;
  log = [];

  onReset(event: Event) {
    this.username = '';
  }

  onToggleDetails() {
    this.showSecret = !this.showSecret;
    // it means that if is hidden, will be displayed, and if its displayed, it eill be hidden - an easy way to toggle
    //this.log.push(this.log.length + 1);
    // It will add a item to the current lenght of the array - if its 1, it will be 2, if its 2, it will be three ...

    //Solution to index
    this.log.push(new Date());
  }
}
