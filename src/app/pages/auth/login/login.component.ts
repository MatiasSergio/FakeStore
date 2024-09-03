
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/core/auth/login.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private loginService: LoginService, private location: Location) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

// onSubmit() {
//   this.loginService.login("johnd","m38rmF$").subscribe(
//     response => {
//       // Manejar la respuesta aquí
//     },
//     error => {
//       // Manejar el error aquí
//     }
//   );

  onSubmit() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;

      this.loginService.login(username, password).subscribe(
        response => {
          // Inicio de sesión exitoso, navega a la página anterior
          console.log('Inicio de sesión exitoso', response);
          this.location.back();
        },
        error => {
          // Manejar el error aquí
          console.error('Error al iniciar sesión', error);
        }
      );
    }
  }
}
