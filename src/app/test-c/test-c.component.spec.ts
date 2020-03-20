import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TestCComponent } from './test-c.component';

describe('TestCComponent', () => {
  let component: TestCComponent;
  let fixture: ComponentFixture<TestCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestCComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TestCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
