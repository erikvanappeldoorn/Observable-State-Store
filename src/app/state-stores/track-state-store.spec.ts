import { TestBed } from '@angular/core/testing';
import { TrackStateStore } from './track-state-store';
import { TrackState } from '../state/track-state';
import { filter } from 'rxjs/Operators';

function initialize(): TrackState {
  return {
      tracks: [
          {id: 1, artist: 'Sam Smith', song: 'Diamonds'},
          {id: 2, artist: 'Ava Max', song: 'Kings and Queens'},
          {id: 3, artist: 'Harry Styles', song: 'Watermelon sugar'}
      ],
      selectedIndex: 0
    };
}

describe('TrackStateStore', () => {
  let stateStore: TrackStateStore;
   
  beforeEach(() => {
    TestBed.configureTestingModule({
    });
    stateStore = TestBed.inject(TrackStateStore);
    stateStore.initialize(initialize());
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