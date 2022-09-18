import { PaginationConstructorOptions } from './pagination.types';

export class Pagination {
    public page: number;
    public currentLoaded: number;
    public total: number;

    constructor({ page, currentLoaded, total }: PaginationConstructorOptions) {
        this.page = page;
        this.currentLoaded = currentLoaded;
        this.total = total;
    }
}
