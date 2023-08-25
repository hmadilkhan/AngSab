import { Component } from '@angular/core';
import { AuthserviceService } from '../services/auth/authservice.service';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr'
import { Router } from '@angular/router';
import { signIn } from 'src/data-type';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private builder: FormBuilder, private toastr: ToastrService, private service: AuthserviceService,
    private router: Router) {
  }
  ngDoCheck(): void {

  }

  loginform: FormGroup = this.builder.group({
    username: this.builder.control('', Validators.required),
    password: this.builder.control('', Validators.required)
  });

  get username() {
    return this.loginform.get("username");
  }

  get password() {
    return this.loginform.get("password");
  }

  login(data: signIn) {
    console.log(data);
    
    if (this.loginform.valid) {
      this.service.login(data);
      this.toastr.success('Login Successfully', 'Redirecting to Home....');
    } else {
      this.toastr.warning('Please enter valid data.')
    }
  }

}
