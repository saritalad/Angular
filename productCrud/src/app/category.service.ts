import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Category } from './Models/Category';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
url:string="http://localhost:5914/api/Category";
  constructor(private http:HttpClient) { }
  httpOptions = { headers: new HttpHeaders({ 'Content-type': 'application/json' }) };
  
  getcategories(): Observable<any> {
    return this.http.get<any>(this.url);
  }

  getCategoryDetails(id:number):Observable<any>
  {
    return this.http.get<any>(this.url+"/"+id);
  }
  

  upadateCategory(modifiedobj:Category):Observable<any>
  {
    return this.http.put<any>(this.url+"/"+ modifiedobj.catId,modifiedobj,this.httpOptions).pipe(catchError(this.handleError));
  }

  handleError(error:HttpErrorResponse){
    let errorMessage="";
    errorMessage=error.status +'\n'+error.statusText+'\n'+error.error;
    alert(errorMessage);
    return throwError(errorMessage);
  }

}
