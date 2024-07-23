import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../category.service';
import { Category } from '../Models/Category';

@Component({
  selector: 'app-cat-edit',
  templateUrl: './cat-edit.component.html',
  styleUrls: ['./cat-edit.component.css']
})
export class CatEditComponent implements OnInit {

  currentobj:Category;
  constructor(private _service:CategoryService,private route:Router,private active:ActivatedRoute) { }

  ngOnInit(): void {
    let Id= this.active.snapshot.params["id"];
    this._service.getCategoryDetails(Id).subscribe(
    data=>{this.currentobj=data;
   console.log(this.currentobj)}
     
    );
  
  }
  onSubmit(currentobj:any)
  {
            this._service.upadateCategory(this.currentobj).subscribe(()=>{alert("Sucessfull");});
  }

}
