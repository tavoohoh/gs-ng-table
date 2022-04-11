import { ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import { GTableRowAction, GTableAction } from '../../gs-tables.widgets';
export declare class GsTableRowActionsComponent implements OnChanges {
    openMenu: boolean;
    menuHasActions: boolean;
    optionsContainer: ElementRef;
    optionsButton: ElementRef;
    rowAction: GTableRowAction;
    rowData: {};
    private rowActionEvent;
    clickout(event: any): void;
    ngOnChanges(changes: SimpleChanges): void;
    hdlAction(action: GTableAction): void;
    onToggleActionsMenu(): void;
    displayActionIf(action: GTableAction): boolean;
}
