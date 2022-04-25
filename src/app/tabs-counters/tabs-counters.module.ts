import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabsCountersPageRoutingModule } from './tabs-counters-routing.module';

import { TabsCountersPage } from './tabs-counters.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsCountersPageRoutingModule
  ],
  declarations: [TabsCountersPage]
})
export class TabsCountersPageModule {}
