import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  pdt : any = {};

  constructor(private _productService : ProductsService) { }

  ngOnInit() {
  }

  createProduct() {
    //this._productService.createProducts(this.pdt);
  }

}
