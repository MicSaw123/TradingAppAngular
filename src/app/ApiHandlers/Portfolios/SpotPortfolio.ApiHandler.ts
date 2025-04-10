import {BaseApiRequests} from '../BaseApiRequests/BaseApiRequests';
import {SuccessResponse} from '../../Responses/SuccessResponse';
import {SpotPortfolioDto} from '../../DataTransferObjects/Portfolios/SpotPortfolio/SpotPortfolioDto';
import {HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()

export class SpotPortfolioApiHandler {
  constructor(private baseApiRequests: BaseApiRequests) {
  }

  GetSpotPortfolioById(portfolioId: number){
    let params = new HttpParams().set('portfolioId', portfolioId);
    console.log(params);
    return this.baseApiRequests.get<SuccessResponse<SpotPortfolioDto>>("SpotPortfolio/GetSpotPortfolioById", params)
  }
}
