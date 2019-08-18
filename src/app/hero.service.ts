import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {MessageService} from './message.service';
import {Observable} from 'rxjs';
import {Hero} from './hero';
import {tap} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private getAllHeroesUrl = 'http://localhost:8080/hero/getAll';
  constructor(private http: HttpClient, private messageService: MessageService) { }
  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.getAllHeroesUrl);
  }
}
