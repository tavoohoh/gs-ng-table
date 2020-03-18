import { Component, OnInit } from '@angular/core';
import { GTable, GTableStyle } from 'projects/gs-tables/src/public-api';

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
        'Valid'
      ],
      keyNames: [
        'firstName',
        'lastName',
        'email',
        'age',
        'valid'
      ],
      options: {
        style: GTableStyle.TABLE,
        rowActions: {
          text: 'Actions',
          actions: [
            {
              id: 'download',
              text: 'Download document'
            },
            {
              id: 'isValid',
              text: 'Is valid',
              displayIf: {
                model: 'valid',
                hasValue: true
              }
            },
            {
              id: 'notValid',
              text: 'Is not valid',
              displayIf: {
                model: 'valid',
                hasValue: false
              }
            }
          ]
        }
      },
      data: [
        {
          firstName: 'Gustavo',
          lastName: 'Santamaria',
          email: 'tavo@mail.com',
          age: 27,
          id: 'qasd1d',
          valid: false
        },
        {
          firstName: 'Rachel',
          lastName: 'Mata',
          email: 'ray@mail.com',
          age: 26,
          id: 'wasd1d',
          valid: true
        },
        {
          firstName: 'Yuumi',
          lastName: 'Marvel',
          email: 'yuumi@mail.com',
          age: 12,
          id: 'easd1d',
          valid: true
        },
        {
          firstName: 'Nestor',
          lastName: 'Bracho',
          email: 'toto@mail.com',
          age: 32,
          id: 'fasd1d',
          valid: false
        },
        {
          firstName: 'Gustavo',
          lastName: 'Santamaria',
          email: 'tavo@mail.com',
          age: 27,
          id: 'g1asd1d',
          valid: true
        },
        {
          firstName: 'Rachel',
          lastName: 'Mata',
          email: 'ray@mail.com',
          age: 26,
          id: '1d2asd1d',
          valid: false
        },
        {
          firstName: 'Yuumi',
          lastName: 'Marvel',
          email: 'yuumi@mail.com',
          age: 1,
          id: 'd4gasd1d',
          valid: true
        },
        {
          firstName: 'Nestor',
          lastName: 'Bracho',
          email: 'toto@mail.com',
          age: 32,
          id: 'f2fasd1d',
          valid: true
        },
      ]
    };
  }

  public hdlRowActionEvent(event) {
    console.log('Event', event);
  }

  public doNavigate(next: boolean) {
    this.currentPage = next ? this.currentPage - 1 : this.currentPage + 1;
    this.tableData.data = this.shuffle(this.tableData.data);
  }

  private shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
}
