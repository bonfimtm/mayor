# Ney Bonfim

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) and is currently built with **Angular 22**.

## Prerequisites

- **Node.js** 24 LTS (also works on the 20.19+ / 22.12+ LTS lines)
- **npm** 10+

## Development server

Run `npm start` (or `ng serve`) for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new standalone component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum`.

## Build

Run `npm run build` (or `ng build`) to build the project. Production is the default configuration; artifacts are written to `dist/mayor/browser/`.

## Linting

Run `npm run lint` to lint the project with [ESLint](https://eslint.org/) (via [angular-eslint](https://github.com/angular-eslint/angular-eslint)).

## Cloud Functions

The `functions/` directory contains the Firebase Cloud Functions (Node.js 22 runtime). Build them with `npm run build` inside that folder.

Configuration is provided via Functions secrets/params instead of the deprecated `functions.config()`:

```bash
firebase functions:secrets:set GMAIL_EMAIL
firebase functions:secrets:set GMAIL_PASSWORD
# SITECONTACT_RECIPIENTS is requested at deploy time
```

## Deploy

Run `npm run deploy` to build and deploy the site to Firebase Hosting.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
