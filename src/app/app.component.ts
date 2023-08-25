import { Component } from '@angular/core';
import { AuthserviceService } from './services/auth/authservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private service:AuthserviceService){}

  title = 'AngSab';

  checkIsLoggedIn = false;

  ngDoCheck(): void {
    this.checkIsLoggedIn = this.service.isloggedIn();
  }
}
