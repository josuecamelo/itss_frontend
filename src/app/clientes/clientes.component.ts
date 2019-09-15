import { Component, OnInit } from '@angular/core';
import {ClientesService} from '../client/clientes/service/clientes.service';
import {Cliente} from '../models/cliente';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  public clientes: Cliente[];
  public cols: any[];
  constructor(private router: Router, private clienteService: ClientesService) {

  }

  ngOnInit() {
    this.getClientes();
    this.cols = [
      { field: 'id', header: '#' },
      { field: 'nome', header: 'Nome' },
      { field: 'cpf', header: 'CPF' },
      { field: 'telefone', header: 'Telefone' }
    ];
  }

  private getClientes(): void {
    this.clienteService.getClientes().subscribe(data => {
      this.clientes = data;
    }, error => {
      console.log(error);
    });
  }

  public recuperarRegistro(cliente: Cliente): void {
    window.localStorage.removeItem('editClienteId');
    window.localStorage.setItem('editClienteId', cliente.id.toString());
    this.router.navigate(['clientes/editar']);
  }

  public excluir(cliente: Cliente): void {
    console.log(cliente);
  }
}
