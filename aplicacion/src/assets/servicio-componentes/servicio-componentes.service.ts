import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioComponentesService {

  listacliente: any;
  clientes =  [
    {
      nombre: "Santiago",
      apellido: "Jules",
      estado: "activo"
    },
    {
      nombre: "Emma",
      apellido: "Jules",
      estado: "activo"
    },
    {
      nombre: "Lucia",
      apellido: "Jules",
      estado: "activo"
    }
  ]

  constructor() { }

    enviarlista(listacliente: any){
      this.listacliente = listacliente;

    }
    traerlista(){
      return this.listacliente;
    }
  
}