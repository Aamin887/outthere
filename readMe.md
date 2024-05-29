# Outthere Cli

## Overview

Outthere is a command-line interface (CLI) application that provides real-time weather information. With outthere, you can easily check the current weather conditions for any city around the world directly from your terminal.

## Features

- Get current weather information for any city
- Display temperature, humidity, wind speed, and weather description (coming soon)
- Support for multiple units (Celsius, Fahrenheit) (coming soon)
- Easy-to-use command-line interface

## Installation

To install outthere, you need to have node installed on your machine. You can install node via npm:

```bash
npm install outthere
```

## Usage

Once installed, you can use WeatherCLI by typing weathercli followed by the desired options and arguments.

## Basic Command

outthere support several commands which determine the what the application should do:

> note: you must specify an option. Accepts one option at a time

> today: get current weather information

> forecast: get weather information for the next 5 day

## Options

outthere supports several options to customize the output, all of these options are optional except the option for --location or -l:

- -l, --location: spectify the location to get the weather information

- -u, --units : Specify the units for temperature. Accepts metric for Celsius (default) and imperial for Fahrenheit.

- -h, --help : Show help message and exit.

To check the weather for today, use the following command:

```bash
outthere today -l <city_name>
```

## Example

Get the current weather in london:

```bash
outthere today -l london
```

Display help message:

```bash
outthere --help
```

## Configuration

outthere requires an API key from a weather service provider (e.g., OpenWeatherMap). You can set your API key using an environment variable.

- Obtain an API key from OpenWeatherMap.

- Set the WEATHER_API_KEY environment variable in your shell configuration file (e.g., .bashrc, .zshrc):

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository
2. Create a new branch (git checkout -b feature-branch)
3. Commit your changes (git commit -am 'Add new feature')
4. Push to the branch (git push origin feature-branch)
5. Create a new Pull Request

## License

outthere is licensed under the MIT License. See the LICENSE file for more information.

## Contact

For any issues or suggestions, please open an issue on the GitHub repository or contact the maintainer at [EMAIL](mailto:forkahamin@yahoo.co.uk)
