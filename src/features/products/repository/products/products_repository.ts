import { ProductsStore } from '../../store/products_store';
import { IProductsRepository } from './products_repository_types';
import { Product } from '../../../../models/product/product';
import { Observable } from 'rxjs';
import { Store } from '../../../../utils/state_manager/store';

export class ProductsRepository implements IProductsRepository {
    #store: Store<ProductsStore>;

    constructor(store: Store<ProductsStore>) {
        this.#store = store;
    }

    public selectProducts$(): Observable<Product[]> {
        return this.#store.select('products');
    }

    public removeProducts(): void {
        return this.#store.update({
            products: [],
        });
    }

    public setProducts(products: Product[]): void {
        this.#store.update({
            products: products,
        });
    }
}
