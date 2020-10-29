import { Component } from '@angular/core';
import { CounterStateStore } from '@stores/counter-state-store';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})
export class ControlsComponent {

  constructor(private counterStateStore: CounterStateStore) {
    this.reset();
  }
  
  public increment(): void {
    this.counterStateStore.increment();
  }

  public decrement(): void {
    this.counterStateStore.decrement();
  }

  public reset(): void {
    this.counterStateStore.reset();
  }
}