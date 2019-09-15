import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

/**
 * Classe responsável por prover a integração entre o endpoint de Clientes.
 *
 * @author Josué Camelo
 */
@Injectable()
export class ClientesService {

  /**
   * Construtor da classe.
   *
   * @param http
   */
  constructor(private http: HttpClient) { }

  public getClientes(): Observable<any> {
    return this.http.get(`${environment.urlApi}/clientes`);
  }

  public getClienteById(clienteId: any): Observable<any> {
    return this.http.get(`${environment.urlApi}/clientes/${clienteId}`);
  }
}
