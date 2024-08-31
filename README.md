# Git Clonator

Git Clonator es una aplicación desarrollada en Node.js con TypeScript que permite clonar múltiples repositorios de GitHub a una carpeta específica.

## Requisitos

-   **Node.js** v14.0.0 o superior
-   **Git** debe estar instalado y disponible en la línea de comandos

## Instalación

1. Clona este repositorio en tu máquina local:

    ```bash
    git clone <url-del-repositorio>
    ```

2. Clona este repositorio en tu máquina local:

    ```bash
    cd git-clonator

    ```

3. Instala las dependencias:
    ```bash
    npm install
    ```

## Uso

1. Para ejecutar la aplicación, utiliza el siguiente comando:
    ```bash
    npm start -- --file <ruta-del-archivo-txt> --output <nombre-de-la-carpeta-output>
    ```

### Parámetros

-   --file: Especifica la ruta a un archivo .txt que contiene una lista de URLs de repositorios a clonar, si no se envia uno, buscara `./repositorios.txt`. Cada URL debe estar en una nueva línea.
-   --output: Especifica el nombre de la carpeta donde se guardarán los repositorios clonados. Si la carpeta no existe, se creará automáticamente. Si no se envia este parametro se guardarna en `./repositorios_clonados`

## Ejemplo de Uso

1. Para ejecutar la aplicación, utiliza el siguiente comando:
    ```bash
    npm start -- --file repos.txt --output repositorios
    ```

### Detalle

Este comando leerá el archivo repos.txt y clonará los repositorios listados en una carpeta llamada repositorios.

## Logs

Durante la ejecución, se generará una carpeta llamada logs en el directorio raíz del proyecto. Esta carpeta contendrá tres archivos:

-   error.log: Contiene los errores que se produjeron durante la ejecución.
-   info.log: Contiene información general sobre la ejecución.
-   warn.log: Contiene advertencias que ocurrieron durante la ejecución.

# Importante

Es necesario tener Git instalado y configurado en tu entorno, ya que la aplicación utiliza el comando git a través de child_process.exec de Node.js para clonar los repositorios.

# Licencia

Este `README.md` proporciona una guía clara sobre cómo instalar y utilizar la aplicación, así como detalles sobre los parámetros y los logs generados.
