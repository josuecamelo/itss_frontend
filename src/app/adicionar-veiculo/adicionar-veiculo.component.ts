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

@Component({
  selector: 'app-adicionar-veiculo',
  templateUrl: './adicionar-veiculo.component.html',
  styleUrls: ['./adicionar-veiculo.component.css']
})
export class AdicionarVeiculoComponent implements OnInit {
  cores: Cor[];
  modelos: Modelo[];
  clientes: Cliente[];

  veiculo: Veiculo = {
    id: null,
    placa: null,
    cliente: null,
    modelo: null,
    cor: null,
    estacionadas: null
  };

  constructor( private router: Router, private veiculoService: VeiculosService,
               private corService: CoresService, private clientesService: ClientesService,
               private modeloService: ModeloService) { }

  ngOnInit() {
    this.corService.getCores()
      .subscribe( data => {
        this.cores = data;
      });

    this.modeloService.getModelos()
      .subscribe( data => {
        this.modelos = data;
      });

    this.clientesService.getClientes()
      .subscribe( data => {
        this.clientes = data;
      });
  }

  onSubmit() {
    this.veiculoService.create(this.veiculo)
      .subscribe( data => {
        this.router.navigate(['/veiculos']);
      });
  }

}
