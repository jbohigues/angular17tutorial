import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { CommentsComponent } from '../comments/comments.component';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, CommentsComponent, NgOptimizedImage],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss',
})
export class BlogComponent {}
