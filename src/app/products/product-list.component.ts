import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";
import { ProductService } from "./product.service";

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
    products: IProduct[]=[];

    // private _productService
    constructor(private productService: ProductService) {
        // this.listFilter = 'car';
    }
    toggleImage(): void {
        this.showImage =!this.showImage;
    }

    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter( (product: IProduct) => product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1 );
    }

    onRatingClicked(message: string): void {
        this.pageTitle = "Product List: "+ message;
    }

    ngOnInit(): void {
        this.products = this.productService.getProducts();
        this.filteredProducts = this.products;

        console.log("Inside OnInit");
    }

}