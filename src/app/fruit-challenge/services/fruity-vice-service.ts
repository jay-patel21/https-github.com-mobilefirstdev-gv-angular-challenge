import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Fruit} from '../models/fruit';

@Injectable({
  providedIn: 'root'
})
export class FruityViceService {

  constructor(private http: HttpClient) { }

  getAllFruits(): Observable<Fruit[]> {
    return this.http.get<Fruit[]>('/fruit/all');
  }

}
