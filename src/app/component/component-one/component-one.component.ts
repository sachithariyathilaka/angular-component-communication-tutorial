import { Component } from '@angular/core';
import {UserService} from "../../service/UserService";
import {User} from "../../resource/User";

@Component({
  selector: 'app-component-one',
  templateUrl: './component-one.component.html',
  styleUrls: ['./component-one.component.css']
})
export class ComponentOneComponent {

  constructor(private userService: UserService) {
    let user = new User("Sachith Ariyathilaka", 28);
    this.userService.addUser(user);
  }
}
