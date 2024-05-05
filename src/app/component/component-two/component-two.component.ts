import { Component } from '@angular/core';
import {UserService} from "../../service/user-service";
import {User} from "../../resource/User";

@Component({
  selector: 'app-component-two',
  templateUrl: './component-two.component.html',
  styleUrls: ['./component-two.component.css']
})
export class ComponentTwoComponent {
  user: User | undefined;

  constructor(private userService: UserService) {
    this.userService.users$.subscribe((user => {
      this.user = user;
    }));
  }
}
