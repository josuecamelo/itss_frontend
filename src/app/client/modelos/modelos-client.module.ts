import {CommonModule} from '@angular/common';
import {ModuleWithProviders, NgModule} from '@angular/core';
import {ModeloService} from './service/modelo.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class ModelosClientModule {

  /*** Convenção usada para que o módulo 'app' disponibilize as instâncias 'providers' como singleton para todos os modulos da aplicação.
     */
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ModelosClientModule,
      providers: [
        ModeloService,
      ]
    };
  }
}
