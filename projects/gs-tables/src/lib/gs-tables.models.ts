import { GTypeRowEnum } from './gs-tables.enum';
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
