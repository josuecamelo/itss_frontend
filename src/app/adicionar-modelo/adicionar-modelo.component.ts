import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Message} from 'primeng/api';
import {Router} from '@angular/router';
import {ModeloService} from '../client/modelos/service/modelo.service';

@Component({
  selector: 'app-adicionar-modelo',
  templateUrl: './adicionar-modelo.component.html',
  styleUrls: ['./adicionar-modelo.component.css']
})
export class AdicionarModeloComponent implements OnInit {

  addForm: FormGroup;
  msgs: Message[] = [];

  constructor(private formBuilder: FormBuilder, private router: Router, private modeloService: ModeloService) { }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [''],
      nome: ['', Validators.required],
    });
  }

  onSubmit() {
    this.modeloService.create(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['/modelos']);
      });
  }

}
