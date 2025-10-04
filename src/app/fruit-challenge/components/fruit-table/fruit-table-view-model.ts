import {Injectable} from '@angular/core';
import {FruityViceService} from '../../services/fruity-vice-service';
import {BehaviorSubject, combineLatest, Observable, map} from 'rxjs';
import {Fruit} from '../../models/fruit';

@Injectable()
export class FruitTableViewModel {
  // Private state management
  private fruitData$ = new BehaviorSubject<Fruit[]>(null);
  private loadingFruit$ = new BehaviorSubject<boolean>(false);
  private filterText$ = new BehaviorSubject<string>('');
  private sortOption$ = new BehaviorSubject<string>('Name Ascending');

  // Public observables (facade interface)
  public readonly loading$ = this.loadingFruit$.asObservable();
  public readonly filteredAndSortedFruits$: Observable<Fruit[]>;
  
  // Public properties for template binding
  public filterText = '';
  public sortOption = 'Name Ascending';
  public sortOptions = [
    'Name Ascending',
    'Name Descending', 
    'Carbohydrates Ascending',
    'Carbohydrates Descending'
  ];

  constructor(private fruitService: FruityViceService) {
    // Initialize the facade with combined logic
    this.filteredAndSortedFruits$ = combineLatest([
      this.fruitData$,
      this.filterText$,
      this.sortOption$,
      this.loadingFruit$
    ]).pipe(
      map(([fruits, filterText, sortOption, loading]) => {
        if (loading || !fruits) return [];
        
        let filtered = this.filterFruits(fruits, filterText);
        return this.sortFruits(filtered, sortOption);
      })
    );

    this.loadFruits();
  }

  // Public facade methods
  public updateFilter(filterText: string): void {
    this.filterText = filterText;
    this.filterText$.next(filterText);
  }

  public updateSort(sortOption: string): void {
    this.sortOption = sortOption;
    this.sortOption$.next(sortOption);
  }

  public refreshData(): void {
    this.loadFruits();
  }

  // Private implementation methods (defined first)
  private loadFruits(): void {
    this.loadingFruit$.next(true);
    this.fruitService.getAllFruits().subscribe({
      next: (fruitResponse) => {
        this.loadingFruit$.next(false);
        this.fruitData$.next(fruitResponse);
      },
      error: (error) => {
        this.loadingFruit$.next(false);
        console.error('Error loading fruits:', error);
        this.fruitData$.next([]);
      }
    });
  }

  private filterFruits(fruits: Fruit[], filterText: string): Fruit[] {
    if (!filterText.trim()) {
      return fruits;
    }
    
    const filterLower = filterText.toLowerCase();
    return fruits.filter(fruit => 
      fruit.name?.toLowerCase().includes(filterLower) ||
      fruit.genus?.toLowerCase().includes(filterLower) ||
      fruit.family?.toLowerCase().includes(filterLower) ||
      fruit.order?.toLowerCase().includes(filterLower)
    );
  }

  private sortFruits(fruits: Fruit[], sortOption: string): Fruit[] {
    return [...fruits].sort((a, b) => {
      switch (sortOption) {
        case 'Name Ascending':
          return a.name.localeCompare(b.name);
        case 'Name Descending':
          return b.name.localeCompare(a.name);
        case 'Carbohydrates Ascending':
          return (a.nutritions?.carbohydrates || 0) - (b.nutritions?.carbohydrates || 0);
        case 'Carbohydrates Descending':
          return (b.nutritions?.carbohydrates || 0) - (a.nutritions?.carbohydrates || 0);
        default:
          return 0;
      }
    });
  }
}