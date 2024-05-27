const menus = {
  main: `
    outthere [command] <option>

    today .................. show weather for today
    forecast .................. show weather for the next 3 days
    version ................ show package version
    help ................... show help menu for a command
  `,
  today: `
    outthere today <option>

    --location, -l ........ the location to use
  `,
  forecast: `
    outthere forecast <option>

    --location, -l ........ the location to use
  `,
};

module.exports = menus;
