import { TestBed } from '@angular/core/testing';

import { CounterStateStore } from './counter-state-store';

describe('CounterStateStore', () => {
  let stateStore: CounterStateStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    stateStore = TestBed.inject(CounterStateStore);
  });

  it('should be created', () => {
    expect(stateStore).toBeTruthy();
  });

  it ('should initialize with zero', (done) => {
    stateStore.value$.subscribe(state =>{
      expect(state.counterValue).toBe(0);
    });
    done();
  });

  it ('increment should add one to counter', (done) => {
    stateStore.increment();
    stateStore.increment();
    stateStore.increment();

    stateStore.value$.subscribe(state =>{
      expect(state.counterValue).toBe(3);
    });
    done();
  });

  it ('decrement should subtract one to counter', (done) => {
    stateStore.decrement();
    stateStore.decrement();
    stateStore.decrement();

    stateStore.value$.subscribe(state =>{
      expect(state.counterValue).toBe(-3);
    });
    done();
  });

  it ('reset should reset counter', (done) => {
    stateStore.decrement();
    stateStore.decrement();
    stateStore.increment();
    stateStore.reset();

    stateStore.value$.subscribe(state =>{
      expect(state.counterValue).toBe(0);
    });
    done();
  });
});
