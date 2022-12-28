import { Component, OnInit } from '@angular/core';
import {  NavigationEnd, Router, Event } from '@angular/router';


@Component({
  selector: 'app-landing-page',
  styleUrls: ['./landing-page.component.css'],
  templateUrl: './landing-page.component.html',
  
})
export class LandingPageComponent implements OnInit {

  currentRoute: any;
  logo = {
    perfil : "none",
    mensaje : "none",
    sorpresa : "none"
  }

  constructor(
    private router:Router
  ) { 
      const tiporuta = "";
     this.router.events.subscribe((event: Event) => {
      if(event instanceof NavigationEnd) {
        this.currentRoute = event.url;
        console.log(event);
      }  
        if(this.currentRoute == "/description"){
          this.colLogo('perfil')
        }
        if(this.currentRoute == "/message" ){
          this.colLogo('mensaje')
        }
        if(this.currentRoute == "/surprise" ) {
          this.colLogo('sorpresa')
        }
     })

  }

  ngOnInit(): void {

  }

  colLogo(tipo:any){
    if(tipo == "perfil") {
      this.logo = {
        perfil: "#fefefe",
        mensaje : "none",
        sorpresa : "none"
      }
    }
    if(tipo == "mensaje") {
      this.logo = {
        perfil: "none",
        mensaje : "#fefefe",
        sorpresa : "none"
      }  
    }
    if(tipo == "sorpresa")  {
      this.logo = {
        perfil: "none",
        mensaje : "none",
        sorpresa : "#fefefe"
      }  
    }

  }

  

}
