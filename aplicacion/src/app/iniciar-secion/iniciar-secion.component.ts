import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConexionComponentesService } from 'src/assets/assets/conexion-componentes.service';

@Component({
  selector: 'app-iniciar-secion',
  templateUrl: './iniciar-secion.component.html',
  styleUrls: ['./iniciar-secion.component.css']
})
export class IniciarSecionComponent {
  //variables global
  formularioInicio!:UntypedFormGroup;
  

texto:string="esto es una información de un decorador";
  @Output() textoenviado = new EventEmitter<string>();
textos:string="Esto es una informacion de un decorador desde iniciar de secion al panel de control";
  @Output() textosenviado = new EventEmitter<string>();
 //constructor
  constructor(private formbu: FormBuilder, private router: Router, private conexionService: ConexionComponentesService ){

    this.formularioInicio = this.formbu.group({
      nombre:["", Validators.required],
      apellido:["", Validators.required],
      correo:["", Validators.required],
      contrasena:["", Validators.required],
  })
  }
  //metodos
  //irapaneldecontrol(){
  //this.router.navigate(["panel-de-control"]);

 // }
  //onsubmit(): void {} 
   Onsubmit(){

    this.textoenviado.emit(this.texto);
    // imprimir por consola los datos del formulario
    this.conexionService.enviardatos(this.formularioInicio.value);
    //console.log(this.formularioInicio.value);
    // redireccionar a panel de control
    this.router.navigate(["panel-de-control"]);
 }

}
