import {BaseApiRequests} from '../BaseApiRequests/BaseApiRequests';
import {HttpParams} from '@angular/common/http';
import {SuccessResponse} from '../../Responses/SuccessResponse';
import {FuturesTransactionToOpenDto} from '../../DataTransferObjects/TransactionsToOpen/FuturesTransactionToOpenDto';
import {Injectable} from '@angular/core';

@Injectable()

export class FuturesTransactionToOpenApiHandler {
  constructor(private baseApiRequests: BaseApiRequests) {
  }

  GetFuturesTransactionsToOpenByPortfolioId(portfolioId: number){
    let params = new HttpParams().set('portfolioId', portfolioId);
    return this.baseApiRequests.get<SuccessResponse<FuturesTransactionToOpenDto[]>>
    ("FuturesTransactionToOpen/GetFuturesTransactionsToOpenByPortfolioId", params)
  }
}
