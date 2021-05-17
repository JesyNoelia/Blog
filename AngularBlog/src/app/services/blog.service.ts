import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  onePost: Post;
  private arrayPost: Post[];

  constructor() {
    this.arrayPost = [{

      titulo: 'Atardecer en la playa',
      texto: 'Juegos en una tarde de playa',
      autor: 'J-C-P',
      imagen: 'https://neliosoftware.com/es/wp-content/uploads/sites/3/2018/07/aziz-acharki-549137-unsplash-1200x775.jpg',
      fecha: '17/05/2021',
      categoria: 'Travel',
    }
    ];
  }

  agregarPost(pPost: Post) {
    return this.arrayPost.push(pPost)
  }

  getAllPosts() {
    return this.arrayPost
  }

  getPostsByCategoria() {
    return this.arrayPost

  }
}
