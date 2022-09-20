import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  email: string = '';
  password: string = '';



  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {

    let token = sessionStorage.getItem('token');
    
    if(token){
      this.router.navigate(['dashboard/home'])
    }

  }
  loginUser(value:any){

    let {email, password} = value;


    this.authService.login(email, password).subscribe(
      (response) => {
        if(response.token){
          sessionStorage.setItem('token', response.token);
          this.router.navigate(['dashboard/home']);
        }
      },
      (error) => console.error(`ha habido un error al hacer login: ${error}`),
      () => console.info('peticion de login terminada')
    )


  }

}
