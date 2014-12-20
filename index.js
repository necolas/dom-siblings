/**
 * Module dependencies
 */

var matches = require('dom-matches');

/**
 * @param {Element} element
 * @param {String} [selector]
 * @return {Array}
 */
module.exports = function (element, selector) {
  var node = element.parentNode.firstChild;
  var siblings = [];

  for (; node; node = node.nextSibling) {
    if (node.nodeType === 1 && node !== element) {
      if (!selector) {
        siblings.push(node);
      }
      else if (matches(node, selector)) {
        siblings.push(node);
      }
    }
  }

  return siblings;
};
