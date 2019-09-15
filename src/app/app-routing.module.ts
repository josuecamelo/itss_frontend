import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ClientesComponent} from './clientes/clientes.component';
import {EditarClienteComponent} from './editar-cliente/editar-cliente.component';


const routes: Routes =  [
  { path: 'clientes', component: ClientesComponent },
  { path: 'clientes/editar', component: EditarClienteComponent },
  /*{
    path: 'heroes',
    component: HeroListComponent,
    data: { title: 'Heroes List' }
  },
  { path: '',
    redirectTo: '/heroes',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
