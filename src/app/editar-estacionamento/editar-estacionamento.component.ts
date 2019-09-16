import { Component, OnInit } from '@angular/core';
import {Veiculo} from '../models/veiculo';
import {Cor} from '../models/cor';
import {Modelo} from '../models/modelo';
import {Cliente} from '../models/cliente';
import {Router} from '@angular/router';
import {VeiculosService} from '../client/veiculos/service/veiculos.service';
import {CoresService} from '../client/cores/service/cores.service';
import {ClientesService} from '../client/clientes/service/clientes.service';
import {ModeloService} from '../client/modelos/service/modelo.service';
import {EstacionamentosService} from '../client/estacionamentos/service/estacionamentos.service';
import {Estacionamento} from '../models/estacionamento';
import {Vaga} from '../models/vaga';
import {VagasService} from '../client/vagas/service/vagas.service';

@Component({
  selector: 'app-editar-estacionamento',
  templateUrl: './editar-estacionamento.component.html',
  styleUrls: ['./editar-estacionamento.component.css']
})
export class EditarEstacionamentoComponent implements OnInit {
  estacionamentoId: any;
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
    this.estacionamentoId = window.localStorage.getItem('editEstacionamentoId');
    console.log(this.estacionamentoId);
    if (!this.estacionamentoId) {
      alert('Ação Inválida.');
      this.router.navigate(['estacionamentos']);
      return;
    }

    this.estacionamentoService.getEstacionamentoById(+this.estacionamentoId)
      .subscribe( data => {
        this.estacionamento = data;
        console.log(data);
      });

    this.veiculosService.getVeiculos()
      .subscribe( data => {
        this.veiculos = data;
        console.log(data);
      });

    this.vagaService.getVagas()
      .subscribe( data => {
        this.vagas = data;
        console.log(data);
      });
  }

  onSubmit() {
    this.estacionamentoService.update(this.estacionamento)
      .subscribe( data => {
        this.router.navigate(['/estacionamentos']);
      });
  }
}
