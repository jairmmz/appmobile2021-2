import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InsertPageRoutingModule } from './insert-routing.module';

import { InsertPage } from './insert.page';
import { HeaderModule } from 'src/app/component/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InsertPageRoutingModule,
    HeaderModule,
    ReactiveFormsModule
  ],
  declarations: [InsertPage]
})
export class InsertPageModule {}
