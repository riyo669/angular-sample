import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { MonsterComponent } from './monster/monster.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ExpPipe } from '../exp.pipe';

@NgModule({
  declarations: [HomeComponent, MonsterComponent, ExpPipe],
  imports: [CommonModule, HomeRoutingModule, MatProgressBarModule],
})
export class HomeModule {}
