import { Component, OnInit } from '@angular/core';
import {Modelo} from '../models/modelo';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Message} from 'primeng/api';
import {Router} from '@angular/router';
import {ModeloService} from '../client/modelos/service/modelo.service';
import {Patio} from '../models/patio';
import {PatiosService} from '../client/patios/service/patios.service';

@Component({
  selector: 'app-editar-patio',
  templateUrl: './editar-patio.component.html',
  styleUrls: ['./editar-patio.component.css']
})
export class EditarPatioComponent implements OnInit {

  patioId: any;
  patio: Patio;
  editForm: FormGroup;
  msgs: Message[] = [];

  constructor(private formBuilder: FormBuilder, private router: Router, private patiosService: PatiosService) {

  }

  ngOnInit() {
    this.patioId = window.localStorage.getItem('editPatioId');
    if (!this.patioId) {
      alert('Ação Inválida.');
      this.router.navigate(['patios']);
      return;
    }

    this.editForm = this.formBuilder.group({
      id: [''],
      descricao: ['', Validators.required],
      taxaHora: ['', Validators.required],
      vagasTransient: [''],
    });

    this.patiosService.getPatioById(+this.patioId)
      .subscribe( data => {
        this.editForm.setValue(data);
      });
  }


  onSubmit() {
    this.patiosService.update(this.editForm.value)
      .subscribe(data => {
          this.msgs = [];
          this.msgs.push({ severity: 'success', summary: 'Sucesso', detail: `O Pátio foi Editado com Sucesso` });
          this.router.navigate(['patios']);
        },
        error => {
          alert(error);
        });
  }

}
