import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-descripcion',
  templateUrl: './descripcion.component.html',
  styleUrls: ['./descripcion.component.css']
})
export class DescripcionComponent implements OnInit {

  constructor( 
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  cerrarSesion(){
    localStorage.clear();
    window.location.reload()
    
  }

}
