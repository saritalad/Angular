import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../category.service';
import { Category } from '../Models/Category';

@Component({
  selector: 'app-cat-details',
  templateUrl: './cat-details.component.html',
  styleUrls: ['./cat-details.component.css']
})
export class CatDetailsComponent implements OnInit {
currentobj:Category;
  constructor(private _service:CategoryService,private route:Router,private active:ActivatedRoute) { }

  ngOnInit(): void {
let Id= this.active.snapshot.params["id"];
   this._service.getCategoryDetails(Id).subscribe(
   data=>{this.currentobj=data;
  console.log(this.currentobj)}

   )
  }

}
