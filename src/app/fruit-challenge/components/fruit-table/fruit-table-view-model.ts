import {Injectable} from '@angular/core';
import {FruityViceService} from '../../services/fruity-vice-service';
import {BehaviorSubject} from 'rxjs';
import {Fruit} from '../../models/fruit';

@Injectable()
export class FruitTableViewModel {

  fruitData$ = new BehaviorSubject<Fruit[]>(null);
  loadingFruit$ = new BehaviorSubject<boolean>(false);

  constructor(private fruitService: FruityViceService) {
    this.loadingFruit$.next(true);
    this.fruitService.getAllFruits().subscribe(fruitResponse => {
      this.loadingFruit$.next(false);
      this.fruitData$.next(fruitResponse);
    });
  }
}
