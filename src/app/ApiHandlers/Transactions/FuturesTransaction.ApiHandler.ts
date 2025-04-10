import {BaseApiRequests} from '../BaseApiRequests/BaseApiRequests';
import {SuccessResponse} from '../../Responses/SuccessResponse';
import {FuturesTransactionDto} from '../../DataTransferObjects/Transactions/FuturesTransactionDto';
import {HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()

export class FuturesTransactionApiHandler {
  constructor(private baseApiRequests: BaseApiRequests) {
  }

  GetActiveFuturesTransactionsByPortfolioId(portfolioId: number){
    let params = new HttpParams().set('portfolioId', portfolioId);
    return this.baseApiRequests.get<SuccessResponse<FuturesTransactionDto[]>>
    ("FuturesTransaction/GetActiveFuturesTransactionsByPortfolioId", params)
  }

  GetInactiveFuturesTransactionsByPortfolioId(portfolioId: number){
    let params = new HttpParams().set('portfolioId', portfolioId);
    return this.baseApiRequests.get<SuccessResponse<FuturesTransactionDto[]>>
    ("FuturesTransaction/GetInactiveFuturesTransactionsByPortfolioId", params)
  }
}
