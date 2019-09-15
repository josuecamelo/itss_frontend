import { Veiculo } from '../models/veiculo';
import { Vaga } from '../models/vaga';

export class Estacionamento {
  id: number;
  entrada: Date;
  saida: Date;
  valorPago: number;
  veiculo: Veiculo;
  vaga: Vaga;
}
