import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Restaurant } from '../model/restaurant';




@Injectable({
  providedIn: 'root'
})
export class AdminRestaurantService {
  adminRestaurantUrl: any;

  listRestaurant: Array<Restaurant> = new Array()

  


  constructor() { }

  register(restaurant: Restaurant):number{

    restaurant.idRestaurant = new Date().getTime();

    for (let appoR of this.listRestaurant) {
      if (appoR.email == restaurant.email) {
        throw ('email già registrata');
      } else {
        this.listRestaurant.push(restaurant)
        
      }
    }
    return restaurant.idRestaurant;

  }

  


}




