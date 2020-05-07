import { Component, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { GSelectableValue } from '../../gs-tables.models';

@Component({
  selector: 'gs-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.sass']
})
export class GsCheckboxComponent implements OnChanges {
  @Input() public value: boolean;
  @Input() public rowIndex: number;

  @Output() private valueChanged = new EventEmitter<GSelectableValue>();

  ngOnChanges(changes: SimpleChanges): void {
    if (changes) {
      if (changes.value && changes.value.currentValue) {
        this.value = changes.value.currentValue;
      }

      if (changes.rowIndex && changes.rowIndex.currentValue) {
        this.rowIndex = changes.rowIndex.currentValue;
      }
    }
  }

  public onValueChanged(): void {
    this.valueChanged.emit({
      value: this.value,
      index: this.rowIndex || null
    });
  }
}
