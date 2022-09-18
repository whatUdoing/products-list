import { BehaviorSubject, distinctUntilKeyChanged, map, Observable, scan, Subject } from 'rxjs';
import { UpdateStoreFn } from './store_manager_types';

export class Store<T> {
    #store: BehaviorSubject<T>;
    #updates = new Subject<Partial<T>>();

    constructor(initialState: T) {
        this.#store = new BehaviorSubject(initialState);
        this.#updates
            .pipe(
                scan((acc, curr) => {
                    return {
                        ...acc,
                        ...curr,
                    };
                })
            )
            .subscribe((val) => this.#store.next(val as T));
    }

    public selectState(): Observable<T> {
        return this.#store.asObservable();
    }

    public getStore(): T {
        return this.#store.getValue();
    }

    public select<K extends keyof T>(key: K): Observable<T[K]> {
        return this.#store.pipe(
            distinctUntilKeyChanged(key),
            map((store) => store[key])
        );
    }

    public get<K extends keyof T>(key: K): T[K] {
        return this.#store.getValue()[key];
    }

    public update(newState: Partial<T> | UpdateStoreFn<T>): void {
        const currentState = this.#store.getValue();
        const newStateValue = typeof newState === 'function' ? newState(currentState) : newState;

        this.#updates.next({
            ...currentState,
            ...newStateValue,
        });
    }
}
