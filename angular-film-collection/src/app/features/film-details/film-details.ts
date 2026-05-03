import {Component, inject} from '@angular/core';
import {ActivatedRoute, RouterLink} from "@angular/router";
import {FilmService} from "../../services/film";
import { DurationPipe } from '../../shared/duration-pipe';



@Component({
  selector: 'app-film-details',
  imports: [ RouterLink, DurationPipe ],
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
