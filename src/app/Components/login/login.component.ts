import {Component, Inject, inject, Injectable} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {IdentityApiHandler} from '../../ApiHandlers/IdentityApiHandler/Identity.ApiHandler';
import {ErrorResponse} from '../../Responses/ErrorResponse';
import {LoginResponse} from '../../DataTransferObjects/Login/LoginResponse';
import {LoginRequest} from '../../DataTransferObjects/Login/LoginRequest';
import {SuccessResponse} from '../../Responses/SuccessResponse';

@Injectable()

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  dialog = inject(MatDialog);
  email = "";
  password = "";
  loginDto = new LoginRequest();

  openDialog(){
    this.dialog.open(LoginComponent);
  }

  constructor(private dialogRef: MatDialogRef<LoginComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
              private loginService: IdentityApiHandler) {
  }

  login(){
    this.loginDto.email = this.email;
    this.loginDto.password = this.password;
    this.loginService.Login(this.loginDto).subscribe( {
      next: (response: SuccessResponse<LoginResponse>) =>{
        console.log(response)
        localStorage.setItem("token", response.result.token);
      },
      error: (error: ErrorResponse) => {
        console.log(error);
      }
    })
  }
}
