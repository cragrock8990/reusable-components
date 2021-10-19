       export const KeyMasks = {
                    all: /[^\s\S\d\D]/g,
                    alpha: /[^a-z\s]/gi,
                    alphaNumeric: /[^a-z0-9\s]/gi,
                    alphaSymbols: /[^\D]/gi,
                    positiveInteger: /[^\d]/g,
                    integer: /[^\d\-]/g,
                    positiveDecimal: /[^\d\.]/g,
                    decimal: /[^\d\-\.]/g,
                    phoneNumber: /[^\d\+]/g,
                    email: /[^\x21-\x5f|\x61-\x7E]/gi,
                    firstAndLastName: /[^a-z-\u2018\u2019'\s\xC0-\xD6\xD8-\xF6\xF8-\xFF]/gi,
                    bankName: /[^a-z-\u2018\u2019'&,.\s\xC0-\xD6\xD8-\xF6\xF8-\xFF]/gi,
                    address: /[^a-z-\u2018\u2019'&,./\d\s\xC0-\xD6\xD8-\xF6\xF8-\xFF]/gi
                };

       export const KeyMaskReactiveFormsValidationPatterns = {
                    alpha: /^[A-Za-z ]+$/,
                    alphaSymbols: /^[\D]*$/,
                    positiveInteger: /^(0|[1-9]\d*)$/,
                    integer: /^-?(0|[1-9]\d*)$/,
                    positiveDecimal: /^(0|0\.\d+|[1-9]|[1-9]\d*\.?\d+)$/,
                    decimal: /^-?(0|0\.\d+|[1-9]|[1-9]\d*\.?\d+)$/,
                    phoneNumber: /^(0044\d{10}|\+44\d{10}|0\d{10})$/,
                    email: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    postcode: /^[a-zA-Z]{1,2}([0-9]{1,2}|[0-9][a-zA-Z])\s*[0-9][a-zA-Z]{2}$/
                };
