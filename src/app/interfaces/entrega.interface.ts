export interface Entrega {
  id?: string;

  tarefaId: string;

  aprendizId: string;

  resposta: string;

  status: string;

  feedback?: string;

  dataEntrega: Date;
}
