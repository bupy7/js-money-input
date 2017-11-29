js-money-input
==============

The money input with any numbers digits after comma and negative mode 

Install
-------

**Install via the Bower:**

```
bower install js-money-input
```

**Install through the Npm:**

```
npm install js-money-input
``` 

Usage
-----

```html
<input id="money" type="text" value="542.23">

<script type="text/javascript" src="js-lib-url/dist/money-input.min.js"></script>
<script type="text/javascript">
var moneyInput = new MoneyInput('#money');
</script>
```

Options
-------

MoneyInput class have four parameters:

- `input` (string|object) - Input selector or HTML-object.
- `round` (?integer) - Number of decimal digits to round to. *[optional]*
- `negative` (?boolean) - Whether or not contain negative value. *[optional]*
- `init` (?boolean) - Whether autoinit formatter. *[optional]*

License
-------

js-money-input is released under the BSD 3-Clause License.

