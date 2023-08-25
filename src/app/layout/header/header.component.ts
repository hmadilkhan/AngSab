import { Component } from '@angular/core';
import { AuthserviceService } from 'src/app/services/auth/authservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private service: AuthserviceService) { }

  logout(){
    this.service.logout();
  }
}
