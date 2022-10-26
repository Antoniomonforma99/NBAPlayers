import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PgPrincipalComponent } from './components/pg-principal/pg-principal.component';
import { PlayersListComponent } from './components/players-list/players-list.component';
import { TeamsListComponent } from './components/teams-list/teams-list.component';

const routes: Routes = [
  {path: 'teams', component: TeamsListComponent},
  {path: 'inicio', component: PgPrincipalComponent},
  {path: '', redirectTo: '/inicio', pathMatch: 'full'},
  {path: 'players', component: PlayersListComponent},
  {path: '', redirectTo: '/inicio', pathMatch: 'full'},


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
