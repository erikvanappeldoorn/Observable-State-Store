import { TrackState } from '../state/track-state';

export interface TrackStateStoreActions {
    next(): void;
    previous(): void;
    reset();
}