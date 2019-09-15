import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientesComponent } from './clientes/clientes.component';
import {GrowlModule} from 'primeng/growl';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {ClientesClientModule} from './client/clientes/clientes-client.module';
import {HttpClientModule} from '@angular/common/http';
import {TableModule} from 'primeng/table';
import {PaginatorModule} from 'primeng/paginator';
import {ScrollingModule} from  '@angular/cdk/scrolling';
import {ReactiveFormsModule} from '@angular/forms';
import { EditarClienteComponent } from './editar-cliente/editar-cliente.component';
import { AdicionarClienteComponent } from './adicionar-cliente/adicionar-cliente.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { AdicionarUsuarioComponent } from './adicionar-usuario/adicionar-usuario.component';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';
import {UsuariosClientModule} from './client/usuarios/usuarios-client.module';

@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    EditarClienteComponent,
    AdicionarClienteComponent,
    UsuariosComponent,
    AdicionarUsuarioComponent,
    EditarUsuarioComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ScrollingModule,
    PaginatorModule,
    ReactiveFormsModule,
    AppRoutingModule,
    InputTextModule,
    ButtonModule,
    GrowlModule,
    TableModule,
    ClientesClientModule.forRoot(),
    UsuariosClientModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
