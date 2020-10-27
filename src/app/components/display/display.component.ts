import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/Operators';
import { CounterStateStore } from 'src/app/state-stores/counter-state-store';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent {

  constructor(private counterStateStore: CounterStateStore) {
  }

  public get value$(): Observable<number> {
    return this.counterStateStore.value$
               .pipe(map(v => v.counterValue));
  }
}