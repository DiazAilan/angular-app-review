import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionExpressionTesterComponent } from './function-expression-tester.component';

describe('FunctionExpressionTesterComponent', () => {
  let component: FunctionExpressionTesterComponent;
  let fixture: ComponentFixture<FunctionExpressionTesterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FunctionExpressionTesterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FunctionExpressionTesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
