System.register("src/app.ts", [], function(exports_1) {
    "use strict";
    var Welcome;
    return {
        setters:[],
        execute: function() {
            Welcome = (function () {
                function Welcome() {
                    this.heading = 'Welcome to Aurelia!';
                    this.firstName = 'John';
                    this.lastName = 'Doe';
                }
                Object.defineProperty(Welcome.prototype, "fullName", {
                    get: function () {
                        return this.firstName + " " + this.lastName;
                    },
                    enumerable: true,
                    configurable: true
                });
                Welcome.prototype.submit = function () {
                    alert("Welcome, " + this.fullName + "!");
                };
                return Welcome;
            }());
            exports_1("Welcome", Welcome);
        }
    }
});

System.register("src/main.ts", [], function(exports_1) {
    "use strict";
    function configure(aurelia) {
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
            .then(function () {
            aurelia.setRoot('src/app.ts');
        });
    }
    exports_1("configure", configure);
    return {
        setters:[],
        execute: function() {
        }
    }
});

//# sourceMappingURL=outfile.js.map