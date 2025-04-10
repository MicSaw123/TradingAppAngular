import {Component, OnDestroy, OnInit} from '@angular/core';
import {CoinHubConnectionService} from './Services/CoinHubConnectionSignalR/CoinHubConnection.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnDestroy {
  title = 'TradingAppAngular';

  constructor(private hubConnectionService: CoinHubConnectionService) {
    console.log('AppComponent');
    this.hubConnectionService.ConnectToCoinHub();
  }

  ngOnDestroy(): void {
        this.hubConnectionService?.StopConnection();
    }
}
