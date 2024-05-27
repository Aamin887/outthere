const { version: v } = require("../package.json");
const menus = require("../data/menus");
const ora = require("ora");
const fehToCel = require("../utils/fehrenheitToCelsius");
const getWeather = require("../utils/getWeather");

async function today(args) {
  const location = args?.location || args?.l;
  const spinner = ora().start();

  try {
    const weather = await getWeather(location);

    spinner.stop();
    console.log(`Current conditions in ${location}:\n`);
    console.log(
      `\t${weather.current.temp_c}° ${weather.current.condition.text}`
    );
  } catch (error) {
    spinner.stop();
    console.log(error);
  }
}

function help(args) {
  const subCmd = args._[0] === "help" ? args._[1] : args._[0];
  console.log(menus[subCmd] || menus.main);
}

function version() {
  console.log(`version: ${v}`);
}

module.exports = {
  today,
  help,
  version,
};
