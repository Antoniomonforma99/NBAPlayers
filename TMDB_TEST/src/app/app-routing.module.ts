import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListActorsComponent } from './components/list-actors/list-actors.component';

const routes: Routes = [
  {path: 'person/popular', component: ListActorsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
