import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Cliente} from '../models/cliente';
import {Router} from '@angular/router';
import {ClientesService} from '../client/clientes/service/clientes.service';
import {Message} from 'primeng/api';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent implements OnInit {
  clienteId: any;
  cliente: Cliente;
  editForm: FormGroup;
  msgs: Message[] = [];

  constructor(private formBuilder: FormBuilder, private router: Router, private clienteService: ClientesService) {

  }

  ngOnInit() {
    this.clienteId = window.localStorage.getItem('editClienteId');
    if (!this.clienteId) {
      alert('Ação Inválida.');
      this.router.navigate(['clientes']);
      return;
    }

    this.editForm = this.formBuilder.group({
      id: [''],
      nome: ['', Validators.required],
      cpf: ['', Validators.required],
      telefone: ['', Validators.required],
    });

    this.clienteService.getClienteById(+this.clienteId)
      .subscribe( data => {
        this.editForm.setValue(data);
      });
  }


  onSubmit() {
    this.clienteService.update(this.editForm.value)
      .subscribe(data => {
          if (data.id) {
            this.msgs = [];
            this.msgs.push({ severity: 'success', summary: 'Sucesso', detail: `O Cliente Editado com Sucesso` });
            this.router.navigate(['clientes']);
          } else {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: 'Falha', detail: `O Cliente não pode ser Editado` });
          }
        },
        error => {
          alert(error);
        });
  }
}
