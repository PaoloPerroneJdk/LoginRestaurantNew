import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestaurantAnnunciComponent } from '../restaurant-annunci/restaurant-annunci.component';

@Component({
  selector: 'app-restaurant-tab',
  templateUrl: './restaurant-tab.component.html',
  styleUrls: ['./restaurant-tab.component.scss'],
})
export class RestaurantTabComponent implements OnInit {

<<<<<<< Updated upstream
  @Input()  restorauntEmail: string;
=======
  @Input()  idRestaurant: number;

  restaurantannunci = RestaurantAnnunciComponent;
>>>>>>> Stashed changes
  

  constructor(

    private route: Router
   
  ) { }

  ngOnInit() {}

  annunci(){
    console.log('pubblica')
    this.route.navigate(["restaurantannunci/", 0])
  }

}