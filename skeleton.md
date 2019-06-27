<!-- Dev -->

#0 new Angular 8 Project - Date 07/06/2019

```
ng new <my-app> --routing=true --skipTests=true --prefix=<xxx> --style=sass --enable-ivy
```
<!-- Verificamos en tsconfig.app.json -->
"angularCompilerOptions": { "enableIvy": true } --> Ivy Renderer: nuevo motor de A8

# COLORS
  - Primary: #20272a
  - Secondary:
  - Link Color:
  box-shadow: 0 2px 5px 0 rgba(0,0,0,.3)

# TYPOGRAPHY
  - Primary: Baloo Tamma
  - Secondary: Varela Round
<!-- en index.html agregamos fuentes de google -->
<!-- Google Fonts -->
<link href="https://fonts.googleapis.com/css?family=Baloo+Tamma|Varela+Round&display=swap" rel="stylesheet">

# TREE
  app
    ► modules
        ► session
        ► header
        ► main
        ► footer
    ► interfaces
        ► Iclass
    ► services
        ► oauth
        ► product
    ► assets

<!-- TODOs creamos los componentes iniciales -->
ng g c modules/session
ng g c modules/header
ng g c modules/main
ng g c modules/footer
ng g i interfaces/Iclass
ng g s services/oauth
ng g s services/product

<!-- npm instalamos la tabla y su config -->
npm i primeng primeicons primeflex -S
npm i @angular/animations -S (importar en app.module.ts)
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

<!-- en angular.json -->
agregamos en **styles** los paths de primeng, primeicons y primeflex
"node_modules/primeflex/primeflex.css",
"node_modules/primeicons/primeicons.css",
"node_modules/primeng/resources/themes/nova-light/theme.css",
"node_modules/primeng/resources/primeng.min.css",

<!-- Primeng solución parcial para Angular 8 instalar-->
npm install --save web-animations-js
<!-- y en polyfills.ts -->
Habilitar import 'web-animations-js'

<!-- en interfaces/IClass -->
► creamos el modelo de datos de la tabla

<!-- en index.html agregamos los íconos de fontawesome -->
<!-- Fontawesome Compiled and minified CSS -->
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossorigin="anonymous">

<!-- importamos forms, de angular -->

<!-- importamos buttons, tabla de primeng -->

<!-- si la tabla no funciona probar agregando ésto a tsconfig.app.json -->
y en terminal
ng add @angular/cdk

"paths": {
    "@angular/core/src/metadata/*": ["./node_modules/@angular/core"]
  },













# AOT (ahead of time)
precompila la app con mayor rendimiento, precompila, menos solicitudes asíncronas, menos peso al no usar el compilador de angular, estricto --> detecta errores si una fx no está declarada no funciona, mas seguro al realizar menos injección de código 
ng serve --aot
ng build --aot
ng build --prod

verificar si está configurado en angular.json
"configurations": {
  "production": {
    "aot": true,


# QUICKLINK (precarga de links en el vp) --> Preloading Strategy
trabaja con interception observer API para reconocer links de una página y precargalo antes de hacer click

npm i quicklink -S
<!-- en module.ts -->
import quicklink from '../../node_modules/quicklink/dist/quicklink';

window.addEventListener('load', () =>{
   quicklink();
   <!-- quicklink({urls:[...]}) -->
   <!-- quicklink({ priority: true }); prioridad de carga de fetch y peticiones --> 

}); <!-- con ésta función le decimos que se ejecute luego de cargar la página -->








-----------------------------------------------------------------------------------------------
lazy-load
aot (ahead of time)
webp (nuevo formato para img web --> desarrollo google)
proxy (ip falsa hide.me)
interceptors
load balancer
cors
grpc
gitlab
semver
redux
PRPL
i18n --> ngx-translate/core
L10n
localstorage
localsession
cookies


<!-- Prod -->

<!-- Test -->

# Webpack Bundle Analyzer - ¿cuánto pesa mi app?
npm i webpack-bundle-analyzer -S (sólo funciona para producción --> ng build --prod --stats-json)

luego de generar el archivo dist
npx webpack-bundle-analyzer dist/amds/stats.json

https://bundlephobia.com/ -->complemento para ver tamaño de los paquetes instalados
