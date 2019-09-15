import { Component, OnInit } from '@angular/core';
import {vagaStatus} from '../models/vaga-status';
import {Router} from '@angular/router';
import {VagasService} from '../client/vagas/service/vagas.service';
import {PatiosService} from '../client/patios/service/patios.service';
import {Patio} from '../models/patio';
import {FormGroup} from '@angular/forms';
import {Vaga} from '../models/vaga';

@Component({
  selector: 'app-adicionar-vaga',
  templateUrl: './adicionar-vaga.component.html',
  styleUrls: ['./adicionar-vaga.component.css']
})
export class AdicionarVagaComponent implements OnInit {
  statusVaga: any;
  patios: Patio[];
  patio: Patio;
  vaga: Vaga = {
    id: null,
    numero: null,
    status: null,
    patio: null,
    ultimaEstacionada: null
  };

  constructor( private router: Router, private vagaService: VagasService,
               private patioService: PatiosService) { }

  ngOnInit() {
    this.getPatios();
    this.statusVaga = vagaStatus;
  }

  private getPatios(): void {
    this.patioService.getPatios().subscribe(data => {
      this.patios = data;
    }, error => {
      console.log(error);
    });
  }

  onSubmit() {
    this.vagaService.create(this.vaga)
      .subscribe( data => {
        this.router.navigate(['/vagas']);
      });
  }
}
