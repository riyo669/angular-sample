export interface Monster {
  monsterImageId: number;
  name: string;
  gender: 'male' | 'female';
  level: number;
  exp: number;
  trainerId: string;
  ownerGithubId: number;
}
