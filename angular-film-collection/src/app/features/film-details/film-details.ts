import {Component, computed, inject} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {ActivatedRoute, RouterLink} from "@angular/router";
import {FilmService} from "../../services/film";
import {DurationPipe} from '../../shared/duration-pipe';


@Component({
  selector: 'app-film-details',
  imports: [RouterLink, DurationPipe, NgOptimizedImage],
  templateUrl: './film-details.html',
  styleUrl: './film-details.css',
})
export class FilmDetails {
  route = inject(ActivatedRoute);
  filmService = inject(FilmService);

  film = computed(() => {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    return this.filmService.films().find(f => f.id === id);
  });
}
