import {Component, input, output} from '@angular/core';
import {Film} from "../../models/film";
import {RouterLink} from '@angular/router';
import {NgOptimizedImage} from '@angular/common';


@Component({
  selector: 'app-film-card',
  imports: [RouterLink, NgOptimizedImage],
  templateUrl: './film-card.html',
  styleUrl: './film-card.css',
})
export class FilmCard {
  film = input.required<Film>();
  toggle = output<number>();
}
