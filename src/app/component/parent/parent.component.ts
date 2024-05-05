import { Component } from '@angular/core';
import {User} from "../../resource/User";

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  user = new User("Sachith Ariyathilaka", 28);

  receiveMessage(message: string) {
    alert(message);
  }
}
