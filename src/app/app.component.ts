import { Component } from '@angular/core';
import { People } from './peoples.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto-personas-2';

  peoples: People[] = [
    new People ("Laura" , "Martinez"),
    new People ("Stefania", "Uzcategui")
  ];

  addPeople(people:People){
    this.peoples.push(people)
  }

}
