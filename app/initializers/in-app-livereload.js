import config from '../config/environment';
import reloadInitializer from 'ember-cli-cordova/initializers/in-app-livereload';

var inAppReload = reloadInitializer.initialize;

export var initialize = function(container, app) {
  console.log('inappreload initialize');

  if(typeof cordova === 'undefined' ||
      config.environment !== 'development') {
    return;
  }

  return inAppReload(container, app);
}

export default {
  name: 'cordova:in-app-livereload',
  initialize: initialize
};
