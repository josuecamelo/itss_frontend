import { Vaga } from '../models/vaga';

export class Patio {
  id: number;
  descricao: string;
  taxaHora: number;
  vagas: Vaga[];
  vagasTransient: Vaga[];
}
