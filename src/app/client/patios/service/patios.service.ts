import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import {Patio} from '../../../models/patio';

/**
 * Classe responsável por prover a integração entre o endpoint de Pátios.
 *
 * @author Josué Camelo
 */
@Injectable()
export class PatiosService {

  /**
   * Construtor da classe.
   *
   * @param http
   */
  constructor(private http: HttpClient) { }

  public getPatios(): Observable<any> {
    return this.http.get(`${environment.urlApi}/patios`);
  }

  public getPatioById(patioId: any): Observable<any> {
    return this.http.get(`${environment.urlApi}/patios/${patioId}`);
  }

  public update(patio: Patio): Observable<any> {
    return this.http.put(`${environment.urlApi}/patios/${patio.id}`, patio);
  }

  public create(patio: Patio): Observable<any> {
    return this.http.post(`${environment.urlApi}/patios/create`, patio);
  }

  public delete(id: number): Observable<any> {
    return this.http.delete(`${environment.urlApi}/patios/${id}`);
  }
}
