import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GsTablesService {

  constructor() { }

  public objectKeysToArray(rawArray: Array<object>): Array<string> {
    const contentKeys = [];

    for (const keys in rawArray[0]) {
      if (Object.prototype.hasOwnProperty.call(rawArray[0], keys) && rawArray[0][keys]) {
        contentKeys.push(keys);
      }
    }

    return contentKeys;
  }
}
