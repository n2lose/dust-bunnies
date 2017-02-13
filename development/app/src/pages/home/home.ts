import { Component } from '@angular/core';

import { NavController, LoadingController } from 'ionic-angular';
import { RegisterPage } from '../register/register';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController) {
    this.navCtrl = navCtrl;
  }

  goToRegister(){
		this.navCtrl.push(RegisterPage);
	}

}
