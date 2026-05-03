import {Component, inject} from '@angular/core';
import {NavigationEnd, Router, RouterLink} from "@angular/router";
import {filter} from "rxjs";
import {FilmService} from "../../services/film";

@Component({
  selector: 'app-breadcrumbs',
  imports: [RouterLink],
  templateUrl: './breadcrumbs.html',
  styleUrl: './breadcrumbs.css',
})
export class Breadcrumbs {
  router = inject(Router);
  filmService = inject(FilmService);

  breadcrumbs: string[] = [];

  constructor() {
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe(() => {
        const url = this.router.url;

        if (url === '/') {
          this.breadcrumbs = ['Home'];
        } else if (url.startsWith('/film/')) {
          const id = Number(url.split('/')[2]);
          const film = this.filmService.getFilmById(id);

          this.breadcrumbs = ['Home', film?.title || 'Film'];
        }
      });
  }
}
