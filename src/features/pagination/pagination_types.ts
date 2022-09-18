import { Observable } from 'rxjs';
import { IFeatureService } from '../../core/features_management/feature_management_types';
import { PaginationStore } from './pagination_store';
import { Pagination } from '../../models/pagination/pagination';

export interface IPaginationService extends IFeatureService {
    setPage(page: number): void;

    selectPage$(): Observable<number | null>;

    getPage(): number | null;

    selectTotal$(): Observable<number | null>;

    setTotal(total: number): void;

    selectCurrentLoaded$(): Observable<number | null>;

    setCurrentLoaded(currentLoaded: number): void;

    nextPage(): void;

    prevPage(): void;

    allLoaded(): boolean;

    updatePagination(cb: TUpdatePaginationStateAction): void;

    resetPagination(): void;
}

export type TUpdatePaginationStateAction = (currState: Pagination) => Partial<Pagination>;

export type PaginationInitializerInitProps = {
    paginationServiceName: string;
};

export type PaginationServiceConstructorOptions = {
    store: PaginationStore;
    serviceName: string;
};