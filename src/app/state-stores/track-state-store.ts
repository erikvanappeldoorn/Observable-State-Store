import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TrackState } from '../state/track-state';
import { TrackStateStoreActions } from '../state-actions/track-state-store-actions';
import { StateStoreBase } from './state-store-base';

@Injectable({ providedIn: 'root' })
export class TrackStateStore 
  extends StateStoreBase<TrackState> 
  implements TrackStateStoreActions
  {
    public constructor(initialState: TrackState) {
      super(); 
      this._state$ = new BehaviorSubject(initialState);
    }

    public next(): void {
      const state: TrackState = this._state$.value;
      let index: number = state.selectedIndex+1;
      state.selectedIndex = index < state.tracks.length ? index : 0;
      
      this._state$.next(state);
    }

    public previous(): void {
      const state: TrackState = this._state$.value;
      let index: number = state.selectedIndex-1;
      state.selectedIndex = index >= 0 ? index : state.tracks.length-1;

      this._state$.next(state);
    }

    public reset(): void {
      const state: TrackState = this._state$.value;
      state.selectedIndex = 0;

      this._state$.next(state);
    }
}