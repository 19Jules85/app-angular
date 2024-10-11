import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IniciarSecionComponent } from './iniciar-secion/iniciar-secion.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistroUsuariosComponent } from './registro-usuarios/registro-usuarios.component';
import { PanelDeControlComponent } from './panel-de-control/panel-de-control.component';
import { MostrarDatosComponent } from './mostrar-datos/mostrar-datos.component';
import { HttpClientModule } from '@angular/common/http';
import { ListaDeTareasComponent } from './lista-de-tareas/lista-de-tareas.component';
import { InicioDeSesionComponent } from './inicio-de-sesion/inicio-de-sesion.component';
@NgModule({
  declarations: [
    AppComponent,
    IniciarSecionComponent,
    RegistroUsuariosComponent,
    PanelDeControlComponent,
    MostrarDatosComponent,
    ListaDeTareasComponent,
    InicioDeSesionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
