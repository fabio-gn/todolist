import { ServizioFetchService } from 'src/app/servizi/servizio-fetch.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.scss']
})
export class TodoInputComponent {
  constructor(
    public ServizioFetch: ServizioFetchService

    ){}

  inputValue = this.ServizioFetch.inputvalue
  pushInput(){
    this.ServizioFetch.inputvalue = this.inputValue;
    this.ServizioFetch.pushActivity()
    this.inputValue = ''
    

  }
}
