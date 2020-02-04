import { Injectable } from '@angular/core';
import { Jugador } from '../models/jugador';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JugadorService {

  url: string;

  constructor(private httpClient: HttpClient) {
    this.url = 'http://localhost:5200/';
   }

  getAllJugadores(): Observable<any> {
    return this.httpClient.get('http://localhost:5200/puntuaciones');
  }

  addJugador(jugador: Jugador): Observable<any> {
    const body = JSON.stringify(jugador);
    const headers = new HttpHeaders({'Contetnt-Type': 'application/json'});
    return this.httpClient.post(this.url + 'puntuacion', body, {headers});
  }

  // TODO insert, update, delete

}
