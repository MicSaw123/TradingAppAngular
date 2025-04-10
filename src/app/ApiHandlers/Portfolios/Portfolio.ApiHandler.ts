import {BaseApiRequests} from '../BaseApiRequests/BaseApiRequests';
import {SuccessResponse} from '../../Responses/SuccessResponse';
import {PortfolioDto} from '../../DataTransferObjects/Portfolios/PortfolioDto';
import {HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()

export class PortfolioApiHandler {
  constructor(private apiRequests: BaseApiRequests) {
  }

  GetPortfolioByUserId(userId: string) {
    let params = new HttpParams().set('UserId', userId);
    return this.apiRequests.get<SuccessResponse<PortfolioDto>>("Portfolio/GetPortfolioByUserId", params)
  }
}
