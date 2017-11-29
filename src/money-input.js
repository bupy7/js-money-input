var MoneyInput = (function() {
    'use strict';
    
    /**
     * @param {string|object} input Input selector or object.
     * @param {?integer} round Number of decimal digits to round to.
     * @param {?boolean} negative Whether or not contain negative value.
     * @param {?boolean} init Whether autoinit formatter.
     * @returns {Money}
     */
    function MoneyInput(input, round, negative, init) {
        this.input = typeof input == 'string' ? document.querySelector(input) : input;
        this.round = typeof round === 'undefined' ? 4 : round;
        this.negative = typeof negative === 'undefined' ? true : negative;
        
        if (typeof init === 'undefined' ? true : init) {
            this.init();
        }
    }
    
    MoneyInput.prototype.init = function() {
        this.format();
        this.attachEvents();
    };
    MoneyInput.prototype.format = function(event) {
        var value = this.input.value, 
        	negative = false;
            
        if (this.negative) {
            negative = /^-/.test(value);
        }
        
        value = value.replace(/(,|\.|\s)/g, '.');
        var parts = value.split('.', 2),
        	result = [];
      	
        if (parts.length > 0 && this.round > 0) {
            result.push(parts[0].replace(/[^\d]/g, ''));
            
            if (parts[1] !== undefined) {
            	var scale = parts[1].match(new RegExp('^[\\d]{0,' + this.round + '}'));
                if (scale !== null) {
              	    result.push(scale[0]);
                }
            }
        }

        var prefix = negative ? '-' : '';
        
        this.input.value = prefix + result.join('.');
    };
    
    /**
     * @since 1.1.0
     */
    MoneyInput.prototype.attachEvents = function() {
        this.input.addEventListener('keyup', this.format.bind(this));
        this.input.addEventListener('change', this.format.bind(this));
    };
    
    /**
     * @since 1.1.0
     */
    MoneyInput.prototype.detachEvents = function () {
        this.input.removeEventListener('keyup', this.format.bind(this));
        this.input.removeEventListener('change', this.format.bind(this));
    };

    return MoneyInput;
})();
