import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Message} from 'primeng/api';
import {Router} from '@angular/router';
import {ModeloService} from '../client/modelos/service/modelo.service';
import {PatiosService} from '../client/patios/service/patios.service';

@Component({
  selector: 'app-adicionar-patio',
  templateUrl: './adicionar-patio.component.html',
  styleUrls: ['./adicionar-patio.component.css']
})
export class AdicionarPatioComponent implements OnInit {

  addForm: FormGroup;
  msgs: Message[] = [];

  constructor(private formBuilder: FormBuilder, private router: Router, private patioService: PatiosService) { }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [''],
      descricao: ['', Validators.required],
      taxaHora: ['', Validators.required],
    });
  }

  onSubmit() {
    this.patioService.create(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['/patios']);
      });
  }

}
