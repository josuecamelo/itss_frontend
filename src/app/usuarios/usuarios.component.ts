import { Component, OnInit } from '@angular/core';
import {Cliente} from '../models/cliente';
import {Router} from '@angular/router';
import {ClientesService} from '../client/clientes/service/clientes.service';
import {Usuario} from '../models/usuario';
import {UsuariosService} from '../client/usuarios/service/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  public usuarios: Usuario[];
  public cols: any[];
  constructor(private router: Router, private usuarioService: UsuariosService) {

  }

  ngOnInit() {
    this.getUsuarios();
    this.cols = [
      { field: 'id', header: '#' },
      { field: 'nome', header: 'Nome' },
      { field: 'login', header: 'Login' },
      { field: 'telefone', header: 'Telefone' }
    ];
  }

  private getUsuarios(): void {
    this.usuarioService.getUsuarios().subscribe(data => {
      this.usuarios = data;
    }, error => {
      console.log(error);
    });
  }

  public recuperarRegistro(usuario: Usuario): void {
    window.localStorage.removeItem('editUsuarioId');
    window.localStorage.setItem('editUsuarioId', usuario.id.toString());
    this.router.navigate(['usuarios/editar']);
  }

  public excluir(usuario: Usuario): void {
    this.usuarioService.delete(usuario.id)
      .subscribe( data => {
        const index = this.usuarios.indexOf(usuario);
        this.usuarios.splice(index, 1);
      });
  }
}
