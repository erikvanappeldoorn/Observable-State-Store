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

fdescribe('TrackStateStore', () => {
  let stateStore: TrackStateStore;
   
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: TrackState, useFactory: () => initialize()}
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


});