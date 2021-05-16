import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root'
})
export class BlogService {


  constructor(private httpClient: HttpClient) { }

  agregarPost() {

  }

  getAllPosts() {
    return
  }

  getPostsByCategoria() {

  }
}
