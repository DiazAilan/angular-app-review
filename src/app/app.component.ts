import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FunctionExpressionTesterComponent } from './function-expression-tester/function-expression-tester.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from "./home/home.component";

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, FunctionExpressionTesterComponent, MatToolbarModule, MatIconModule, MatButtonModule, HomeComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-app-review';
}