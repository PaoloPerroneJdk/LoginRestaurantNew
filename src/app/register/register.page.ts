import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { first } from 'rxjs/operators';
import { Users } from '../model';
import { Restaurant } from '../model/restaurant';
import { AdminRestaurantService } from '../services/adminRestaurant.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

 user: Array<Users>;
  registerForm: FormGroup;
  loading = false
  submitted = false;
  restaurant: Restaurant;

  constructor(public nav: NavController,
     private formBuilder : FormBuilder,
     private router:Router,
     private userService:UserService,
     private adminRestaurantService: AdminRestaurantService) {


    this.registerForm = new FormGroup({
      name: new FormControl('', Validators.required),
      position: new FormControl('', Validators.required),
      deliveryRange: new FormControl('', Validators.required),
      salary: new FormControl('', Validators.required),
      time: new FormControl('', Validators.required),
      mobile: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),



  });
}
ngOnInit(): void {
  
}

register(){
    console.log('credenziali salvate')
    this.restaurant = this.registerForm.value;
   let id = this.adminRestaurantService.register(this.restaurant);
    this.router.navigate(['/members/tab1']);
}
}






