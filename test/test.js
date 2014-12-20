var siblings = require('..');

describe('siblings(elem[, selector])', function () {
  var fixture, one, two, three;

  beforeEach(function () {
    fixture = document.createElement('div');
    fixture.innerHTML = '' +
      '<div id="one" class="foo">text</div>' +
      '<div id="two" class="foo bar">text</div>' +
      '<div id="three" class="foo baz">text</div>';

    document.body.appendChild(fixture);
    one = document.getElementById('one');
    two = document.getElementById('two');
    three = document.getElementById('three');
  });

  afterEach(function () {
    document.body.removeChild(fixture);
  });

  it('returns the correct siblings', function () {
    var result = siblings(two);
    expect(result.length).toBe(2);
    expect(result[0].id).toBe('one');
    expect(result[1].id).toBe('three');
  });

  it('returns the siblings filtered by a selector', function () {
    var result = siblings(two, '.baz');
    expect(result.length).toBe(1);
    expect(result[0].id).toBe('three');
  });
});
