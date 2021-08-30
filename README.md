## Tabla de contenidos

-   [Estructura del proyecto](#Estructura-del-proyecto)
-   [Funcionalidades del template](#funcionalidades-del-template)
-   [Entorno](#entorno)
-   [Instalación](#instalación)
-   [Desarrollo](#desarrollo)
    -   [Run App](#run-app)
    -   [Lint](#lint)
    -   [Testing](#testing)
    -   [Actualizar el package.json](#actualizar-el-package.json)
    -   [Git commit](#git-commit)
    -   [Stubs](#stubs)
        -   [Como agregar mocks](#como-agregar-mocks)

# Estructura del proyecto

```
build/                        compiled version
docs/                        project docs and coding guides
src/                         project source code
|- app/                      app components
|  |- @core/                 core modules  (logger, configs, auth base, singleton)
|  |- @shared/               shared modules  (common components, styles and utils)
|  |-
coverage/                    test and coverage reports
```

## Entorno

-   [nodejs](https://nodejs.org/) (testeado con 12 y 14)
-   [npm](https://www.npmjs.com) (version 6.4.1 o superior)
-   [nest](https://nestjs.com/) (version 7.6.13)

---

## Instalación

```bash
$ npm install
```

Luego generar el archivo `.env` en base de `.env.example`

```bash
# si tenes linux podes usar esto
$ sh env-create.sh
```

Y luego reemplazar las siguiente variables:

-   **_APP_PORT_**: Indicar el puerto que deseas, por defecto es 3000.
-   **_NODE_ENV_**: production|development|staging|etc

---
