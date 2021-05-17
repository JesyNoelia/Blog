import { Component, OnInit } from '@angular/core';
import { Post } from '../interfaces/post.interface';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  posts: Post[];

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.posts = this.blogService.getAllPosts()

  }

}
