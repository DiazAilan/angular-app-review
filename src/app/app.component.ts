import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FunctionExpressionTesterComponent } from './function-expression-tester/function-expression-tester.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, FunctionExpressionTesterComponent,MatToolbarModule, MatIconModule, MatButtonModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-app-review';
}