export interface Usuario {
  uid?: string;

  nome: string;
  email: string;

  tipoUsuario: 'aprendiz' | 'profissional';

  bio?: string;

  fotoPerfil?: string;

  pontuacao: number;

  nivel: string;

  tarefasConcluidas: number;

  dataCriacao: Date;
}
