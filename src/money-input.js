/**
 * @version 1.0.1
 */
var MoneyInput = (function() {
    'use strict';
    /**
     * @param {string|object} input Input selector or object.
     * @param {?integer} round Number of decimal digits to round to.
     * @param {?boolean} negative Whether or not contain negative value.
     * @returns {Money}
     */
    function MoneyInput(input, round, negative) {
        this.input = typeof input == 'string' ? document.querySelector(input) : input;
        this.round = round || 4;
        this.negative = negative || true;
        this.init();
    }
    MoneyInput.prototype.init = function() {
        this.format();
        this._attachEvents();
    };
    MoneyInput.prototype.format = function() {
        var value = this.input.value;
        if (this.negative) {
            var negative = /^-/.test(value);
        }
        value = value.replace(/(,|\.|\s)/g, '.')
            .replace(/[^\d|^\.]/g, '')
            .replace(/(\.[\d]*)(\.)$/, '$1')
            .replace(new RegExp('(\\.[\\d]{' + this.round + '})([\\d]+)$'), '$1');
        this.input.value = negative ? '-' + value : value;
    };
    MoneyInput.prototype._attachEvents = function() {
        this.input.addEventListener('keyup', this.format.bind(this));
    };
    return MoneyInput;
})();
