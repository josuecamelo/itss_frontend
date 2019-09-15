import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {CoresService} from '../client/cores/service/cores.service';
import {Cor} from '../models/cor';

@Component({
  selector: 'app-cores',
  templateUrl: './cores.component.html',
  styleUrls: ['./cores.component.css']
})
export class CoresComponent implements OnInit {
  public cores: Cor[];
  public cols: any[];
  constructor(private router: Router, private corService: CoresService) {

  }

  ngOnInit() {
    this.getCores();
    this.cols = [
      { field: 'id', header: '#' },
      { field: 'nome', header: 'Nome' },
    ];
  }

  private getCores(): void {
    this.corService.getCores().subscribe(data => {
      this.cores = data;
    }, error => {
      console.log(error);
    });
  }

  public recuperarRegistro(cor: Cor): void {
    window.localStorage.removeItem('editCorId');
    window.localStorage.setItem('editCorId', cor.id.toString());
    this.router.navigate(['cores/editar']);
  }

  public excluir(cor: Cor): void {
    this.corService.delete(cor.id)
      .subscribe( data => {
        const index = this.cores.indexOf(cor);
        this.cores.splice(index, 1);
      });
  }
}
