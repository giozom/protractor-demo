exports.config = {


    //The address of a running selenium server.
    seleniumAddress: 'http://localhost:4444/wd/hub',

    //Capabilities to be passed to the webdriver instance.
    capabilities: {
        'browserName': 'firefox'
    },

    // multiCapabilities: [{
    //     browserName: 'firefox'
    // }, {
    //     browserName: 'chrome'
    // }],

    //Specify the name of the specs files.
    specs: ['../specs/angular_spec.js'],
    

    onPrepare: function () {
        var SpecReporter = require('../node_modules/jasmine-spec-reporter');
        // add jasmine spec reporter
        jasmine.getEnv().addReporter(new SpecReporter({displayStacktrace: 'all'}));
        //browser.manage().window().maximize();
    },

    // onPrepare: function() {
    //     var HtmlReporter = require('protractor-html-screenshot-reporter');
    //     var reporter=new HtmlReporter({
    //         baseDirectory: './protractor-result', // a location to store screen shots.
    //         docTitle: 'Protractor Demo Reporter',
    //         docName:    'protractor-demo-tests-report.html'
    //     });
    //     jasmine.getEnv().addReporter(reporter);
    // },


    //Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        onComplete: null,
        isVerbose: false,
        showColors: true,
        includeStackTrace: true,
        print: function () {
        }

    }
};