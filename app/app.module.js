
import angular from 'angular';

/* third-party components */
import uiRouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';
import ngMaterial from 'angular-material';

/* third-party styles */
import 'angular-material/angular-material.css';

/* app modules */
import ConfigModule from './config';
import ComponentsModule from './components';
import ViewsModule from './views';

/* components */
import AppConfig from './app.config';
import AppComponent from './app.component';

const module = angular
  .module('app', [
    uiRouter,
    ngAria,
    ngAnimate,
    ngMaterial,
    
    ConfigModule,
    ComponentsModule,
    ViewsModule
  ]);

module
  .component('iconixApp', AppComponent)
  .config(AppConfig);
  
export default module.name;



