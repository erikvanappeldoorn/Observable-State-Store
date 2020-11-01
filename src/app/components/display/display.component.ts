import { Component } from '@angular/core';
import { TrackStateStore } from '@stores/track-state-store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/Operators';
import { CounterStateStore } from 'src/app/state-stores/counter-state-store';
import { Track } from 'src/app/types/track';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent {

  constructor(private counterStateStore: CounterStateStore,
              private trackStateStore: TrackStateStore) {
  }

  public get counterValue$(): Observable<number> {
    return this.counterStateStore.value$
               .pipe(map(v => v.counterValue));
  }

  public get selectedTrackValue$(): Observable<Track> {
    return this.trackStateStore.value$
               .pipe(map(v => v.tracks[v.selectedIndex]));
  }
}