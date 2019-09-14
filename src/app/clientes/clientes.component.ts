import { Component, OnInit } from '@angular/core';
import {ClientesService} from '../client/clientes/service/clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  public clientes: any[];
  public cols: any[];
  constructor(private clienteService: ClientesService) { }

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
}
