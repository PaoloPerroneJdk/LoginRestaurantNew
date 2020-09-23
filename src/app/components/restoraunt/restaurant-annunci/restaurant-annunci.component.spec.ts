import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RestaurantAnnunciComponent } from './restaurant-annunci.component';

describe('RestaurantAnnunciComponent', () => {
  let component: RestaurantAnnunciComponent;
  let fixture: ComponentFixture<RestaurantAnnunciComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantAnnunciComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RestaurantAnnunciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
