import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import type { InvestmentData } from '../app.model';

@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
  templateUrl: './user-input.html',
  styleUrl: './user-input.css',
})
export class UserInputComponent {
  calculate = output<InvestmentData>();
  enteredInitialInvestment = signal<string>('0');
  enteredAnnualInvestment = signal<string>('0');
  enteredExpectedReturn = signal<string>('5');
  enteredDuration = signal<string>('10');

  onSubmit() {
    this.calculate.emit({
      initialInvestment: Number(this.enteredInitialInvestment()),
      duration: Number(this.enteredDuration()),
      expectedReturn: Number(this.enteredExpectedReturn()),
      annualInvestment: Number(this.enteredAnnualInvestment()),
    });
    this.enteredInitialInvestment.set('0');
    this.enteredAnnualInvestment.set('0');
    this.enteredExpectedReturn.set('5');
    this.enteredDuration.set('10');
  }
}
