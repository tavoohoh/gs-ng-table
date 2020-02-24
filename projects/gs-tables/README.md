# gs-tables

Simple angular 8 tables library.

## Code scaffolding

* [Installation](#installation)
* [Getting Started](#getting-started)
* [Usage](#usage)
  * [Add gs-tables to your code](#add-gs-tables-to-your-code)
  * [Styling gs-tables](#styling-gs-tables)
  * [gs-tables row actions](#gs-tables-row-actions)

## Installation
- [set up your SSH key](https://confluence.atlassian.com/bitbucket/set-up-an-ssh-key-728138079.html#SetupanSSHkey-ssh1)
so `npm` can clone the `rpp-ngforms-lib` repo.
If you already have your SSH key configured for Bitbucket go to the next step.

- Install the library via NPM
```sh
npm install git+ssh://git@bitbucket.org/rappinc/rpp-ngtables-lib.git --save
```

## Getting Started

Add `GsTablesModule` into the imports array of the module that will use `gs-tables`

```ts
import { GsTablesModule} from 'gs-tables';

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
import { GsTablesModule} from 'gs-tables';

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