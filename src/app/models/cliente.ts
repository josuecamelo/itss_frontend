import { Veiculo } from '../models/veiculo';

export class Cliente {
  id: number;
  nome: string;
  cpf: string;
  telefone: string;
  veiculos: Veiculo[];
}
