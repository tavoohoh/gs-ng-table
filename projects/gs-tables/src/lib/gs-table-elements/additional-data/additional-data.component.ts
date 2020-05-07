import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { GAdditionalData } from '../../gs-tables.models';

@Component({
  selector: 'gs-table-additional-data',
  templateUrl: './additional-data.component.html',
  styleUrls: ['./additional-data.component.sass']
})
export class GsAdditionalDataComponent implements OnChanges {
  @Input() public additionalData: Array<GAdditionalData>;

  ngOnChanges(changes: SimpleChanges) {
    if (changes.additionalData.currentValue) {
      this.additionalData = changes.additionalData.currentValue;
    }
  }
}
