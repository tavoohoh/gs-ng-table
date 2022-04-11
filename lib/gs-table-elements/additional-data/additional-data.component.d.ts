import { OnChanges, SimpleChanges } from '@angular/core';
import { GAdditionalData } from '../../gs-tables.models';
export declare class GsAdditionalDataComponent implements OnChanges {
    additionalData: Array<GAdditionalData>;
    ngOnChanges(changes: SimpleChanges): void;
}
