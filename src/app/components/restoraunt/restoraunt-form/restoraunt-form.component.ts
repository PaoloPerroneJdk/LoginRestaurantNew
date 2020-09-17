import { Component, OnInit } from "@angular/core";
import { Users } from 'src/app/models/Users';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Restaurant } from 'src/app/models/Restaurant';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AdminRestaurantService } from 'src/app/services/adminRestaurant.service';

@Component({
  selector: "app-restoraunt-form",
  templateUrl: "./restoraunt-form.component.html",
  styleUrls: ["./restoraunt-form.component.scss"],
})
export class RestorauntFormComponent implements OnInit {
  user: Array<Users>;
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  restaurant: Restaurant;

  constructor(
    public nav: NavController,
    private router: Router,
    private adminRestaurantService: AdminRestaurantService
  ) {
    this.registerForm = new FormGroup({
      name: new FormControl("", Validators.required),
      position: new FormControl("", Validators.required),
      deliveryRange: new FormControl("", Validators.required),
      salary: new FormControl("", Validators.required),
      time: new FormControl("", Validators.required),
      mobile: new FormControl("", Validators.required),
      email: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required),
    });
  }
  ngOnInit(): void {}

  register() {
    console.log("credenziali salvate");
    this.restaurant = this.registerForm.value;
    let id = this.adminRestaurantService.register(this.restaurant);
    this.router.navigate(["restauranthome", 0]);
  }
}
