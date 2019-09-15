import { Component, OnInit } from '@angular/core';
import {Patio} from '../models/patio';
import {Router} from '@angular/router';
import {PatiosService} from '../client/patios/service/patios.service';
import {VeiculosService} from '../client/veiculos/service/veiculos.service';
import {Veiculo} from '../models/veiculo';

@Component({
  selector: 'app-veiculos',
  templateUrl: './veiculos.component.html',
  styleUrls: ['./veiculos.component.css']
})
export class VeiculosComponent implements OnInit {

  public veiculos: Veiculo[];
  public cols: any[];
  constructor(private router: Router, private veiculoService: VeiculosService) {

  }

  ngOnInit() {
    this.getVeiculos();
    this.cols = [
      { field: 'id', header: '#' },
      { field: 'placa', header: 'Placa' },
    ];
  }

  private getVeiculos(): void {
    this.veiculoService.getVeiculos().subscribe(data => {
      this.veiculos = data;
      console.log(data);
    }, error => {
      console.log(error);
    });
  }

  public recuperarRegistro(patio: Patio): void {
    window.localStorage.removeItem('editVeiculoId');
    window.localStorage.setItem('editVeiculoId', patio.id.toString());
    this.router.navigate(['veiculos/editar']);
  }

  public excluir(veiculo: Veiculo): void {
    this.veiculoService.delete(veiculo.id)
      .subscribe( data => {
        const index = this.veiculos.indexOf(veiculo);
        this.veiculos.splice(index, 1);
      });
  }

}
