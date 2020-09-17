import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rider-tab',
  templateUrl: './rider-tab.component.html',
  styleUrls: ['./rider-tab.component.scss'],
})
export class RiderTabComponent implements OnInit {

  @Input() idRider: number;

  constructor(
    private router: Router,
    private activateRouter: ActivatedRoute
    ) { }

  ngOnInit() {
    this.activateRouter.params.subscribe((params) => this.idRider = params.idRider);
  }

  home(){
    this.router.navigate(["members/tab3/", this.idRider]);
  }

}
