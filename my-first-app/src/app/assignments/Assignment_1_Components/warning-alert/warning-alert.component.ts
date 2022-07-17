import { Component } from "@angular/core";

@Component({
    selector:'app-warning-alert',
    template:`
        <p>This is a warning! You're in danger !</p>
    `,
    styles:[`
        p{
            color: red;
            border: 1px solid red;
            padding:20px;
            background-color: #f7dbcf;
        }
    `],
})

export class WarningAlertComponent{

}