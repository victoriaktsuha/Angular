import { Component } from '@angular/core';

@Component ({
    selector: 'app-assign-3',
    templateUrl: './assignment-3.component.html',
})

export class Assign3Component {
    showSecret = false;
    log = [];

    onToggleDetails() {
        this.showSecret = !this.showSecret;
        this.log.push(this.log.length + 1);
    }
}