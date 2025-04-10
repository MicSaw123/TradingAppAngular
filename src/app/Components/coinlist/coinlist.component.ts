import {AfterViewInit, Component, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {CoinApiHandler} from '../../ApiHandlers/Coin/Coin.ApiHandler';
import {SuccessResponse} from '../../Responses/SuccessResponse';
import {CoinDto} from '../../DataTransferObjects/CoinDto';
import {ErrorResponse} from '../../Responses/ErrorResponse';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import {PaginationDto} from '../../DataTransferObjects/Pagination/PaginationDto';
import {HubConnection} from '@microsoft/signalr';
import {CoinHubConnectionService} from '../../Services/CoinHubConnectionSignalR/CoinHubConnection.service';
import {Subscription} from 'rxjs';
import {award} from 'ngx-bootstrap-icons';

@Component({
  selector: 'app-coinlist',
  templateUrl: './coinlist.component.html',
  styleUrl: './coinlist.component.css',
})
export class CoinlistComponent implements OnInit, AfterViewInit {
  @ViewChild('paginator', {static: true}) paginator!: MatPaginator;
  coinList: CoinDto[] = [];
  subscription?: Subscription;
  coinsPerPage: CoinDto[] = [];
  pagination = new PaginationDto();
  pageIndex = 0;
  pageSize = 15;
  token = "";
  displayedColumns: string[] = ["Pair", "Price", "All-time high", "All-time low"];
  hubConnection?: HubConnection;

  constructor(private coinApiService: CoinApiHandler, private coinHubService: CoinHubConnectionService) {
    this.pagination.Page = this.pageIndex;
    this.pagination.PageSize = this.pageSize;
  }


  ngAfterViewInit(): void {
    this.pagination.Page = this.pageIndex;
    this.pagination.PageSize = this.pageSize;
    this.coinHubService.GetPaginationParameters(this.pagination);
    this.subscription = this.coinHubService.GetCoinsPerPage().subscribe(response => {
      this.coinsPerPage = response;
    });
  }

  ngOnInit(): void {
    this.coinApiService.GetCoins().subscribe({
      next: (response: SuccessResponse<CoinDto[]>) => {
        this.handleGetCoins(response);
      },
      error: (error: ErrorResponse) => {
        console.log(error);
      }
    });
  }

  pageChangeEvent(event: PageEvent) {
    this.pagination.Page = event.pageIndex;
    this.pagination.PageSize = event.pageSize;
    this.coinHubService.GetPaginationParameters(this.pagination);
    this.hubConnection?.invoke("GetPaginationParameters", this.pagination);
  }

  private handleGetCoins(response: SuccessResponse<CoinDto[]>){
    this.coinList = response.Result;
  }
}
