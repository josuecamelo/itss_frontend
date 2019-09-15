import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import {Cor} from '../../../models/cor';

/**
 * Classe responsável por prover a integração entre o endpoint de Modelos de Veiculos.
 *
 * @author Josué Camelo
 */
@Injectable()
export class CoresService {

  /**
   * Construtor da classe.
   *
   * @param http
   */
  constructor(private http: HttpClient) { }

  public getCores(): Observable<any> {
    return this.http.get(`${environment.urlApi}/cores`);
  }

  public getCorById(corId: any): Observable<any> {
    return this.http.get(`${environment.urlApi}/cores/${corId}`);
  }

  public update(cor: Cor): Observable<any> {
    return this.http.put(`${environment.urlApi}/cores/${cor.id}`, cor);
  }

  public create(cor: Cor): Observable<any> {
    return this.http.post(`${environment.urlApi}/cores/create`, cor);
  }

  public delete(id: number): Observable<any> {
    return this.http.delete(`${environment.urlApi}/cores/${id}`);
  }
}
