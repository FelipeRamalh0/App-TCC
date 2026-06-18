export interface Tarefa {
  id?: string;

  titulo: string;

  descricao: string;

  dificuldade: string;

  tecnologias: string[];

  pontos: number;

  status: string;

  criadoPor: string;

  dataCriacao: Date;

  prazo: Date;
}
