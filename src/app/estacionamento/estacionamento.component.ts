import { Component, OnInit } from '@angular/core';
import {Veiculo} from '../models/veiculo';
import {Router} from '@angular/router';
import {VeiculosService} from '../client/veiculos/service/veiculos.service';
import {Patio} from '../models/patio';
import {Estacionamento} from '../models/estacionamento';
import {EstacionamentosService} from '../client/estacionamentos/service/estacionamentos.service';
import {Vaga} from '../models/vaga';

@Component({
  selector: 'app-estacionamento',
  templateUrl: './estacionamento.component.html',
  styleUrls: ['./estacionamento.component.css']
})
export class EstacionamentoComponent implements OnInit {

  public estacionamentos: Estacionamento[];
  public cols: any[];
  constructor(private router: Router, private estacionamentoService: EstacionamentosService) {

  }

  ngOnInit() {
    this.getEstacionadas();
    this.cols = [
      { field: 'id', header: '#' },
    ];
  }

  private getEstacionadas(): void {
    this.estacionamentoService.getEstacionamentos().subscribe(data => {
      this.estacionamentos = data;
    }, error => {
      console.log(error);
    });
  }

  public recuperarRegistro(estacionamento: Estacionamento): void {
    window.localStorage.removeItem('editEstacionamentoId');
    window.localStorage.setItem('editEstacionamentoId', estacionamento.id.toString());
    this.router.navigate(['estacionamentos/editar']);
  }

  public excluir(estacionamento: Estacionamento): void {
    this.estacionamentoService.delete(estacionamento.id)
      .subscribe( data => {
        const index = this.estacionamentos.indexOf(estacionamento);
        this.estacionamentos.splice(index, 1);
      });
  }

  public registrarSaida(estacionamento: Estacionamento): void {
    this.estacionamentoService.registarSaida(estacionamento)
      .subscribe( data => {
        this.getEstacionadas();
      });
  }
}
