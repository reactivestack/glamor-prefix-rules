const prefixRules = prefix =>
  ({ selector, style }) => ({
    selector: selector.split(',').map(s => `${prefix} ${s}`).join(','),
    style,
  });

module.exports = prefixRules;
