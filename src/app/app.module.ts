import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './app';
import { HeaderComponent } from './header';
import { InvestmentResultsComponent } from './investment-results';
import { UserInputModule } from './user-input/user-input.module';

@NgModule({
  declarations: [App, HeaderComponent, InvestmentResultsComponent],
  imports: [BrowserModule, UserInputModule],
  bootstrap: [App],
})
export class AppModule {}
