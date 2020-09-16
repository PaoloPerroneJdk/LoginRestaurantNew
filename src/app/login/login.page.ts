import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AlertController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  credentials = {
    email: 'paolo@gmail.com',
    pw: 'perrone'
  };
 
  constructor(
    private auth: AuthService,
    private router: Router,
    private alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
  ) {}
 
  ngOnInit() {}






 
  login() {
    
    this.auth.login(this.credentials).subscribe(async res => {
      if (res) {
        this.router.navigateByUrl('/members/tab1');
      } else {
        const alert = await this.alertCtrl.create({
          header: 'Login Failed',
          message: 'Wrong credentials.',
          buttons: ['OK']
        });
        await alert.present();
      }
    });
  }

 
}