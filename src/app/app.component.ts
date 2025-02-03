import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FunctionExpressionTesterComponent } from './function-expression-tester/function-expression-tester.component';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, FunctionExpressionTesterComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-app-review';
}