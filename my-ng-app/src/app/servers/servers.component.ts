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
  serverName = '';
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {}

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is' + this.serverName;
  }
  //Beggining the method name with 'on..' make more easy to know that is a event binding, some reaction to user action
  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
    //(<HTMLInputElement>event.target) is needed to inform TS that we know that the type of the HTML element of this event will be a HTML input element
  }
}
