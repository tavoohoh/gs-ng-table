import { Component, ViewChild, ElementRef, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { GTableRowAction, GTableAction } from '../../gs-tables.widgets';

@Component({
  selector: 'gs-table-row-actions',
  templateUrl: './row-actions.component.html',
  styleUrls: ['./row-actions.component.sass']
})
export class GsTableRowActionsComponent {
  public showActions: boolean;

  @ViewChild('optionsContainer', { static: false }) public optionsContainer: ElementRef;
  @ViewChild('optionsButton', { static: true }) public optionsButton: ElementRef;

  @Input() public rowAction: GTableRowAction;
  @Input() public rowData: {};
  @Output() private rowActionEvent = new EventEmitter<GTableAction>();

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if (this.optionsButton.nativeElement.contains(event.target)) {
      this.onToggleShowActions();
    } else if (this.showActions && !this.optionsContainer.nativeElement.contains(event.target)) {
      this.showActions = false;
    }
  }

  public hdlAction(action: GTableAction): void {
    this.showActions = false;
    action.row = this.rowData;
    this.rowActionEvent.emit(action);
  }

  public onToggleShowActions(): void {
    this.showActions = !this.showActions;
  }

  public displayActionIf(action: GTableAction): boolean {
    if (action.hiden) {
      return false;
    } else if (action.displayIf) {
      return this.rowData[action.displayIf.model].toString() === action.displayIf.hasValue.toString() ? true : false;
    } else {
      return true;
    }
  }
}
