import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialImportsModule } from './material-imports/material-imports.module';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlayersListComponent } from './components/players-list/players-list.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialImportsModule,
    AppRoutingModule,
    FormsModule,
    FormControl,
    HttpClientModule,
    ReactiveFormsModule,
    PlayersListComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
