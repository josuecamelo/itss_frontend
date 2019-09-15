import { Component, OnInit } from '@angular/core';
import {Cliente} from '../models/cliente';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Message} from 'primeng/api';
import {Router} from '@angular/router';
import {ClientesService} from '../client/clientes/service/clientes.service';
import {Usuario} from '../models/usuario';
import {UsuariosService} from '../client/usuarios/service/usuarios.service';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {

  usuarioId: any;
  usuario: Usuario;
  editForm: FormGroup;
  msgs: Message[] = [];

  constructor(private formBuilder: FormBuilder, private router: Router, private usuarioService: UsuariosService) {

  }

  ngOnInit() {
    this.usuarioId = window.localStorage.getItem('editUsuarioId');
    if (!this.usuarioId) {
      alert('Ação Inválida.');
      this.router.navigate(['usuarios']);
      return;
    }

    this.editForm = this.formBuilder.group({
      id: [''],
      nome: ['', Validators.required],
      login: ['', Validators.required],
      senha: ['', Validators.required],
      telefone: ['', Validators.required],
    });

    this.usuarioService.getUsuarioById(+this.usuarioId)
      .subscribe( data => {
        this.editForm.setValue(data);
      });
  }


  onSubmit() {
    this.usuarioService.update(this.editForm.value)
      .subscribe(data => {
          if (data.id) {
            this.msgs = [];
            this.msgs.push({ severity: 'success', summary: 'Sucesso', detail: `O Usuário foi Editado com Sucesso` });
            this.router.navigate(['usuarios']);
          } else {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: 'Falha', detail: `O Usuário não pode ser Editado` });
          }
        },
        error => {
          alert(error);
        });
  }
}
