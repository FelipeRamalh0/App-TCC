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

@Injectable({
  providedIn: 'root',
})
export class Entrega {

constructor(
  private firestore: Firestore
){}


  listarEntregasPorTarefa(tarefaId: string) {

  const entregasRef = collection(
    this.firestore,
    'entregas'
  );

  const q = query(
    entregasRef,
    where('tarefaId', '==', tarefaId)
  );

  return collectionData(
    q,
    { idField: 'id' }
  );

}

//--------------------
//APROVAR ENTREGAS
//--------------------

async aprovarEntrega(idEntrega: string) {

  const entregaRef = doc(
    this.firestore,
    `entregas/${idEntrega}`
  );

  return updateDoc(
    entregaRef,
    {
      status: 'aprovada'
    }
  );

}

//----------------------
//REPROVAR ENTREGAS
//----------------------
 async rejeitarEntrega(idEntrega: string) {

  const entregaRef = doc(
    this.firestore,
    `entregas/${idEntrega}`
  );

  return updateDoc(
    entregaRef,
    {
      status: 'rejeitada'
    }
  );

}

}
