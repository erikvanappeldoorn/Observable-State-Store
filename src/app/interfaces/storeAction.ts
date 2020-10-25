export interface StoreAction<T> {
    value: T
    execute(state: T, value?: T): T;
}