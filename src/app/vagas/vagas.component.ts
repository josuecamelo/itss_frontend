import { Component, OnInit } from '@angular/core';
import {PatiosService} from '../client/patios/service/patios.service';
import {VagasService} from '../client/vagas/service/vagas.service';

@Component({
  selector: 'app-vagas',
  templateUrl: './vagas.component.html',
  styleUrls: ['./vagas.component.css']
})
export class VagasComponent implements OnInit {

  constructor( private vagaService: VagasService,
               private patioService: PatiosService) { }

  ngOnInit() {
  }

}
