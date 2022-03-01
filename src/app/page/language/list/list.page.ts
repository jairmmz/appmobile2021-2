import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { ApiLanguageService } from 'src/app/api/api-language.service';
import { GenericHelperService } from 'src/app/helper/generic-helper.service';
import { ApiLanguageModel } from 'src/app/model/api-language.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  headerTitle: string;
  subTitle: string;

  arrayLanguage: Array<ApiLanguageModel>;

  constructor(
    private ghs: GenericHelperService,
    private apiLanguageService: ApiLanguageService,
    private loadingController: LoadingController
  ) {}

  async ngOnInit() {
    this.headerTitle = 'Lista de Lenguages';
    this.subTitle = 'sub titulo 2';

    await this.ghs.loadingData();

    this.apiLanguageService.listLanguage().subscribe((so) => {
      this.loadingController.dismiss();

      if (so.mo.type == 'error' || so.mo.type == 'exception') {
        so.mo.listMessage.forEach((element) => {
          this.ghs.messageToast(element);
          return false;
        });
        return;
      }
      this.arrayLanguage = so.dto.listLanguage;
    });
  }

  deleteLanguage(idLanguage: string) {
    this.ghs.Confirm(async () => {
      await this.ghs.loadingData();

      this.apiLanguageService.delete(idLanguage).subscribe((so) => {
        this.loadingController.dismiss();

        if (so.mo.type == 'error' || so.mo.type == 'exception') {
          so.mo.listMessage.forEach((element) => {
            this.ghs.messageToast(element);

            return false;
          });

          return;
        }

        this.ghs.messageToast(so.mo.listMessage[0]);

        this.arrayLanguage.forEach((element, index) => {
          if (element.idLanguage == idLanguage) {
            this.arrayLanguage.splice(index, 1);

            return false;
          }
        });
      });
    });
  }
}
