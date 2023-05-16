import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroprodComponent } from './cadastroprod.component';

describe('CadastroprodComponent', () => {
  let component: CadastroprodComponent;
  let fixture: ComponentFixture<CadastroprodComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastroprodComponent]
    });
    fixture = TestBed.createComponent(CadastroprodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
