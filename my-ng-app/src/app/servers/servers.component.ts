import {Component, OnInit} from '@angular/core';

@Component({
  // selector: '.app-servers',
  //selector: '[app-servers]',
  selector: 'app-servers',
  //template: `<app-server></app-server><app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {}

  onCreateServer() {
    this.serverCreationStatus = 'Server was created!';
  }
  //Beggining the method name with 'on..' make more easy to know that is a event binding, some reaction to user action
}
