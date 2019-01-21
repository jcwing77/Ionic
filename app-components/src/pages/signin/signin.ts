import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';

/**
 * Generated class for the SigninPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private toastCtrl:ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SigninPage');
  }
  signIn():void{
    // todo get email password
    // todo send HTTP request
    // todo server:sql ="selec ... from .. where";
    // todo response
    this.toastCtrl.create({
      message:'Invalid Email or password',
      duration:1000
    }).present();


  }
}
