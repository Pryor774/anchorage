import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        title: 'Anchorage B & B',
        loadComponent: () =>
          import(
            './views/home/home.component'
          ).then((mod) => mod.HomeComponent),
      },
];
