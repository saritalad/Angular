import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../Models/Product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  prodlist:Product[]=[];
  constructor(private _service :ProductService,private route :Router ) { }

  ngOnInit(): void {
   
    this._service.getproducts().subscribe(data=>
      {this.prodlist=data;
     console.log(this.prodlist) });
 
  }

}
