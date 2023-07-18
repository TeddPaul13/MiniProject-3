const Team = require("./teams");
async function init () {
await Team.sync();
};
init();
module.exports = {
  Team,
};