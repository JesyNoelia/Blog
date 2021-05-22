import { Injectable } from '@angular/core';
import { POSTS } from 'src/db/posts.db';
import { Post } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  idActual: number;

  onePost: Post;
  private arrayPost: Post[];

  constructor() {
    this.arrayPost = POSTS;
    this.idActual = 8;
  }

  agregarPost(pPost: Post) {
    return this.arrayPost.push(pPost)
  }

  getAllPosts() {
    return this.arrayPost
  }

  getCategoria() {
    return [...new Set(this.arrayPost.map(post => post.categoria))]
  }

  getPostsByCategoria(pCategoria: string): Post[] {
    const resultado = this.arrayPost.filter(post => post.categoria === pCategoria)
    console.log(resultado);
    return resultado
  }

  getPostCategoriaFind(pCategoria: string): Post {
    const resultado = this.arrayPost.find(post => post.categoria === pCategoria);
    console.log(resultado);

    return resultado;
  }

  getPostById(pId: number): Post {
    const resultado = this.arrayPost.find(post => post.id === pId);
    console.log(resultado);

    return resultado;
  }

  getLastPost() {
    const resultado = this.arrayPost.length;
    console.log(resultado);
    return resultado

  }
}
