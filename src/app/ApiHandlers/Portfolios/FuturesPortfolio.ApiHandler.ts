import {BaseApiRequests} from '../BaseApiRequests/BaseApiRequests';
import {Injectable} from '@angular/core';
import {SuccessResponse} from '../../Responses/SuccessResponse';
import {FuturesPortfolioDto} from '../../DataTransferObjects/Portfolios/FuturesPortfolio/FuturesPortfolioDto';
import {HttpParams} from '@angular/common/http';

@Injectable()

export class FuturesPortfolioApiHandler {
  constructor(private apiRequests: BaseApiRequests) {
  }

  GetFuturesPortfolioByPortfolioId(portfolioId: number) {
    let params = new HttpParams().set('portfolioId', portfolioId);
    return this.apiRequests.get<SuccessResponse<FuturesPortfolioDto>>("FuturesPortfolio/GetFuturesPortfolioById", params)
  }
}
