import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiLanguageService } from 'src/app/api/api-language.service';
import { GenericHelperService } from 'src/app/helper/generic-helper.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.page.html',
  styleUrls: ['./insert.page.scss'],
})
export class InsertPage implements OnInit {
  headerTitle: string;
  subTitle: string;

  frmInsertLanguage: FormGroup;

  constructor(
    private ghs: GenericHelperService,
    private formBuilder: FormBuilder,
    private apiLanguageService: ApiLanguageService,
    public loadingController: LoadingController
  ) {
    this.buildForm();
  }

  get nameFv() {
    return this.frmInsertLanguage.get('name');
  }

  buildForm() {
    this.frmInsertLanguage = this.formBuilder.group({
      name: [null, [Validators.required]],
    });
  }

  ngOnInit() {
    this.headerTitle = 'Registro de Lenguajes';
    this.subTitle = 'sub titulo 2';
  }

  async sendFrmLanguage() {
    if (!this.frmInsertLanguage.valid) {
      this.nameFv.markAsDirty();
      this.ghs.messageToast('Corrija los datos antes de continuar.');
      return;
    }

    this.ghs.Confirm(async () => {
      await this.ghs.loadingData();

      let formData = new FormData();
      formData.append('name', this.nameFv.value);

      this.apiLanguageService.insert(formData).subscribe((so) => {
        this.loadingController.dismiss();

        if (so.mo.type == 'error') {
          so.mo.listMessage.forEach((element) => {
            this.ghs.messageToast(element);
            return false;
          });
          return;
        }

        this.ghs.messageToast(so.mo.listMessage[0]);
        this.frmInsertLanguage.reset();
      });
    });
  }
}
