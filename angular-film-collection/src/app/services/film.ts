import { Injectable, signal, computed } from '@angular/core';
import { Film } from '../models/film';
import { films } from '../data/films';

@Injectable({
  providedIn: 'root',
})
export class FilmService {
  private filmsSignal = signal<Film[]>(films);

  search = signal('');

  films = computed(() => this.filmsSignal());

  favorites = computed(() =>
    this.filmsSignal().filter(f => f.isFavorite)
  );

  filteredFilms = computed(() => {
    const query = this.search().toLowerCase();

    return this.filmsSignal().filter(f =>
      f.title.toLowerCase().includes(query)
    );
  });

  getFilmById(id: number): Film | undefined {
    return this.filmsSignal().find(f => f.id === id);
  }

  toggleFavorite(id: number) {
    this.filmsSignal.update(list =>
      list.map(f =>
        f.id === id ? { ...f, isFavorite: !f.isFavorite } : f
      )
    );
  }
}