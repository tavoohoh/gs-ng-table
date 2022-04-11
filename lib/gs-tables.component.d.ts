import { OnChanges, SimpleChanges } from '@angular/core';
import { GTableRowAction, GTableAction, GTableStyle } from './gs-tables.widgets';
import { GsTablesService } from './gs-tables.service';
import { DomSanitizer } from '@angular/platform-browser';
import { GKeyType, GCustomTemplate, GSelectableValue, GTableDataValue, GTableFooterAction } from './gs-tables.models';
export declare class GsTablesComponent implements OnChanges {
    private sanitizer;
    private tableService;
    /**
     * Table data
     *
     * @description
     * An `GTable` object with table configuration
     */
    private tableData;
    /**
     * Current page being displayed
     * This value is required to display pagination
     */
    currentPage: number;
    /**
     * Total of pages
     * This value is required to display pagination
     */
    totalOfPages: number;
    /**
     * Event emitted when an action is clicked
     */
    private rowActionClick;
    /**
     * Event emitted when `navigateNext` button is clicked
     * @deprecated use `navigateTo` event instead
     */
    private navigateNext;
    /**
     * Event emitted when `navigatePrevious button is clicked
     * @deprecated use `navigateTo` event instead
     */
    private navigatePrevious;
    /**
     * Event emitted when any of the pagination buttons are clicked
     */
    private navigateTo;
    /**
     * Event emitted when a row is selected
     */
    private rowValueChanged;
    /**
     * Event emitted when any value of the table is modified by this component
     */
    private tableDataChanged;
    /**
     * Event emitted when a custom footer action is clicked
     */
    private tableActionClick;
    private tableContentElement;
    private tableHeaderElement;
    tableHeader: Array<string>;
    tableContentKeys: Array<string>;
    tableContent: Array<GTableDataValue>;
    additionalData: boolean;
    selectable: boolean;
    selectableAllSelected: boolean;
    selectedAdditionalData: number;
    customFooterActions: Array<GTableFooterAction>;
    tableContentPadding: number;
    tableRowActions: GTableRowAction;
    tableStyle: GTableStyle;
    tablesKeyType: Array<GKeyType>;
    tableCustomTemplates: Array<GCustomTemplate>;
    private customStyles;
    noTableData: boolean;
    noContentText: string;
    tableStyleType: typeof GTableStyle;
    canNavigateNext: boolean;
    canNavigatePrevious: boolean;
    constructor(sanitizer: DomSanitizer, tableService: GsTablesService, customStyles: any);
    ngOnChanges(changes: SimpleChanges): void;
    private setTableFooter;
    private tableDataAdapter;
    private formatData;
    private formatCurrency;
    readonly valueAsStyle: any;
    onResize(event: any): void;
    private setContentWidth;
    hdlRowAction(action: GTableAction): void;
    /**
     * Navigate next or previous based on
     * @param next if true navigate next, else previous
     *
     * @deprecated use `onNavigateTo` instead
     */
    onNavigate(next: boolean): void;
    /**
     * Navigate to specific page
     * @param page number of page
     *
     * returns the next page value
     */
    onNavigateTo(page: number): void;
    private onInputDataError;
    toggleAdditionalData(selectedAdditionalData: number, $event?: {
        target: {
            id: string;
            nodeName: string;
        };
    }): void;
    /**
     * Selectable methods
     */
    onRowValueChanged(newRowValue: GSelectableValue): void;
    toggleSelectableSelection(newRowValue: GSelectableValue): void;
    /**
     * Footer actions
     */
    onFooterActionClicked(action: GTableFooterAction): void;
}
