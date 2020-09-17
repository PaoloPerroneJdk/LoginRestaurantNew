import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RiderHomePage } from './rider-home.page';

describe('RiderHomePage', () => {
  let component: RiderHomePage;
  let fixture: ComponentFixture<RiderHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiderHomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RiderHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
