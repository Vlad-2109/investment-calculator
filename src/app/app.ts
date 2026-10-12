import { Component, signal } from '@angular/core';

import { HeaderComponent } from './header';
import { UserInputComponent } from './user-input';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserInputComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('investment-calculator');
}
