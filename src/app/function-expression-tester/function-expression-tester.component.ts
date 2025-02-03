import { ChangeDetectionStrategy, ChangeDetectorRef, Component, effect, signal } from '@angular/core';

@Component({
    selector: 'app-function-expression-tester',
    imports: [],
    templateUrl: './function-expression-tester.component.html',
    styleUrl: './function-expression-tester.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FunctionExpressionTesterComponent {

  private simpleFunctionCounter = 0
  private getAccessFunctionCounter = 0
  private signalCaseCounter = 0

  simpleFunction(): string {
    this.simpleFunctionCounter++;
    console.log('simpleFunction ' + this.simpleFunctionCounter)
    return 'simpleFunction'
  }

  get getAccessFunction(): string {
    this.getAccessFunctionCounter++;
    console.log('getAccessFunction ' + this.getAccessFunctionCounter)
    return 'getAccessFunction'
  }

  signalCase = signal<string>('signalCase')

  derivedSignalCase = signal<string>(this.signalCase());

  constructor(private cdr: ChangeDetectorRef) {
    effect(() => {
      this.signalCaseCounter++;
      console.log('signalCase ' + this.signalCaseCounter);
    });
  }

  detectChanges(): void {
    this.cdr.detectChanges()
  }

}
