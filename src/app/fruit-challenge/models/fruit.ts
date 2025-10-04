import {NutritionInfo} from './nutrition-info';

export interface Fruit {
  genus: string;
  name: string;
  id: number;
  family: string;
  order: string;
  nutritions: NutritionInfo;
}

