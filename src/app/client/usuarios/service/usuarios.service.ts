import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import {Usuario} from '../../../models/usuario';

/**
 * Classe responsável por prover a integração entre o endpoint de Usuarios.
 *
 * @author Josué Camelo
 */
@Injectable()
export class UsuariosService {

  /**
   * Construtor da classe.
   *
   * @param http
   */
  constructor(private http: HttpClient) { }

  public getUsuarios(): Observable<any> {
    return this.http.get(`${environment.urlApi}/usuarios`);
  }

  public getUsuarioById(usuarioId: any): Observable<any> {
    return this.http.get(`${environment.urlApi}/usuarios/${usuarioId}`);
  }

  public update(usuario: Usuario): Observable<any> {
    return this.http.put(`${environment.urlApi}/usuarios/${usuario.id}`, usuario);
  }

  public create(usuario: Usuario): Observable<any> {
    return this.http.post(`${environment.urlApi}/usuarios/create`, usuario);
  }

  public delete(id: number): Observable<any> {
    return this.http.delete(`${environment.urlApi}/usuarios/${id}`);
  }
}
