import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth, User } from 'firebase/app';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // 最新のログイン情報をとれるストリーム
  afUser$: Observable<User> = this.afAuth.user;

  constructor(private afAuth: AngularFireAuth) {
    this.afUser$.subscribe((user) => console.log(user));
  }

  login() {
    // ログインするとポップアップでGithubログイン画面が開く
    this.afAuth.signInWithPopup(new auth.GithubAuthProvider());
  }

  logout() {}
}
