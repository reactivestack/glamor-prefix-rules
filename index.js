function prefixRules(prefix) {
  return function(options) {
    return {
      selector: options.selector
        .split(',')
        .map(s => prefix + ' ' + s)
        .join(','),
      style: options.style
    };
  };
}

module.exports = prefixRules;
