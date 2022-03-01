import { digest } from '@angular/compiler/src/i18n/digest';
import { Component } from '@angular/core';
import { GenericHelperService } from '../helper/generic-helper.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  headerTitle: string;
  subTitle: string;
  constructor(
    
  ) {}
  
  ngOnInit() {
    this.headerTitle="Página principal";
    this.subTitle="sub titulo 1";
  }


}
