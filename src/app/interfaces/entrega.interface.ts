export interface Entrega {

  id?: string;

  tarefaId: string;

  aprendizId: string;

  repositorio: string;

  codigoTexto: string;

  statusEntrega: string;

  feedback?: string;

}