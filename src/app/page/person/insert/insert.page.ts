import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiPersonService } from 'src/app/api/api-person.service';
import { GenericHelperService } from 'src/app/helper/generic-helper.service';
import { LoadingController } from '@ionic/angular';
import { ApiLanguageModel } from 'src/app/model/api-language.model';
import { ApiLanguageService } from 'src/app/api/api-language.service';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.page.html',
  styleUrls: ['./insert.page.scss'],
})
export class InsertPage implements OnInit {
  headerTitle: string;
  subTitle: string;

  frmInsertPerson: FormGroup;

  arrayLanguage: Array<ApiLanguageModel>;

  constructor(
    private ghs: GenericHelperService,
    private formBuiler: FormBuilder,
    private apiPersonService: ApiPersonService,
    private apiLanguageService: ApiLanguageService,
    private loadingController: LoadingController
  ) {
    this.buildForm();
  }

  get firstNameFv() {
    return this.frmInsertPerson.get('firstName');
  }
  get surNameFv() {
    return this.frmInsertPerson.get('surName');
  }
  get birthDateFv() {
    return this.frmInsertPerson.get('birthDate');
  }
  get genderFv() {
    return this.frmInsertPerson.get('gender');
  }
  get heightFv() {
    return this.frmInsertPerson.get('height');
  }

  buildForm() {
    this.frmInsertPerson = this.formBuiler.group({
      firstName: [null, [Validators.required]],
      surName: [null, [Validators.required]],
      birthDate: [null, [Validators.required]],
      gender: [null, [Validators.required]],
      height: [null, [Validators.required]],
    });
  }

  async ngOnInit() {
    this.headerTitle = 'Mantenimiento de Persona';
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

  async sendFrmPerson() {
    if (!this.frmInsertPerson.valid) {
      this.firstNameFv.markAsDirty();
      this.surNameFv.markAsDirty();
      this.birthDateFv.markAsDirty();
      this.ghs.messageToast('Corrija los datos antes de continuar.');
      return;
    }

    this.ghs.Confirm(async () => {
      await this.ghs.loadingData();

      // debugger;

      let formData = new FormData();
      formData.append('firstName', this.firstNameFv.value);
      formData.append('surName', this.surNameFv.value);
      formData.append('birthDate', this.birthDateFv.value);
      formData.append('gender', this.genderFv.value);
      formData.append('height', this.heightFv.value);

      this.apiPersonService.insert(formData).subscribe((so) => {
        // console.log(so);
        this.loadingController.dismiss();

        if (so.mo.type == 'error') {
          so.mo.listMessage.forEach((element) => {
            this.ghs.messageToast(element);
            return false;
          });
          return;
        }

        this.ghs.messageToast(so.mo.listMessage[0]);
        this.frmInsertPerson.reset();
      });
    });
  }



}
