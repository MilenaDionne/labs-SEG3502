import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempConverterComponent } from './temp-converter.component';

describe('TempConverterComponent', () => {
  let component: TempConverterComponent;
  let fixture: ComponentFixture<TempConverterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempConverterComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TempConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('test 1 + 3 = 4', () => {
    const num1 = '1';
    const num2 = '3';
    component.addition(num1, num2);
    expect(component.valeur3).toBeCloseTo(4);
  });

  it('test 1 - 3 = -2', () => {
    const num1 = '1';
    const num2 = '3';
    component.soustraction(num1, num2);
    expect(component.valeur3).toBeCloseTo(-2);
  });

  it('test 1 * 3 = 3', () => {
    const num1 = '1';
    const num2 = '3';
    component.multiplication(num1, num2);
    expect(component.valeur3).toBeCloseTo(3);
  });

  it('test 4 / 2 = 2', () => {
    const num1 = '4';
    const num2 = '2';
    component.division(num1, num2);
    expect(component.valeur3).toBeCloseTo(2);
  });
});
