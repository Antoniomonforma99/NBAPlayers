import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayersListComponent } from './components/players-list/players-list.component';

const routes: Routes = [
  //{path: 'teams', component: TeamsComponent},
  { path: 'players', component: PlayersListComponent },
  // {path: '', redirectTo: '/inicio', pathMatch: 'full'},
  //{path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
