import { Component, OnInit } from '@angular/core';
import { Monster } from 'src/app/interfaces/monster';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  monster: Monster = {
    name: 'テストモンスター',
    exp: 200,
    level: 4,
    avatarURL: '/assets/images/monster-6.png',
  };

  constructor() {}

  ngOnInit(): void {}
}
