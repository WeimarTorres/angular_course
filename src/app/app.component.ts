import { Component, OnInit } from '@angular/core';
import { from, fromEvent } from "rxjs"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'curso-angular';

  sw = true;

  people = ["person 1", "person 2", "person 3", "person 4", "person 5"];

  age = 3;

  saveClickChild(event) {
    console.log('Event child: ', event)
  }

  clickSaveChild(event) {
    console.log('Event child: ', event)
  }

  
  changeAge() {
    this.age = 22;
  }

  ngOnInit() {
    /*
    const array = from([1, 2, 3, 4, 5, 6]);

    array.subscribe(s => console.log('item: ', s));

    const aux = fromEvent(document, 'mousemove');

    aux.subscribe((s:any) => console.log('event: ', s.clientX + ', ' + s.clientY));
    */
  }

  /*
  ngOnInit() {
    console.log('Working');

    const aux = [1, 2, 3, 4, 5, 6, 7, 8];

    const auxSort = [5, 4, 3, 2, 1];

    const index = aux.findIndex(s => s ===3);

    console.log(index);

    const aux2 = aux.filter(s => s % 2 === 0);

    console.log('pares: ', aux2);

    const aux3 = aux.map(s => s * 2);

    console.log('map: ', aux3);

    console.log('sort: ', auxSort.sort());

    // Spread Operator
    const aux5 = [1000, 2000, ...aux];

    console.log('spread: ', aux5);

    const aux6 = {
      name: 'Weimar',
      lastName: 'Torres'
    };

    const aux7 = {
      address: 'La paz',
      ...aux6
    }

    console.log('spread 2: ', aux7);

    // Destructuring

    const persona = {
      data: {
        name: 'Weimar'
      },
      address: {
        n: 1,
        extra: 'extra'
      }
    };

    // const data = persona.data;
    // const address = persona.address;

    const { data, address } = persona;

    console.log('data: ', data);
    console.log('address: ', address);

    // let

    for(let index = 0; index < aux.length; index++) {
      console.log('index: ', index);
    };

    // if

    if (2 < 3) {
      console.log('YES');
    } else {
      console.log('NO');
    }

    (3 < 2) ? console.log('YES') : console.log('NO');
    
  }
  */
}
