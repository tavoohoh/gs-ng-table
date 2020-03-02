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
        'Age'
      ],
      keyNames: [
        'firstName',
        'lastName',
        'email',
        'age'
      ],
      options: {
        style: GTableStyle.TABLE,
        rowActions: {
          display: true,
          text: 'Actions',
          actions: [
            {
              id: 'edit',
              text: 'Edit',
              display: true
            },
            {
              id: 'delete',
              text: 'Delete',
              display: true
            },
            {
              id: 'download',
              text: 'Download',
              display: false
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
          id: 'qasd1d'
        },
        {
          firstName: 'Rachel',
          lastName: 'Mata',
          email: 'ray@mail.com',
          age: 26,
          id: 'wasd1d'
        },
        {
          firstName: 'Yuumi',
          lastName: 'Marvel',
          email: 'yuumi@mail.com',
          age: 1,
          id: 'easd1d'
        },
        {
          firstName: 'Nestor',
          lastName: 'Bracho',
          email: 'toto@mail.com',
          age: 32,
          id: 'fasd1d'
        },
        {
          firstName: 'Gustavo',
          lastName: 'Santamaria',
          email: 'tavo@mail.com',
          age: 27,
          id: 'g1asd1d'
        },
        {
          firstName: 'Rachel',
          lastName: 'Mata',
          email: 'ray@mail.com',
          age: 26,
          id: '1d2asd1d'
        },
        {
          firstName: 'Yuumi',
          lastName: 'Marvel',
          email: 'yuumi@mail.com',
          age: 1,
          id: 'd4gasd1d'
        },
        {
          firstName: 'Nestor',
          lastName: 'Bracho',
          email: 'toto@mail.com',
          age: 32,
          id: 'f2fasd1d'
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
