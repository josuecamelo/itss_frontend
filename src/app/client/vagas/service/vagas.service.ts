import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import {Vaga} from '../../../models/vaga';


/**
 * Classe responsável por prover a integração entre o endpoint de Vagas.
 *
 * @author Josué Camelo
 */
@Injectable()
export class VagasService {

  /**
   * Construtor da classe.
   *
   * @param http
   */
  constructor(private http: HttpClient) { }

  public getVagas(): Observable<any> {
    return this.http.get(`${environment.urlApi}/vagas`);
  }

  public getVagaById(vagaId: any): Observable<any> {
    return this.http.get(`${environment.urlApi}/vagas/${vagaId}`);
  }

  public update(vaga: Vaga): Observable<any> {
    return this.http.put(`${environment.urlApi}/vagas/${vaga.id}`, vaga);
  }

  public create(vaga: Vaga): Observable<any> {
    return this.http.post(`${environment.urlApi}/vaga/create`, vaga);
  }

  public delete(id: number): Observable<any> {
    return this.http.delete(`${environment.urlApi}/vagas/${id}`);
  }
}
