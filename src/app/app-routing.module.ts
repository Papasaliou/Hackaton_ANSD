import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GerantsComponent} from "./gerants/gerants.component";
import {DetailsLigneComponent} from "./details-ligne/details-ligne.component";
import {ModerateurComponent} from "./moderateur/moderateur.component";

const routes: Routes = [
  {path: '', component: GerantsComponent},
  {path:'details-ligne/:id',component: DetailsLigneComponent},
  {path:'moderateur',component: ModerateurComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
