import { Component, OnInit, ViewChild, ElementRef, TemplateRef } from '@angular/core';
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

  @ViewChild('statusTemplate', { static: true }) public statusTemplate: any;

  ngOnInit() {
    this.tableData = {
      header: [
        'First Name',
        'Email Address',
        'Price',
        'status'
      ],
      keyNames: [
        'firstName',
        'email',
        'price',
        'status'
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
        hasAdditionalData: true,
        selectable: true,
        tableActions: [
          {
            id: 'downloadAll',
            label: 'Download all',
            disabled: true
          },
          {
            id: 'Delete',
            label: 'Delete'
          }
        ],
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
          status: {
            value: 'completed',
            template: this.statusTemplate
          },
          id: 'qasd1d',
          valid: 1,
          price: '234000',
          selectable: true,
          additionalData: [
            {
              label: 'TransactionId',
              value: '109E11M'
            },
            {
              label: 'User',
              value: 'Gustavo'
            },
            {
              label: 'Amount',
              value: '1002940',
              type: GTypeRowEnum.CURRENCY
            },
            {
              label: 'status',
              value: {
                value: 'completed',
                template: this.statusTemplate
              },
            }
          ]
        },
        {
          firstName: 'aaaaaaaaaamaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          lastName: 'Hola Hola Hola Hola Hola Hola Hola Hola Hola Hola ',
          email: 'ray@mail.com',
          age: 2123111198765443218000,
          status: {
            value: 'pending',
            template: this.statusTemplate
          },
          id: 'wasd1d',
          valid: 2,
          price: '234000',
          selectable: false,
          additionalData: [
            {
              label: 'TransactionId',
              value: '109E11M'
            },
            {
              label: 'User',
              value: 'Gustavo'
            },
            {
              label: 'Amount',
              value: '1002940',
              type: GTypeRowEnum.CURRENCY
            }
          ]
        },
        {
          firstName: 'Yuumi',
          lastName: 'Marvel',
          email: 'yuumaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaai@mail.com',
          age: 12,
          status: {
            value: 'completed',
            template: this.statusTemplate
          },
          id: 'easd1d',
          valid: 0,
          price: '234000',
          selectable: false,
        },
        {
          firstName: 'Nestor',
          lastName: 'Bracho',
          email: 'toto@mail.com',
          age: 32,
          status: {
            value: 'pending',
            template: this.statusTemplate
          },
          id: 'fasd1d',
          valid: 0,
          price: '234000',
          selectable: false,
          additionalData: [
            {
              label: 'TransactionId',
              value: '109E11M'
            },
            {
              label: 'User',
              value: 'Gustavo'
            },
            {
              label: 'Amount',
              value: '1002940',
              type: GTypeRowEnum.CURRENCY
            }
          ]
        },
        {
          firstName: 'Gustavo',
          lastName: 'Santamaria',
          email: 'tavo@mail.com',
          age: 27,
          status: {
            value: 'in-progress',
            template: this.statusTemplate
          },
          id: 'g1asd1d',
          valid: 1,
          price: '234000',
          selectable: true,
        },
        {
          firstName: 'Rachel',
          lastName: 'Mata',
          email: 'ray@mail.com',
          age: 26,
          status: {
            value: 'pending',
            template: this.statusTemplate
          },
          id: '1d2asd1d',
          valid: 0,
          price: '234000'
        },
        {
          firstName: 'Yuumi',
          lastName: 'Marvel',
          email: 'yuumi@mail.com',
          age: 1,
          status: {
            value: 'pending',
            template: this.statusTemplate
          },
          id: 'd4gasd1d',
          valid: 1,
          price: '234000',
          selectable: false,
          additionalData: [
            {
              label: 'TransactionId',
              value: '109E11M'
            },
            {
              label: 'User',
              value: 'Gustavo'
            },
            {
              label: 'Amount',
              value: '1002940',
              type: GTypeRowEnum.CURRENCY
            }
          ]
        },
        {
          firstName: 'Nestor',
          lastName: 'Bracho',
          email: 'toto@mail.com',
          age: 32,
          status: {
            value: 'completed',
            template: this.statusTemplate
          },
          id: 'f2fasd1d',
          valid: 2,
          price: '234000',
          selectable: true,
          additionalData: [
            {
              label: 'TransactionId',
              value: '109E11M'
            },
            {
              label: 'User',
              value: 'Gustavo'
            },
            {
              label: 'Amount',
              value: '1002940',
              type: GTypeRowEnum.CURRENCY
            }
          ]
        },
      ]
    };
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

  public checkEvent(event: any) {
    console.log('event:', event);
  }
}
