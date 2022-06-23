import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  //selector: '[app-servers]',
  //selector: '.app-servers',
  /*template: '<app-server></app-server><app-server></app-server>',*/
  /* template: `
    <app-server></app-server>
    <app-server></app-server>`, */
    templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {
  allowNewServer:boolean = false;
  serverCreationStatus:string = 'No server was created!';
  serverName = '';
  /* username = '';
  allowUsernameButton:boolean = false; */
  serverCreated:boolean = false;

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    },2000);
  }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreated = true;
    this.serverCreationStatus = 'Server was created! Name is '+ this.serverName;
  }

  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }
  /* Assignment 2 My solution */
  /*allowUsernameType(){
    this.allowUsernameButton = true;
  }

  onUsernameCreate(){
    this.username = '';
    this.allowUsernameButton = false;
  } */

}
