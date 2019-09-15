import { Patio } from '../models/patio';
import { VagaStatus } from '../models/vaga-status';
import { Estacionamento } from '../models/estacionamento';

export class Vaga {
  id: number;
  numero: number;
  patio: Patio;
  status: VagaStatus;
  ultimaEstacionada: Estacionamento;
}
