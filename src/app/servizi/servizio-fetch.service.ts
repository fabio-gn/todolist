import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServizioFetchService {

  inputvalue = ''

  pushActivity(){
    this.activities.push(this.inputvalue)
  }
  getActivities(){
    fetch('http://localhost:3000/activities')
    .then(res =>{
      if(res.ok){
        return res.json();
      } else {
        throw new Error('bette errore')
      }
    })
    .then(data =>{
      for(let i = 0; i < data.length; i++){
        this.activities.push(data[i])
      }

    })
    .catch(err =>{
      console.log(err)
    })
  }
activities = [
  'fare la spesa',
  'andare in bagno',
  'pianificare capodanno',
  'suonare il campanello'
]
  constructor() { }
}
