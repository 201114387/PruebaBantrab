import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarComponent } from './editar/editar.component';
import { ListadoComponent } from './listado/listado.component';
import { CrearComponent } from './crear/crear.component';

const routes: Routes = [
  {path: '', component: ListadoComponent},
  {path: 'Editar/:id', component: EditarComponent},
  {path: 'Crear', component:CrearComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
