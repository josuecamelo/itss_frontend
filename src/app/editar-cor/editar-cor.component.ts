import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Message} from 'primeng/api';
import {Router} from '@angular/router';
import {CoresService} from '../client/cores/service/cores.service';
import {Cor} from '../models/cor';

@Component({
  selector: 'app-editar-cor',
  templateUrl: './editar-cor.component.html',
  styleUrls: ['./editar-cor.component.css']
})
export class EditarCorComponent implements OnInit {

  corId: any;
  cor: Cor;
  editForm: FormGroup;
  msgs: Message[] = [];

  constructor(private formBuilder: FormBuilder, private router: Router, private corService: CoresService) {

  }

  ngOnInit() {
    this.corId = window.localStorage.getItem('editCorId');
    if (!this.corId) {
      alert('Ação Inválida.');
      this.router.navigate(['modelos']);
      return;
    }

    this.editForm = this.formBuilder.group({
      id: [''],
      nome: ['', Validators.required],
    });

    this.corService.getCorById(+this.corId)
      .subscribe( data => {
        this.editForm.setValue(data);
      });
  }


  onSubmit() {
    this.corService.update(this.editForm.value)
      .subscribe(data => {
          if (data.id) {
            this.msgs = [];
            this.msgs.push({ severity: 'success', summary: 'Sucesso', detail: `A Cor foi Editado com Sucesso` });
            this.router.navigate(['cores']);
          } else {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: 'Falha', detail: `A Cor não pode ser Editado` });
          }
        },
        error => {
          alert(error);
        });
  }

}
