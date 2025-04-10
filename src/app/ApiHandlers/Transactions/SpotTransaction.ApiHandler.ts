import {HttpParams} from '@angular/common/http';
import {BaseApiRequests} from '../BaseApiRequests/BaseApiRequests';
import {SuccessResponse} from '../../Responses/SuccessResponse';
import {SpotTransactionDto} from '../../DataTransferObjects/Transactions/SpotTransactionDto';
import {Injectable} from '@angular/core';

@Injectable()

export class SpotTransactionApiHandler {
  constructor(private baseApiRequests: BaseApiRequests) {
  }

  GetActiveSpotTransactionsByPortfolioId(portfolioId: number){
    let params = new HttpParams().set('portfolioId', portfolioId);
    return this.baseApiRequests.get<SuccessResponse<SpotTransactionDto[]>>("SpotTransaction/GetActiveSpotTransactionsByPortfolioId",
      params);
  }

  GetInactiveSpotTransactionsByPortfolioId(portfolioId: number){
    let params = new HttpParams().set('portfolioId', portfolioId);
    return this.baseApiRequests.get<SuccessResponse<SpotTransactionDto[]>>("SpotTransaction/GetInactiveSpotTransactionsByPortfolioId",
      params);
  }
}
