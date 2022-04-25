import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsCountersPage } from './tabs-counters.page';

const routes: Routes = [
  {
    path: '',
    component: TabsCountersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsCountersPageRoutingModule {}
