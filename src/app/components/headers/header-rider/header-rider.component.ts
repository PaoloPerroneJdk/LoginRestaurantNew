import { Component, OnInit, Input } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-rider',
  templateUrl: './header-rider.component.html',
  styleUrls: ['./header-rider.component.scss'],
})
export class HeaderRiderComponent implements OnInit {

  @Input() title: string;

  constructor(private router: Router) { }

  ngOnInit() {}

  public logout(){
    this.router.navigate([""])
  }

}
