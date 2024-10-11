import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IniciarSecionComponent } from './iniciar-secion/iniciar-secion.component';
import { RegistroUsuariosComponent } from './registro-usuarios/registro-usuarios.component';
import { PanelDeControlComponent } from './panel-de-control/panel-de-control.component';
import { ListaDeTareasComponent } from './lista-de-tareas/lista-de-tareas.component';
import { InicioDeSesionComponent } from './inicio-de-sesion/inicio-de-sesion.component';

const routes: Routes = [ 
  {
    path: "iniciar-secion",
    component:IniciarSecionComponent
  },
  {
    path: "registro-usuarios",
    component:RegistroUsuariosComponent
  },
  {
    path: "panel-de-control",
    component:PanelDeControlComponent
  },
  {
    path: "lista-de-tareas",
    component:ListaDeTareasComponent
  },
  {
    path: "inicio-de-sesion",
    component:InicioDeSesionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
