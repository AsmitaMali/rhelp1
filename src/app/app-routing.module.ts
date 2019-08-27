import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaterialModule} from './material/material.module';
import { HeadersComponent } from './headers/headers.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { ResultlistComponent } from './resultlist/resultlist.component';
import { FiltersComponent } from './filters/filters.component';
import { ResultdetlComponent } from './resultdetl/resultdetl.component';
import { Screen1Component } from './screen1/screen1.component';
import { Screen2Component } from './screen2/screen2.component';


const routes: Routes = [
  { path: '', component: Screen1Component },
  { path: 'response', component: ResultdetlComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
