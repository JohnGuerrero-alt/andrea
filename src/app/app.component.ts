import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'Andrea';
  

  constructor( private router: Router  ){}

  app = false;
  
  ngOnInit(): void {
    this.comprobarSesion()
  }



  mostrarMensaje() {
      
    this.app = true;
    localStorage.setItem("Sesion", "true")
    // Swal.fire({
    //   allowEscapeKey: false,
    //   allowEnterKey: false,
    //   allowOutsideClick: false,
    //   html: `
      
    //     <div class="main">
    //       <div class="fotoPerfil"></div>
    //       <div class="descripcion font">
    //         Andrea, se que este mes no es el de tu agrado. Espero en serio de corazón que todo mejore. En el 2023 se cumplan las cosas que tienes en mente, que tu salud que es lo 
    //         más importante mejore considerablemente y que en serio vivas en paz.

    //         <br><br>

    //         Lo que te digo que las cualidades de pendiente, entregada, amorosa, son cosas muy importantes y valoradas; no se como fue tus experiencias, pero puedo decir que no aprovecharon cosas que tuviste y que en serio viendote te hacen una gran mujer.

    //         <br><br>

    //         Que todo mejore y en serio puede que sientas muchas debilidades o pocas cualidades o lo que has hecho no ha servido, pero yo te veo como una gran mujer que tienes valores altos. 

    //         <br><br>
    //         Psdata: tu sonrisa es muy hermosa, en serio que me gusta.





    //       </div>

    //     </div>
      
    //   `
    // })
    this.router.navigate(['/description'])
  

  }

  comprobarSesion(){
    if(localStorage.getItem('Sesion') == undefined) {
      console.log("No ha entrado en sesión")
      this.app = false;
    } else {
      this.app = true;
      console.log("Entro en sesión")
      this.router.navigate(['/description'])
    }

  }

}
