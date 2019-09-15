import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import {EstacionamentosService} from './service/estacionamentos.service';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class EstacionamentosClientModule {

  /*** Convenção usada para que o módulo 'app' disponibilize as instâncias 'providers' como singleton para todos os modulos da aplicação.
     */
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: EstacionamentosClientModule,
      providers: [
        EstacionamentosService,
      ]
    };
  }
}
