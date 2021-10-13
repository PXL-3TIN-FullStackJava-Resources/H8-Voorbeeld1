import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map }  from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Civilization } from '../models/civilization.model';

@Injectable({
  providedIn: 'root'
})
export class Aoe2Service {

  constructor(private http: HttpClient) { }

  getCivilizations(): Observable<Civilization[]> {
    return this.http.get<Civilization[]>(environment.apiUrl + 'civilizations');
  }

  getUniqueUnit(unitUrl: string){
    return this.http.get(unitUrl);
  }
}
