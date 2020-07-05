import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { MonsterService } from 'src/app/services/monster.service';
import { Monster } from 'src/app/interfaces/monster';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  monsterIds = [...Array(10)].map((_, i) => i + 1);
  config: SwiperConfigInterface = {
    loop: true,
    navigation: true,
    pagination: {
      el: '.pager',
      clickable: true,
    },
    centeredSlides: true,
    slidesPerView: 3,
  };
  selectedMonsterId = 0;

  form = this.fb.group({
    name: ['', [Validators.required, Validators.maxLength(40)]],

    gender: ['', [Validators.required, Validators.pattern(/male|female/)]],
  });

  get nameControl() {
    return this.form.get('name') as FormControl;
  }

  constructor(
    private fb: FormBuilder,
    private monsterServise: MonsterService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  submit() {
    const formData = this.form.value;
    const monster: Monster = {
      monsterImageId: this.selectedMonsterId,
      name: formData.name,
      gender: formData.gender,
      level: 1,
      exp: 0,
      trainerId: this.authService.uid,
    };
    // console.log(monster);
    this.monsterServise.createMonster(monster);
    // ホーム画面にリダイレクト
    this.router.navigateByUrl('/');
  }
}
