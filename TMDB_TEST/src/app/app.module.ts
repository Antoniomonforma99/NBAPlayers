import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialImportsModule } from './modules/material-imports.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ListActorsComponent } from './components/list-actors/list-actors.component';

@NgModule({
  declarations: [
    AppComponent,
    ListActorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialImportsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
