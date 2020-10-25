import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CounterState } from '../interfaces/counterState';
import { CounterStateStoreServiceActions } from '../interfaces/counterStateStoreSeviceActions';
import { StoreAction } from '../interfaces/storeAction';
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
        const increment: StoreAction<CounterState> = 
          { value: { counterValue: 1 },
            execute: (state,value) => {
              state.counterValue += value.counterValue;
              return state;
            }
          }
        this.dispatch(increment);
      }

      public decrement(): void {
        const decrement: StoreAction<CounterState> = 
          { value: { counterValue: 1 },
            execute: (state,value) => {
              state.counterValue -= value.counterValue;
              return state;
            }
          }
         
        this.dispatch(decrement);
      }

      public reset(): void {
        const reset: StoreAction<CounterState> = 
        { value:{ counterValue: 0 },
          execute: (state,value) => {
            state.counterValue = value.counterValue;
            return state;
          }
        }
        this.dispatch(reset);
      }
}