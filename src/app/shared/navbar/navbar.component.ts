import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  usuarioLogueado:any;

  constructor(private auth:AuthService) { }

  

  ngOnInit(): void {
    this.auth.getUserLogged().subscribe( user =>{
      this.usuarioLogueado =user;
    })
  }

  cerrarSesion(){
    this.auth.logOut();
  }

}
