import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
//import { HttpModule } from '@angular/http';
import { Assign2Component } from './assignments/Assignment_2_Databinding/assignment-2.component';
import { Assign3Component } from './assignments/Assignment_3_Directives/assignment-3.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WarningAlertComponent } from './assignments/Assignment_1_Components/warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './assignments/Assignment_1_Components/success-alert/success-alert.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    Assign2Component,
    Assign3Component,
    WarningAlertComponent,
    SuccessAlertComponent

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }