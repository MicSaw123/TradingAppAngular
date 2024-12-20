import {Component, Input} from '@angular/core';
import {CoinDto} from '../../../../DataTransferObjects/CoinDto';

@Component({
  selector: 'app-coin',
  templateUrl: './coin.component.html',
  styleUrl: './coin.component.css'
})
export class CoinComponent {
  @Input() public coin?: CoinDto;
}
