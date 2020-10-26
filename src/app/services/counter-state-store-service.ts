import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CounterState } from '../interfaces/counterState';
import { CounterStateStoreServiceActions } from '../interfaces/counterStateStoreSeviceActions';
import { StateStoreServiceBase } from './state-store-service-base.service';

@Injectable({ providedIn: 'root' })
export class CounterStateStoreService 
  extends StateStoreServiceBase<CounterState> 
  implements CounterStateStoreServiceActions
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