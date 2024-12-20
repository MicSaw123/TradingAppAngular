import {HubConnection, HubConnectionBuilder, LogLevel} from '@microsoft/signalr';
import {CoinDto} from '../../DataTransferObjects/CoinDto';
import {Injectable} from '@angular/core';

@Injectable()

export class CoinHubConnectionService {
  hubConnection?: HubConnection;
  coinList?: CoinDto[];

  ConnectToCoinHub(pageSize: number, page: number) {
    this.hubConnection = new HubConnectionBuilder().withUrl("https://localhost:7292/coinHub",
      {withCredentials: true}).withAutomaticReconnect()
      .configureLogging(LogLevel.Information)
      .build();
  }


  GetPaginationParameters(pageSize: number, page: number) {
    this.hubConnection?.invoke('GetPaginationParameters', pageSize, page);
  };

  GetCoinsPerPage(){
    this.hubConnection?.invoke("GetCoinsPerPage", (response: CoinDto[]) =>{
      this.coinList = response;
    });
  }

  constructor() {
  }


}
