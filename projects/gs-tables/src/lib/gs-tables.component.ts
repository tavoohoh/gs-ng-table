import {
  Component,
  Input,
  HostBinding,
  HostListener,
  ViewChild,
  ElementRef,
  Inject,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { GTable, GTableRowAction, GTableAction, GTableStyle, GStyles } from './gs-tables.widgets';
import { GsTablesService } from './gs-tables.service';
import { DomSanitizer } from '@angular/platform-browser';
import { LOCATION } from './gs-tables.constants';
import { GKeyType, GCustomTemplate, GSelectableValue, GTableDataValue, GTableFooterAction } from './gs-tables.models';
import { GTypeRowEnum } from './gs-tables.enum';

// https://uxdesign.cc/design-better-data-tables-4ecc99d23356

@Component({
  selector: 'gs-table',
  templateUrl: './gs-tables.component.html',
  styleUrls: ['./gs-tables.component.sass']
})
export class GsTablesComponent implements OnChanges {
  /**
   * Table data
   *
   * @description
   * An `GTable` object with table configuration
   */
  @Input() private tableData: GTable;
  /**
   * Current page being displayed
   * This value is required to display pagination
   */
  @Input() public currentPage: number;
  /**
   * Total of pages
   * This value is required to display pagination
   */
  @Input() public totalOfPages: number;
  /**
   * Event emitted when an action is clicked
   */
  @Output() private rowActionEvent = new EventEmitter<GTableAction>();
  /**
   * Event emitted when `navigateNext` button is clicked
   * @deprecated use `navigateTo` event instead
   */
  @Output() private navigateNext = new EventEmitter<void>();
  /**
   * Event emitted when `navigatePrevious button is clicked
   * @deprecated use `navigateTo` event instead
   */
  @Output() private navigatePrevious = new EventEmitter<void>();
  /**
   * Event emitted when any of the pagination buttons are clicked
   */
  @Output() private navigateTo = new EventEmitter<number>();
  /**
   * Event emitted when a row is selected
   */
  @Output() private rowValueChanged = new EventEmitter<GSelectableValue>();
  /**
   * Event emitted when any value of the table is modified by this component
   */
  @Output() private tableDataChanged = new EventEmitter<Array<GTableDataValue>>();
  /**
   * Event emitted when a custom footer action is clicked
   */
  @Output() private footerActionClick = new EventEmitter<GTableFooterAction>();

  @ViewChild('tableContentElement', { static: false }) private tableContentElement: ElementRef;
  @ViewChild('tableHeaderElement', { static: false }) private tableHeaderElement: ElementRef;

  public tableHeader: Array<string>;
  public tableContentKeys: Array<string>;
  public tableContent: Array<GTableDataValue>;
  public additionalData: boolean;
  public selectable: boolean;
  public selectableAllSelected: boolean;
  public selectedAdditionalData: number;
  public customFooterActions: Array<GTableFooterAction>;
  public tableContentPadding: number;
  public tableRowActions: GTableRowAction;
  public tableStyle: GTableStyle;
  public tablesKeyType: Array<GKeyType>;
  public tableCustomTemplates: Array<GCustomTemplate>;
  private customStyles: GStyles;

  public noTableData: boolean;
  public noContentText: string;
  public tableStyleType = GTableStyle;

  public canNavigateNext: boolean;
  public canNavigatePrevious: boolean;

  constructor(
    private sanitizer: DomSanitizer,
    private tableService: GsTablesService,
    @Inject('customStyles') customStyles
  ) {
    this.customStyles = customStyles;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!changes) {
      return;
    }

    if (changes.tableData && changes.tableData.currentValue) {
      this.tableData = changes.tableData.currentValue;

      if (this.tableData.data) {
        this.noTableData = false;
        this.tableDataAdapter();
      } else {
        this.noTableData = true;
        this.onInputDataError();
      }

      if (this.tableData.options) {
        if (this.tableData.options.hasAdditionalData) {
          this.additionalData = true;
        }

        if (this.tableData.options.selectable) {
          this.selectable = true;
        }

        if (this.tableData.options.tableActions) {
          this.customFooterActions = this.tableData.options.tableActions;
        }
      }
    }

    if (changes.currentPage || this.currentPage) {
      this.currentPage = changes.currentPage ? changes.currentPage.currentValue : this.currentPage;
    } else {
      this.currentPage = null;
    }

    if (changes.totalOfPages || this.totalOfPages) {
      this.totalOfPages = changes.totalOfPages ? changes.totalOfPages.currentValue : this.totalOfPages;
    } else {
      this.totalOfPages = null;
    }

    if (this.currentPage && this.totalOfPages) {
      this.setTableFooter();
    } else if (this.currentPage || this.totalOfPages) {
      return console.warn(
        'GS Table building warning:' + '\n\n' +
        'If you wish to display current and total of pages please add to your table options `currentPage` and `totalOfPages`'
      );
    }

    setTimeout(() => {
      this.setContentWidth();
    });
  }

  private setTableFooter() {
    if (this.currentPage <= 1) {
      this.canNavigatePrevious = false;
    } else {
      this.canNavigatePrevious = true;
    }

    if (this.currentPage + 1 > this.totalOfPages) {
      this.canNavigateNext = false;
    } else {
      this.canNavigateNext = true;
    }
  }

  private tableDataAdapter() {
    this.tableStyle = this.tableData.options.style || GTableStyle.TABLE;
    this.tablesKeyType = this.tableData.keyTypes || null;

    if (this.tablesKeyType) {
      this.formatData();
    }

    this.tableContent = this.tableData.data;
    this.noTableData = this.tableData.data.length > 0 ? false : true;
    this.noContentText = this.tableData.options.noContentText
      ? this.tableData.options.noContentText
      : this.tableService.getTranslate('NO_CONTENT');
    this.tableRowActions = this.tableData.options.rowActions || null;
    this.tableContentKeys = this.tableData.keyNames ? this.tableData.keyNames : this.tableService.objectKeysToArray(this.tableContent);

    if (this.tableStyle === GTableStyle.SINGLE) {
      this.tableContentKeys = [this.tableContentKeys[0], this.tableContentKeys[1]];
    } else {
      this.tableHeader = this.tableData.header || this.tableContentKeys;
    }
  }

  private formatData() {
    this.tablesKeyType.forEach(type => {
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < this.tableData.data.length; i++) {
        switch (type.type) {
          case GTypeRowEnum.CURRENCY:
            this.tableData.data[i][type.key] = this.formatCurrency(this.tableData.data[i][type.key].toString());
            break;
          case GTypeRowEnum.PHONE:
          // TODO create format Phone
        }
      }
    });
  }

  private formatCurrency(valueTable: string): string {
    let value = valueTable;
    const location = LOCATION[this.tableData.options.country] || LOCATION[`co`];

    const prefix = location.currencyFormat.symbol;
    const suffix = location.currencyFormat.code;
    const thousandsSeparator = location.currencyFormat.thousands;
    const decimalSeparator = location.currencyFormat.decimal;
    const precision = location.currencyFormat.precision;

    let inputVal = valueTable.toString() || '0';

    // remove any leading zeros
    if (inputVal.substring(0, 1) === '0') {
      inputVal = inputVal.replace(/^[0|\D]*/, '');
    }

    // format decimal if applies
    if (!inputVal || inputVal.length === 1 && inputVal.substring(0, 1) === '0') {
      let emptyDecimals = '0';

      if (precision > 0) {
        for (let index = 0; index < precision; index++) {
          emptyDecimals = emptyDecimals + '0';
        }
      }
      inputVal = emptyDecimals;
    }

    const cleanValue = inputVal.replace(/\D/g, '');

    let decimals = null;
    let thousands = null;

    // format number as currency
    if (precision > 0) {
      decimals = cleanValue.slice(precision - precision * 2);

      if (decimals.length < precision) {
        for (let index = 0; index < precision - Number(decimals); index++) {
          decimals = '0' + decimals;
        }
        thousands = '0';
      } else {
        thousands = cleanValue.substring(0, cleanValue.length - precision) || '0';
      }

    } else {
      thousands = cleanValue;
    }

    const formattedThousands = thousands.replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, thousandsSeparator);

    value = `${prefix} ${formattedThousands + (decimals ? decimalSeparator + decimals : '')} ${suffix}`;

    return value;
  }

  @HostBinding('attr.style')
  public get valueAsStyle(): any {
    let variables = '';

    // Layout
    if (!this.noTableData && this.tableStyle === GTableStyle.TABLE && this.tableHeader.length) {
      let extraColumns = '';

      if (this.selectable) {
        extraColumns = `${extraColumns} 30px`;
      }

      if (this.additionalData) {
        extraColumns = `${extraColumns} 30px`;
      }

      if (this.tableRowActions && !this.tableRowActions.hidden) {
        variables = variables + `--gs-repeat: ${extraColumns} repeat(${this.tableHeader.length}, 1fr) 90px!important;`;
      } else {
        variables = variables + `--gs-repeat: ${extraColumns} repeat(${this.tableHeader.length}, 1fr)!important;`;
      }
    }

    // UI
    if (this.customStyles) {
      if (this.customStyles.color) {
        variables = variables + `--gs-font-color: ${this.customStyles.color}!important;`;
      }
      if (this.customStyles.ui.fontSize) {
        variables = variables + `--gs-font-size: ${this.customStyles.ui.fontSize}!important;`;
      }
      if (this.customStyles.color.primary) {
        variables = variables + `--gs-primary-color: ${this.customStyles.color.primary}!important;`;
      }
      if (this.customStyles.color.secondary) {
        variables = variables + `--gs-secondary-color: ${this.customStyles.color.secondary}!important;`;
      }
      if (this.customStyles.color.neutral) {
        variables = variables + `--gs-neutral-color: ${this.customStyles.color.neutral}!important;`;
      }
      if (this.customStyles.color.border) {
        variables = variables + `--gs-border-color: ${this.customStyles.color.border}!important;`;
      }
      if (this.customStyles.color.white) {
        variables = variables + `--gs-white-color: ${this.customStyles.color.white}!important;`;
      }
      if (this.customStyles.ui.padding) {
        variables = variables + `--gs-padding: ${this.customStyles.ui.padding}!important;`;
      }
      if (this.customStyles.ui.primaryButton) {
        if (this.customStyles.ui.primaryButton.padding) {
          variables = variables + `--gs-button-padding: ${this.customStyles.ui.primaryButton.padding}!important;`;
        }
        if (this.customStyles.ui.primaryButton.color) {
          variables = variables + `--gs-button-color: ${this.customStyles.ui.primaryButton.color}!important;`;
        }
        if (this.customStyles.ui.primaryButton.background) {
          variables = variables + `--gs-button-background: ${this.customStyles.ui.primaryButton.background}!important;`;
        }
        if (this.customStyles.ui.primaryButton.borderSize) {
          variables = variables + `--gs-button-border-size: ${this.customStyles.ui.primaryButton.borderSize}!important;`;
        }
        if (this.customStyles.ui.primaryButton.borderStyle) {
          variables = variables + `--gs-button-border-style: ${this.customStyles.ui.primaryButton.borderStyle}!important;`;
        }
        if (this.customStyles.ui.primaryButton.borderColor) {
          variables = variables + `--gs-button-border-color: ${this.customStyles.ui.primaryButton.borderColor}!important;`;
        }
        if (this.customStyles.ui.primaryButton.borderRadius) {
          variables = variables + `--gs-button-border-radius: ${this.customStyles.ui.primaryButton.borderRadius}!important;`;
        }
        if (this.customStyles.ui.primaryButton.borderTop) {
          variables = variables + `--gs-button-border-top: ${this.customStyles.ui.primaryButton.borderTop}!important;`;
        }
        if (this.customStyles.ui.primaryButton.borderRight) {
          variables = variables + `--gs-button-border-right: ${this.customStyles.ui.primaryButton.borderRight}!important;`;
        }
        if (this.customStyles.ui.primaryButton.borderBottom) {
          variables = variables + `--gs-button-border-bottom: ${this.customStyles.ui.primaryButton.borderBottom}!important;`;
        }
        if (this.customStyles.ui.primaryButton.borderLeft) {
          variables = variables + `--gs-button-border-left: ${this.customStyles.ui.primaryButton.borderLeft}!important;`;
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

  public hdlRowAction(action: GTableAction): void {
    this.rowActionEvent.emit(action);
    this.selectedAdditionalData = null;
  }

  /**
   * Navigate next or previous based on
   * @param next if true navigate next, else previous
   *
   * @deprecated use `onNavigateTo` instead
   */
  public onNavigate(next: boolean): void {
    if (next) {
      // tslint:disable-next-line: deprecation
      this.navigateNext.emit();
      this.navigateTo.emit(this.currentPage + 1);
    } else {
      // tslint:disable-next-line: deprecation
      this.navigatePrevious.emit();
      this.navigateTo.emit(this.currentPage - 1);
    }
    this.selectedAdditionalData = null;
  }

  /**
   * Navigate to specific page
   * @param page number of page
   *
   * returns the next page value
   */
  public onNavigateTo(page: number): void {
    this.navigateTo.emit(page);
    this.selectedAdditionalData = null;
  }

  private onInputDataError(): void {
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

  public toggleAdditionalData(selectedAdditionalData: number, $event?: { target: { id: string } }): void {
    if (!this.additionalData || ($event && $event.target.id === 'rowActionButton')) {
      return;
    }

    this.selectedAdditionalData = this.selectedAdditionalData === selectedAdditionalData ? null : selectedAdditionalData;
  }

  /**
   * Selectable methods
   */
  public onRowValueChanged(newRowValue: GSelectableValue): void {
    this.tableContent[newRowValue.index || 0].selectable = newRowValue.value;
    this.rowValueChanged.emit(newRowValue);
    this.tableDataChanged.emit(this.tableContent);
  }

  public toggleSelectableSelection(newRowValue: GSelectableValue): void {
    this.selectableAllSelected = newRowValue.value;
    // tslint:disable-next-line
    for (let i = 0; i < this.tableContent.length; i++) {
      this.tableContent[i].selectable = this.selectableAllSelected;
    }
    this.tableDataChanged.emit(this.tableContent);
  }

  /**
   * Footer actions
   */
  public onFooterActionClicked(action: GTableFooterAction): void {
    this.footerActionClick.emit(action);
  }
}
