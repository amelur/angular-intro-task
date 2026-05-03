import { Component, inject } from '@angular/core';
import { FilmService } from '../../services/film';
import { FilmCard } from '../film-card/film-card';


@Component({
  selector: 'app-film-list',
  imports: [FilmCard],
  templateUrl: './film-list.html',
  styleUrl: './film-list.css',
})
export class FilmList {
  filmService = inject(FilmService);
}
