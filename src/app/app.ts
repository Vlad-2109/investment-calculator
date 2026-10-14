import { Component, signal } from '@angular/core';

import type { InvestmentResult } from './app.model';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  resultsData = signal<InvestmentResult[] | undefined>(undefined);
}
