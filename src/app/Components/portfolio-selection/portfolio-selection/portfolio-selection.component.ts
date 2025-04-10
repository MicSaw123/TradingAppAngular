import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-portfolio-selection',
  templateUrl: './portfolio-selection.component.html',
  styleUrl: './portfolio-selection.component.css'
})
export class PortfolioSelectionComponent {
  constructor(private router: Router) {
  }

  navigateToArchivedTransactions(){
    this.router.navigate(['archived-transactions']);
  }

  navigateToCurrentTransactions(){
    this.router.navigate(['current-transactions']);
  }

  navigateToCoinList(){
    this.router.navigate(['']);
  }
}
