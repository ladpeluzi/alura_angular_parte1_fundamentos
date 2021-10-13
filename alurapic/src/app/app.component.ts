import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

photos = [
  {
    url:'https://images.theconversation.com/files/21552/original/r28wkzsq-1363842129.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip',
    description: 'olho homem'
  },
  {
    url:'https://www.blog.motifphotos.com/wp-content/uploads/2020/08/iStock-839871394-1024x710.jpg',
    description: 'olho mulher'
  },
]

}
