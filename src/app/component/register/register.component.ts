import { Component, OnInit } from '@angular/core';
import {User} from '../../model/User';
import {UserService} from '../../service/userservice/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User = {
    provider: 'local',
    email: '',
    password: '',
    login: '',
    birthDate: undefined,
    firstName: '',
    lastName: ''
  };


  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  onSubmit(): void{

  }
}
