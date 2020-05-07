import { GTypeRowEnum } from './gs-tables.enum';
import { TemplateRef } from '@angular/core';
/**
 * Location interface and its dependencies
 */
export interface GLocation {
  tax: Array<{
    name: string;
    value: string;
  }>;
  country: {
    name: string;
    alpha2Code: string;
  };
  phoneFormat: {
    code: string;
    mask: string;
  };
  currencyFormat: {
    code: string;
    symbol: string;
    thousands: string;
    decimal: string;
    precision: number;
  };
  disabled?: boolean;
}

export interface GKeyType {
  key: string;
  type: GTypeRowEnum;
}

export interface GCustomTemplate {
  value: string;
  template: TemplateRef<any>;
}

export interface GAdditionalData {
  label: string;
  value: string | number | boolean | GCustomTemplate;
  type?: GTypeRowEnum;
}
