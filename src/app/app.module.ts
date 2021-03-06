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
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
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
import { VagasComponent } from './vagas/vagas.component';
import { EditarVagaComponent } from './editar-vaga/editar-vaga.component';
import { AdicionarVagaComponent } from './adicionar-vaga/adicionar-vaga.component';
import {VagasService} from './client/vagas/service/vagas.service';
import {VagasClientModule} from './client/vagas/vagas-client.module';
import { VeiculosComponent } from './veiculos/veiculos.component';
import { AdicionarVeiculoComponent } from './adicionar-veiculo/adicionar-veiculo.component';
import { EditarVeiculoComponent } from './editar-veiculo/editar-veiculo.component';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {VeiculosClientModule} from './client/veiculos/veiculos-client.module';
import { EstacionamentoComponent } from './estacionamento/estacionamento.component';
import { EditarEstacionamentoComponent } from './editar-estacionamento/editar-estacionamento.component';
import { AdicionarEstacionamentoComponent } from './adicionar-estacionamento/adicionar-estacionamento.component';
import {EstacionamentosClientModule} from './client/estacionamentos/estacionamentos-client.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

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
    PatiosComponent,
    VagasComponent,
    EditarVagaComponent,
    AdicionarVagaComponent,
    VeiculosComponent,
    AdicionarVeiculoComponent,
    EditarVeiculoComponent,
    EstacionamentoComponent,
    EditarEstacionamentoComponent,
    AdicionarEstacionamentoComponent,
    DashboardComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ScrollingModule,
    PaginatorModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    InputTextModule,
    AutoCompleteModule,
    ButtonModule,
    GrowlModule,
    TableModule,
    ClientesClientModule.forRoot(),
    UsuariosClientModule.forRoot(),
    ModelosClientModule.forRoot(),
    CoresClientModule.forRoot(),
    PatiosClientModule.forRoot(),
    VagasClientModule.forRoot(),
    VeiculosClientModule.forRoot(),
    EstacionamentosClientModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
