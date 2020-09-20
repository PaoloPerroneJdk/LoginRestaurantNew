import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurant-tab',
  templateUrl: './restaurant-tab.component.html',
  styleUrls: ['./restaurant-tab.component.scss'],
})
export class RestaurantTabComponent implements OnInit {

  @Input()  restorauntEmail: string;
  

  constructor() { }

  ngOnInit() {}

}
