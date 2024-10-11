import { Component } from '@angular/core';
import { FormBuilder, UntypedFormArray, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicioComponentesService } from 'src/assets/servicio-componentes/servicio-componentes.service';

@Component({
  selector: 'app-lista-de-tareas',
  templateUrl: './lista-de-tareas.component.html',
  styleUrls: ['./lista-de-tareas.component.css']
})
export class ListaDeTareasComponent {
  //variables globales
  listadetareas: UntypedFormGroup
  //constructor
  constructor(private router: Router, private fb: FormBuilder, private conexionservice: ServicioComponentesService){

   this.listadetareas = this.fb.group({
    nombre:["", Validators.required],
    apellido:["", Validators.required]

   })
  }
  //Metodos
  onsubmit(){
    //this.textoenviado.emit(this.texto);
    // imprimir por consola los datos de listas de tareas
    this.conexionservice.listacliente(this.listadetareas.value)
    //redireccionar a mostrar datos
    this.router.navigate(["mostrar-datos"]);
    }

}
