import { Component, signal } from '@angular/core';
import { InvestmentResultModel } from './investment-result.model';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
})
export class AppComponent {
  resultsData = signal<InvestmentResultModel[] | undefined>(undefined);

}
