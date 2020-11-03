import { Injectable } from '@angular/core';
import { Track } from '../types/track';

@Injectable({
  providedIn: 'root'
})
export class TrackService {
  constructor() { }

  public getTracks(): Track[] {
    const tracks: Track[] = [
      {id: 1, artist: 'Sam Smith', song: 'Diamonds'},
      {id: 2, artist: 'Ava Max', song: 'Kings and Queens'},
      {id: 3, artist: 'Harry Styles', song: 'Watermelon sugar'}
    ];

    return tracks;
  }
}
