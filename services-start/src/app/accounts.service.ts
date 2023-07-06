import { Injectable } from '@angular/core';
import { LoggingService } from './logging.service';

@Injectable()
// The @Injectable decorator must be present in the service that will receive the injected service, in this case, 'LoggingService'
export class AccountsService {
  accounts = [
    {
      name: 'Master Account',
      status: 'active',
    },
    {
      name: 'Testaccount',
      status: 'inactive',
    },
    {
      name: 'Hidden Account',
      status: 'unknown',
    },
  ];
  constructor(private loggingService: LoggingService) {}
  addAccount(name: string, status: string) {
    this.accounts.push({ name: name, status: status });
    this.loggingService.logStatusChange(status);
  }
  updateStatus(id: number, status: string) {
    this.accounts[id].status = status;
  }
}
