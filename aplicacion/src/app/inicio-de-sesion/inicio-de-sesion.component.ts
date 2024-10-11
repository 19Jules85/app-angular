import { Component } from '@angular/core';
import { FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { ConexionComponentesService } from 'src/assets/assets/conexion-componentes.service';

@Component({
  selector: 'app-inicio-de-sesion',
  templateUrl: './inicio-de-sesion.component.html',
  styleUrls: ['./inicio-de-sesion.component.css']
})
export class InicioDeSesionComponent {
// variables globales
formulariodeinicio1!:UntypedFormGroup
//constructor
constructor(private router: Router, private fb: FormBuilder, private conexionservice: ConexionComponentesService){

  this.formulariodeinicio1 = this.fb.group({
    nombre:["", Validators.required],
    apellido:["", Validators.required],
    correo:["", Validators.required],
    contraseña:["", Validators.required],
  })

}

//Metodos
onsubmit(){
  //imprimir por consola los datos del formulario
  //console.log(this.formulariodeinicio.value)
  this.conexionservice.enviardatos(this.formulariodeinicio1.value)
  //redireccionar a panel de control
  this.router.navigate(["panel-de-control"]);
}

}
