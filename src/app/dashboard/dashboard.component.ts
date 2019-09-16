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
  constructor( private router: Router, private vagaService: VagasService) { }

  ngOnInit() {
    this.totalVagas();
    this.vagasOcupadas = 0;
    this.vagasLivres = 0;
  }

  totalVagas(): void {
    this.vagaService.getVagas().subscribe(data => {
      this.vagas = data;

      for (let i = 0; i < this.vagas.length; i++) {
        if ( this.vagas[i].status === VagaStatus.DISPONIVEL ) {
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
