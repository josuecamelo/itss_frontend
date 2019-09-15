import { Component, OnInit } from '@angular/core';
import {Cliente} from '../models/cliente';
import {Router} from '@angular/router';
import {ClientesService} from '../client/clientes/service/clientes.service';
import {Modelo} from '../models/modelo';
import {ModeloService} from '../client/modelos/service/modelo.service';

@Component({
  selector: 'app-modelos',
  templateUrl: './modelos.component.html',
  styleUrls: ['./modelos.component.css']
})
export class ModelosComponent implements OnInit {

  public modelos: Modelo[];
  public cols: any[];
  constructor(private router: Router, private modeloService: ModeloService) {

  }

  ngOnInit() {
    this.getModelo();
    this.cols = [
      { field: 'id', header: '#' },
      { field: 'nome', header: 'Nome' },
    ];
  }

  private getModelo(): void {
    this.modeloService.getModelos().subscribe(data => {
      this.modelos = data;
    }, error => {
      console.log(error);
    });
  }

  public recuperarRegistro(modelo: Modelo): void {
    window.localStorage.removeItem('editModeloId');
    window.localStorage.setItem('editModeloId', modelo.id.toString());
    this.router.navigate(['modelos/editar']);
  }

  public excluir(modelo: Modelo): void {
    this.modeloService.delete(modelo.id)
      .subscribe( data => {
        const index = this.modelos.indexOf(modelo);
        this.modelos.splice(index, 1);
      });
  }
}
