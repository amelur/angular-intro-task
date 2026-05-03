import { Component, inject } from '@angular/core';
import { FilmService } from '../../services/film';

@Component({
  selector: 'app-film-list',
  imports: [],
  templateUrl: './film-list.html',
  styleUrl: './film-list.css',
})
export class FilmList {
  filmService = inject(FilmService);
}
