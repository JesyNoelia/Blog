import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../interfaces/post.interface';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts: Post[];
  postId: Post;
  postCategoria: Post;

  constructor(private activatedRoute: ActivatedRoute, private blogService: BlogService) { }

  ngOnInit() {
    this.posts = this.blogService.getAllPosts()
    console.log(this.posts);

    /* this.activatedRoute.params.subscribe(params => {
      console.log(params.categoria);

      this.postCategoria = this.blogService.getPostCategoriaFind(params.categoria)
    }) */
    this.activatedRoute.params.subscribe(params => {
      this.postId = this.blogService.getPostById(parseInt(params.idPost))
    })

  }

}
