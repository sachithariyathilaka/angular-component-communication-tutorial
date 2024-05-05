import {Injectable} from "@angular/core";
import {User} from "../resource/User";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user = new BehaviorSubject<User>(new User("", 0));
  users$ = this.user.asObservable();

  addUser(user: User) {
    this.user.next(user);
  }
}
