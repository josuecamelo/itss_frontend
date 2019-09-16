import { Component, OnInit } from '@angular/core';
import {Estacionamento} from '../models/estacionamento';
import {Veiculo} from '../models/veiculo';
import {Vaga} from '../models/vaga';
import {Router} from '@angular/router';
import {EstacionamentosService} from '../client/estacionamentos/service/estacionamentos.service';
import {VeiculosService} from '../client/veiculos/service/veiculos.service';
import {VagasService} from '../client/vagas/service/vagas.service';

@Component({
  selector: 'app-adicionar-estacionamento',
  templateUrl: './adicionar-estacionamento.component.html',
  styleUrls: ['./adicionar-estacionamento.component.css']
})
export class AdicionarEstacionamentoComponent implements OnInit {
  estacionamento: Estacionamento = {
    id: null,
    entrada: null,
    saida: null,
    valorPago: null,
    veiculo: null,
    vaga: null,
  };
  veiculos: Veiculo[];
  vagas: Vaga[];

  constructor( private router: Router, private estacionamentoService: EstacionamentosService,
               private veiculosService: VeiculosService, private vagaService: VagasService) { }

  ngOnInit() {
    this.veiculosService.getVeiculos()
      .subscribe( data => {
        this.veiculos = data;
      });

    this.vagaService.getVagas()
      .subscribe( data => {
        this.vagas = data;
      });
  }

  onSubmit() {
    this.estacionamentoService.create(this.estacionamento)
      .subscribe( data => {
        this.router.navigate(['/estacionamentos']);
      });
  }
}
