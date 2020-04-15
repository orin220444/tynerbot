const linker = require('../helpers/linker.js');
module.exports = (ctx) => {
  const url = linker.getLink(ctx.message);
  console.log(url);
};
