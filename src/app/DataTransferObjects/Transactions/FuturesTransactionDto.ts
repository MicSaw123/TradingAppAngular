export class FuturesTransactionDto {
  CoinSymbol = "";

  BuyingPrice = 0;

  MoneyInput = 0;

  TransactionProfit = 0;

  Leverage = 0;

  ClosingPrice = 0;

  AmountOfCoin = 0;

  LastEditTransactionDate?: Date;

  OpenTransactionDate?: Date;

  ClosingTransactionDate?: Date;

  IsShort: boolean = false;
}
