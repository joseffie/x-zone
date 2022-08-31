// Bem-Create template for creating *.pug files

const { EOL } = require('os');

// eslint-disable-next-line func-names
module.exports = function (entity, naming) {
  return [
    `mixin ${naming.stringify(entity)}`,
    '  div&attributes(attributes)',
    '    .container',
  ].join(EOL);
};
