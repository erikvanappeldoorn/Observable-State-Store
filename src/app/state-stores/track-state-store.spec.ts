import { TestBed } from '@angular/core/testing';
import { TrackStateStore } from './track-state-store';
import { TrackService } from '../services/track.service';
import { TrackServiceStub } from '../stubs/TrackServiceStub';

describe('TrackStateStore', () => {
  let stateStore: TrackStateStore;
   
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: TrackService, useClass:TrackServiceStub } 
      ]
    });
    stateStore = TestBed.inject(TrackStateStore);
  });

  it('should be created', done => {
    expect(stateStore).toBeTruthy();
    done();
  });

  it('should be created with 3 tracks', done => {
    stateStore.value$.subscribe(state => {
      expect(state.tracks.length).toBe(3);
      done();
    });
  });

  it('should be created with index 0 selected', done => {
    stateStore.value$.subscribe(state => {
      expect(state.selectedIndex).toBe(0);
      done();
    });
  });

  it('next should increase selected index', done => {
    stateStore.next();
    stateStore.next();

    stateStore.value$.subscribe(state => {
      expect(state.selectedIndex).toBe(2);
      done();
    });
  });

  it('next should rotate selected index', done => {
    stateStore.next();
    stateStore.next();
    stateStore.next();

    stateStore.value$.subscribe(state => {
      expect(state.selectedIndex).toBe(0);
      done();
    });
  });

  it('previous should decrease selected index', done => {
    stateStore.next();
    stateStore.next();
    stateStore.previous();

    stateStore.value$.subscribe(state => {
      expect(state.selectedIndex).toBe(1);
      done();
    });
  });

  it('previous should rotate selected index', done => {
    stateStore.previous();

    stateStore.value$.subscribe(state => {
      expect(state.selectedIndex).toBe(2);
      done();
    });
  });

  it('reset should set selected index to 0', done => {
    stateStore.next();
    stateStore.next();
    stateStore.previous();
    stateStore.reset();

    stateStore.value$.subscribe(state => {
      expect(state.selectedIndex).toBe(0);
      done();
    });
  });
});