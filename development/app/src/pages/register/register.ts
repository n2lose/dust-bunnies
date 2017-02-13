import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { RoleBunnyPage } from '../role-bunny/role-bunny';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {

  constructor(public navCtrl: NavController) {
    this.navCtrl = navCtrl;
  }

  gotoRoleBunny() {
    this.navCtrl.push(RoleBunnyPage);
  }

  goBack(){
		this.navCtrl.pop();
	}
}
