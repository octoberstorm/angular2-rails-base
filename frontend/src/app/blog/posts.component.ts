import { Component, OnInit } from '@angular/core';

import { BlogService } from './blog.service';
import { Post } from './post';

@Component({
  selector: 'posts',
  template:
  `
    <h2>Latest posts</h2>
    <ul>
      <li *ngFor="let post of posts">
        <h3>{{post.title}}</h3>
        <div>{{post.content}}</div>
      </li>
    </ul>
  `,
  providers: [BlogService]
})
export class PostsComponent implements OnInit {
  posts: Post[];
  constructor(private blogService: BlogService) {}

  getPosts(): void {
    this.blogService.getPosts().then(posts => this.posts = posts)
  }

  ngOnInit(): void {
    this.getPosts();
  }
}
