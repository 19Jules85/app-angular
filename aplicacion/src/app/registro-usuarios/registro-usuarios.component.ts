import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registro-usuarios',
  templateUrl: './registro-usuarios.component.html',
  styleUrls: ['./registro-usuarios.component.css']
})
export class RegistroUsuariosComponent implements OnInit {
formularioDeRegistro!:FormGroup;

constructor(private formregitro: FormBuilder) {
  
}
ngOnInit(): void {
  this.formularioDeRegistro = this.formregitro.group({
    nombre:[""],
    apellido:[""],
    archivo:[""],
    contraseña:[""],
})
    
}
enviar(){
  console.log(this.formularioDeRegistro.value);
}
}
