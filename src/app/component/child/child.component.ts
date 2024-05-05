import {Component, EventEmitter, Input, Output} from '@angular/core';
import {User} from "../../resource/User";

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() data: User | undefined;
  @Output() message = new EventEmitter<string>();

  onAlert() {
    this.message.emit("This message is from child!");
  }
}
