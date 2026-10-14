import { Component, computed, inject } from '@angular/core';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-results',
  standalone: false,
  templateUrl: './investment-results.html',
  styleUrl: './investment-results.css',
})
export class InvestmentResultsComponent {
  private investmentService: InvestmentService = inject(InvestmentService);

  results = computed(() => this.investmentService.resultData());
}
