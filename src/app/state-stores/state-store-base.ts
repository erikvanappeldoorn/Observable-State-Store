import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({ providedIn: 'root' })
export class StateStoreBase<T> {
  protected _state$: BehaviorSubject<T>;

  protected constructor() {
    this._state$ = new BehaviorSubject(null);
  }

  public get value$(): Observable<T> {
    return this._state$.asObservable();
  }
}
