const minimist = require("minimist");
const { today, help, version } = require("./cmd/index.js");

function main() {
  const args = minimist(process.argv.slice(2));

  let cmd = args._[0] || "help";

  if (args.version || args.v) {
    cmd = "version";
  }

  if (args.help || args.h) {
    cmd = "help";
  }

  switch (cmd) {
    case "today":
      today(args);
      break;
    case "help":
      help(args);
      break;
    case "version":
      version();
      break;
    default:
      console.log(`${cmd} is not a valid command`);
  }
}

module.exports = main;
