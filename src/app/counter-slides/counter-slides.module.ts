import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CounterSlidesPageRoutingModule } from './counter-slides-routing.module';

import { CounterSlidesPage } from './counter-slides.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CounterSlidesPageRoutingModule
  ],
  declarations: [CounterSlidesPage]
})
export class CounterSlidesPageModule {}
