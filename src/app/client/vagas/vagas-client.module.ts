import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import {VagasService} from './service/vagas.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class VagasClientModule {

  /*** Convenção usada para que o módulo 'app' disponibilize as instâncias 'providers' como singleton para todos os modulos da aplicação.
     */
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: VagasClientModule,
      providers: [
        VagasService,
      ]
    };
  }
}
