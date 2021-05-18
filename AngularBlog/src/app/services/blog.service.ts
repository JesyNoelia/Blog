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

      titulo: 'Stunning Beach sunset',
      texto: "To scape and sit quietly on the beach, that's an idea of paradise",
      autor: 'J-C-P',
      imagen: 'https://images.unsplash.com/photo-1529348915581-73628f0cf212?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmVhY2glMjBzdW5zZXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
      fecha: '17/05/2021',
      categoria: 'Travel',
    },
    {
      titulo: 'Best foldable phones 2021',
      texto: "The Samsung Galaxy Z Fold 2, for instance, costs twice as much as the company's 2020 flagship Samsung Galaxy S20. That's what you'll need to expect if you want to enjoy a device that combines the portability of a phone with the advantage of unfolding inner displays that rival tablets when it comes to screen real estate. ",
      autor: 'J-C-P',
      imagen: 'https://cdn.pocket-lint.com/r/s/1200x/assets/images/148375-phones-feature-foldable-phones-image1-158skhnyrl.jpg',
      fecha: '21/04/2021',
      categoria: 'Technology',
    },

    {
      titulo: 'Why yoga is important in our daily life',
      texto: "Yoga helps in increasing our body awareness, helps in relieving stress, helps in reducing muscle tension, strain as well as inflammation, helps in building attention and concentration, calms our nervous system.",
      autor: 'J-C-P',
      imagen: 'https://lh3.googleusercontent.com/proxy/0D80Fdm8T5hSB4wQH_5i2pzqvG0LoMdAzPLYbyMckMrrhcG6q2HyYY2m72CbldDHQfNZo4U6WuKjkwi_JmF6EmTIxua06eQCs3DglnzWVWcohKtZyph7G_U',
      fecha: '02/03/2021',
      categoria: 'Health',
    },

    ];
  }

  agregarPost(pPost: Post) {
    return this.arrayPost.push(pPost)
  }

  getAllPosts() {
    return this.arrayPost
  }

  getPostsByCategoria(pCategoria: string): Post[] {
    const resultado = this.arrayPost.filter(post => { post.categoria === pCategoria })
    console.log(resultado);
    return resultado


  }
}
