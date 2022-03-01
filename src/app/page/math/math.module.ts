import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MathPageRoutingModule } from './math-routing.module';

import { MathPage } from './math.page';
import { HeaderModule } from 'src/app/component/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MathPageRoutingModule,
    HeaderModule
  ],
  declarations: [MathPage]
})
export class MathPageModule {}
