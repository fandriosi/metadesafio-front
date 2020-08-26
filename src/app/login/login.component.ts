import { Component, OnInit } from '@angular/core';
import {RestapiService} from '../restapi.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  constructor(private services:RestapiService) { 

  }

  ngOnInit(): void {
  }
  login(){
    let response = this.services.login(this.username, this.password);
    console.log(this.username);
    console.log(this.password);
    response.subscribe(data => {
      console.log(data);
    });
  }
}
