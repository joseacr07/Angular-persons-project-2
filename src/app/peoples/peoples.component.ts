import { Component, Input } from '@angular/core';
import { People } from '../peoples.model';

@Component({
  selector: 'app-peoples',
  templateUrl: './peoples.component.html',
  styleUrls: ['./peoples.component.css']
})
export class PeoplesComponent {

  @Input() people:People;
  @Input() i:number;

}
