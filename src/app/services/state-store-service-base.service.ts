import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { StoreAction } from '../interfaces/storeAction';

@Injectable({ providedIn: 'root' })
export class StateStoreServiceBase<T> {
  protected _state$: BehaviorSubject<T>;

  protected constructor() {
    this._state$ = new BehaviorSubject(null);
  }

  public get value$(): Observable<T> {
    return this._state$.asObservable();
  }

  public dispatch(action: StoreAction<T>): void {
    let state: T = this.value;
    state = action.execute(state, action.value);
    this.setValue(state); 
  }

  private get value(): T {
    return this._state$.value;
  }

  private setValue(value: T) {
    this._state$.next(value);
  }
}
