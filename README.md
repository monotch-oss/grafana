![Grafana](docs/logo-horizontal.png)


INSTALLATION GUIDELINES:

# Building Grafana from source
This guide will help you create packages from source and get grafana up and running in dev environment. Grafana ships with its own required backend server and It’s written in Go language and has a full HTTP API.

## Dependencies
- Go (Latest Stable, go1.19.2 linux/amd64 is recommended)
- Git
- NodeJS LTS (16.15.1 LTS is recommended)
  node-gyp is the Node.js native addon build tool, and it requires extra dependencies: python 2.7, make and GCC. These are already installed for most Linux distros.

**Note**
As we could not find the proper way to install the latest Go and Node yet, The distribution packages are used to build and run the project by exporting the path

## Building the backend
- make gen-go
- go run build.go setup
- go run build.go build              # (or 'go build ./pkg/cmd/grafana-server')
  These commands executions will create grafana server in bin folder(bin/grafana-server)

**Note**
Sometime you may need to Install C, C++ Compiler and Development (build-essential) Tools in Debian/Ubuntu.The build-essential software contains an informational list of software's which are treated as important for building Debian packages including gcc compiler, make and other needed tools
- sudo apt-get install build-essential

## Build the Frontend Assets
- create a folder named .git inside application folder
- npm install -g yarn
- yarn install --immutable
- yarn start

## Running Grafana Locally

You can run a local instance of Grafana by running:

- ./bin/**/grafana-server

Open grafana in your browser (default http://localhost:3000) and login with admin user (default username/passwaord = admin/admin).

**Note**
Live editing is possible with yarn start command but you might have to restart the grafana-server in order to see changes (run ./bin/grafana-server)

## Creating docker image and run
Following command will create docker image with dev tag
- make build-docker-full
- docker run -d -p 4200:3000 grafana/grafana:dev

## Some useful commands
- Export path : export PATH="$PATH:<path_to_export>"
- Use yarn start:hot following command if live editing is not working
- "sudo sysctl fs.inotify.max_user_watches=524288" (frontend auto builds when changes made to file - live editing)


The open-source platform for monitoring and observability

[![License](https://img.shields.io/github/license/grafana/grafana)](LICENSE)
[![Drone](https://drone.grafana.net/api/badges/grafana/grafana/status.svg)](https://drone.grafana.net/grafana/grafana)
[![Go Report Card](https://goreportcard.com/badge/github.com/grafana/grafana)](https://goreportcard.com/report/github.com/grafana/grafana)

Grafana allows you to query, visualize, alert on and understand your metrics no matter where they are stored. Create, explore, and share dashboards with your team and foster a data-driven culture:

- **Visualizations:** Fast and flexible client side graphs with a multitude of options. Panel plugins offer many different ways to visualize metrics and logs.
- **Dynamic Dashboards:** Create dynamic & reusable dashboards with template variables that appear as dropdowns at the top of the dashboard.
- **Explore Metrics:** Explore your data through ad-hoc queries and dynamic drilldown. Split view and compare different time ranges, queries and data sources side by side.
- **Explore Logs:** Experience the magic of switching from metrics to logs with preserved label filters. Quickly search through all your logs or streaming them live.
- **Alerting:** Visually define alert rules for your most important metrics. Grafana will continuously evaluate and send notifications to systems like Slack, PagerDuty, VictorOps, OpsGenie.
- **Mixed Data Sources:** Mix different data sources in the same graph! You can specify a data source on a per-query basis. This works for even custom datasources.

## Get started

- [Get Grafana](https://grafana.com/get)
- [Installation guides](http://docs.grafana.org/installation/)

Unsure if Grafana is for you? Watch Grafana in action on [play.grafana.org](https://play.grafana.org/)!

## Documentation

The Grafana documentation is available at [grafana.com/docs](https://grafana.com/docs/).

## Contributing

If you're interested in contributing to the Grafana project:

- Start by reading the [Contributing guide](https://github.com/grafana/grafana/blob/HEAD/CONTRIBUTING.md).
- Learn how to set up your local environment, in our [Developer guide](https://github.com/grafana/grafana/blob/HEAD/contribute/developer-guide.md).
- Explore our [beginner-friendly issues](https://github.com/grafana/grafana/issues?q=is%3Aopen+is%3Aissue+label%3A%22beginner+friendly%22).
- Look through our [style guide and Storybook](https://developers.grafana.com/ui/latest/index.html).

## Get involved

- Follow [@grafana on Twitter](https://twitter.com/grafana/).
- Read and subscribe to the [Grafana blog](https://grafana.com/blog/).
- If you have a specific question, check out our [discussion forums](https://community.grafana.com/).
- For general discussions, join us on the [official Slack](https://slack.grafana.com) team.

## License

Grafana is distributed under [AGPL-3.0-only](LICENSE). For Apache-2.0 exceptions, see [LICENSING.md](https://github.com/grafana/grafana/blob/HEAD/LICENSING.md).
