import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../Models/Product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
product:Product;
  constructor(private _service:ProductService,private route:Router,private active:ActivatedRoute) { }

  ngOnInit(): void {
let Id= this.active.snapshot.params["id"];
    this._service.getProductbyId(Id).subscribe(data=>
     {
     this.product=data;
     console.log(this.product)
     }     
      );
  }

}
