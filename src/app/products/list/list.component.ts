import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  pageTitle : string = "Product list";
  imgWidth: number = 50;
  products: Product[];

  constructor(private _productService : ProductsService) { }

  ngOnInit() {
    this._productService.getProducts().subscribe((data:Product[]) => {
      this.products = data;
    });
    this._productService.newProductSubject.subscribe((data:Product[]) => {
      this.products = data;
    });
  }

  showHideImg : boolean = true;
  toggleImg() : void {
    this.showHideImg = !this.showHideImg;
  }

  acceptRatingFromChild(msg:string) {
    alert('From parent = '+msg);
  }

}
