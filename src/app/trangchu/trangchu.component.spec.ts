import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { trangchuComponent } from './trangchu.component';

describe('TrangchuComponent', () => {
  let component: trangchuComponent;
  let fixture: ComponentFixture<trangchuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ trangchuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(trangchuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
