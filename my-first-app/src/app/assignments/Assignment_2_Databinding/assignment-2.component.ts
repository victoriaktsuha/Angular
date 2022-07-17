import { Component } from '@angular/core';

@Component ({
    selector: 'app-assign-2',
    templateUrl: './assignment-2.component.html',
})

export class Assign2Component {
    username = '';
    allowUsernameButton:boolean = false;

    
    allowUsernameType(){
        this.allowUsernameButton = true;
    }

    onUsernameCreate(){
        this.username = '';
        this.allowUsernameButton = false;
    } 
}