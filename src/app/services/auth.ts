import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, authState } from '@angular/fire/auth';
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private auth: Auth,
    private authService: AuthService
  ){}

  async login( email: string, senha: string, ){
    return signInWithEmailAndPassword(this.auth,  email, senha, );
  }

  async register(email: string, senha: string){
    return createUserWithEmailAndPassword(this.auth, email, senha);
  }
  async logout(){
    return signOut(this.auth);
  }

  async loginWithGoogle(){
    const provider= new GoogleAuthProvider();
    const credencial = await this.authService.loginWithGoogle();
  return signInWithPopup(this.auth, provider);
  }

  async loginWithGitHub(){
    const provider= new GithubAuthProvider();
    return signInWithPopup(this.auth, provider)
  }
   usuarioLogado() {
  return authState(this.auth);
}
 usuarioAtual() {
  return this.auth.currentUser;
}
}
