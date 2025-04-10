import {HubConnection, HubConnectionBuilder, LogLevel} from '@microsoft/signalr';
import {Injectable, OnDestroy} from '@angular/core';
import {AuthGuardService} from '../JwtDecode/AuthGuardService';
import {CoinDto} from '../../DataTransferObjects/CoinDto';
import {BehaviorSubject, Observable} from 'rxjs';
import {PaginationDto} from '../../DataTransferObjects/Pagination/PaginationDto';

@Injectable({
  providedIn: 'root'
})

export class CoinHubConnectionService {
  hubConnection?: HubConnection;
  token = "";

  constructor(private authService: AuthGuardService) {
    this.token = authService.decodeToken();
  }

  async StopConnection(){
    this.hubConnection?.stop();
  }

  async ConnectToCoinHub() {
    if(this.hubConnection){
      return;
    }

    if (!this.hubConnection) {
      this.hubConnection = new HubConnectionBuilder().withUrl(`https://localhost:7292/coinHub?userId=${this.token}`,
        {withCredentials: true}).withAutomaticReconnect()
        .configureLogging(LogLevel.Information)
        .build();
      try {
        await this.hubConnection!.start();
        console.log("Connected to Coin Hub");
      } catch (error) {
        console.log(error);
      }
    }
  }

  async GetPaginationParameters(pagination: PaginationDto) {
    await this.hubConnection?.invoke('GetPaginationParameters', pagination);
  };

  GetCoinsPerPage(): Observable<CoinDto[]>{
    const eventSubject = new BehaviorSubject<CoinDto[]>([]);

    this.hubConnection?.on("GetCoinsPerPage", (response: CoinDto[]) => {
      eventSubject.next(response);
    });
    return eventSubject.asObservable();
  }
}
