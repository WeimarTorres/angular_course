import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  onLogin(form: any): void {
    console.log('FORM: ', form.value)

    this.authService.login(form.value).subscribe(
      res => {
        console.log('LOGIN RESPONSE: ', res);
      },
      err => {
        console.log('LOGIN ERROR: ');
      }
    );
  }

  /*
  
  username = '';
  password = '';

  sw = true;
  onLogin(): void {
    console.log('USERNAME: ', this.username);
    console.log('PASSWORD: ', this.password);
  }

  onLogin2(form): void {
    console.log('VARIABLE LOCAL FORM: ', form.value);
    this.router.navigate(['/pages']);
  }
  */

}
