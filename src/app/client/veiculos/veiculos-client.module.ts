import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import {VeiculosService} from './service/veiculos.service';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class VeiculosClientModule {

  /*** Convenção usada para que o módulo 'app' disponibilize as instâncias 'providers' como singleton para todos os modulos da aplicação.
     */
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: VeiculosClientModule,
      providers: [
        VeiculosService,
      ]
    };
  }
}
