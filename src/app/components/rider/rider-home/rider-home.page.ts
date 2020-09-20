import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rider-home',
  templateUrl: './rider-home.page.html',
  styleUrls: ['./rider-home.page.scss'],
})
export class RiderHomePage implements OnInit {

  headerTitle: string = "rider home";
  riderEmail: string;

  constructor(private routes: ActivatedRoute) { }

  ngOnInit() {
    this.routes.params.subscribe((param) => this.riderEmail = param.idRider);
  }

}
