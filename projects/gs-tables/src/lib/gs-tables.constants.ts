import { GLocation } from './gs-tables.models';

export const LOCATION: { [key: string]: GLocation } = {
  ar: {
    tax: [
      {
        name: 'CUIT (Código Único de Identificación Tributaria)',
        value: 'CUIT'
      }
    ],
    country: {
      name: 'Argentina',
      alpha2Code: 'AR'
    },
    phoneFormat: {
      code: '54',
      mask: '000 00000000'
    },
    currencyFormat: {
      code: 'ARS',
      symbol: '$',
      thousands: '.',
      decimal: ',',
      precision: 2
    }
  },
  bo: {
    tax: [
      {
        name: 'RUC (Registro Único de Contribuyentes)',
        value: 'RUC'
      }
    ],
    country: {
      name: 'Bolivia',
      alpha2Code: 'BO'
    },
    phoneFormat: {
      code: '591',
      mask: '000 - 0000000'
    },
    currencyFormat: {
      code: 'BOB',
      symbol: 'Bs.',
      thousands: '.',
      decimal: ',',
      precision: 2
    }
  },
  br: {
    tax: [
      {
        name: 'CPF (Cadastro de Persona Física)',
        value: 'CPF'
      },
      {
        name: 'CNPJ (Cadastro de Persona Jurídica)',
        value: 'CNPJ'
      }
    ],
    country: {
      name: 'Brazil',
      alpha2Code: 'BR'
    },
    phoneFormat: {
      code: '55',
      mask: '00 0 0000 0000'
    },
    currencyFormat: {
      code: 'BRL',
      symbol: 'R$',
      thousands: '.',
      decimal: ',',
      precision: 2
    }
  },
  ca: {
    disabled: true,
    tax: [
      {
        name: 'SIN (Social Insurance Number)',
        value: 'SIN'
      },
      {
        name: `NAS (numéro d'assurance social)`,
        value: 'NAS'
      }
    ],
    country: {
      name: 'Canada',
      alpha2Code: 'CA'
    },
    phoneFormat: {
      code: '1',
      mask: '000 000 0000'
    },
    currencyFormat: {
      code: 'CAD',
      symbol: '$',
      thousands: ',',
      decimal: '.',
      precision: 2
    }
  },
  cl: {
    tax: [
      {
        name: 'RUT (Rol Único Tributario)',
        value: 'RUT'
      }
    ],
    country: {
      name: 'Chile',
      alpha2Code: 'CL'
    },
    phoneFormat: {
      code: '56',
      mask: '00 0000000'
    },
    currencyFormat: {
      code: 'CLP',
      symbol: '$',
      thousands: ',',
      decimal: '.',
      precision: 0
    }
  },
  co: {
    tax: [
      {
        name: 'NIT (Número de Identificación Tributaria)',
        value: 'NIT'
      }
    ],
    country: {
      name: 'Colombia',
      alpha2Code: 'CO'
    },
    phoneFormat: {
      code: '57',
      mask: '000 000 0000'
    },
    currencyFormat: {
      code: 'COP',
      symbol: '$',
      thousands: '.',
      decimal: ',',
      precision: 0
    }
  },
  cr: {
    disabled: true,
    tax: [
      {
        name: 'NITE (Número de Identificación Tributaria Especial)',
        value: 'NITE'
      }
    ],
    country: {
      name: 'Costa Rica',
      alpha2Code: 'CR'
    },
    phoneFormat: {
      code: '506',
      mask: '000000000000'
    },
    currencyFormat: {
      code: 'CRC',
      symbol: '₡',
      thousands: '.',
      decimal: ',',
      precision: 2
    }
  },
  ec: {
    disabled: true,
    tax: [
      {
        name: 'RUC (Registro Único de Contribuyentes)',
        value: 'RUC'
      }
    ],
    country: {
      name: 'Ecuador',
      alpha2Code: 'EC'
    },
    phoneFormat: {
      code: '593',
      mask: '000000000000'
    },
    currencyFormat: {
      code: 'USD',
      symbol: '$',
      thousands: ',',
      decimal: '.',
      precision: 2
    }
  },
  mx: {
    tax: [
      {
        name: 'RFC (Registro Federal de Contribuyentes)',
        value: 'RFC'
      }
    ],
    country: {
      name: 'Mexico',
      alpha2Code: 'MX'
    },
    phoneFormat: {
      code: '52',
      mask: '00 00000 0000'
    },
    currencyFormat: {
      code: 'MXN',
      symbol: '$',
      thousands: ',',
      decimal: '.',
      precision: 2
    }
  },
  pe: {
    tax: [
      {
        name: 'RUC (Registro Único de Contribuyentes)',
        value: 'RUC'
      }
    ],
    country: {
      name: 'Peru',
      alpha2Code: 'PE'
    },
    phoneFormat: {
      code: '51',
      mask: '000000000000'
    },
    currencyFormat: {
      code: 'PEN',
      symbol: 'S/.',
      thousands: '.',
      decimal: ',',
      precision: 2
    }
  },
  us: {
    disabled: true,
    tax: [
      {
        name: 'TIN (Taxpayer Identification Number)',
        value: 'TIN'
      }
    ],
    country: {
      name: 'United States',
      alpha2Code: 'US'
    },
    phoneFormat: {
      code: '1',
      mask: '000 000 0000'
    },
    currencyFormat: {
      code: 'USD',
      symbol: '$',
      thousands: ',',
      decimal: '.',
      precision: 2
    }
  },
  uy: {
    tax: [
      {
        name: 'RUT (Registro Único Tributario)',
        value: 'RUT'
      }
    ],
    country: {
      name: 'Uruguay',
      alpha2Code: 'UY'
    },
    phoneFormat: {
      code: '598',
      mask: '000000000000'
    },
    currencyFormat: {
      code: 'UYU',
      symbol: '$',
      thousands: ',',
      decimal: '.',
      precision: 2
    }
  },
  ve: {
    disabled: true,
    tax: [
      {
        name: 'RIF (Registro de Información Fiscal)',
        value: 'RIF'
      }
    ],
    country: {
      name: 'Venezuela',
      alpha2Code: 'VE'
    },
    phoneFormat: {
      code: '58',
      mask: '000 000 0000'
    },
    currencyFormat: {
      code: 'VEF',
      symbol: 'Bs.',
      thousands: '.',
      decimal: ',',
      precision: 0
    }
  }
};

export const TEXT_TABLE: { [key: string]: { [key: string]: string } } = {
  es: {
    NO_CONTENT: 'No hay registros en esta tabla',
  },
  en: {
    NO_CONTENT: 'There are no records in this table',
  },
  pr: {
    NO_CONTENT: 'Não há registros nesta tabela',
  }
};
