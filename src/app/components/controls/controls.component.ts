import { Component } from '@angular/core';
import { CounterStateStoreService } from 'src/app/services/counter-state-store-service';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})
export class ControlsComponent {

  constructor(private counterStateStoreService: CounterStateStoreService) {
    this.reset();
  }
  
  public increment(): void {
    this.counterStateStoreService.increment();
  }

  public decrement(): void {
    this.counterStateStoreService.decrement();
  }

  public reset(): void {
    this.counterStateStoreService.reset();
  }
}
