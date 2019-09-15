import { Cliente } from '../models/cliente';
import { Modelo } from '../models/modelo';
import { Cor } from '../models/cor';
import { Estacionamento } from '../models/estacionamento';

export class Veiculo {
  id: number;
  placa: string;
  cliente: Cliente;
  modelo: Modelo;
  cor: Cor;
  estacionadas: Estacionamento[];
}
