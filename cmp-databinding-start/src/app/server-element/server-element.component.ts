import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
})
export class ServerElementComponent {
  @Input('srvElement') element: { type: string; name: string; content: string };
  // Type, name and content are not value, they're like types. Value belong to the 'right' side of the equal sign '='; Before that, we're defining types
}
