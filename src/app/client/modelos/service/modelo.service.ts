import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import {Modelo} from '../../../models/modelo';

/**
 * Classe responsável por prover a integração entre o endpoint de Modelos.
 *
 * @author Josué Camelo
 */
@Injectable()
export class ModeloService {

  /**
   * Construtor da classe.
   *
   * @param http
   */
  constructor(private http: HttpClient) { }

  public getModelos(): Observable<any> {
    return this.http.get(`${environment.urlApi}/modelos`);
  }

  public getModeloById(modeloId: any): Observable<any> {
    return this.http.get(`${environment.urlApi}/modelos/${modeloId}`);
  }

  public update(modelo: Modelo): Observable<any> {
    return this.http.put(`${environment.urlApi}/modelos/${modelo.id}`, modelo);
  }

  public create(modelo: Modelo): Observable<any> {
    return this.http.post(`${environment.urlApi}/modelos/create`, modelo);
  }

  public delete(id: number): Observable<any> {
    return this.http.delete(`${environment.urlApi}/modelos/${id}`);
  }
}
