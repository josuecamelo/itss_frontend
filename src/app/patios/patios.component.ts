import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {PatiosService} from '../client/patios/service/patios.service';
import {Patio} from '../models/patio';

@Component({
  selector: 'app-patios',
  templateUrl: './patios.component.html',
  styleUrls: ['./patios.component.css']
})
export class PatiosComponent implements OnInit {
  public patios: Patio[];
  public cols: any[];
  constructor(private router: Router, private patioService: PatiosService) {

  }

  ngOnInit() {
    this.getPatio();
    this.cols = [
      { field: 'id', header: '#' },
      { field: 'descricao', header: 'Descrição' },
      { field: 'taxaHora', header: 'Valor/Hora' },
    ];
  }

  private getPatio(): void {
    this.patioService.getPatios().subscribe(data => {
      this.patios = data;
    }, error => {
      console.log(error);
    });
  }

  public recuperarRegistro(patio: Patio): void {
    window.localStorage.removeItem('editPatioId');
    window.localStorage.setItem('editPatioId', patio.id.toString());
    this.router.navigate(['patios/editar']);
  }

  public excluir(patio: Patio): void {
    this.patioService.delete(patio.id)
      .subscribe( data => {
        const index = this.patios.indexOf(patio);
        this.patios.splice(index, 1);
      });
  }
}
