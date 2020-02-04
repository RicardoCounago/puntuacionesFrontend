import { Component, OnInit } from '@angular/core';
import { JugadorService } from '../sevices/jugador.service';
import { Jugador } from '../models/jugador';

@Component({
  selector: 'app-lista-jugador',
  templateUrl: './lista-jugador.component.html',
  styleUrls: ['./lista-jugador.component.css']
})
export class ListaJugadorComponent implements OnInit {

  listaJugadores: Jugador[];

  constructor(public jugadorService: JugadorService) { }

  ngOnInit() {
    // this.listaJugadores = this.jugadorService.getAllJugadores();
    this.jugadorService.getAllJugadores().subscribe(
      result => {
        this.listaJugadores = result['datos'];
      },
      error => {
        alert('Error al listar las puntuaciones.');
      },
      () => {

      }
    );
  }

}
