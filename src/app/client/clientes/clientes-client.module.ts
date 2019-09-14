import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import {ClientesService} from './service/clientes.service';
/**
 * Modulo de integração com a API Rest Matrícula.
 */
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class ClientesClientModule {

  /*** Convenção usada para que o módulo 'app' disponibilize as instâncias 'providers' como singleton para todos os modulos da aplicação.
     */
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ClientesClientModule,
      providers: [
        ClientesService,
      ]
    };
  }
}
