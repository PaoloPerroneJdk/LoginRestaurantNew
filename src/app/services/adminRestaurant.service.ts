import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Restaurant } from '../models/Restaurant';

@Injectable({
  providedIn: 'root'
})
export class AdminRestaurantService {
  adminRestaurantUrl: any;

  listRestaurant: Array<Restaurant> = new Array()

  constructor() { }

  register(restaurant: Restaurant):number{

    restaurant.id = new Date().getTime();

    for (let appoR of this.listRestaurant) {
      if (appoR.email == restaurant.email) {
        throw ('email già registrata');
      } else {
        this.listRestaurant.push(restaurant)
        
      }
    }
    return restaurant.id;

  }

  


}




