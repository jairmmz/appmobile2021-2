import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListPageRoutingModule } from './list-routing.module';

import { ListPage } from './list.page';
import { HeaderModule } from 'src/app/component/header/header.module';
import { EditPage } from '../edit/edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListPageRoutingModule,
    HeaderModule,
    ReactiveFormsModule
  ],
  declarations: [ListPage, EditPage],
  entryComponents:[
    EditPage
  ]
})
export class ListPageModule {}
