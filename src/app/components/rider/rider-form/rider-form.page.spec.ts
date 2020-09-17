import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RiderFormPage } from './rider-form.page';

describe('RiderFormPage', () => {
  let component: RiderFormPage;
  let fixture: ComponentFixture<RiderFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiderFormPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RiderFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
