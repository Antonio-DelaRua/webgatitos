import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  token: string | null = null;

 
  constructor(private router: Router) { }

  ngOnInit(): void {

    //comprobar si existe el token en el sessionStorage
    this.token = sessionStorage.getItem('token');

  
  }

  navegarAContacts(): void{

    let navigationExtras: NavigationExtras = {
      queryParams: {
        sexo: 'todos'
      }
    }

    this.router.navigate(['dashboard/contacts'], navigationExtras);
    
  }

}
