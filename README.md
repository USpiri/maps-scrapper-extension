<a name="readme-top"></a>

# 🗺️ Maps Scrapper Extension

<p align="center">
  <img src="https://github.com/user-attachments/assets/6e250c03-be6a-4637-b08f-8ee3c768dd2f" alt="maps scrapping extension screenshot" width="400" />
  <br>
  <em>Extensión web para navegador con React que permite hacer scrapping de datos en Google Maps.</em>
  <br>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"/>
  •
  <img src="https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white" />
  •
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
  •
  <img src="https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E" />
  •
  <img src="https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white" />
  •
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
</p>

## About Maps Scrapper Extension

Este proyecto, creado con React y Vite, es una extensión para Google Chrome que permite a los usuarios realizar scraping de los resultados de búsqueda en Google Maps y la presenta de manera organizada para su uso posterior en análisis de datos o investigación de mercado, permitiendo descargar los datos como archivo `.csv` o `.json`. 

![133shots_so](https://github.com/user-attachments/assets/3bf454da-d86f-4089-84cf-86ebcd8d655e)

Diseñada para recopilar información de negocios, lugares, profesionales listados en Google Maps. Permitiendo un acceso rápido para análisis de mercado, leads y generación de bases de datos. Especialmente útil para obtener **insights comerciales**.
 
## 🛠️ Tecnologías utilizadas

- [React](https://es.react.dev/): Framework principal del proyecto, en su última versión.
- [Tailwind](https://tailwindcss.com/): Framework css para añadir estilos.
- [Eslint](https://eslint.org/) y [Prettier](https://prettier.io/): Formato y calidad de código.

## 🚀 Features

- **Diseño**: Diseño minimalista, accesible e intuitiva.
- **Scrapping**: Captura toda la información visible de los resultados de búsqueda en Google Maps.
- **Data**:  Obtiene detalles como nombre del lugar, dirección, calificación, número de reseñas, tipo de negocio y más.
- **Exportación de datos** (simulada): Permite la exportación de los datos extraídos en formato `.csv` como `.json` para facilitar su análisis.

![maps](https://github.com/user-attachments/assets/c326ef38-2787-43cd-b8c1-55971ef9949c)

## Usage

1. Ve a `https://www.google.com/maps/search/`.
2. Realiza una búsqueda.
3. Abre la extensión.
4. Inicia el scrapping.
5. Descarga los datos 🎉

## Data Types


```json
{
    "title": "COMPANY S.A",
    "avgRating": 4.8,
    "reviewsCount": 941,
    "address": "Street 123",
    "description": "Best company ever",
    "category": "Tech",
    "time": "Open 24h",
    "phone": "12345678",
    "features": [
        "React",
        "Tailwind",
        "Vite"
    ],
    "isAccessible": false,
    "latitude": "40.7262904",
    "longitude": "-73.9945834",
    "image": "...",
    "website": "...",
    "mapLink": "...",
    "dataId": "0x00c0000a00e00000:0xbf00000000b00bd0"
}
```

| Name           | Type            | Description                                                                      |
| -------------- | --------------- | -------------------------------------------------------------------------------- |
| `title`        | `string`        | Result name                                                                      |
| `avgRating`    | `string`        | Average rating on Google Maps                                                    |
| `reviewsCount` | `number`        | Number of reviews the result has                                                 |
| `address`      | `string`        | Physical address of the result                                                   |
| `description`  | `string`        | Brief description of the result                                                  |
| `category`     | `string`        | Category or sector to which the result belongs                                   |
| `time`         | `string`        | Timing (aprox.)                                                                  |
| `phone`        | `string`        | Contact phone number                                                             |
| `features`     | `array[string]` | Extra services.                                                                  |
| `isAccessible` | `boolean`       | Indicates whether the company is accessible (e.g. for people with disabilities). |
| `latitude`     | `string`        | Location latitude                                                                |
| `longitude`    | `string`        | Location longitude                                                               |
| `image`        | `string`        | Result image                                                                     |
| `website`      | `string`        | Result website                                                                   |
| `mapLink`      | `string`        | Result Google Maps link                                                          |
| `dataId`       | `string`        | Id                                                                               |

## Estructura de Carpetas
```bash
dist/                              # Extension
public/
├── ...
└── manifest.json                  # Extension config
src/
├── components/                    # Components folder
├── hooks/                         # Custom Hooks
├── models/                        # Interfaces
├── utils/                         # Browser actions and other utilities
├── App.tsx
├── main.tsx
└── styles.css                     # Global styles and tailwind config
```

## Instalación y ejecución

> [!WARNING]
> Debes hacer build y cargar la extensión en el navegador antes de usar
>
> 1. Navega a `chrome://extensions/`.
> 2. Activa el *Developer mode*.
> 3. Clickea el botón *"Load unpacked extension"*.
> 4. Selecciona el directorio de la carpeta `/dist`. **Importante**.

### Instalar dependencias

```
npm install
```

### Build on save

```
npm run dev
```

### Build

```
npm run build
```

