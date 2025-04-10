import {BaseApiRequests} from '../BaseApiRequests/BaseApiRequests';
import {HttpParams} from '@angular/common/http';
import {SuccessResponse} from '../../Responses/SuccessResponse';
import {SpotTransactionDto} from '../../DataTransferObjects/Transactions/SpotTransactionDto';
import {Injectable} from '@angular/core';

@Injectable()

export class SpotTransactionToOpenApiHandler {
  constructor(private baseApiRequests: BaseApiRequests) {
  }

  GetSpotTransactionsToOpenByPortfolioId(portfolioId: number) {
    let params = new HttpParams().set('portfolioId', portfolioId);
    return this.baseApiRequests.get<SuccessResponse<SpotTransactionDto[]>>("SpotTransactionToOpen/GetSpotTransactionsToOpenByPortfolioId",
      params);
  }
}
