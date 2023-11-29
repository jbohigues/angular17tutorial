import { Routes } from '@angular/router';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
  {
    path: 'blog',
    title: 'Blog',
    component: BlogComponent,
  },
  {
    path: 'contact',
    title: 'Contact form',
    component: ContactComponent,
  },
];
