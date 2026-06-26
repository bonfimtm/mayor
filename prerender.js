/*
 * Static prerenderer for Firebase Hosting.
 *
 * The @nguniversal/builders:prerender builder (v10) renders sub-routes in
 * worker threads that fail silently on modern Node, so only "/" was emitted.
 * This script renders every route in-process using the already-built server
 * bundle and writes one static index.html per route into the browser output.
 *
 * Run after `npm run build:ssr` (which produces dist/mayor/browser and
 * dist/mayor/server/main.js).
 */
const fs = require('fs');
const path = require('path');

const BROWSER_DIR = path.join(__dirname, 'dist', 'mayor', 'browser');
const SERVER_BUNDLE = path.join(__dirname, 'dist', 'mayor', 'server', 'main.js');

// Keep in sync with src/app/app-routing.module.ts.
const ROUTES = ['/', '/recorrer-infracoes-de-transito'];

const template = fs.readFileSync(path.join(BROWSER_DIR, 'index.html'), 'utf8');
const { AppServerModule, renderModule } = require(SERVER_BUNDLE);

async function prerender() {
  for (const route of ROUTES) {
    const html = await renderModule(AppServerModule, {
      document: template,
      url: route,
    });

    const outDir = route === '/' ? BROWSER_DIR : path.join(BROWSER_DIR, ...route.split('/'));
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(path.join(outDir, 'index.html'), html);
    console.log('Prerendered', route, '->', path.relative(__dirname, path.join(outDir, 'index.html')));
  }
}

prerender().catch((err) => {
  console.error('Prerendering failed:', err);
  process.exit(1);
});
