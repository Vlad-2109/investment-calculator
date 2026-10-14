import { Component, Input } from '@angular/core';
import type { InvestmentResult } from '../app.model';

@Component({
  selector: 'app-investment-results',
  imports: [],
  templateUrl: './investment-results.html',
  styleUrl: './investment-results.css',
})
export class InvestmentResultsComponent {
  @Input() results?: InvestmentResult[];
}
