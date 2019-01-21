import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import {BPage} from '../b/b';

/**
 * Generated class for the APage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-a',
  templateUrl: 'a.html',
})
export class APage {

  // bPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // this.bPage = BPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad APage');
  }

  navToPage(page:string):void {
    this.navCtrl.push(page);
  }
}
