import { TrackState } from '../state/track-state';

export interface TrackStateStoreActions {
    initialize(state: TrackState);
    next(): void;
    previous(): void;
    reset();
}