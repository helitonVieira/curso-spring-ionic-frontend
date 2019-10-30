import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { IonicPage } from 'ionic-angular/navigation/ionic-page';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
     public menu: MenuController) {
  }

  // desabilitar menu quando entrar pagina inicial pesquisar 
  // ciclo de vida da pagina ionic lifecycle
  ionViewWillEnter() {
    this.menu.swipeEnable(false);
  }
    
  ionViewDidLeave() {
    this.menu.swipeEnable(true);
  }

  login(){
    this.navCtrl.setRoot('CategoriasPage');
  }

}
