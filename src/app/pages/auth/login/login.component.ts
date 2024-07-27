import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/core/auth/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']

})

export class LoginComponent {
onSubmit() {
  this.loginService.login("johnd","m38rmF$").subscribe(
    response => {
      // Manejar la respuesta aquí
    },
    error => {
      // Manejar el error aquí
    }
  );
  
}
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private loginService:LoginService) { 
    this.loginForm = this.fb.group ({
      username: ['',Validators.required],
      password: ['',Validators.required]})
  }
}