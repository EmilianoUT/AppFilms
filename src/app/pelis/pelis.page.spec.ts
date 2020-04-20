import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PelisPage } from './pelis.page';

describe('PelisPage', () => {
  let component: PelisPage;
  let fixture: ComponentFixture<PelisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PelisPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PelisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
