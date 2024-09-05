import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PreferenciaPage } from './preferencia.page';

describe('PreferenciaPage', () => {
  let component: PreferenciaPage;
  let fixture: ComponentFixture<PreferenciaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PreferenciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
