import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {catchError,retry} from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url='https://jsonplaceholder.typicode.com/poss';


  constructor(private http:HttpClient) { }

  getPosts(){
    return this.http.get(this.url)
            .pipe(
              retry(3),
              catchError(this.handleError)
            )
  }
  createPost(post)
  {
    return this.http.post(this.url,post);
  }
  deletePost(post)
  {
    return this.http.delete(this.url+"/"+post.id);
  }

  private handleError(error:HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      console.log("Client error :"+error.error.message);
    }
    else{
      console.log(`Backend error : status code : ${error.status} error : ${error.message}`)
    }
    return throwError('Bilinmeyen hata oluştu.')
  }
}
