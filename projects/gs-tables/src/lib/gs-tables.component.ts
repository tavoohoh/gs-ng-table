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

// https://uxdesign.cc/design-better-data-tables-4ecc99d23356

@Component({
  selector: 'gs-table',
  templateUrl: './gs-tables.component.html',
  styleUrls: ['./gs-tables.component.sass']
})
export class GsTablesComponent implements OnChanges {
  @Input() private tableData: GTable;
  @Input() public currentPage: number;
  @Input() public totalOfPages: number;
  @Output() private rowActionEvent = new EventEmitter<GTableAction>();
  @Output() private navigateNext = new EventEmitter<void>();
  @Output() private navigatePrevious = new EventEmitter<void>();
  @Output() private navigateTo = new EventEmitter<number>();
  @ViewChild('tableContentElement', { static: false }) private tableContentElement: ElementRef;
  @ViewChild('tableHeaderElement', { static: false }) private tableHeaderElement: ElementRef;

  public tableHeader: Array<string>;
  public tableContentKeys: Array<string>;
  public tableContent: Array<object>;
  public tableContentPadding: number;
  public tableRowActions: GTableRowAction;
  public tableStyle: GTableStyle;
  private customStyles: GStyles;

  public noTableData: boolean;
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
    this.tableContent = this.tableData.data;
    this.tableRowActions = this.tableData.options.rowActions || null;
    this.tableContentKeys = this.tableData.keyNames ? this.tableData.keyNames : this.tableService.objectKeysToArray(this.tableContent);

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
      if (this.tableRowActions && !this.tableRowActions.hiden) {
        variables = variables + `--gs-repeat: repeat(${this.tableHeader.length + 1}, 1fr)!important;`;
      } else {
        variables = variables + `--gs-repeat: repeat(${this.tableHeader.length}, 1fr)!important;`;
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
  }

  /**
   * Navigate next or previous based on
   * @param next if true navigate next, else previous
   *
   * @deprecated use `onNavigateTo` instead
   */
  public onNavigate(next: boolean): void {
    if (next) {
      this.navigateNext.emit();
      this.navigateTo.emit(this.currentPage + 1);
    } else {
      this.navigatePrevious.emit();
      this.navigateTo.emit(this.currentPage - 1);
    }
  }

  /**
   * Navigate to specific page
   * @param page number of page
   *
   * returns the next page value
   */
  public onNavigateTo(page: number): void {
    this.navigateTo.emit(page);
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
}
