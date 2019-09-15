import { Component } from '@angular/core';
import { Message } from 'primeng/components/common/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  msgs: Message[] = [];
  nome: string;
  menus: MenuItem[] = [
    {
      path: '/clientes',
      title: 'Clientes'
    },
    {
      path: '/cores',
      title: 'Cores'
    },
    {
      path: '/estacionamento',
      title: 'Estacionamento'
    },
    {
      path: '/modelos',
      title: 'Modelos'
    },
    {
      path: '/patios',
      title: 'Pátios'
    },
    {
      path: '/usuarios',
      title: 'Usuários'
    },
    {
      path: '/vagas',
      title: 'Vagas'
    },
    {
      path: '/veiculos',
      title: 'Veículos'
    },
  ];

  private showMessages() {
    this.msgs = [];
    this.msgs.push({ severity: 'success', summary: 'Success Message', detail: `Olá, ${this.nome}` });
  }

  private onChangeEvent({ target }) {
    this.nome = target.value;
  }
}

export class MenuItem {
  path: string;
  title: string;
  icon?: string;
}
