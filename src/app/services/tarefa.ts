import { Injectable } from '@angular/core';

import {
  Firestore,
  collection,
  collectionData,
  addDoc,
  doc,
  getDoc,
  updateDoc,
  query,
  where,
  deleteDoc,
  serverTimestamp
} from '@angular/fire/firestore';
import { Auth } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root',
})
export class TarefaService {

  constructor(
  private firestore: Firestore,
   private auth: Auth
) {}
  
async criarTarefa(tarefa: any) {

   const usuario = this.auth.currentUser;


  if (!usuario) {
    throw new Error('Usuário não autenticado');
  }

  const tarefasRef = collection(
    this.firestore,
    'tarefas'
  );

  return addDoc(tarefasRef, {

    ...tarefa,

    profissionalId: usuario.uid,

    status: 'aberta',

    createdAt: serverTimestamp()

  });

}
//-----------------------------
//LISTAR TODAS AS TAREFAS
//----------------------------
 listarTarefas() {

    const tarefasRef = collection(
      this.firestore,
      'tarefas'
    );

    const q = query(
      tarefasRef,
      where('status', '==', 'aberta')
    );

    return collectionData(q, { idField: 'id' });
  }


//--------------------------------
//Listar tarefas Profissional
//--------------------------------
listarTarefasProfissional(uid: string) {

  const tarefasRef = collection(
    this.firestore,
    'tarefas'
  );

  const q = query(
    tarefasRef,
    where('profissionalId', '==', uid)
  );

  return collectionData(
    q,
    { idField: 'id' }
  );

}


//-----------------------
//ASSUMIR TAREFA
//------------------------
async assumirTarefa(
  idTarefa: string
) {

  const usuario = this.auth.currentUser;

  if (!usuario) {
    throw new Error(
      'Usuário não autenticado'
    );
  }

  const tarefaRef = doc(
    this.firestore,
    `tarefas/${idTarefa}`
  );

  return updateDoc(
    tarefaRef,
    {
      aprendizId: usuario.uid,
      status: 'em_andamento'
    }
  )
}
//-------------------------
//LISTAR MINHAS TAREFAS
//------------------------


listarMinhasTarefas(uid: string) {

  const tarefasRef = collection(
    this.firestore,
    'tarefas'
  );

  const q = query(
  tarefasRef,
  where('aprendizId', '==', uid),
  where('status', '==', 'em_andamento')
);

  return collectionData(
    q,
    { idField: 'id' }
  );

}
//----------------------------
//BUSCAR TAREFAS
//----------------------------
async buscarTarefa(id: string) {

  const tarefaRef = doc(
    this.firestore,
    'tarefas',
    id
  );

  const snapshot =
    await getDoc(tarefaRef);

  return snapshot.data();

}
//------------------------
//BUSCAR TAREFA POR ID
//---------------------------
async buscarPorId(id: string) {

  const tarefaRef =
    doc(this.firestore,
    `tarefas/${id}`);

  const tarefa =
    await getDoc(tarefaRef);

  return tarefa.data();

}
//----------------------------
//EDITAR TAREFA
//----------------------------
async editarTarefa(
  id: string,
  dados: any
) {

  const tarefaRef =
    doc(this.firestore,
    `tarefas/${id}`);

  return updateDoc(
    tarefaRef,
    dados
  );

}
//-------------------------------
//EXCLUIR TAREFA
//----------------------------

async excluirTarefa(id: string) {

  const tarefaRef = doc(
    this.firestore,
    `tarefas/${id}`
  );

  return deleteDoc(tarefaRef);

}

//-----------------------------------
// ENVIAR ENTREGA
//-----------------------------------

async enviarEntrega(
  tarefaId: string,
  github: string,
  codigo: string
) {

  const usuario = this.auth.currentUser;

  if (!usuario) {
    throw new Error(
      'Usuário não autenticado'
    );
  }

  const entregasRef = collection(
    this.firestore,
    'entregas'
  );
const user = JSON.parse(
  localStorage.getItem('usuario') || '{}'
);
  await addDoc(entregasRef, {

    tarefaId,

    aprendizId: usuario.uid,

    aprendizNome: user.nome,

    github,

    codigo,

    status: 'pendente',

    createdAt: serverTimestamp()

  });

  const tarefaRef = doc(
    this.firestore,
    `tarefas/${tarefaId}`
  );

  await updateDoc(
    tarefaRef,
    {
      status: 'em_revisao'
    }
  );

}

//---------------------
//APROVAR ENTREGA
//--------------------

async aprovarTarefa(
  idTarefa: string
) {

  const tarefaRef = doc(
    this.firestore,
    `tarefas/${idTarefa}`
  );

  await updateDoc(
    tarefaRef,
    {
      status: 'concluida'
    }
  );

}

//----------------------
//REJEITAR ENTREGA
//----------------------
async rejeitarTarefa(idTarefa: string) {

  const tarefaRef = doc(
    this.firestore,
    `tarefas/${idTarefa}`
  );

  return updateDoc(
    tarefaRef,
    {
      status: 'em_andamento'
    }
  );

}



}