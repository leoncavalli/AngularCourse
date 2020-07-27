import { Product } from "./product.model";

export class SimpleDataSource{
    private products:Product[];
    constructor(){
        this.products=new Array<Product>(
            new Product(1,"Samsung","Nice","1.jpg",1000),
            new Product(2,"Oppo","Nice","2.jpg",2000),
            new Product(3,"LG","Nice","3.jpg",3000),
            new Product(4,"Apple","Nice","4.jpg",4000),
            new Product(5,"Xiaomi","Nice","5.jpg",5000),

        );
    }
    getProducts():Product[]{
        return this.products;
    }
}