import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import {CoresService} from './service/cores.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class CoresClientModule {

  /*** Convenção usada para que o módulo 'app' disponibilize as instâncias 'providers' como singleton para todos os modulos da aplicação.
     */
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoresClientModule,
      providers: [
        CoresService,
      ]
    };
  }
}
