import { Component, OnInit } from '@angular/core';
import liff from '@line/liff';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'liff-line-login';

  ngOnInit(){
    liff
  .init({
    liffId: "2006303617-NGY0Yv7z", // Use own liffId
  })
  .then(() => {
    if (!liff.isLoggedIn()) {
      liff.login();
    }
  })
  .catch((err) => {
    // Error happens during initialization
    console.log(err.code, err.message);
  });

  }
}
