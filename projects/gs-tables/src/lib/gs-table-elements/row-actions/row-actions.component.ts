import { Component, ViewChild, ElementRef, Input, Output, EventEmitter, HostListener, OnChanges, SimpleChanges } from '@angular/core';
import { GTableRowAction, GTableAction } from '../../gs-tables.widgets';

@Component({
  selector: 'gs-table-row-actions',
  templateUrl: './row-actions.component.html',
  styleUrls: ['./row-actions.component.sass']
})
export class GsTableRowActionsComponent implements OnChanges {
  public openMenu: boolean;
  public menuHasActions = false;

  @ViewChild('optionsContainer', { static: false }) public optionsContainer: ElementRef;
  @ViewChild('optionsButton', { static: true }) public optionsButton: ElementRef;

  @Input() public rowAction: GTableRowAction;
  @Input() public rowData: {};
  @Output() private rowActionEvent = new EventEmitter<GTableAction>();

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if (this.optionsButton && this.optionsButton.nativeElement.contains(event.target)) {
      this.onToggleActionsMenu();
    } else if (this.openMenu && !this.optionsContainer.nativeElement.contains(event.target)) {
      this.openMenu = false;
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.rowAction && changes.rowAction.currentValue && changes.rowAction.currentValue.actions) {
      changes.rowAction.currentValue.actions.forEach((action: GTableAction) => {
        if (this.displayActionIf(action)) {
          this.menuHasActions = true;
        }
      });
    } else {
      this.menuHasActions = false;
    }
  }

  public hdlAction(event: any, action: GTableAction): void {
    this.openMenu = false;
    action.row = this.rowData;
    this.rowActionEvent.emit(action);
  }

  public onToggleActionsMenu(): void {
    this.openMenu = !this.openMenu;
  }

  public displayActionIf(action: GTableAction): boolean {
    if (action.hidden) {
      return false;
    } else if (action.displayIf) {
      return this.rowData[action.displayIf.model].toString() === action.displayIf.hasValue.toString() ? true : false;
    } else {
      return true;
    }
  }
}
