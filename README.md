Arquetipo aplicación NextJS con autenticación (NextAuth), i18n y temas actualizados (dark/light mode).

# Resumen / dependencias

- Next (v12) + React (v18) + Recoil
- Autenticación - `next-auth@4`
- i18n - `next-i18next@11`
- Componentes - `tailwindcss@3 + primereact@8`
- Temas - `next-themes`

# Configuración autenticación

### Variables de entorno (Generales)

|              Name              |     Description     |
| :----------------------------: | :-----------------: |
|     `NEXT_PUBLIC_ENV_NAME`     |       Entorno       |
| `NEXT_PUBLIC_GRAPHQL_ENDPOINT` | Endpoint de GraphQL |

### Variables de entorno (NextAuth)

|                       Name                        |                             Description                              |
| :-----------------------------------------------: | :------------------------------------------------------------------: |
|                  `NEXTAUTH_URL`                   |        URL base de la aplicación. Donde redirecciona NextAuth        |
| `NEXT_PUBLIC_NEXTAUTH_SESSION_REFETCH_IN_SECONDS` |       Frecuencia en segundos en la que se comprueba la sesión        |
|             `NEXTAUTH_AWS_ACCESS_KEY`             |          Clave de acceso. Autenticación con AWS (DynamoDB)           |
|               `NEXTAUTH_AWS_REGION`               |               Región. Autenticación con AWS (DynamoDB)               |
|             `NEXTAUTH_AWS_SECRET_KEY`             |           Clave secreta. Autenticación con AWS (DynamoDB)            |
|               `NEXTAUTH_EMAIL_FROM`               |            Email desde donde se envían las noticiaciones             |
|               `NEXTAUTH_JWT_SECRET`               |            Clave secreta para la generación del token JWT            |
|     `NEXTAUTH_JWT_SESSION_MAX_AGE_IN_SECONDS`     |                  Duración en segundos del token JWT                  |
|     `NEXTAUTH_REFRESH_SESSION_GAP_IN_MINUTES`     | Tiempo en minutos en la que se antepone el refresco de la sesión JWT |
|                 `NEXTAUTH_SECRET`                 |       Clave secreta para encriptación de la sesión de NextAuth       |
|               `NEXTAUTH_TABLE_NAME`               |              Nombre de la tabla de usuarios (DynamoDB)               |

# Variables de entorno (NextAuth - Providers)

|               Name               |       Description        |
| :------------------------------: | :----------------------: |
|   `NEXTAUTH_DISCORD_CLIENT_ID`   |   Client id de Discord   |
| `NEXTAUTH_DISCORD_CLIENT_SECRET` | Client secret de Discord |
|   `NEXTAUTH_GOOGLE_CLIENT_ID`    |   Client id de Google    |
| `NEXTAUTH_GOOGLE_CLIENT_SECRET`  | Client secret de Google  |
|   `NEXTAUTH_TWITTER_CLIENT_ID`   |   Client id de Twitter   |
| `NEXTAUTH_TWITTER_CLIENT_SECRET` | Client secret de Twitter |

# Configuración i18n

1. Revisar archivo de configuración `next-i18next.config.js` para indicar los idiomas permitidos, el idioma por defecto y la ubicación de los archivos de texto.

2. Añadir los archivos `json` por cada uno de los idiomas.

3. Añadir la librería como un provider en `_app.js`;

```typescript
const AppWithI18n = appWithTranslation(App);
```

4. Cargar los archivos correspondientes en cada página con SSR.

```typescript
export const getServerSideProps = async ({ locale }: NextPageContext) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});
```

5. Cargar los textos con el hook `useTranslation`.

```typescript
const { t } = useTranslation("common");
console.log("Ejemplo: ", t<string>("common.example"));
```

Para más información, revisar la documentación del plugin [next-i18next](https://github.com/i18next/next-i18next).

# Configuración temas

1. Configuración de variables de la librería de componentes. `src/styles/theme.css`
2. Configuración de `tailwind.config.ts`

Revisar todas las variables expuestas en [README de la librería de componentes](https://github.com/JoinTheRedPill/react-component-library/blob/master/readme.md)