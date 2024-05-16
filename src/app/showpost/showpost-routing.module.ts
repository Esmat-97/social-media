import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowpostPage } from './showpost.page';

const routes: Routes = [
  {
    path: '',
    component: ShowpostPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowpostPageRoutingModule {}
