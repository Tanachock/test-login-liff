import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  api_url = 'https://api-staging-etda.ibotnoi.com/';

  authLoginUser = (username: string, password: string) => {
    return this.http.post(this.api_url + 'etda/login', {
      username: username,
      password: password,
    });
  };

  
  setLogin(res: any, username: string) {
    localStorage.setItem('token', res.token);
    localStorage.setItem('username', username);
    // localStorage.setItem('hideDialogSuccess', 'false');
    // localStorage.setItem('hideDialogFail', 'false');
  }

  getlogin(){
    return {
      token : localStorage.getItem('token'),
      username : localStorage.getItem('username'),
    }
  }
}
