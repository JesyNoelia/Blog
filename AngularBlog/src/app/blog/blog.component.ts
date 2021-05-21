import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../interfaces/post.interface';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  categoriaR: string;
  identificador: string;
  posts: Post[];

  constructor(private blogService: BlogService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.posts = this.blogService.getAllPosts()
    console.log(this.posts);
    /* this.activatedRoute.params.subscribe(params => this.identificador = params.idPost)
    this.activatedRoute.params.subscribe(params => this.categoriaR = params.categoria) */

  }

  onClick($event) {
    this.posts = this.blogService.getPostsByCategoria($event.target.innerText);
    console.log($event.target.innerText);
    return this.posts;

  }
  onClickAll() {
    this.posts = this.blogService.getAllPosts();
  }

}
