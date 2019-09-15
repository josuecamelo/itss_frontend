import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ClientesComponent} from './clientes/clientes.component';
import {EditarClienteComponent} from './editar-cliente/editar-cliente.component';
import {AdicionarClienteComponent} from './adicionar-cliente/adicionar-cliente.component';
import {EditarUsuarioComponent} from './editar-usuario/editar-usuario.component';
import {AdicionarUsuarioComponent} from './adicionar-usuario/adicionar-usuario.component';
import {AppComponent} from './app.component';
import {UsuariosComponent} from './usuarios/usuarios.component';


const routes: Routes =  [
  { path: 'clientes', component: ClientesComponent },
  { path: 'clientes/editar', component: EditarClienteComponent },
  { path: 'cliente/adicionar', component: AdicionarClienteComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'usuarios/editar', component: EditarUsuarioComponent },
  { path: 'usuarios/adicionar', component: AdicionarUsuarioComponent },
  { path: '**', component: AppComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
