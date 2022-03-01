import { Injectable } from '@angular/core';
import { AlertController, MenuController, ModalController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
// import { EditPage } from '../page/language/edit/edit.page';
import { EditPage } from '../page/language/edit/edit.page'

@Injectable({
  providedIn: 'root',
})
export class GenericHelperService {
  constructor(
    private menuController: MenuController,
    private alertController: AlertController,
    private toastController: ToastController,
    private loadingController: LoadingController,
    private modalController: ModalController
  ) {}

  openFirst() {
    this.menuController.enable(true, 'principalMenu');
    this.menuController.open('principalMenu');
  }

  async messageToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
    });
    toast.present();
  }

  async Confirm(functionToProcces: Function) {
    const alert = await this.alertController.create({
      // header: 'Confirmación',
      message: 'Confirmar Operación?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: (blah) => {},
        },
        {
          text: 'Aceptar',
          handler: () => {
            functionToProcces();
          },
        },
      ],
    });
    alert.present();
  }

  async loadingData() {
    const loading = await this.loadingController.create({
      message: 'Espere un momento...',
    });
    await loading.present();
  }

  async modalEditLanguage(idLanguage: string, name: string) {
    const modal = await this.modalController.create({
      component: EditPage,
      cssClass: 'my-custom-class',
      componentProps: {
        primaryKey: idLanguage,
        nameLanguage: name
      }
    });
    return await modal.present();
  }


}
