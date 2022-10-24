import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayersListComponent } from './components/players-list/players-list.component';
import { TeamsListComponent } from './components/teams-list/teams-list.component';

const routes: Routes = [
  {path: 'teams', component: TeamsListComponent},
  /*{path: 'inicio', component: HomeComponent},*/
  {path: '', redirectTo: '/inicio', pathMatch: 'full'},
  {path: 'players', component: PlayersListComponent},

  
  /*{path: 'players', component: PlayersComponent},
  {path: '', redirectTo: '/inicio', pathMatch: 'full'},
  /*
  {path: '**', component: PageNotFoundComponent},
  */
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
