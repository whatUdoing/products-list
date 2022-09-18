import { ProductConstructorOptions } from './product.types';

export class Product {
    public id: number;
    public title: string;
    public description: string;
    public price: number;
    public discountPercentage: number;
    public rating: number;
    public brand: string;
    public category: string;
    public thumbnail: string;
    public images: string[];

    constructor({
        category,
        images,
        brand,
        id,
        thumbnail,
        discountPercentage,
        rating,
        title,
        price,
        description,
    }: ProductConstructorOptions) {
        this.id = id;
        this.brand = brand;
        this.images = images;
        this.category = category;
        this.thumbnail = thumbnail;
        this.discountPercentage = discountPercentage;
        this.rating = rating;
        this.title = title;
        this.price = price;
        this.description = description;
    }
}
