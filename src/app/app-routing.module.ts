import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ClientesComponent} from './clientes/clientes.component';
import {EditarClienteComponent} from './editar-cliente/editar-cliente.component';
import {AdicionarClienteComponent} from './adicionar-cliente/adicionar-cliente.component';
import {EditarUsuarioComponent} from './editar-usuario/editar-usuario.component';
import {AdicionarUsuarioComponent} from './adicionar-usuario/adicionar-usuario.component';
import {AppComponent} from './app.component';
import {UsuariosComponent} from './usuarios/usuarios.component';
import {ModelosComponent} from './modelos/modelos.component';
import {EditarModeloComponent} from './editar-modelo/editar-modelo.component';
import {AdicionarModeloComponent} from './adicionar-modelo/adicionar-modelo.component';
import {CoresComponent} from './cores/cores.component';
import {EditarCorComponent} from './editar-cor/editar-cor.component';
import {AdicionarCorComponent} from './adicionar-cor/adicionar-cor.component';
import {PatiosComponent} from './patios/patios.component';
import {EditarPatioComponent} from './editar-patio/editar-patio.component';
import {AdicionarPatioComponent} from './adicionar-patio/adicionar-patio.component';

const routes: Routes =  [
  { path: 'clientes', component: ClientesComponent },
  { path: 'clientes/editar', component: EditarClienteComponent },
  { path: 'cliente/adicionar', component: AdicionarClienteComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'usuarios/editar', component: EditarUsuarioComponent },
  { path: 'usuarios/adicionar', component: AdicionarUsuarioComponent },
  { path: 'modelos', component: ModelosComponent },
  { path: 'modelos/editar', component: EditarModeloComponent },
  { path: 'modelos/adicionar', component: AdicionarModeloComponent },
  { path: 'cores', component: CoresComponent },
  { path: 'cores/editar', component: EditarCorComponent },
  { path: 'cores/adicionar', component: AdicionarCorComponent },
  { path: 'patios', component: PatiosComponent },
  { path: 'patios/editar', component: EditarPatioComponent },
  { path: 'patios/adicionar', component: AdicionarPatioComponent },
  /*{ path: '**', component: AppComponent }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
