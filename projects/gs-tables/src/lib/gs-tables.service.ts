import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { TEXT_TABLE } from './gs-tables.constants';

@Injectable({
  providedIn: 'root'
})
export class GsTablesService {

  constructor(private translateService: TranslateService) { }

  public objectKeysToArray(rawArray: Array<object>): Array<string> {
    const contentKeys = [];

    for (const keys in rawArray[0]) {
      if (Object.prototype.hasOwnProperty.call(rawArray[0], keys) && rawArray[0][keys]) {
        contentKeys.push(keys);
      }
    }

    return contentKeys;
  }

  public getTranslate(key: string, param?: string) {
    let lang = this.translateService.currentLang;

    if (!lang) {
      console.warn(`translateService.currentLang is not set, using default language: 'es'`);
      lang = 'es';
    }

    const messageLang = !TEXT_TABLE[lang] ?
      console.warn(`We don't have support for language ${lang}. Please email us to hi@tavoohoh.com. Using default language: 'es'`) :
      TEXT_TABLE[lang];

    let message = messageLang[key];

    if (param) {
      message = message.replace('${param}', param);
    }

    return message;
  }

}
