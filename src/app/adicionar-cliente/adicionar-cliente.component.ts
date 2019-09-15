import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Message} from 'primeng/api';
import {Router} from '@angular/router';
import {ClientesService} from '../client/clientes/service/clientes.service';

@Component({
  selector: 'app-adicionar-cliente',
  templateUrl: './adicionar-cliente.component.html',
  styleUrls: ['./adicionar-cliente.component.css']
})
export class AdicionarClienteComponent implements OnInit {
  addForm: FormGroup;
  msgs: Message[] = [];

  constructor(private formBuilder: FormBuilder, private router: Router, private clienteService: ClientesService) { }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [''],
      nome: ['', Validators.required],
      cpf: ['', Validators.required],
      telefone: ['', Validators.required],
    });
  }

  onSubmit() {
    this.clienteService.create(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['/clientes']);
      });
  }
}
