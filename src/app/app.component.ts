import { Component, OnInit } from '@angular/core';
import { GTable, GTableStyle } from 'projects/gs-tables/src/public-api';
import { GCountryCode, GTypeRowEnum } from 'projects/gs-tables/src/lib/gs-tables.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public tableData: GTable;
  public currentPage = 1;
  public totalOfPages = 4;

  ngOnInit() {
    this.tableData = {
      header: [
        'First Name',
        'Last Name',
        'Email Address',
        'Age',
        'Valid',
        'Price'
      ],
      keyNames: [
        'firstName',
        'lastName',
        'email',
        'age',
        'valid',
        'price'
      ],
      keyTypes: [
        {
          key: 'price',
          type: GTypeRowEnum.CURRENCY
        }
      ],
      options: {
        country: GCountryCode.CO,
        style: GTableStyle.TABLE,
        rowActions: {
          text: 'Actions',
          actions: [
            {
              id: 'isValid',
              text: 'Is valid',
              displayIf: {
                model: 'valid',
                hasValue: 1
              }
            },
            {
              id: 'notValid',
              text: 'Is not valid',
              displayIf: {
                model: 'valid',
                hasValue: 2
              }
            }
          ]
        }
      },
      data: [
        {
          firstName: 'asdasdaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          lastName: 'Qdmama asdmmm as mm asdasd mmasd',
          email: 'taddddddddddddddddddddddddddddddddddddddvo@mail.com',
          age: 2111111111111111117,
          id: 'qasd1d',
          valid: 1,
          price: '234000'
        },
        {
          firstName: 'aaaaaaaaaamaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          lastName: 'Hola Hola Hola Hola Hola Hola Hola Hola Hola Hola ',
          email: 'ray@mail.com',
          age: 2123111198765443218000,
          id: 'wasd1d',
          valid: 2,
          price: '234000'
        },
        {
          firstName: 'Yuumi',
          lastName: 'Marvel',
          email: 'yuumaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaai@mail.com',
          age: 12,
          id: 'easd1d',
          valid: 0,
          price: '234000'
        },
        {
          firstName: 'Nestor',
          lastName: 'Bracho',
          email: 'toto@mail.com',
          age: 32,
          id: 'fasd1d',
          valid: 0,
          price: '234000'
        },
        {
          firstName: 'Gustavo',
          lastName: 'Santamaria',
          email: 'tavo@mail.com',
          age: 27,
          id: 'g1asd1d',
          valid: 1,
          price: '234000'
        },
        {
          firstName: 'Rachel',
          lastName: 'Mata',
          email: 'ray@mail.com',
          age: 26,
          id: '1d2asd1d',
          valid: 0,
          price: '234000'
        },
        {
          firstName: 'Yuumi',
          lastName: 'Marvel',
          email: 'yuumi@mail.com',
          age: 1,
          id: 'd4gasd1d',
          valid: 1,
          price: '234000'
        },
        {
          firstName: 'Nestor',
          lastName: 'Bracho',
          email: 'toto@mail.com',
          age: 32,
          id: 'f2fasd1d',
          valid: 2,
          price: '234000'
        },
      ]
    };
  }

  public hdlRowActionEvent(event): void {
    console.log('Event', event);
  }

  public doNavigate(nav: string): void {
    if (nav === 'next') {
      this.currentPage = ++this.currentPage;
    } else {
      this.currentPage = --this.currentPage;
    }
    this.tableData.data = this.shuffle(this.tableData.data);
  }

  public doNavigateTo(page: number): void {
    this.currentPage = page;
    this.tableData.data = this.shuffle(this.tableData.data);
  }

  private shuffle(array: Array<any>): Array<any> {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
}
