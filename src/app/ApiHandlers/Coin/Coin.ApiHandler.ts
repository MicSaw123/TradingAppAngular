import {BaseApiRequests} from '../BaseApiRequests/BaseApiRequests';
import {SuccessResponse} from '../../Responses/SuccessResponse';
import {CoinDto} from '../../DataTransferObjects/CoinDto';
import {Injectable} from '@angular/core';
import {PaginationDto} from '../../DataTransferObjects/Pagination/PaginationDto';
import {HttpParams} from '@angular/common/http';

@Injectable()

export class CoinApiHandler {

  constructor(private apiRequests: BaseApiRequests) {
  }

  GetCoins(){
    return this.apiRequests.get<SuccessResponse<CoinDto[]>>("Coin/GetCoins");
  }

  GetCoinsPerPage(pagination: PaginationDto) {
    return this.apiRequests.post("Coin/GetCoinsPerPage", pagination);
  }

  GetCoinBySymbol(coinSymbol: string){
    let params = new HttpParams().set('coinSymbol', coinSymbol);
    return this.apiRequests.get<SuccessResponse<CoinDto>>("Coin/GetCoinBySymbol", params);
  }
}
