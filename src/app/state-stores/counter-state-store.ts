import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CounterState } from '../state/counter-state';
import { CounterStateStoreActions } from '../state-actions/counter-state-store-actions';
import { StateStoreBase } from './state-store-base';

@Injectable({ providedIn: 'root' })
export class CounterStateStore 
  extends StateStoreBase<CounterState> 
  implements CounterStateStoreActions
  {
    protected constructor() {
      super();
      const initialState = {counterValue: 0}; 
      this._state$ = new BehaviorSubject(initialState);
    }

    public increment(): void {
      const state: CounterState = this._state$.value;
      state.counterValue++;
      this._state$.next(state);
    }

    public decrement(): void {
      const state: CounterState = this._state$.value;
      state.counterValue--;
      this._state$.next(state);
    }

    public reset(): void {
      const state: CounterState = this._state$.value;
      state.counterValue = 0;
      this._state$.next(state);
    }
}