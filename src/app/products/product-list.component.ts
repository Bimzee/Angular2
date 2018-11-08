import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls:['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
    pageTitle: string = "Product Lizt";
    imgWidth: number = 50;
    imgMargin: number = 2;
    showImage: boolean = false;
    //listFilter: string = 'cart';

    _listFilter: string;
    get listFilter(): string {
        return this._listFilter;
    }

    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products ;
    }

    filteredProducts: IProduct[] = [];
    products: IProduct[]=[
        {
            "productId":2,
            "productName": "Garden Cart",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2016",
            "description": "Test description0",
            "price": 32.99,
            "starRating":4.2,
            "imageUrl":"https://openclipart.org/image/300px/svg_to_png/58471/garden-cart.png"
        },
        {
            "productId":3,
            "productName": "Garden Cart 123",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2016",
            "description": "Test description0",
            "price": 32.99,
            "starRating":4.8,
            "imageUrl":"https://openclipart.org/image/300px/svg_to_png/58471/garden-cart.png"
        },
        {
            "productId": 1,
            "productName": "Leaf Rake",
            "productCode": "GDN-0011",
            "releaseDate": "March 19, 2016",
            "description": "Leaf rake with 48-inch wooden handle.",
            "price": 19.95,
            "starRating": 3.2,
            "imageUrl": "https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
          },
          {
            "productId": 4,
            "productName": "Garden Cart",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2016",
            "description": "15 gallon capacity rolling garden cart",
            "price": 32.99,
            "starRating": 4.2,
            "imageUrl": "https://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
          },
    ];

    constructor() {
        this.filteredProducts = this.products;
        this.listFilter = 'car';
    }
    toggleImage(): void {
        this.showImage =!this.showImage;
    }

    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter( (product: IProduct) => product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1 );
    }

    ngOnInit(): void {
        console.log("Inside OnInit");
    }

}