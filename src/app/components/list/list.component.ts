import { Component } from '@angular/core';
import { ServizioFetchService } from 'src/app/servizi/servizio-fetch.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  constructor(public servizioFetch: ServizioFetchService){

  }
  activities = this.servizioFetch.activities
  ngOnInit():void{
    
  }
}
