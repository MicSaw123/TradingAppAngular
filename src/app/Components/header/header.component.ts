import { Component } from '@angular/core';
import {LoginComponent} from '../login/login.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  private dialogRef: any;
  constructor(public dialog: MatDialog) {
  }

  openDialog(){
    this.dialogRef = this.dialog.open(LoginComponent, {
      width: '40%',
      height: '32%',
      data:{
        email: "",
        password: ""
      }
    });
  }
}
