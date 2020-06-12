import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserData, Person, VertragsPersonen, Leistungen, Version } from '../data'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  vnr = 'testssssss';
  userData1: UserData;
  userData2: UserData;
  message: string;
  login = true

  constructor() { }

  ngOnInit(): void {

  }

  getUserData(userData: UserData) {
    this.userData1 = userData;
    this.userData2 = userData;
    console.log("$$$$$$$$$$" + JSON.stringify(this.userData1))
    this.login = false
  }

  getUserMessage(userMessage: string) {
    this.message = userMessage;
    this.userData2 = null;
  }

}
