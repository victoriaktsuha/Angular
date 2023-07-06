import { Injectable } from '@angular/core';
@Injectable()
// Is a good practice to always add @Injectale, even if you won't use it
export class LoggingService {
  logStatusChange(status: string) {
    console.log('A server status changes, new status: ' + status);
  }
}
