import { Component, OnInit, Input } from '@angular/core';
import { Monster } from 'src/app/interfaces/monster';

@Component({
  selector: 'app-monster',
  templateUrl: './monster.component.html',
  styleUrls: ['./monster.component.scss'],
})
export class MonsterComponent implements OnInit {
  @Input() monster: Monster;
  maxExp = 400;

  constructor() {}

  ngOnInit(): void {}

  getExpPercentage(): number {
    return (this.monster.exp / this.maxExp) * 100;
  }
}
