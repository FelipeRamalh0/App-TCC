import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private auth: Auth){}

  login( email: string, senha: string, ){
    return signInWithEmailAndPassword(this.auth,  email, senha, );
  }

  register(email: string, senha: string){
    return createUserWithEmailAndPassword(this.auth, email, senha);
  }
  logout(){
    return signOut(this.auth);
  }

  loginWithGoogle(){
    const provider= new GoogleAuthProvider();
    return signInWithPopup(this.auth, provider);
  }

  loginWithGitHub(){
    const provider= new GithubAuthProvider();
    return signInWithPopup(this.auth, provider)
  }
}
