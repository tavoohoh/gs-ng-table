import { Component } from '@angular/core';
import { GTable, GTableStyle } from 'projects/gs-tables/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public tableData: GTable = {
    header: [
      'First Name',
      'Last Name',
      'Email Address',
      'Age'
    ],
    options: {
      style: GTableStyle.SINGLE,
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
        age: 27
      },
      {
        firstName: 'Rachel',
        lastName: 'Mata',
        email: 'ray@mail.com',
        age: 26
      },
      {
        firstName: 'Yuumi',
        lastName: 'Marvel',
        email: 'yuumi@mail.com',
        age: 1
      },
      {
        firstName: 'Nestor',
        lastName: 'Bracho',
        email: 'toto@mail.com',
        age: 32
      },
      {
        firstName: 'Gustavo',
        lastName: 'Santamaria',
        email: 'tavo@mail.com',
        age: 27
      },
      {
        firstName: 'Rachel',
        lastName: 'Mata',
        email: 'ray@mail.com',
        age: 26
      },
      {
        firstName: 'Yuumi',
        lastName: 'Marvel',
        email: 'yuumi@mail.com',
        age: 1
      },
      {
        firstName: 'Nestor',
        lastName: 'Bracho',
        email: 'toto@mail.com',
        age: 32
      },
    ]
  };

  public hdlRowActionEvent(event) {
    console.log('Event', event);
  }
}
