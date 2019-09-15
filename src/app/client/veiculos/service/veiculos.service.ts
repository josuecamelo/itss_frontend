import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import {Vaga} from '../../../models/vaga';
import {Veiculo} from '../../../models/veiculo';


/**
 * Classe responsável por prover a integração entre o endpoint de Vagas.
 *
 * @author Josué Camelo
 */
@Injectable()
export class VeiculosService {

  /**
   * Construtor da classe.
   *
   * @param http
   */
  constructor(private http: HttpClient) { }

  public getVeiculos(): Observable<any> {
    return this.http.get(`${environment.urlApi}/veiculos`);
  }

  public getVeiculoById(veiculoId: any): Observable<any> {
    return this.http.get(`${environment.urlApi}/veiculos/${veiculoId}`);
  }

  public update(veiculo: Veiculo): Observable<any> {
    return this.http.put(`${environment.urlApi}/veiculos/${veiculo.id}`, veiculo);
  }

  public create(veiculo: Veiculo): Observable<any> {
    return this.http.post(`${environment.urlApi}/veiculos/create`, veiculo);
  }

  public delete(id: number): Observable<any> {
    return this.http.delete(`${environment.urlApi}/veiculos/${id}`);
  }
}
