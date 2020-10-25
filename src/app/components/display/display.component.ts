import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/Operators';
import { CounterStateStoreService } from 'src/app/services/counter-state-store-service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent {

  constructor(private counterStateStoreService: CounterStateStoreService) {
  }

  public get value$(): Observable<number> {
    return this.counterStateStoreService.value$
               .pipe(map(v => v.counterValue));
  }
}
