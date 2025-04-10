import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {PortfolioApiHandler} from '../../../ApiHandlers/Portfolios/Portfolio.ApiHandler';
import {Observable} from 'rxjs';
import {AuthGuardService} from '../../JwtDecode/AuthGuardService';
import {SuccessResponse} from '../../../Responses/SuccessResponse';
import {PortfolioDto} from '../../../DataTransferObjects/Portfolios/PortfolioDto';

@Injectable()

export class PortfolioResolver implements Resolve<any> {
   constructor(private portfolioApiHandler: PortfolioApiHandler, private authGuardService: AuthGuardService) {
   }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<SuccessResponse<PortfolioDto>> {
     let userId = this.authGuardService.decodeToken();
     return this.portfolioApiHandler.GetPortfolioByUserId(userId);
    }

}
