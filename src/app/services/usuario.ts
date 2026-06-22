import { Injectable } from '@angular/core';

import {
  Firestore,
  doc,
  setDoc,
  getDoc,
  updateDoc,
  collection,
  collectionData,
  query,
  orderBy,
  where
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class Usuario {

  constructor(
    private firestore: Firestore
  ) {}

  async criarUsuario(usuario: any) {

    const usuarioRef = doc(
      this.firestore,
      'usuarios',
      usuario.uid
    );

    return await setDoc(
      usuarioRef,
      usuario
    );
  }

  async buscarUsuario(uid: string) {

    const usuarioRef = doc(
      this.firestore,
      'usuarios',
      uid
    );

    const snap = await getDoc(usuarioRef);

    if (snap.exists()) {
      return snap.data();
    }

    return null;
  }

  async atualizarUsuario(
    uid: string,
    dados: any
  ) {

    const usuarioRef = doc(
      this.firestore,
      'usuarios',
      uid
    );

    return await updateDoc(
      usuarioRef,
      dados
    );
  }

async adicionarPontos(
  uid: string,
  pontos: number
) {

  const usuarioRef = doc(
    this.firestore,
    `usuarios/${uid}`
  );

  const snapshot =
    await getDoc(usuarioRef);

  const usuario =
    snapshot.data();

  await updateDoc(
    usuarioRef,
    {
      pontuacao:
        (usuario?.['pontuacao'] || 0)
        + pontos
    }
  );

}

listarRanking() {

  const usuariosRef = collection(this.firestore, 'usuarios');

  const q = query(
    usuariosRef,
    where('tipoUsuario', '==', 'Aprendiz'),
    orderBy('pontuacao', 'desc')
  );

  return collectionData(q, { idField: 'id' });
}

}

