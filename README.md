## Tabla de contenidos

-   [Estructura del proyecto](#Estructura-del-proyecto)
-   [Funcionalidades del template](#funcionalidades-del-template)
-   [Entorno](#entorno)
-   [Instalación](#instalación)

# Estructura del proyecto

```
build/                       compiled version
src/                         project source code
|  |- components/            Componentes proyect (Dialog, Layout, Logo, Navbar, ..etc)
|  |- context/               Provider Store (DataSourceContext, ConnectionContext)
|  |- hook/                  customhook (useDatasource, useConnections)
|  |- pages/                 Pages Router (Login, Home, DataSource, NotFound)
|  |- service/               service module (Axios Config, Nexxus Api)
|  |- shared/               shared modules  (styles, static and utils)
|  |-
coverage/                    test and coverage reports
```

## Entorno

-   [nodejs](https://nodejs.org/)
-   [npm](https://www.npmjs.com) (version 6.4.1 o superior)

---

## Instalación

```bash
$ npm install
```

