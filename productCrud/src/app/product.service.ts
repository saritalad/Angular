import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Product } from './Models/Product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
url:string="http://localhost:5914/api/Product";
  constructor(private http:HttpClient) { }
  httpOptions = { headers: new HttpHeaders({ 'Content-type': 'application/json' }) };
  getproducts():Observable<any>
    {
          return this.http.get(this.url);
  }

  getProductbyId(id:number):Observable<any>
  {
    return this.http.get<any>(this.url+"/"+id);
  }
  UpdateProduct( prod: Product): Observable<Product> {
    return this.http.put<Product>(this.url+"/"+ prod.productId,prod,this.httpOptions).pipe(catchError(this.handleError));
  }
  handleError(error:HttpErrorResponse){
    let errorMessage="";
    errorMessage=error.status +'\n'+error.statusText+'\n'+error.error;
    alert(errorMessage);
    return throwError(errorMessage);
  }




}
