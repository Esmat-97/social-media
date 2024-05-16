import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowpostPageRoutingModule } from './showpost-routing.module';

import { ShowpostPage } from './showpost.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowpostPageRoutingModule
  ],
  declarations: [ShowpostPage]
})
export class ShowpostPageModule {}
