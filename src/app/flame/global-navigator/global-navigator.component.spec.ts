import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalNavigatorComponent } from './global-navigator.component';

describe('GlobalNavigatorComponent', () => {
  let component: GlobalNavigatorComponent;
  let fixture: ComponentFixture<GlobalNavigatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalNavigatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalNavigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
