import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api-service.service';
import { HttpErrorResponse } from "@angular/common/http";
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserData, Person, VertragsPersonen, Leistungen, Version} from '../data'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent implements OnInit {
  @Input() title: string;
  @Output() userDataEvent = new EventEmitter<UserData>();
  vnr: string;
  gebdat: string;
  passIcon = faKey;
  userIcon = faUser;
  loginForm: FormGroup;
  invalidLogin = false;
  
  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute) { }
    userData: UserData;

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.vnr = params['vnr'];
      console.log("+++" + this.vnr); // Print the parameter to the console. 
    });

    //this.vnr = '00000000111111';
    this.gebdat = '08.01.1973';
    this.loginForm = this.formBuilder.group({
      dfvVnr: ['', Validators.compose([Validators.required])],
      vnGeb: ['', Validators.required]
    });
  }

  onSubmit() {
    console.log(this.loginForm.value);
    if (this.loginForm.invalid) {
      return;
    }
    const loginData = {
      query: 'viewOffer',
      dfvVnr: this.loginForm.controls.dfvVnr.value,
      vnGeb: this.loginForm.controls.vnGeb.value
    };
    this.apiService.login(loginData).subscribe((data: any) => {
      console.log(data);
      this.userData = data;
      console.log("########################################" + this.userData.vertragsbeginn)
      this.userDataEvent.emit(this.userData);
      this.loginForm.reset();
    },
      (error: HttpErrorResponse) => {
        this.loginForm.reset();
        this.invalidLogin = true;
      });
  }

  cancel() {
    console.log('cancel');
  }

}

