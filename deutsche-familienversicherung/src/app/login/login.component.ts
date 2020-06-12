import {Component, Input, OnInit} from '@angular/core';
import { faKey} from '@fortawesome/free-solid-svg-icons';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ApiService} from '../service/api-service.service';
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent implements OnInit {
  @Input() getvnr: string;
  gebdat: string;
  passIcon = faKey;
  userIcon = faUser;
  loginForm: FormGroup;
  invalidLogin = false;
  private message: any;
  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private apiService: ApiService) {}

  ngOnInit() {
    //this.getvnr = this.getvnr
    this.getvnr = '00000000111111';
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
      this.loginForm.reset();
      this.gotoPage('user');
    },
      (error: HttpErrorResponse) => {
      this.loginForm.reset();
      this.invalidLogin = true;
    });
 }

 cancel() {
    console.log('cancel');
 }
  gotoPage(pageName: string): void {
    this.router.navigate([`${pageName}`]);
  }

}

