import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Post } from './post';

@Injectable()
export class BlogService{
  private postsUrl = '/api/v1/posts.json';

  constructor(private http: Http){}

  getPosts(): Promise<Post[]>{
    return this.http.get(this.postsUrl)
      .toPromise()
      .then(response => response.json() as Post[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.log('error occured', error);
     return Promise.reject(error.message || error);
  }
}
