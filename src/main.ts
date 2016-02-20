import {Aurelia, ViewLocator} from 'aurelia-framework';

export function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging();

    /*
  ViewLocator.prototype.convertOriginToViewUrl = (origin) => {
    let moduleId = origin.moduleId;
    return "src/app.html";
  };
  */

  aurelia
  .start()
  .then(function(){ 
     aurelia.setRoot('src/app.ts');
  });
}
