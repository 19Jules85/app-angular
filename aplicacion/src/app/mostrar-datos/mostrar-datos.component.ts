import { Component, Input, OnInit } from '@angular/core';
import { ServicioComponentesService } from 'src/assets/servicio-componentes/servicio-componentes.service';

@Component({
  selector: 'app-mostrar-datos',
  templateUrl: './mostrar-datos.component.html',
  styleUrls: ['./mostrar-datos.component.css']
})
export class MostrarDatosComponent implements OnInit {
  // voy a usar mostrar-datos como componente hijo
@Input() texto:string="";

datosdecliente: any;
listasobtenidas: any;

constructor(private conexionservice: ServicioComponentesService){}

ngOnInit(): void {
  this.datosdecliente = this.conexionservice.listacliente();
}
}
  
