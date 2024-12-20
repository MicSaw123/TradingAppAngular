import {JwtPayload, jwtDecode} from 'jwt-decode'
import {Injectable} from '@angular/core';

@Injectable()

export class AuthGuard {

  isLoggedIn(){
    return localStorage.getItem('token');
  }

  decodeToken() {
    const token = localStorage.getItem('token');
    if(token == null){
      return "";
    }
    const decodedToken: JwtWithEmail = jwtDecode(token as string);
    return decodedToken.id;
  }
}
  interface JwtWithEmail extends JwtPayload{
    id: string;
}
