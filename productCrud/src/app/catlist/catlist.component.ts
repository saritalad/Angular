import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from '../category.service';
import { Category } from '../Models/Category';

@Component({
  selector: 'app-catlist',
  templateUrl: './catlist.component.html',
  styleUrls: ['./catlist.component.css']
})
export class CatlistComponent implements OnInit {
catList:Category[]=[];
  constructor(private _service:CategoryService,private route:Router) { }

  ngOnInit(): void {
  
    this._service.getcategories().subscribe(data=>
      {
        this.catList=data;
        console.log(this.catList)
      }    );

  }

}
