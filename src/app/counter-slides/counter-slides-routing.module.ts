import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CounterSlidesPage } from './counter-slides.page';

const routes: Routes = [
  {
    path: '',
    component: CounterSlidesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CounterSlidesPageRoutingModule {}
