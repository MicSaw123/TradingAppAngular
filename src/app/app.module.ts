import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent} from './Components/header/header.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CoinlistComponent } from './Components/coinlist/coinlist.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatCard, MatCardHeader, MatCardTitle} from '@angular/material/card';
import {MatFormField} from '@angular/material/form-field';
import {MatInput, MatInputModule} from '@angular/material/input';
import {
  MatCell,
  MatCellDef,
  MatColumnDef, MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef, MatNoDataRow, MatRow, MatRowDef,
  MatTable
} from '@angular/material/table';
import {CoinApiHandler} from './ApiHandlers/CoinApiHandler/Coin.ApiHandler';
import {BaseApiRequests} from './ApiHandlers/BaseApiRequests/BaseApiRequests';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {MatPaginator} from '@angular/material/paginator';
import { CoinComponent } from './Components/coinlist/Coin/coin/coin.component';
import {MatButton} from '@angular/material/button';
import {MatToolbar} from '@angular/material/toolbar';
import { PortfolioSelectionComponent } from './Components/portfolio-selection/portfolio-selection/portfolio-selection.component';
import {MatSnackBarLabel} from '@angular/material/snack-bar';
import { TransactionAddComponent } from './Components/transaction/transaction-view/transaction-add/transaction-add/transaction-add.component';
import { ExistingTransactionComponent } from './Components/transaction/transaction-view/existing-transaction/existing-transaction/existing-transaction.component';
import {CoinHubConnectionService} from './Services/CoinHubConnectionSignalR/CoinHubConnection.service';
import {LoginComponent} from './Components/login/login.component';
import {FormsModule} from '@angular/forms';
import { MatDialogModule} from '@angular/material/dialog';
import {IdentityApiHandler} from './ApiHandlers/IdentityApiHandler/Identity.ApiHandler';
import {MatButtonToggle} from '@angular/material/button-toggle';
import {MatIcon, MatIconModule} from '@angular/material/icon';
import {allIcons, NgxBootstrapIconsModule} from 'ngx-bootstrap-icons';
import { RegisterComponent } from './Components/register/register.component';
import {AuthInterceptor} from './Interceptors/AuthInterceptor';
import {AuthGuard} from './Services/JwtDecode/AuthGuardService';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CoinlistComponent,
    CoinComponent,
    PortfolioSelectionComponent,
    TransactionAddComponent,
    ExistingTransactionComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MatCardHeader,
    MatCard,
    MatFormField,
    MatInput,
    MatInputModule,
    MatTable,
    MatHeaderCellDef,
    MatColumnDef,
    MatCell,
    MatCellDef,
    HttpClientModule,
    MatHeaderRow,
    MatRow,
    MatRowDef,
    MatNoDataRow,
    MatPaginator,
    MatButton,
    MatToolbar,
    MatHeaderCell,
    MatHeaderRowDef,
    MatCardTitle,
    MatSnackBarLabel,
    FormsModule,
    MatDialogModule,
    MatButtonToggle,
    MatIcon,
    MatIconModule,
    NgxBootstrapIconsModule.pick(allIcons)
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    AuthGuard,
    BaseApiRequests,
    CoinApiHandler,
    LoginComponent,
    IdentityApiHandler,
    CoinHubConnectionService,
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
