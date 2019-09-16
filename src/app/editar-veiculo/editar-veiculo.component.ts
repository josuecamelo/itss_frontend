import { Component, OnInit } from '@angular/core';
import {Vaga} from '../models/vaga';
import {Router} from '@angular/router';
import {VeiculosService} from '../client/veiculos/service/veiculos.service';
import {Veiculo} from '../models/veiculo';
import {Cliente} from '../models/cliente';
import {Modelo} from '../models/modelo';
import {Cor} from '../models/cor';
import {CoresService} from '../client/cores/service/cores.service';
import {ClientesService} from '../client/clientes/service/clientes.service';
import {ModeloService} from '../client/modelos/service/modelo.service';

@Component({
  selector: 'app-editar-veiculo',
  templateUrl: './editar-veiculo.component.html',
  styleUrls: ['./editar-veiculo.component.css']
})
export class EditarVeiculoComponent implements OnInit {
  veiculos: Veiculo[];
  cores: Cor[];
  modelos: Modelo[];
  clientes: Cliente[];
  veiculoId: any;

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
    this.getVeiculos();

    this.veiculoId = window.localStorage.getItem('editVeiculoId');
    if (!this.veiculoId) {
      alert('Ação Inválida.');
      this.router.navigate(['veiculos']);
      return;
    }

    this.veiculoService.getVeiculoById(+this.veiculoId)
      .subscribe( data => {
        this.veiculo = data;
      });

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

  private getVeiculos(): void {
    this.veiculoService.getVeiculos().subscribe(data => {
      this.veiculos = data;
    }, error => {
      console.log(error);
    });
  }

  onSubmit() {
    this.veiculoService.update(this.veiculo)
      .subscribe( data => {
        this.router.navigate(['/veiculos']);
      });
  }
}
