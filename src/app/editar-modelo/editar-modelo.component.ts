import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Message} from 'primeng/api';
import {Router} from '@angular/router';
import {UsuariosService} from '../client/usuarios/service/usuarios.service';
import {Modelo} from '../models/modelo';
import {ModeloService} from '../client/modelos/service/modelo.service';

@Component({
  selector: 'app-editar-modelo',
  templateUrl: './editar-modelo.component.html',
  styleUrls: ['./editar-modelo.component.css']
})
export class EditarModeloComponent implements OnInit {

  modeloId: any;
  modelo: Modelo;
  editForm: FormGroup;
  msgs: Message[] = [];

  constructor(private formBuilder: FormBuilder, private router: Router, private modeloService: ModeloService) {

  }

  ngOnInit() {
    this.modeloId = window.localStorage.getItem('editModeloId');
    if (!this.modeloId) {
      alert('Ação Inválida.');
      this.router.navigate(['modelos']);
      return;
    }

    this.editForm = this.formBuilder.group({
      id: [''],
      nome: ['', Validators.required],
    });

    this.modeloService.getModeloById(+this.modeloId)
      .subscribe( data => {
        this.editForm.setValue(data);
      });
  }


  onSubmit() {
    this.modeloService.update(this.editForm.value)
      .subscribe(data => {
            this.msgs = [];
            this.msgs.push({ severity: 'success', summary: 'Sucesso', detail: `O Modelo foi Editado com Sucesso` });
            this.router.navigate(['modelos']);
        },
        error => {
          alert(error);
        });
  }
}
