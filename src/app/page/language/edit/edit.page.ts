import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController, ModalController, NavController } from '@ionic/angular';
import { ApiLanguageService } from 'src/app/api/api-language.service';
import { GenericHelperService } from 'src/app/helper/generic-helper.service';
import { ApiLanguageModel } from 'src/app/model/api-language.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {
  frmEditLanguage: FormGroup;

  arrayLanguage: Array<ApiLanguageModel>;

  @Input() primaryKey: string;
  @Input() nameLanguage: string;

  constructor(
    private ghs: GenericHelperService,
    private formBuilder: FormBuilder,
    private apiLanguageService: ApiLanguageService,
    public loadingController: LoadingController,
    public modalController: ModalController,
    private navController: NavController
  ) {
    this.buildForm();
  }

  get idFv() {
    return this.frmEditLanguage.get('idLanguage');
  }

  get nameFv() {
    return this.frmEditLanguage.get('name');
  }

  buildForm() {
    // this.frmEditLanguage = this.formBuilder.group({
    //   idLanguage: [this.primaryKey, [Validators.required]],
    //   name: [this.nameLanguage, [Validators.required]],
    // });
  }

  ngOnInit() {
    this.frmEditLanguage = this.formBuilder.group({
      idLanguage: [this.primaryKey, [Validators.required]],
      name: [this.nameLanguage, [Validators.required]],
    });
    // console.log(this.primaryKey,this.nameLanguage);
  }

  async editFrmLanguage() {
    if (!this.frmEditLanguage.valid) {
      // this.idFv.markAsDirty();
      this.nameFv.markAsDirty();
      this.ghs.messageToast('Corrija los datos antes de continuar.');
      return;
    }

    this.ghs.Confirm(async () => {
      await this.ghs.loadingData();

      let formData = new FormData();
      formData.append('idLanguage', this.idFv.value);
      formData.append('name', this.nameFv.value);

      this.apiLanguageService.edit(formData).subscribe((so) => {
        this.loadingController.dismiss();

        if (so.mo.type == 'error' || so.mo.type == 'exception') {
          so.mo.listMessage.forEach((element) => {
            this.ghs.messageToast(element);
            return false;
          });
          return;
        }
        this.ghs.messageToast(so.mo.listMessage[0]);
        // this.frmEditLanguage.reset();
        // this.modalController.dismiss();
      });
    });
  }

  goToPage(){
    this.modalController.dismiss();
    window.location.assign('language/list')
  }

  closeModal() {
    this.modalController.dismiss();
  }
}
