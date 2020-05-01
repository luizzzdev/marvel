import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommicDetailComponent } from './commic-detail.component';

describe('CommicDetailComponent', () => {
  let component: CommicDetailComponent;
  let fixture: ComponentFixture<CommicDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommicDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommicDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
