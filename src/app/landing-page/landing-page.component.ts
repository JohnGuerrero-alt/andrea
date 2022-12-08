import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-landing-page',
  styleUrls: ['./landing-page.component.css'],
  templateUrl: './landing-page.component.html',
  
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  mostrarMensaje() {
    Swal.fire({
      allowEscapeKey: false,
      allowEnterKey: false,
      allowOutsideClick: false,
      html: `
      
        <div class="main">
          <div class="fotoPerfil"></div>
          <div class="descripcion font">
            Andrea, se que este mes no es el de tu agrado. Espero en serio de corazón que todo mejore. En el 2023 se cumplan las cosas que tienes en mente, que tu salud que es lo 
            más importante mejore considerablemente y que en serio vivas en paz.

            <br><br>

            Lo que te digo que las cualidades de pendiente, entregada, amorosa, son cosas muy importantes y valoradas; no se como fue tus experiencias, pero puedo decir que no aprovecharon cosas que tuviste y que en serio viendote te hacen una gran mujer.

            <br><br>

            Que todo mejore y en serio puede que sientas muchas debilidades o pocas cualidades o lo que has hecho no ha servido, pero yo te veo como una gran mujer que tienes valores altos. 

            <br><br>
            Psdata: tu sonrisa es muy hermosa, en serio que me gusta.





          </div>

        </div>
      
      `
    })
  }

}
