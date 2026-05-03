import {Component, inject} from '@angular/core';
import {ActivatedRoute, RouterLink} from "@angular/router";
import {FilmService} from "../../services/film";


@Component({
  selector: 'app-film-details',
  imports: [ RouterLink ],
  templateUrl: './film-details.html',
  styleUrl: './film-details.css',
})
export class FilmDetails {
  route = inject(ActivatedRoute);
  filmService = inject(FilmService);

  film = this.filmService.getFilmById(
    Number(this.route.snapshot.paramMap.get('id'))
  );
}
