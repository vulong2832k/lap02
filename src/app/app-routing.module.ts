import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { trangchuComponent } from './trangchu/trangchu.component';


const routes: Routes = [
  {path: '', component: trangchuComponent},
  {path: 'hs/:id', component: DetailComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
