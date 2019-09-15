import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import {PatiosService} from './service/patios.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class PatiosClientModule {

  /*** Convenção usada para que o módulo 'app' disponibilize as instâncias 'providers' como singleton para todos os modulos da aplicação.
     */
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: PatiosClientModule,
      providers: [
        PatiosService,
      ]
    };
  }
}
