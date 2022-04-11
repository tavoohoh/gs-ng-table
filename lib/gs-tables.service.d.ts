import { TranslateService } from '@ngx-translate/core';
export declare class GsTablesService {
    private translateService;
    constructor(translateService: TranslateService);
    objectKeysToArray(rawArray: Array<object>): Array<string>;
    getTranslate(key: string, param?: string): any;
}
