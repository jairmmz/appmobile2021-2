import { Component, Input, OnInit } from '@angular/core';
import { GenericHelperService } from 'src/app/helper/generic-helper.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  attrTitle: string;
  attrSubTittle: string;

  constructor(
    public ghs: GenericHelperService
  ) { }

  @Input()
  set title(param: string){
    this.attrTitle = param;
  }

  @Input()
  set subtitle(param2: string){
    this.attrSubTittle = param2;
  }

  ngOnInit() {}

}
