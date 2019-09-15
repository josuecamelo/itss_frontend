import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Message} from 'primeng/api';
import {Router} from '@angular/router';
import {ClientesService} from '../client/clientes/service/clientes.service';
import {CoresService} from '../client/cores/service/cores.service';

@Component({
  selector: 'app-adicionar-cor',
  templateUrl: './adicionar-cor.component.html',
  styleUrls: ['./adicionar-cor.component.css']
})
export class AdicionarCorComponent implements OnInit {

  addForm: FormGroup;
  msgs: Message[] = [];

  constructor(private formBuilder: FormBuilder, private router: Router, private corService: CoresService) { }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [''],
      nome: ['', Validators.required],
    });
  }

  onSubmit() {
    this.corService.create(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['/cores']);
      });
  }

}
