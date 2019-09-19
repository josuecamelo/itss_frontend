import {Component, OnInit} from '@angular/core';
import {Vaga} from '../models/vaga';
import {Router} from '@angular/router';
import {VagasService} from '../client/vagas/service/vagas.service';
import {VagaStatus} from '../models/vaga-status';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public vagas: Vaga[];
  vagasLivres: any;
  vagasOcupadas: any;
  vagaStatus: any = [
    {id: "DISPONIVEL", nome: "Disponível"},
    {id: "OCUPADA", nome: "Ocupada"},
    {id: "INDISPONIVEL", nome: "Indisponível"}
  ];

  constructor( private router: Router, private vagaService: VagasService) { }

  ngOnInit() {
    this.totalVagas();
    this.vagasOcupadas = 0;
    this.vagasLivres = 0;
  }

  totalVagas(): void {
    var vagaStatus = [
      {id: "DISPONIVEL", nome: "Disponível"},
      {id: "OCUPADA", nome: "Ocupada"},
      {id: "INDISPONIVEL", nome: "Indisponível"}
    ];

    this.vagaService.getVagas().subscribe(data => {
      this.vagas = data;

      for (let i = 0; i < this.vagas.length; i++) {
        console.log(VagaStatus.DISPONIVEL)
        console.log(this.vagaStatus.id);
        if (this.vagaStatus[0].id === this.vagas[i].status) {
          this.vagasLivres++;
        } else {
          this.vagasOcupadas++;
        }
      }
    }, error => {
      console.log(error);
    });
  }
}
