import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RiderTabComponent } from './rider-tab.component';

describe('RiderTabComponent', () => {
  let component: RiderTabComponent;
  let fixture: ComponentFixture<RiderTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiderTabComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RiderTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
