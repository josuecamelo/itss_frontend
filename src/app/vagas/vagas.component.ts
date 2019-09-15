import { Component, OnInit } from '@angular/core';
import {PatiosService} from '../client/patios/service/patios.service';
import {VagasService} from '../client/vagas/service/vagas.service';
import {Modelo} from '../models/modelo';
import {Router} from '@angular/router';
import {Vaga} from '../models/vaga';

@Component({
  selector: 'app-vagas',
  templateUrl: './vagas.component.html',
  styleUrls: ['./vagas.component.css']
})
export class VagasComponent implements OnInit {
  public vagas: Vaga[];
  public cols: any[];
  constructor( private router: Router, private vagaService: VagasService,
               private patioService: PatiosService) { }
  ngOnInit() {
    this.getPatios();
    this.cols = [
      { field: 'id', header: '#' },
      { field: 'numero', header: 'Número' },
      { field: 'status', header: 'Status' },
    ];
  }

  private getPatios(): void {
    this.vagaService.getVagas().subscribe(data => {
      this.vagas = data;
    }, error => {
      console.log(error);
    });
  }

  public recuperarRegistro(vaga: Vaga): void {
    window.localStorage.removeItem('editVagaId');
    window.localStorage.setItem('editVagaId', vaga.id.toString());
    this.router.navigate(['vagas/editar']);
  }

  public excluir(vaga: Vaga): void {
    this.vagaService.delete(vaga.id)
      .subscribe( data => {
        const index = this.vagas.indexOf(vaga);
        this.vagas.splice(index, 1);
      });
  }
}
