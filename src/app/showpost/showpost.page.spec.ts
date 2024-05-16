import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShowpostPage } from './showpost.page';

describe('ShowpostPage', () => {
  let component: ShowpostPage;
  let fixture: ComponentFixture<ShowpostPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowpostPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
