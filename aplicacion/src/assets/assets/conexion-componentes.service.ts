import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConexionComponentesService {

  private urlapi ="https://jsonplaceholder.typicode.com/todos/1";
datos: any;

  constructor(private http:HttpClient) { }

  enviardatos(datos:any){
    this.datos = datos;
  }
  traerdatos(){
   return this.datos; 
  }

  traerdatosapi():Observable<any>{
    let url  = this.urlapi;
return this.http.get<any>(url); 
/* Existe 4 tipos de peticiones: put para editar información
get para traer información, delete para borrar información, post para guardar información información*/
  }
}
