import { Component } from '@angular/core';
import { CounterStateStore } from '@stores/counter-state-store';
import { TrackStateStore } from '@stores/track-state-store';
import { TrackState } from 'src/app/state/track-state';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})
export class ControlsComponent {

  constructor(private counterStateStore: CounterStateStore,
              private trackStateStore: TrackStateStore) {

    const trackState: TrackState = {
        tracks: [
            {id: 1, artist: 'Sam Smith', song: 'Diamonds'},
            {id: 2, artist: 'Ava Max', song: 'Kings and Queens'},
            {id: 3, artist: 'Harry Styles', song: 'Watermelon sugar'}
        ],
        selectedIndex: 0
    };
    this.trackStateStore.initialize(trackState);
    this.reset();
  }
  
  public increment(): void {
    this.counterStateStore.increment();
    this.trackStateStore.next();
  }

  public decrement(): void {
    this.counterStateStore.decrement();
    this.trackStateStore.previous();
  }

  public reset(): void {
    this.counterStateStore.reset();
    this.trackStateStore.reset();
  }
}