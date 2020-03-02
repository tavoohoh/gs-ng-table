import { ElementRef } from '@angular/core';
import { GTableRowAction, GTableAction } from '../../gs-tables.widgets';
export declare class GsTableRowActionsComponent {
    showActions: boolean;
    optionsContainer: ElementRef;
    optionsButton: ElementRef;
    rowAction: GTableRowAction;
    rowData: {};
    private rowActionEvent;
    clickout(event: any): void;
    constructor();
    hdlAction(action: GTableAction): void;
    onToggleShowActions(): void;
}
