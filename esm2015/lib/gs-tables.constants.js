export const LOCATION = {
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
export const TEXT_TABLE = {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3MtdGFibGVzLmNvbnN0YW50cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0ByYXBwaXBheS9ncy10YWJsZXMvIiwic291cmNlcyI6WyJsaWIvZ3MtdGFibGVzLmNvbnN0YW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxNQUFNLENBQUMsTUFBTSxRQUFRLEdBQWlDO0lBQ3BELEVBQUUsRUFBRTtRQUNGLEdBQUcsRUFBRTtZQUNIO2dCQUNFLElBQUksRUFBRSxrREFBa0Q7Z0JBQ3hELEtBQUssRUFBRSxNQUFNO2FBQ2Q7U0FDRjtRQUNELE9BQU8sRUFBRTtZQUNQLElBQUksRUFBRSxXQUFXO1lBQ2pCLFVBQVUsRUFBRSxJQUFJO1NBQ2pCO1FBQ0QsV0FBVyxFQUFFO1lBQ1gsSUFBSSxFQUFFLElBQUk7WUFDVixJQUFJLEVBQUUsY0FBYztTQUNyQjtRQUNELGNBQWMsRUFBRTtZQUNkLElBQUksRUFBRSxLQUFLO1lBQ1gsTUFBTSxFQUFFLEdBQUc7WUFDWCxTQUFTLEVBQUUsR0FBRztZQUNkLE9BQU8sRUFBRSxHQUFHO1lBQ1osU0FBUyxFQUFFLENBQUM7U0FDYjtLQUNGO0lBQ0QsRUFBRSxFQUFFO1FBQ0YsR0FBRyxFQUFFO1lBQ0g7Z0JBQ0UsSUFBSSxFQUFFLHdDQUF3QztnQkFDOUMsS0FBSyxFQUFFLEtBQUs7YUFDYjtTQUNGO1FBQ0QsT0FBTyxFQUFFO1lBQ1AsSUFBSSxFQUFFLFNBQVM7WUFDZixVQUFVLEVBQUUsSUFBSTtTQUNqQjtRQUNELFdBQVcsRUFBRTtZQUNYLElBQUksRUFBRSxLQUFLO1lBQ1gsSUFBSSxFQUFFLGVBQWU7U0FDdEI7UUFDRCxjQUFjLEVBQUU7WUFDZCxJQUFJLEVBQUUsS0FBSztZQUNYLE1BQU0sRUFBRSxLQUFLO1lBQ2IsU0FBUyxFQUFFLEdBQUc7WUFDZCxPQUFPLEVBQUUsR0FBRztZQUNaLFNBQVMsRUFBRSxDQUFDO1NBQ2I7S0FDRjtJQUNELEVBQUUsRUFBRTtRQUNGLEdBQUcsRUFBRTtZQUNIO2dCQUNFLElB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Z0JBQzVDLEtBQUssRUFBRSxLQUFLO2FBQ2I7U0FDRjtRQUNELE9BQU8sRUFBRTtZQUNQLElBQUksRUFBRSxXQUFXO1lBQ2pCLFVBQVUsRUFBRSxJQUFJO1NBQ2pCO1FBQ0QsV0FBVyxFQUFFO1lBQ1gsSUFBSSxFQUFFLElBQUk7WUFDVixJQUFJLEVBQUUsY0FBYztTQUNyQjtRQUNELGNBQWMsRUFBRTtZQUNkLElBQUksRUFBRSxLQUFLO1lBQ1gsTUFBTSxFQUFFLEtBQUs7WUFDYixTQUFTLEVBQUUsR0FBRztZQUNkLE9BQU8sRUFBRSxHQUFHO1lBQ1osU0FBUyxFQUFFLENBQUM7U0FDYjtLQUNGO0NBQ0YsQ0FBQztBQUVGLE1BQU0sQ0FBQyxNQUFNLFVBQVUsR0FBaUQ7SUFDdEUsRUFBRSxFQUFFO1FBQ0YsVUFBVSxFQUFFLGdDQUFnQztLQUM3QztJQUNELEVBQUUsRUFBRTtRQUNGLFVBQVUsRUFBRSxvQ0FBb0M7S0FDakQ7SUFDRCxFQUFFLEVBQUU7UUFDRixVQUFVLEVBQUUsK0JBQStCO0tBQzVDO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdMb2NhdGlvbiB9IGZyb20gJy4vZ3MtdGFibGVzLm1vZGVscyc7XG5cbmV4cG9ydCBjb25zdCBMT0NBVElPTjogeyBba2V5OiBzdHJpbmddOiBHTG9jYXRpb24gfSA9IHtcbiAgYXI6IHtcbiAgICB0YXg6IFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ0NVSVQgKEPDs2RpZ28gw5puaWNvIGRlIElkZW50aWZpY2FjacOzbiBUcmlidXRhcmlhKScsXG4gICAgICAgIHZhbHVlOiAnQ1VJVCdcbiAgICAgIH1cbiAgICBdLFxuICAgIGNvdW50cnk6IHtcbiAgICAgIG5hbWU6ICdBcmdlbnRpbmEnLFxuICAgICAgYWxwaGEyQ29kZTogJ0FSJ1xuICAgIH0sXG4gICAgcGhvbmVGb3JtYXQ6IHtcbiAgICAgIGNvZGU6ICc1NCcsXG4gICAgICBtYXNrOiAnMDAwIDAwMDAwMDAwJ1xuICAgIH0sXG4gICAgY3VycmVuY3lGb3JtYXQ6IHtcbiAgICAgIGNvZGU6ICdBUlMnLFxuICAgICAgc3ltYm9sOiAnJCcsXG4gICAgICB0aG91c2FuZHM6ICcuJyxcbiAgICAgIGRlY2ltYWw6ICcsJyxcbiAgICAgIHByZWNpc2lvbjogMlxuICAgIH1cbiAgfSxcbiAgYm86IHtcbiAgICB0YXg6IFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ1JVQyAoUmVnaXN0cm8gw5puaWNvIGRlIENvbnRyaWJ1eWVudGVzKScsXG4gICAgICAgIHZhbHVlOiAnUlVDJ1xuICAgICAgfVxuICAgIF0sXG4gICAgY291bnRyeToge1xuICAgICAgbmFtZTogJ0JvbGl2aWEnLFxuICAgICAgYWxwaGEyQ29kZTogJ0JPJ1xuICAgIH0sXG4gICAgcGhvbmVGb3JtYXQ6IHtcbiAgICAgIGNvZGU6ICc1OTEnLFxuICAgICAgbWFzazogJzAwMCAtIDAwMDAwMDAnXG4gICAgfSxcbiAgICBjdXJyZW5jeUZvcm1hdDoge1xuICAgICAgY29kZTogJ0JPQicsXG4gICAgICBzeW1ib2w6ICdCcy4nLFxuICAgICAgdGhvdXNhbmRzOiAnLicsXG4gICAgICBkZWNpbWFsOiAnLCcsXG4gICAgICBwcmVjaXNpb246IDJcbiAgICB9XG4gIH0sXG4gIGJyOiB7XG4gICAgdGF4OiBbXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdDUEYgKENhZGFzdHJvIGRlIFBlcnNvbmEgRsOtc2ljYSknLFxuICAgICAgICB2YWx1ZTogJ0NQRidcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdDTlBKIChDYWRhc3RybyBkZSBQZXJzb25hIEp1csOtZGljYSknLFxuICAgICAgICB2YWx1ZTogJ0NOUEonXG4gICAgICB9XG4gICAgXSxcbiAgICBjb3VudHJ5OiB7XG4gICAgICBuYW1lOiAnQnJhemlsJyxcbiAgICAgIGFscGhhMkNvZGU6ICdCUidcbiAgICB9LFxuICAgIHBob25lRm9ybWF0OiB7XG4gICAgICBjb2RlOiAnNTUnLFxuICAgICAgbWFzazogJzAwIDAgMDAwMCAwMDAwJ1xuICAgIH0sXG4gICAgY3VycmVuY3lGb3JtYXQ6IHtcbiAgICAgIGNvZGU6ICdCUkwnLFxuICAgICAgc3ltYm9sOiAnUiQnLFxuICAgICAgdGhvdXNhbmRzOiAnLicsXG4gICAgICBkZWNpbWFsOiAnLCcsXG4gICAgICBwcmVjaXNpb246IDJcbiAgICB9XG4gIH0sXG4gIGNhOiB7XG4gICAgZGlzYWJsZWQ6IHRydWUsXG4gICAgdGF4OiBbXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdTSU4gKFNvY2lhbCBJbnN1cmFuY2UgTnVtYmVyKScsXG4gICAgICAgIHZhbHVlOiAnU0lOJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogYE5BUyAobnVtw6lybyBkJ2Fzc3VyYW5jZSBzb2NpYWwpYCxcbiAgICAgICAgdmFsdWU6ICdOQVMnXG4gICAgICB9XG4gICAgXSxcbiAgICBjb3VudHJ5OiB7XG4gICAgICBuYW1lOiAnQ2FuYWRhJyxcbiAgICAgIGFscGhhMkNvZGU6ICdDQSdcbiAgICB9LFxuICAgIHBob25lRm9ybWF0OiB7XG4gICAgICBjb2RlOiAnMScsXG4gICAgICBtYXNrOiAnMDAwIDAwMCAwMDAwJ1xuICAgIH0sXG4gICAgY3VycmVuY3lGb3JtYXQ6IHtcbiAgICAgIGNvZGU6ICdDQUQnLFxuICAgICAgc3ltYm9sOiAnJCcsXG4gICAgICB0aG91c2FuZHM6ICcsJyxcbiAgICAgIGRlY2ltYWw6ICcuJyxcbiAgICAgIHByZWNpc2lvbjogMlxuICAgIH1cbiAgfSxcbiAgY2w6IHtcbiAgICB0YXg6IFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ1JVVCAoUm9sIMOabmljbyBUcmlidXRhcmlvKScsXG4gICAgICAgIHZhbHVlOiAnUlVUJ1xuICAgICAgfVxuICAgIF0sXG4gICAgY291bnRyeToge1xuICAgICAgbmFtZTogJ0NoaWxlJyxcbiAgICAgIGFscGhhMkNvZGU6ICdDTCdcbiAgICB9LFxuICAgIHBob25lRm9ybWF0OiB7XG4gICAgICBjb2RlOiAnNTYnLFxuICAgICAgbWFzazogJzAwIDAwMDAwMDAnXG4gICAgfSxcbiAgICBjdXJyZW5jeUZvcm1hdDoge1xuICAgICAgY29kZTogJ0NMUCcsXG4gICAgICBzeW1ib2w6ICckJyxcbiAgICAgIHRob3VzYW5kczogJywnLFxuICAgICAgZGVjaW1hbDogJy4nLFxuICAgICAgcHJlY2lzaW9uOiAwXG4gICAgfVxuICB9LFxuICBjbzoge1xuICAgIHRheDogW1xuICAgICAge1xuICAgICAgICBuYW1lOiAnTklUIChOw7ptZXJvIGRlIElkZW50aWZpY2FjacOzbiBUcmlidXRhcmlhKScsXG4gICAgICAgIHZhbHVlOiAnTklUJ1xuICAgICAgfVxuICAgIF0sXG4gICAgY291bnRyeToge1xuICAgICAgbmFtZTogJ0NvbG9tYmlhJyxcbiAgICAgIGFscGhhMkNvZGU6ICdDTydcbiAgICB9LFxuICAgIHBob25lRm9ybWF0OiB7XG4gICAgICBjb2RlOiAnNTcnLFxuICAgICAgbWFzazogJzAwMCAwMDAgMDAwMCdcbiAgICB9LFxuICAgIGN1cnJlbmN5Rm9ybWF0OiB7XG4gICAgICBjb2RlOiAnQ09QJyxcbiAgICAgIHN5bWJvbDogJyQnLFxuICAgICAgdGhvdXNhbmRzOiAnLicsXG4gICAgICBkZWNpbWFsOiAnLCcsXG4gICAgICBwcmVjaXNpb246IDBcbiAgICB9XG4gIH0sXG4gIGNyOiB7XG4gICAgZGlzYWJsZWQ6IHRydWUsXG4gICAgdGF4OiBbXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdOSVRFIChOw7ptZXJvIGRlIElkZW50aWZpY2FjacOzbiBUcmlidXRhcmlhIEVzcGVjaWFsKScsXG4gICAgICAgIHZhbHVlOiAnTklURSdcbiAgICAgIH1cbiAgICBdLFxuICAgIGNvdW50cnk6IHtcbiAgICAgIG5hbWU6ICdDb3N0YSBSaWNhJyxcbiAgICAgIGFscGhhMkNvZGU6ICdDUidcbiAgICB9LFxuICAgIHBob25lRm9ybWF0OiB7XG4gICAgICBjb2RlOiAnNTA2JyxcbiAgICAgIG1hc2s6ICcwMDAwMDAwMDAwMDAnXG4gICAgfSxcbiAgICBjdXJyZW5jeUZvcm1hdDoge1xuICAgICAgY29kZTogJ0NSQycsXG4gICAgICBzeW1ib2w6ICfigqEnLFxuICAgICAgdGhvdXNhbmRzOiAnLicsXG4gICAgICBkZWNpbWFsOiAnLCcsXG4gICAgICBwcmVjaXNpb246IDJcbiAgICB9XG4gIH0sXG4gIGVjOiB7XG4gICAgZGlzYWJsZWQ6IHRydWUsXG4gICAgdGF4OiBbXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdSVUMgKFJlZ2lzdHJvIMOabmljbyBkZSBDb250cmlidXllbnRlcyknLFxuICAgICAgICB2YWx1ZTogJ1JVQydcbiAgICAgIH1cbiAgICBdLFxuICAgIGNvdW50cnk6IHtcbiAgICAgIG5hbWU6ICdFY3VhZG9yJyxcbiAgICAgIGFscGhhMkNvZGU6ICdFQydcbiAgICB9LFxuICAgIHBob25lRm9ybWF0OiB7XG4gICAgICBjb2RlOiAnNTkzJyxcbiAgICAgIG1hc2s6ICcwMDAwMDAwMDAwMDAnXG4gICAgfSxcbiAgICBjdXJyZW5jeUZvcm1hdDoge1xuICAgICAgY29kZTogJ1VTRCcsXG4gICAgICBzeW1ib2w6ICckJyxcbiAgICAgIHRob3VzYW5kczogJywnLFxuICAgICAgZGVjaW1hbDogJy4nLFxuICAgICAgcHJlY2lzaW9uOiAyXG4gICAgfVxuICB9LFxuICBteDoge1xuICAgIHRheDogW1xuICAgICAge1xuICAgICAgICBuYW1lOiAnUkZDIChSZWdpc3RybyBGZWRlcmFsIGRlIENvbnRyaWJ1eWVudGVzKScsXG4gICAgICAgIHZhbHVlOiAnUkZDJ1xuICAgICAgfVxuICAgIF0sXG4gICAgY291bnRyeToge1xuICAgICAgbmFtZTogJ01leGljbycsXG4gICAgICBhbHBoYTJDb2RlOiAnTVgnXG4gICAgfSxcbiAgICBwaG9uZUZvcm1hdDoge1xuICAgICAgY29kZTogJzUyJyxcbiAgICAgIG1hc2s6ICcwMCAwMDAwMCAwMDAwJ1xuICAgIH0sXG4gICAgY3VycmVuY3lGb3JtYXQ6IHtcbiAgICAgIGNvZGU6ICdNWE4nLFxuICAgICAgc3ltYm9sOiAnJCcsXG4gICAgICB0aG91c2FuZHM6ICcsJyxcbiAgICAgIGRlY2ltYWw6ICcuJyxcbiAgICAgIHByZWNpc2lvbjogMlxuICAgIH1cbiAgfSxcbiAgcGU6IHtcbiAgICB0YXg6IFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ1JVQyAoUmVnaXN0cm8gw5puaWNvIGRlIENvbnRyaWJ1eWVudGVzKScsXG4gICAgICAgIHZhbHVlOiAnUlVDJ1xuICAgICAgfVxuICAgIF0sXG4gICAgY291bnRyeToge1xuICAgICAgbmFtZTogJ1BlcnUnLFxuICAgICAgYWxwaGEyQ29kZTogJ1BFJ1xuICAgIH0sXG4gICAgcGhvbmVGb3JtYXQ6IHtcbiAgICAgIGNvZGU6ICc1MScsXG4gICAgICBtYXNrOiAnMDAwMDAwMDAwMDAwJ1xuICAgIH0sXG4gICAgY3VycmVuY3lGb3JtYXQ6IHtcbiAgICAgIGNvZGU6ICdQRU4nLFxuICAgICAgc3ltYm9sOiAnUy8uJyxcbiAgICAgIHRob3VzYW5kczogJy4nLFxuICAgICAgZGVjaW1hbDogJywnLFxuICAgICAgcHJlY2lzaW9uOiAyXG4gICAgfVxuICB9LFxuICB1czoge1xuICAgIGRpc2FibGVkOiB0cnVlLFxuICAgIHRheDogW1xuICAgICAge1xuICAgICAgICBuYW1lOiAnVElOIChUYXhwYXllciBJZGVudGlmaWNhdGlvbiBOdW1iZXIpJyxcbiAgICAgICAgdmFsdWU6ICdUSU4nXG4gICAgICB9XG4gICAgXSxcbiAgICBjb3VudHJ5OiB7XG4gICAgICBuYW1lOiAnVW5pdGVkIFN0YXRlcycsXG4gICAgICBhbHBoYTJDb2RlOiAnVVMnXG4gICAgfSxcbiAgICBwaG9uZUZvcm1hdDoge1xuICAgICAgY29kZTogJzEnLFxuICAgICAgbWFzazogJzAwMCAwMDAgMDAwMCdcbiAgICB9LFxuICAgIGN1cnJlbmN5Rm9ybWF0OiB7XG4gICAgICBjb2RlOiAnVVNEJyxcbiAgICAgIHN5bWJvbDogJyQnLFxuICAgICAgdGhvdXNhbmRzOiAnLCcsXG4gICAgICBkZWNpbWFsOiAnLicsXG4gICAgICBwcmVjaXNpb246IDJcbiAgICB9XG4gIH0sXG4gIHV5OiB7XG4gICAgdGF4OiBbXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdSVVQgKFJlZ2lzdHJvIMOabmljbyBUcmlidXRhcmlvKScsXG4gICAgICAgIHZhbHVlOiAnUlVUJ1xuICAgICAgfVxuICAgIF0sXG4gICAgY291bnRyeToge1xuICAgICAgbmFtZTogJ1VydWd1YXknLFxuICAgICAgYWxwaGEyQ29kZTogJ1VZJ1xuICAgIH0sXG4gICAgcGhvbmVGb3JtYXQ6IHtcbiAgICAgIGNvZGU6ICc1OTgnLFxuICAgICAgbWFzazogJzAwMDAwMDAwMDAwMCdcbiAgICB9LFxuICAgIGN1cnJlbmN5Rm9ybWF0OiB7XG4gICAgICBjb2RlOiAnVVlVJyxcbiAgICAgIHN5bWJvbDogJyQnLFxuICAgICAgdGhvdXNhbmRzOiAnLCcsXG4gICAgICBkZWNpbWFsOiAnLicsXG4gICAgICBwcmVjaXNpb246IDJcbiAgICB9XG4gIH0sXG4gIHZlOiB7XG4gICAgZGlzYWJsZWQ6IHRydWUsXG4gICAgdGF4OiBbXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdSSUYgKFJlZ2lzdHJvIGRlIEluZm9ybWFjacOzbiBGaXNjYWwpJyxcbiAgICAgICAgdmFsdWU6ICdSSUYnXG4gICAgICB9XG4gICAgXSxcbiAgICBjb3VudHJ5OiB7XG4gICAgICBuYW1lOiAnVmVuZXp1ZWxhJyxcbiAgICAgIGFscGhhMkNvZGU6ICdWRSdcbiAgICB9LFxuICAgIHBob25lRm9ybWF0OiB7XG4gICAgICBjb2RlOiAnNTgnLFxuICAgICAgbWFzazogJzAwMCAwMDAgMDAwMCdcbiAgICB9LFxuICAgIGN1cnJlbmN5Rm9ybWF0OiB7XG4gICAgICBjb2RlOiAnVkVGJyxcbiAgICAgIHN5bWJvbDogJ0JzLicsXG4gICAgICB0aG91c2FuZHM6ICcuJyxcbiAgICAgIGRlY2ltYWw6ICcsJyxcbiAgICAgIHByZWNpc2lvbjogMFxuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IFRFWFRfVEFCTEU6IHsgW2tleTogc3RyaW5nXTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB9ID0ge1xuICBlczoge1xuICAgIE5PX0NPTlRFTlQ6ICdObyBoYXkgcmVnaXN0cm9zIGVuIGVzdGEgdGFibGEnLFxuICB9LFxuICBlbjoge1xuICAgIE5PX0NPTlRFTlQ6ICdUaGVyZSBhcmUgbm8gcmVjb3JkcyBpbiB0aGlzIHRhYmxlJyxcbiAgfSxcbiAgcHI6IHtcbiAgICBOT19DT05URU5UOiAnTsOjbyBow6EgcmVnaXN0cm9zIG5lc3RhIHRhYmVsYScsXG4gIH1cbn07XG4iXX0=