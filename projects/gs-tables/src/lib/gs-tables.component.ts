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

    if (
      (changes.currentPage || this.currentPage) && (changes.totalOfPages || this.totalOfPages)
    ) {
      this.currentPage = changes.currentPage ? changes.currentPage.currentValue : this.currentPage;
      this.totalOfPages = changes.totalOfPages ? changes.totalOfPages.currentValue : this.totalOfPages;
      this.setTableFooter();
    } else if (changes.currentPage.currentValue || changes.totalOfPages.currentValue) {
      return console.warn(
        'GS Table building warning:' + '\n\n' +
        'If you wish to display current and total of pages please add to your table options `currentPage` and `totalOfPages`'
      );
    } else {
      this.currentPage = null;
      this.totalOfPages = null;
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
        variables = variables + `--gt-repeat: repeat(${this.tableHeader.length + 1}, 1fr)!important;`;
      } else {
        variables = variables + `--gt-repeat: repeat(${this.tableHeader.length}, 1fr)!important;`;
      }
    }

    // UI
    if (this.customStyles) {
      if (this.customStyles.color) {
        variables = variables + `--gt-font-color: ${this.customStyles.color}!important;`;
      }
      if (this.customStyles.ui.fontSize) {
        variables = variables + `--gt-font-size: ${this.customStyles.ui.fontSize}!important;`;
      }
      if (this.customStyles.color.primary) {
        variables = variables + `--gt-primary-color: ${this.customStyles.color.primary}!important;`;
      }
      if (this.customStyles.color.secondary) {
        variables = variables + `--gt-secondary-color: ${this.customStyles.color.secondary}!important;`;
      }
      if (this.customStyles.color.neutral) {
        variables = variables + `--gt-neutral-color: ${this.customStyles.color.neutral}!important;`;
      }
      if (this.customStyles.color.white) {
        variables = variables + `--gt-white-color: ${this.customStyles.color.white}!important;`;
      }
      if (this.customStyles.ui.padding) {
        variables = variables + `--gt-padding: ${this.customStyles.ui.padding}!important;`;
      }
      if (this.customStyles.ui.primaryButton) {
        if (this.customStyles.ui.primaryButton.padding) {
          variables = variables + `--gt-button-padding: ${this.customStyles.ui.primaryButton.padding}!important;`;
        }
        if (this.customStyles.ui.primaryButton.color) {
          variables = variables + `--gt-button-color: ${this.customStyles.ui.primaryButton.color}!important;`;
        }
        if (this.customStyles.ui.primaryButton.background) {
          variables = variables + `--gt-button-background: ${this.customStyles.ui.primaryButton.background}!important;`;
        }
        if (this.customStyles.ui.primaryButton.borderSize) {
          variables = variables + `--gt-button-border-size: ${this.customStyles.ui.primaryButton.borderSize}!important;`;
        }
        if (this.customStyles.ui.primaryButton.borderStyle) {
          variables = variables + `--gt-button-border-style: ${this.customStyles.ui.primaryButton.borderStyle}!important;`;
        }
        if (this.customStyles.ui.primaryButton.borderColor) {
          variables = variables + `--gt-button-border-color: ${this.customStyles.ui.primaryButton.borderColor}!important;`;
        }
        if (this.customStyles.ui.primaryButton.borderRadius) {
          variables = variables + `--gt-button-border-radius: ${this.customStyles.ui.primaryButton.borderRadius}!important;`;
        }
        if (this.customStyles.ui.primaryButton.borderTop) {
          variables = variables + `--gt-button-border-top: ${this.customStyles.ui.primaryButton.borderTop}!important;`;
        }
        if (this.customStyles.ui.primaryButton.borderRight) {
          variables = variables + `--gt-button-border-right: ${this.customStyles.ui.primaryButton.borderRight}!important;`;
        }
        if (this.customStyles.ui.primaryButton.borderBottom) {
          variables = variables + `--gt-button-border-bottom: ${this.customStyles.ui.primaryButton.borderBottom}!important;`;
        }
        if (this.customStyles.ui.primaryButton.borderLeft) {
          variables = variables + `--gt-button-border-left: ${this.customStyles.ui.primaryButton.borderLeft}!important;`;
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

  public onNavigate(next: boolean): void {
    if (next) {
      this.navigateNext.emit();
    } else {
      this.navigatePrevious.emit();
    }
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
