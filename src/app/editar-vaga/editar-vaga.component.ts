import { Component, OnInit } from '@angular/core';
import {Patio} from '../models/patio';
import {Vaga} from '../models/vaga';
import {Router} from '@angular/router';
import {VagasService} from '../client/vagas/service/vagas.service';
import {PatiosService} from '../client/patios/service/patios.service';
import {vagaStatus} from '../models/vaga-status';
import {Validators} from '@angular/forms';

@Component({
  selector: 'app-editar-vaga',
  templateUrl: './editar-vaga.component.html',
  styleUrls: ['./editar-vaga.component.css']
})
export class EditarVagaComponent implements OnInit {
  statusVaga: any;
  patios: Patio[];
  vagaId: any;

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

    this.vagaId = window.localStorage.getItem('editVagaId');
    if (!this.vagaId) {
      alert('Ação Inválida.');
      this.router.navigate(['vagas']);
      return;
    }

    this.vagaService.getVagaById(+this.vagaId)
      .subscribe( data => {
        this.vaga = data;
        console.log(data);
        console.log(data.patio.id);
      });
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
