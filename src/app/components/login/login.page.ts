import { Component, OnInit } from "@angular/core";
//import { AuthService } from '../services/auth.service';
import { AlertController, LoadingController } from "@ionic/angular";
import { Router } from "@angular/router";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Users } from "src/app/models/Users";
import { StorageServiceService } from "src/app/services/storage-service.service";
import { Rider } from "src/app/models/Rider";
import { Restaurant } from "src/app/models/Restaurant";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  rider: Rider;
  restaurant: Restaurant;
  user: Users;

  formLogin: FormGroup;

  constructor(
    //private auth: AuthService,
    private router: Router,
    private alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    private userStorage: StorageServiceService
  ) {}

  ngOnInit() {
    this.formLogin = new FormGroup({
      email: new FormControl("", [Validators.required]),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(10),
      ]),
    });
  }

  login() {
    this.user = this.formLogin.value;

    let appoUser = this.userStorage.login(this.user);

    if (appoUser.ruolo == "RESTAURANT") {
      this.router.navigate(["restaurantform/", this.user.email]);
    } else {
      this.router.navigate(["riderform/", this.user.email]);
    }
    /*this.auth.login(this.credentials).subscribe(async res => {
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
    });*/
    /*this.user = this.formLogin.value;
    this.userStorage.salvaUser(this.user);*/
  }

  public registraRider() {
    this.rider = this.formLogin.value;
    this.rider.isNew = true;
    this.rider.ruolo = "RIDER";
    this.userStorage.salvaUser(this.rider);
    this.router.navigate(["riderform/", this.rider.email]);
  }

  public registraRestaurant() {
    this.restaurant = this.formLogin.value;
    this.restaurant.isNew = true;
    this.restaurant.ruolo = "RESTAURANT";
    this.userStorage.salvaUser(this.restaurant);
    this.router.navigate(["restaurantform/", this.restaurant.email]);
  }
}
