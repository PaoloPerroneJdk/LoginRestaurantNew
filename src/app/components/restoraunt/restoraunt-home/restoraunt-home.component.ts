import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-restoraunt-home",
  templateUrl: "./restoraunt-home.component.html",
  styleUrls: ["./restoraunt-home.component.scss"],
})
export class RestorauntHomeComponent implements OnInit {
  idRestaurant: number;

  constructor(
    private auth: AuthService,
    private route: Router,
    private activateRouter: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activateRouter.params.subscribe(
      (param) => (this.idRestaurant = param.idRestaurant)
    );
  }

  logout() {
    this.route.navigate([""]);
  }
}
