export interface Usuario {

  uid?: string;

  nome: string;

  email: string;

  tipoUsuario: 'Aprendiz' | 'Profissional';

  bio?: string;

  pontuacao: number;

  nivelExperiencia: string;
}
