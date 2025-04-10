import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent} from './Components/header/header.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CoinlistComponent } from './Components/coinlist/coinlist.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatCard, MatCardFooter, MatCardHeader, MatCardSubtitle, MatCardTitle} from '@angular/material/card';
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
import {CoinApiHandler} from './ApiHandlers/Coin/Coin.ApiHandler';
import {BaseApiRequests} from './ApiHandlers/BaseApiRequests/BaseApiRequests';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {MatPaginator} from '@angular/material/paginator';
import { CoinComponent } from './Components/coinlist/Coin/coin/coin.component';
import {MatButton, MatIconButton} from '@angular/material/button';
import {MatToolbar} from '@angular/material/toolbar';
import { PortfolioSelectionComponent } from './Components/portfolio-selection/portfolio-selection/portfolio-selection.component';
import {MatSnackBarLabel} from '@angular/material/snack-bar';
import { TransactionAddComponent } from './Components/transaction/transaction-view/transaction-add/transaction-add/transaction-add.component';
import { ExistingTransactionComponent } from './Components/transaction/transaction-view/existing-transaction/existing-transaction/existing-transaction.component';
import {CoinHubConnectionService} from './Services/CoinHubConnectionSignalR/CoinHubConnection.service';
import {LoginComponent} from './Components/login/login.component';
import {FormsModule} from '@angular/forms';
import { MatDialogModule} from '@angular/material/dialog';
import {IdentityApiHandler} from './ApiHandlers/Identity/Identity.ApiHandler';
import {MatButtonToggle} from '@angular/material/button-toggle';
import {MatIcon, MatIconModule} from '@angular/material/icon';
import {allIcons, NgxBootstrapIconsModule} from 'ngx-bootstrap-icons';
import { RegisterComponent } from './Components/register/register.component';
import {AuthInterceptor} from './Interceptors/AuthInterceptor';
import { AuthGuardService} from './Services/JwtDecode/AuthGuardService';
import { PortfolioViewComponent } from './Components/portfolio/portfolio-view/portfolio-view.component';
import { InactivePortfolioComponent } from './Components/inactive-portfolio/inactive-portfolio/inactive-portfolio.component';
import { InactiveTransactionComponent } from './Components/inactive-portfolio/inactive-portfolio/inactive-transaction/inactive-transaction/inactive-transaction.component';
import { SpotTransactionComponent } from './Components/portfolio/portfolio-view/spot-portfolio/spot-transaction/spot-transaction.component';
import { FuturesPorftolioComponent } from './Components/portfolio/portfolio-view/futures-porftolio/futures-porftolio.component';
import { FuturesTransactionComponent } from './Components/portfolio/portfolio-view/futures-porftolio/futures-transaction/futures-transaction.component';
import {SpotPortfolioComponent} from './Components/portfolio/portfolio-view/spot-portfolio/spot-portfolio.component';
import {RouterLink, RouterLinkActive, RouterModule, RouterOutlet, Routes} from '@angular/router';
import { ArchivedSpotTransactionComponent } from './Components/portfolio/portfolio-view/spot-portfolio/archived-spot-transaction/archived-spot-transaction.component';
import { ArchivedFuturesTransactionComponent } from './Components/portfolio/portfolio-view/futures-porftolio/archived-futures-transaction/archived-futures-transaction.component';
import {TransactionViewComponent} from './Components/transaction/transaction-view/transaction-view.component';
import {PortfolioApiHandler} from './ApiHandlers/Portfolios/Portfolio.ApiHandler';
import {PortfolioResolver} from './Services/Resolvers/Portfolio/PortfolioResolver';
import {SpotPortfolioApiHandler} from './ApiHandlers/Portfolios/SpotPortfolio.ApiHandler';
import {FuturesPortfolioApiHandler} from './ApiHandlers/Portfolios/FuturesPortfolio.ApiHandler';
import {SpotTransactionApiHandler} from './ApiHandlers/Transactions/SpotTransaction.ApiHandler';
import {FuturesTransactionApiHandler} from './ApiHandlers/Transactions/FuturesTransaction.ApiHandler';

const routes: Routes = [
  {path: '', component: CoinlistComponent},
  { path: 'archived-transactions', component: PortfolioViewComponent, resolve: {portfolio: PortfolioResolver}},
  {path: 'current-transactions', component: PortfolioViewComponent, resolve: {portfolio: PortfolioResolver}}]

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
        RegisterComponent,
        PortfolioViewComponent,
        InactivePortfolioComponent,
        InactiveTransactionComponent,
        SpotTransactionComponent,
        FuturesPorftolioComponent,
        FuturesTransactionComponent,
        SpotPortfolioComponent,
        ArchivedSpotTransactionComponent,
        ArchivedFuturesTransactionComponent,
        TransactionViewComponent
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
    NgxBootstrapIconsModule.pick(allIcons),
    MatCardSubtitle,
    MatCardFooter,
    MatIconButton,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    RouterModule.forRoot(routes)
  ],

  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    PortfolioApiHandler,
    SpotPortfolioApiHandler,
    FuturesPortfolioApiHandler,
    SpotTransactionApiHandler,
    FuturesTransactionApiHandler,
    AuthGuardService,
    BaseApiRequests,
    CoinApiHandler,
    LoginComponent,
    IdentityApiHandler,
    PortfolioResolver,
    CoinHubConnectionService,
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
