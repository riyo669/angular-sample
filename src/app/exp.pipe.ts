import { Pipe, PipeTransform } from '@angular/core';
import { Monster } from './interfaces/monster';

// 各レベルの累計値
const expTable = [20, 40, 100, 200, 350, 500, 700, 900, 1100, 1500];

@Pipe({
  name: 'exp',
})
export class ExpPipe implements PipeTransform {
  transform(monster: Monster, ...args: any[]): any {
    const totalExp = monster.exp;
    const level = monster.level;
    const baseExp = expTable[level - 2] || 0; // 2レベルだとしたら20
    const nextExp = expTable[level - 1] - baseExp; // 2レベルだとしたら40-20=20
    const exp = totalExp - baseExp; // 今経験値が30だとしたら30-20=10で3レベルになるのに40必要で今10あるということ
    return exp + ' / ' + nextExp;
  }
}
