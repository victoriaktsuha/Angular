import { Component, OnInit } from '@angular/core';
import { AccountsService } from './accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [AccountsService],
})
export class AppComponent implements OnInit {
  accounts: { name: string; status: string }[] = [];
  // property: {obj.property: type, obj.property: type}[property type (array)] = [array value (empty)];

  constructor(private accountsService: AccountsService) {}

  ngOnInit() {
    this.accounts = this.accountsService.accounts;
  }
}
