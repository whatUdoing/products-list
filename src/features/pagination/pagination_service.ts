import { INITIAL_STORE, PaginationStore } from './pagination_store';
import {
    IPaginationService,
    PaginationServiceConstructorOptions,
    TUpdatePaginationStateAction,
} from './pagination_types';
import { Observable } from 'rxjs';

const PAGINATION_SERVICE_NAME = 'PaginationService';

export class PaginationService implements IPaginationService {
    public serviceName: string;

    #store: PaginationStore;

    constructor({ store, serviceName = PAGINATION_SERVICE_NAME }: PaginationServiceConstructorOptions) {
        this.#store = store;
        this.serviceName = serviceName;
    }

    public selectCurrentLoaded$(): Observable<number | null> {
        return this.#store.select('currentLoaded');
    }

    public selectPage$(): Observable<number | null> {
        return this.#store.select('page');
    }

    public getPage(): number | null {
        return this.#store.get('page');
    }

    public selectTotal$(): Observable<number | null> {
        return this.#store.select('total');
    }

    public updatePagination(cb: TUpdatePaginationStateAction): void {
        this.#store.update(cb(this.#store.getStore()));
    }

    public setCurrentLoaded(currentLoaded: number): void {
        this.#store.update({
            currentLoaded,
        });
    }

    public setPage(page: number): void {
        this.#store.update({
            page,
        });
    }

    public setTotal(total: number): void {
        this.#store.update({
            total,
        });
    }

    public nextPage(): void {
        this.#store.update(({ page: currPage }) => {
            return {
                page: currPage + 1,
            };
        });
    }

    public prevPage(): void {
        this.#store.update(({ page: currPage }) => {
            return {
                page: currPage - 1,
            };
        });
    }

    public allLoaded(): boolean {
        const { total, currentLoaded } = this.#store.getStore();

        if (total === null || currentLoaded === null) return false;

        return currentLoaded >= total;
    }

    public resetPagination(): void {
        this.#store.update(INITIAL_STORE);
    }
}
