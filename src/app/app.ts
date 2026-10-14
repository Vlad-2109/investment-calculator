import { Component, signal } from '@angular/core';

import { HeaderComponent } from './header';
import { UserInputComponent } from './user-input';
import type { InvestmentData, InvestmentResult } from './app.model';
import { InvestmentResultsComponent } from './investment-results';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserInputComponent, InvestmentResultsComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  resultsData = signal<InvestmentResult[] | undefined>(undefined);
}
