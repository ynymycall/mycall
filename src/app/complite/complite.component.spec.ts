import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompliteComponent } from './complite.component';

describe('CompliteComponent', () => {
  let component: CompliteComponent;
  let fixture: ComponentFixture<CompliteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompliteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
