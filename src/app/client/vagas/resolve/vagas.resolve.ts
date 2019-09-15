import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import {VagasService} from '../service/vagas.service';
import {PatiosService} from '../../patios/service/patios.service';

@Injectable()
export class VagasResolve implements Resolve<any> {
  constructor(private router: Router, private vagaService: VagasService, private patioService: PatiosService) { }

  /**
   * Retorna a instância.
   *
   * @param route
   */
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return new Observable(observer => {
      this.patioService.getPatios().subscribe(data => {
        observer.next(data);
        observer.complete();
      }, error => {
        observer.error(error);
        this.router.navigate(['']);
      });
    });
  }
}
