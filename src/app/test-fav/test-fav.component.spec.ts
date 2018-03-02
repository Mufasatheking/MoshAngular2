import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestFavComponent } from './test-fav.component';

describe('TestFavComponent', () => {
  let component: TestFavComponent;
  let fixture: ComponentFixture<TestFavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestFavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestFavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
