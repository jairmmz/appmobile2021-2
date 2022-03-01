import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ApiPersonService } from 'src/app/api/api-person.service';
import { GenericHelperService } from 'src/app/helper/generic-helper.service';
import { ApiPersonModel } from 'src/app/model/api-person.model';


@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  headerTitle: string;
  subTitle: string;

  arrayListFavoriteLanguage: Array<ApiPersonModel>;

  constructor(
    private ghs: GenericHelperService,
    private apiPersonService: ApiPersonService,
    private loadingController: LoadingController
  ) { }

  async ngOnInit() {
    this.headerTitle = 'Lenguages Favoritos por Persona';
    this.subTitle = 'sub titulo 2';

    await this.ghs.loadingData();

    this.apiPersonService.listFavoriteLanguage().subscribe((so) => {
      this.loadingController.dismiss();

      if (so.mo.type == 'error' || so.mo.type == 'exception') {
        so.mo.listMessage.forEach((element) => {
          this.ghs.messageToast(element);
          return false;
        });
        return;
      }
      this.arrayListFavoriteLanguage = so.dto.tPersonAndLanguage;
    });
  }

}
