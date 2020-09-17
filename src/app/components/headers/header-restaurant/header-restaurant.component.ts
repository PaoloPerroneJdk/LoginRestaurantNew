import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-restaurant',
  templateUrl: './header-restaurant.component.html',
  styleUrls: ['./header-restaurant.component.scss'],
})
export class HeaderRestaurantComponent implements OnInit {


  @Input() title: string;

  constructor(private auth: AuthService,
    private router: Router) {}


  ngOnInit() {
   
  }


logout() {
    //this.auth.logout();
    this.router.navigate([""]);
  }

}