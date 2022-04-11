import { OnChanges, SimpleChanges } from '@angular/core';
export declare class GsCheckboxComponent implements OnChanges {
    value: boolean;
    rowIndex: number;
    private valueChanged;
    ngOnChanges(changes: SimpleChanges): void;
    onValueChanged(): void;
}
