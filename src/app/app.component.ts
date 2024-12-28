import { Component } from '@angular/core';
import { Ipost } from './shared/models/posts';
import { posts } from './shared/const/posts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'postCardUsingIO';

  postsArray : Array<Ipost> = posts;
}
