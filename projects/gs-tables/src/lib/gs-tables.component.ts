import { Component, Input, OnInit, HostBinding, HostListener, ViewChild, ElementRef, Inject } from '@angular/core';
import { GTable, GTableRowAction, GTableAction, GTableStyle, GTableStyles } from './gs-tables.widgets';
import { GsTablesService } from './gs-tables.service';
import { DomSanitizer } from '@angular/platform-browser';

// https://uxdesign.cc/design-better-data-tables-4ecc99d23356

@Component({
  selector: 'gs-table',
  templateUrl: './gs-tables.component.html',
  styleUrls: ['./gs-tables.component.sass']
})
export class GsTablesComponent implements OnInit {
  @Input() private tableData: GTable;
  @ViewChild('tableContentElement', { static: false }) private tableContentElement: ElementRef;
  @ViewChild('tableHeaderElement', { static: false }) private tableHeaderElement: ElementRef;

  public tableHeader: Array<string>;
  public tableContentKeys: Array<string>;
  public tableContent: Array<object>;
  public tableContentPadding: number;
  public tableRowActions: GTableRowAction;
  public tableStyle: GTableStyle;
  private customStyles: GTableStyles;

  public noTableData: boolean;
  public tableStyleType = GTableStyle;

  constructor(
    private sanitizer: DomSanitizer,
    private tableService: GsTablesService,
    @Inject('customStyles') customStyles
  ) {
    this.customStyles = customStyles;
  }

  ngOnInit() {
    this.tableDataAdapter();

    setTimeout(() => {
      this.setContentWidth();
    });
  }

  private tableDataAdapter() {
    if (!this.tableData || !this.tableData.data) {
      this.noTableData = true;
      this.onInputDataError();
      return;
    }

    this.tableStyle = this.tableData.options.style || GTableStyle.TABLE;
    this.tableContent = this.tableData.data;
    this.tableRowActions = this.tableData.options.rowActions || null;
    this.tableContentKeys = this.tableService.objectKeysToArray(this.tableContent);

    if (this.tableStyle === GTableStyle.SINGLE) {
      this.tableContentKeys = [this.tableContentKeys[0], this.tableContentKeys[1]];
    } else {
      this.tableHeader = this.tableData.header || this.tableContentKeys;
    }
  }

  @HostBinding('attr.style')
  public get valueAsStyle(): any {
    let variables = '';

    // Layout
    if (!this.noTableData && this.tableStyle === GTableStyle.TABLE && this.tableHeader.length) {
      if (this.tableRowActions && this.tableRowActions.display) {
        variables = variables + `--repeat: repeat(${this.tableHeader.length + 1}, 1fr)!important;`;
      } else {
        variables = variables + `--repeat: repeat(${this.tableHeader.length}, 1fr)!important;`;
      }
    }

    // UI
    if (this.customStyles) {
      if (this.customStyles.color) {
        variables = variables + `--gt-font-color: ${this.customStyles.color}!important;`;
      }
      if (this.customStyles.fontSize) {
        variables = variables + `--gt-font-size: ${this.customStyles.fontSize}!important;`;
      }
      if (this.customStyles.primaryColor) {
        variables = variables + `--gt-primary-color: ${this.customStyles.primaryColor}!important;`;
      }
      if (this.customStyles.secondaryColor) {
        variables = variables + `--gt-secondary-color: ${this.customStyles.secondaryColor}!important;`;
      }
      if (this.customStyles.neutralColor) {
        variables = variables + `--gt-neutral-color: ${this.customStyles.neutralColor}!important;`;
      }
      if (this.customStyles.whiteColor) {
        variables = variables + `--gt-white-color: ${this.customStyles.whiteColor}!important;`;
      }
      if (this.customStyles.padding) {
        variables = variables + `--gt-padding: ${this.customStyles.padding}!important;`;
      }
      if (this.customStyles.buttom) {
        if (this.customStyles.buttom.padding) {
          variables = variables + `--gt-buttom-padding: ${this.customStyles.buttom.padding}!important;`;
        }
        if (this.customStyles.buttom.color) {
          variables = variables + `--gt-buttom-color: ${this.customStyles.buttom.color}!important;`;
        }
        if (this.customStyles.buttom.background) {
          variables = variables + `--gt-buttom-background: ${this.customStyles.buttom.background}!important;`;
        }
        if (this.customStyles.buttom.borderSize) {
          variables = variables + `--gt-buttom-border-size: ${this.customStyles.buttom.borderSize}!important;`;
        }
        if (this.customStyles.buttom.borderStyle) {
          variables = variables + `--gt-buttom-border-style: ${this.customStyles.buttom.borderStyle}!important;`;
        }
        if (this.customStyles.buttom.borderColor) {
          variables = variables + `--gt-buttom-border-color: ${this.customStyles.buttom.borderColor}!important;`;
        }
        if (this.customStyles.buttom.borderRadius) {
          variables = variables + `--gt-buttom-border-radius: ${this.customStyles.buttom.borderRadius}!important;`;
        }
        if (this.customStyles.buttom.borderTop) {
          variables = variables + `--gt-buttom-border-top: ${this.customStyles.buttom.borderTop}!important;`;
        }
        if (this.customStyles.buttom.borderRight) {
          variables = variables + `--gt-buttom-border-right: ${this.customStyles.buttom.borderRight}!important;`;
        }
        if (this.customStyles.buttom.borderBottom) {
          variables = variables + `--gt-buttom-border-bottom: ${this.customStyles.buttom.borderBottom}!important;`;
        }
        if (this.customStyles.buttom.borderLeft) {
          variables = variables + `--gt-buttom-border-left: ${this.customStyles.buttom.borderLeft}!important;`;
        }
      }
    }

    return this.sanitizer.bypassSecurityTrustStyle(
      variables
    );
  }

  @HostListener('window:resize', ['$event'])
  public onResize(event) {
    this.setContentWidth();
  }

  private setContentWidth() {
    if (!this.noTableData && this.tableStyle === GTableStyle.TABLE) {
      this.tableContentPadding =
        this.tableHeaderElement.nativeElement.offsetWidth - this.tableContentElement.nativeElement.offsetWidth;
    }
  }

  public hdlRowAction(action: GTableAction) {
    console.log(action);
  }

  private onInputDataError() {
    return console.error(
      'GS Table building err: Please provide tableData:' + '\n\n' +
      '1. In your template make sure you have:' + '\n\n' +
      '\xa0' + '<gs-table [tableData]="tableData"></gs-table>' + '\n\n' +
      '2. In your component declare `tableData`:' + '\n\n' +
      '\xa0public tableData = {' + '\n' +
      '\xa0\xa0\xa0' + 'data: Array<object>;' + '\n' +
      '\xa0\xa0\xa0' + 'header?: Array<string>;' + '\n' +
      '\xa0\xa0\xa0' + 'options?: {' + '\n' +
      '\xa0\xa0\xa0\xa0\xa0' + 'style?: GTableStyle;' + '\n' +
      '\xa0\xa0\xa0\xa0\xa0' + 'rowActions?: GTableRowAction;' + '\n' +
      '\xa0\xa0\xa0' + '}' + '\n' +
      '\xa0}'
    );
  }
}
