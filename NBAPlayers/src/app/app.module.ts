import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialImportsModule } from './material-imports/material-imports.module';
import {MatSelectModule} from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TeamsListComponent } from './components/teams-list/teams-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PlayersListComponent } from './components/players-list/players-list.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxPaginationModule } from 'ngx-pagination';
import { PlayersOfATeamComponent } from './components/players-of-a-team/players-of-a-team.component';
import { PgPrincipalComponent } from './components/pg-principal/pg-principal.component';
import { PlayerProfileComponent } from './components/player-profile/player-profile.component';
import { NgDialogAnimationService } from 'ng-dialog-animation';


@NgModule({
  declarations: [
    AppComponent,
    PlayersListComponent,
    TeamsListComponent,
    PlayersOfATeamComponent
    PgPrincipalComponent,
    PlayerProfileComponent,
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialImportsModule,
    HttpClientModule,
    MatSelectModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    NgxPaginationModule,
  ],
  providers: [NgDialogAnimationService],
  bootstrap: [AppComponent],
})
export class AppModule { }
