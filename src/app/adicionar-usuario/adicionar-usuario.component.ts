import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Message} from 'primeng/api';
import {Router} from '@angular/router';
import {ClientesService} from '../client/clientes/service/clientes.service';
import {Usuario} from '../models/usuario';
import {UsuariosService} from '../client/usuarios/service/usuarios.service';

@Component({
  selector: 'app-adicionar-usuario',
  templateUrl: './adicionar-usuario.component.html',
  styleUrls: ['./adicionar-usuario.component.css']
})
export class AdicionarUsuarioComponent implements OnInit {
  addForm: FormGroup;
  msgs: Message[] = [];

  constructor(private formBuilder: FormBuilder, private router: Router, private usuarioService: UsuariosService) { }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [''],
      nome: ['', Validators.required],
      login: ['', Validators.required],
      senha: ['', Validators.required],
      telefone: ['', Validators.required],
    });
  }

  onSubmit() {
    this.usuarioService.create(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['/usuarios']);
      });
  }
}
