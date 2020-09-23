import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { Router, ActivatedRoute } from "@angular/router";
import { NavController } from '@ionic/angular';

@Component({
  selector: "app-restoraunt-home",
  templateUrl: "./restoraunt-home.component.html",
  styleUrls: ["./restoraunt-home.component.scss"],
})
export class RestorauntHomeComponent implements OnInit {
  restorauntEmail: string;

  constructor(
    
    private auth: AuthService,
    private route: Router,
    private activateRouter: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activateRouter.params.subscribe(
      (param) => (this.restorauntEmail = param.restorauntEmail)
    );
  }

 
annunci(){
  console.log('pubblica')
  this.route.navigate(["restaurantannunci/", 0])
}


  logout() {
    this.route.navigate([""]);
  }
}
