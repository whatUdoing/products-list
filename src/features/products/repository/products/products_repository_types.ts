import { Product } from '../../../../models/product/product';
import { Observable } from 'rxjs';

export interface IProductsRepository {
    selectProducts$(): Observable<Product[]>;

    removeProducts(): void;

    setProducts(products: Product[]): void;
}
