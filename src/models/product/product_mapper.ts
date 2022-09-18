import { Product } from './product';
import { ProductDTO } from './product.types';

export class ProductMapper {
    public toModel(productDTO: ProductDTO): Product {
        return new Product(productDTO);
    }
}
