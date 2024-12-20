import {Component, ViewChild} from '@angular/core';
import {CoinApiHandler} from '../../ApiHandlers/CoinApiHandler/Coin.ApiHandler';
import {SuccessResponse} from '../../Responses/SuccessResponse';
import {CoinDto} from '../../DataTransferObjects/CoinDto';
import {ErrorResponse} from '../../Responses/ErrorResponse';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import {PaginationDto} from '../../DataTransferObjects/Pagination/PaginationDto';
import {HubConnection, HubConnectionBuilder, LogLevel} from '@microsoft/signalr';
import {AuthGuard} from '../../Services/JwtDecode/AuthGuardService';

@Component({
  selector: 'app-coinlist',
  templateUrl: './coinlist.component.html',
  styleUrl: './coinlist.component.css',
})
export class CoinlistComponent {
  @ViewChild('paginator', {static: true}) paginator!: MatPaginator;
  coinList: CoinDto[] = [];
  coinsPerPage: CoinDto[] = [];
  pagination = new PaginationDto();
  pageIndex = 0;
  pageSize = 15;
  token = "";
  displayedColumns: string[] = ["Pair", "Price", "Change"];
  hubConnection?: HubConnection;

  constructor(private coinApiService: CoinApiHandler, private authService: AuthGuard) {
    this.coinApiService.getCoins().subscribe({
      next: (response: SuccessResponse<CoinDto[]>) => {
        this.handleGetCoins(response);
        console.log(this.coinList);
      },
      error: (error: ErrorResponse) => {
        console.log(error);
      }
    });
    this.token = this.authService.decodeToken();
    this.pagination.Page = this.pageIndex;
    this.pagination.PageSize = this.pageSize;
    this.hubConnection = new HubConnectionBuilder().withUrl(`https://localhost:7292/coinHub?userId=${this.token}`,
      {withCredentials: true}).withAutomaticReconnect()
      .configureLogging(LogLevel.Information)
      .build();
    this.hubConnection!.start()
      .then(() => {
        this.hubConnection?.invoke("GetPaginationParameters", this.pagination)
      })
      .catch((error: Error) => {
        console.log(error);
      });
    this.hubConnection!.on("GetCoinsPerPage", (response: CoinDto[]) => {
      this.coinsPerPage = response;
    });
    this.coinApiService.getCoinsPerPage(this.pagination).subscribe({
      next: (response: SuccessResponse<CoinDto[]>) => {
        this.handleGetCoinsPerPage(response);
      },
      error: (error: ErrorResponse) => {
        console.log(error);
      }
    });
  }


  pageChangeEvent(event: PageEvent) {
    this.pagination.Page = event.pageIndex;
    this.pagination.PageSize = event.pageSize;
    this.hubConnection?.invoke("GetPaginationParameters", this.pagination);
    this.coinApiService.getCoinsPerPage(this.pagination).subscribe({
      next: (response: SuccessResponse<CoinDto[]>) => {
        this.handleGetCoinsPerPage(response);
      },
      error: (error: ErrorResponse) => {
        console.log(error);
      }
    });
  }

  private handleGetCoinsPerPage(response: SuccessResponse<CoinDto[]>) {
    this.coinsPerPage = response.result;
  }

  private handleGetCoins(response: SuccessResponse<CoinDto[]>){
    this.coinList = response.result;
  }
}
