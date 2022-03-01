import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExamplePageRoutingModule } from './example-routing.module';

import { ExamplePage } from './example.page';
import { HeaderModule } from 'src/app/component/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExamplePageRoutingModule,
    HeaderModule
  ],
  declarations: [ExamplePage]
})
export class ExamplePageModule {}
