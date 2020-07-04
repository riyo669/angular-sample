import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth, User } from 'firebase/app';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // 最新のログイン情報をとれるストリーム
  afUser$: Observable<User> = this.afAuth.user;

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.afUser$.subscribe((user) => console.log(user));
  }

  login() {
    // ログインするとポップアップでGithubログイン画面が開く
    this.afAuth.signInWithPopup(new auth.GithubAuthProvider()).then(() => {
      this.snackBar.open('ログインしました😃', null, {
        duration: 2000,
      });
    });
  }

  logout() {
    this.afAuth.signOut().then(() => {
      this.snackBar.open('ログアウトしました😇', null, {
        duration: 2000,
      });
    });
    this.router.navigateByUrl('/welcome');
  }
}
