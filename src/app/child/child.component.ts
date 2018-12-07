import { Component, Input, OnChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnChanges {

  @Input() loggedIn: boolean;
    message: string;
    name: 'Hakkim' ;

//   get loggedIn(): boolean {
//     return this._loggedIn;
//   }
//  @Input()
//    set loggedIn(value : boolean){
//      this._loggedIn= value;
//      if( value === true){
//        this.message = "welcome back Hakkim";
//      } else{
//        this.message = "please log in";
//      }
     
//    }
  constructor() { }

  ngOnChanges(changes : SimpleChange) {
    console.log(changes);
    const loggedInValue = changes['loggedIn'];
    if(loggedInValue.currentValue === true) {
      this.message = ' Welcome back hakkim!!';
    } else {
      this.message = 'Please log in';
    }
    } 
    greetHakkim() {
      alert("Hey Hakkim!!!");
    }
  }
 