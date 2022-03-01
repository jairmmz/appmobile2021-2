import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { MenuModel } from 'src/app/model/menu.model';


@Component({
  selector: 'app-principal-menu',
  templateUrl: './principal-menu.component.html',
  styleUrls: ['./principal-menu.component.scss'],
})
export class PrincipalMenuComponent implements OnInit {

  menuOpcions: Array<MenuModel>;


  constructor(
    private menuController: MenuController,
    private navController: NavController
  ) {}

  ngOnInit() {
    this.menuOpcions=[
      new MenuModel('Página principal','home'),
      new MenuModel('Calculadora','page/math'),
      new MenuModel('Mantenimiento de Mascotas','page/example'),
      new MenuModel('Lenguaje','language/insert'),
      new MenuModel('Lista de Lenguajes','language/list'),
      new MenuModel('Persona','person/insert'),
      new MenuModel('Listado de Persona con su Lenguage','person/list')
    ];
  }
  
  goToPage(routePath: String){
    this.navController.navigateRoot([routePath])
    this.menuController.enable(false)
  }

}
