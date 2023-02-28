import { Component, EventEmitter, Output } from '@angular/core';
import { LogginService } from '../logginService.service';
import { People } from '../peoples.model';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {

  @Output() peopleCreated = new EventEmitter<People>();
  
  constructor(private LogginService:LogginService){};

  nameInput:string = '';
  surnameInput:string = '';

  addPeople(){
    let people1 = new People(this.nameInput , this.surnameInput);
    this.LogginService.sendMesajeConsole(`Enviamos a: ${people1.name} ${people1.surname}`)
    this.peopleCreated.emit(people1);
  }

}
