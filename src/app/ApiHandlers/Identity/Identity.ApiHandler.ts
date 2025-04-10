import {Injectable} from '@angular/core';
import {LoginRequest} from '../../DataTransferObjects/Login/LoginRequest';
import {Observable} from 'rxjs';
import {LoginResponse} from '../../DataTransferObjects/Login/LoginResponse';
import {HttpClient} from '@angular/common/http';
import {SuccessResponse} from '../../Responses/SuccessResponse';

@Injectable()

export class IdentityApiHandler{

  constructor(private httpClient: HttpClient) {
  }

  Login(loginDto: LoginRequest): Observable<SuccessResponse<LoginResponse>> {

    return this.httpClient.post<SuccessResponse<LoginResponse>>("https://localhost:7292/api/Identity/login", loginDto);
  }
}
