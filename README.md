## Interview
Nexus administrators must be able to create data sources (DataSources) that will then be used by other services in the application.
This new user interface must access two Nexus resources through the API. These resources are connections and data sources. A "connection" describes the connection to an internal or external database, and the data source describes a query to a database using a connection. These data sources are used in Nexus for predictive and typed texts that obtain information from external databases in real time.
For the purposes of this challenge, it is not necessary to know the operation of the connections and data sources since we will only perform the CRUD operations of these resources.

## Acceptance Requirements

- The administrator enters the list of DataSources where all the existing DataSources are displayed
- Using the "New" button, the administrator navigates to the Datasources creation form
- The administrator fills in the data of the new Datasource
- Using the "Save" button confirms the data and automatically returns to the Datasources list
## Table of Contents

-   [Scaffolding](#Scaffolding)
-   [Environment](#Environment)
-   [Install](#Install)

## Scaffolding

```
build/                       compiled version
src/                         project source code
|  |- components/            Componentes proyect (Dialog, Layout, Logo, Navbar, ..etc)
|  |- context/               Provider Store (DataSourceContext, ConnectionContext)
|  |- hook/                  customhook (useDatasource, useConnections)
|  |- pages/                 Pages Router (Login, Home, DataSource, NotFound)
|  |- service/               service module (Axios Config, Nexxus Api)
|  |- shared/                shared modules  (styles, static and utils)
|  |-
coverage/                    test and coverage reports
```

## Environment

-   [nodejs](https://nodejs.org/)
-   [npm](https://www.npmjs.com)

---

## Install

```bash
$ npm install
```

## Docker


```
docker build -f Dockerfile -t optimus .
docker run -d -p 9000:80 --name optimus optimus
```

Open your browser at http://localhost:9000/

## Extras
- Use of TypeScript is appreciated.
- We would like to be able to edit the existing Connections and create new ones from the same “New Datasource” page, without the need to navigate to another page and with as few clicks as possible. In the type field of the Connection always use "sql".