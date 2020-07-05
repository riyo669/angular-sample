import { Component, OnInit } from '@angular/core';
import { Monster } from 'src/app/interfaces/monster';
import { MonsterService } from 'src/app/services/monster.service';
import { AuthService } from 'src/app/services/auth.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  monster$: Observable<Monster> = this.monsterService.getMonster(
    this.authService.uid
  );

  constructor(
    private monsterService: MonsterService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}
}
