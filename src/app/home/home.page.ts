import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  x: number = 0;
  y: number = 0;
  z: number;

  zObs: Observable<number>;


  constructor() {
    // Create simple observable that emits three values
    const myObservable = of(this.x);
    this.zObs = of(this.x);

    // Execute with the observer object
    //myObservable.subscribe(myObserver);
    myObservable.subscribe(
      x => console.log('Observer got a next value: ' + x),
      err => console.error('Observer got an error: ' + err),
      () => console.log('Observer got a complete notification')
    );

    // Logs:
    // Observer got a next value: 1
    // Observer got a next value: 2
    // Observer got a next value: 3
    // Observer got a complete notification

    this.zObs.subscribe(
      //x => z = x + y,
      () => this.z = +this.x + +this.y,
      err => console.log(err)
    );
  }

  sum() {
    this.z = +this.x + +this.y;
  }

}
