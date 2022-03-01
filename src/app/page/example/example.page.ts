import { Component, OnInit } from '@angular/core';
import { GenericHelperService } from '../../helper/generic-helper.service';
import { ModalController } from '@ionic/angular';
import { AnimalModel } from 'src/app/model/animal.model';

@Component({
  selector: 'app-example',
  templateUrl: './example.page.html',
  styleUrls: ['./example.page.scss'],
})
export class ExamplePage implements OnInit {

  dogName: string;
  dogColor: string;
  dogYearOld: string;
  dogBreed: string;

  headerTitle: string;
  subTitle: string;
  animalArray: Array<AnimalModel>;

  constructor(
    private ghs: GenericHelperService,
    public modalController: ModalController
  ) {};
  
  ngOnInit() {
    // this.animalArray = [{ name: 'Rambo', color: 'Marrón', yearOld: '5', dogBreed: 'Chihuahua' }];
    this.animalArray = [new AnimalModel('Rambo','Marrón',5,'Chihuahua')];
    this.headerTitle = 'Mantenimiento Mascotas';
    this.subTitle = 'sub titulo2';
  }

  resetMascot() {
    (this.dogName = null),
    (this.dogColor = null),
    (this.dogYearOld = null),
    (this.dogBreed = null)
  }

  async insertMascot() {
      await this.ghs.Confirm(() => {
        this.animalArray.push(
          new AnimalModel(this.dogName,this.dogColor,parseInt(this.dogYearOld),this.dogBreed));
        this.resetMascot();
        this.ghs.messageToast('Registro insertado correctamente');
      });
  }

  async deleteMascot(key: number) {
    await this.ghs.Confirm(() => {
      this.animalArray.splice(key, 1);
      this.ghs.messageToast('Registro eliminado correctamente');
    });
  }
}
