import {BaseApiRequests} from '../BaseApiRequests/BaseApiRequests';
import {SuccessResponse} from '../../Responses/SuccessResponse';
import {CoinDto} from '../../DataTransferObjects/CoinDto';
import {Injectable} from '@angular/core';
import {PaginationDto} from '../../DataTransferObjects/Pagination/PaginationDto';

@Injectable()

export class CoinApiHandler {

  constructor(private apiRequests: BaseApiRequests) {
  }

  getCoins(){
    return this.apiRequests.get<SuccessResponse<CoinDto[]>>("Coin/GetCoins");
  }

  getCoinsPerPage(pagination: PaginationDto) {
    return this.apiRequests.post("Coin/GetCoinsPerPage", pagination);
  }
}
