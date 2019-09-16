import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import {Estacionamento} from '../../../models/estacionamento';


/**
 * Classe responsável por prover a integração entre o endpoint de Estacionamento.
 *
 * @author Josué Camelo
 */
@Injectable()
export class EstacionamentosService {

  /**
   * Construtor da classe.
   *
   * @param http
   */
  constructor(private http: HttpClient) { }

  public getEstacionamentos(): Observable<any> {
    return this.http.get(`${environment.urlApi}/estacionamentos`);
  }

  public getEstacionamentoById(estacionamentoId: any): Observable<any> {
    return this.http.get(`${environment.urlApi}/estacionamentos/${estacionamentoId}`);
  }

  public update(estacionamento: Estacionamento): Observable<any> {
    return this.http.put(`${environment.urlApi}/estacionamentos/${estacionamento.id}`, estacionamento);
  }

  public create(estacionamento: Estacionamento): Observable<any> {
    return this.http.post(`${environment.urlApi}/estacionamentos/create`, estacionamento);
  }

  public registarSaida(estacionamento: Estacionamento): Observable<any> {
    return this.http.get(`${environment.urlApi}/estacionamentos/saida/${estacionamento.id}`);
  }

  public delete(id: number): Observable<any> {
    return this.http.delete(`${environment.urlApi}/estacionamentos/${id}`);
  }
}
