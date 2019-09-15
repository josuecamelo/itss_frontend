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
import { EditarModeloComponent } from './editar-modelo/editar-modelo.component';
import { AdicionarModeloComponent } from './adicionar-modelo/adicionar-modelo.component';
import { ModelosComponent } from './modelos/modelos.component';
import { CoresComponent } from './cores/cores.component';
import { AdicionarCorComponent } from './adicionar-cor/adicionar-cor.component';
import { EditarCorComponent } from './editar-cor/editar-cor.component';
import { EditarPatioComponent } from './editar-patio/editar-patio.component';
import { AdicionarPatioComponent } from './adicionar-patio/adicionar-patio.component';
import { PatiosComponent } from './patios/patios.component';
import {ModelosClientModule} from './client/modelos/modelos-client.module';
import {CoresClientModule} from './client/cores/cores-client.module';
import {PatiosClientModule} from './client/patios/patios-client.module';

@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    EditarClienteComponent,
    AdicionarClienteComponent,
    UsuariosComponent,
    AdicionarUsuarioComponent,
    EditarUsuarioComponent,
    EditarModeloComponent,
    AdicionarModeloComponent,
    ModelosComponent,
    CoresComponent,
    AdicionarCorComponent,
    EditarCorComponent,
    EditarPatioComponent,
    AdicionarPatioComponent,
    PatiosComponent
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
    UsuariosClientModule.forRoot(),
    ModelosClientModule.forRoot(),
    CoresClientModule.forRoot(),
    PatiosClientModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
