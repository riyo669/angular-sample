import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Monster } from '../interfaces/monster';
import { MatSnackBar } from '@angular/material/snack-bar';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MonsterService {
  constructor(private db: AngularFirestore, private snackBar: MatSnackBar) {}

  createMonster(monster: Monster) {
    const id = this.db.createId();
    return this.db
      .doc(`monsters/${id}`)
      .set(monster)
      .then(() => {
        this.snackBar.open('モンスターを作成しました😼', null, {
          duration: 2000,
        });
      });
  }

  getMonster(trainerId: string): Observable<Monster> {
    return this.db
      .collection<Monster>('monsters', (ref) =>
        ref.where('trainerId', '==', trainerId)
      )
      .valueChanges()
      .pipe(
        map((monsters) => {
          if (monsters.length) {
            return monsters[0];
          } else {
            return null;
          }
        })
      );
  }
}
