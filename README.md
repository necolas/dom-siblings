# dom-siblings

[![Build Status](https://secure.travis-ci.org/necolas/dom-siblings.png?branch=master)](http://travis-ci.org/necolas/dom-siblings)

Find a DOM element's siblings, optionally filtered by a CSS selector.

## Installation

```
npm install dom-siblings
```

## API

### siblings(element, selector)

* `element`: a DOM Element.
* `selector`: a CSS selector string.

```js
var siblings = require('dom-siblings');
var element = document.querySelector('div');

siblings(element);
// => [Element, Element]
// all sibling elements

siblings(element, '.foo');
// => [Element]
// all sibling elements with class 'foo'
```

## Browser support

* Google Chrome
* Firefox 4+
* Internet Explorer 8+
* Safari 5+
* Opera
