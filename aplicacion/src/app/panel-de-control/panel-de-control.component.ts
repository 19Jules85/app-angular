import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ConexionComponentesService } from 'src/assets/assets/conexion-componentes.service';

@Component({
  selector: 'app-panel-de-control',
  templateUrl: './panel-de-control.component.html',
  styleUrls: ['./panel-de-control.component.css']
})
export class PanelDeControlComponent implements OnInit {

  // voy a usar el panel de control como componente hijo
  @Input() textos:string="";

datosapi!: Observable<any>;
usuariosDatos: any;
datosobtenidos: any;

  constructor(private conexionService: ConexionComponentesService){}

  ngOnInit(): void {
    this.usuariosDatos = this.conexionService.traerdatos();
    this.datosapi = this.conexionService.traerdatosapi();
    this.datosapi.subscribe(datos=>{
    this.datosobtenidos = datos;
    
    })

  }
}
