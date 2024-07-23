import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../Models/Product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  product:Product={productId:101,productname:"wheat",price:240};
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
onSubmit(product:any)
{
  
this._service.UpdateProduct(this.product).subscribe(()=>{console.log(this.product);});

}


}
