import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(
    private route:Router,
    private authService:AuthService
  ){}

  onLogin() {
    const username = this.username;
    const password = this.password;
    this.authService.authLoginUser(username, password).subscribe({
      next: (res: any) => {
        if (res.message == 'incorect password') {
          this.route.navigate(['/login']);
        } else {
          this.authService.setLogin(res, username);
          // this.loginFailed = false;
          console.log("yes",this.authService.getlogin());
          this.route.navigate(['/close-liff']);
        }
      },
      error: (error) => {
        // this.loginFailed = true;
      },
    });
  }

  close(){
    this.route.navigate(['close-liff'])
  }
}
