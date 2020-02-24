# gs-table

Simple angular 8 table library.

## Code scaffolding

* [Installation](#installation)
* [Getting Started](#getting-started)
* [Usage](#usage)
  * [Add gs-table to your code](#add-gs-table-to-your-code)
  * [Styling gs-table](#styling-gs-table)
  * [gs-table configuration](#gs-table-configuration)
  * [gs-table row actions](#gs-table-row-actions)

## Installation
- [set up your SSH key](https://confluence.atlassian.com/bitbucket/set-up-an-ssh-key-728138079.html#SetupanSSHkey-ssh1)
so `npm` can clone the `rpp-ngforms-lib` repo.
If you already have your SSH key configured for Bitbucket go to the next step.

- Install the library via NPM
```sh
npm install git+ssh://git@bitbucket.org/rappinc/rpp-ngtable-lib.git --save
```

## Getting Started

Add `GsTablesModule` into the imports array of the module that will use `gs-table`

```ts
import { GsTablesModule} from 'gs-table';

@NgModule({
  imports: [
    // ...
    GsTablesModule
  ],
})
export class AppModule { }
```

If you would like to use custom styles for the form fields you can pass a `GStyles` object to the module:
```ts
import { GsTablesModule} from 'gs-table';

@NgModule({
  imports: [
    // ...
    GsTablesModule.forRoot({
      color: {
        font: '#1f2532'
      },
      ui: {
        input: {
          background: '#cccccc'
        }
      }
    )
  ],
})
export class AppModule { }
```

For a full list of `GStyles` properties go to [Styling gs-table](#styling-gs-table)

## Usage

### Add gs-form to your code:

Add `gs-table` component to your HTML, import interfaces and define properties.

##### HTML ex. app.component.html
```html
<h1>My table</h1>
<gs-table
  [tableData]="tableData"
  (rowActionEvent)="hdlRowActionEvent($event)">
</gs-table>
```

|                   |                                                              |
|-------------------|--------------------------------------------------------------|
| tableData         | Send your form fields to gs-form to render your form         |
| rowActionEvent    | Send options so gs-form can customize your form as you like  |

```ts
import { Component } from '@angular/core';
import { GTable, GTableStyle } from 'gs-tables';

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
        firstName: 'Bob',
        lastName: 'One',
        email: 'bob@mail.com',
        age: 27
      },
      {
        firstName: 'Emma',
        lastName: 'Look',
        email: 'emma@mail.com',
        age: 26
      }
    ]
  };

  public hdlRowActionEvent(event) {
    console.log('Event', event);
  }
}
```

### gs-table configuration:
```ts
export enum GTableStyle {
  // Display the table with all its columns, a header. Actions are optional.
  TABLE = 'TABLE',
  // Disply only the first and second column, no header. Actions are optional.
  SINGLE = 'SINGLE'
}

export interface GTableAction {
  display: boolean;
  text: string;
  id?: string;
  row?: {};
}

export interface GTableRowAction {
  display: boolean;
  text: string;
  actions: Array<GTableAction>;
}

export interface GTable {
  data: Array<object>;
  header?: Array<string>;
  options?: {
    style?: GTableStyle;
    rowActions?: GTableRowAction;
  };
}
```

### Styling gs-form:
```ts
interface GStyles {
  color?: {
    /**
     * Font color
     * default: "inherit"
     */
    font?: string;

    /**
     * Primary color, used in important UI elements background and color
     * default: "#4588fd"
     */
    primary?: string;

    /**
     * Secondary color, used in some UI elements background and color
     * default: "#7a9e9f"
     */
    secondary?: string;

    /**
     * Neutral color, used in some UI elements background and color
     * default: "#4f6367"
     */
    neutral?: string;

    /**
     * White color, all white colors used in UI elements
     * default: "#ffffff"
     */
    white?: string;
  };
  ui?: {
    /**
     * Font size, all fonts size
     * default: ".9rem"
     */
    fontSize?: string;

    /**
     * Table inner padding
     */
    padding?: string;

    /**
     * Input and button style
     * Go to `GInputStyle` for detail
     */
    primaryButton?: GInputStyle;
  };
}

interface GInputStyle {
  /* Input padding */
  padding?: string;
  /* Input text color */
  color?: string;
  /* Input backgroud */
  background?: string;
  /* Input border size */
  borderSize?: string;
  /* Input border style */
  borderStyle?: string;
  /* Input border color */
  borderColor?: string;
  /* Input radious */
  borderRadius?: string;
  /* Input border top width/size */
  borderTop?: string;
  /* Input border right width/size */
  borderRight?: string;
  /* Input border bottom width/size */
  borderBottom?: string;
  /* Input border left width/size */
  borderLeft?: string;
}
```

For issues or questions please contact `gustavo.santamaria` or email gustavo.santamaria@rappi.com