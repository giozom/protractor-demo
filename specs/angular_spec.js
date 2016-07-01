describe ("The Basics...", function () {
    
    var home_page = require("../pages/home_page");


    beforeEach(function () {
        browser.get("https://angularjs.org/");
    });

    it("Given I am on the homepage", function () {
        expect(browser.getTitle()).toBe("AngularJS — Superheroic JavaScript MVW Framework");
        expect(browser.getCurrentUrl()).toContain('https://angularjs.org/');
    });


    it("Should be able to enter and verify basic text entered", function () {
        home_page.enterName("protractor is awesome");
        var basicText = home_page.getDynamicText();
        expect(basicText).toBe('Hello protractor is awesome!');
    });

    it("Should be only 2 items in the list", function () {
        home_page.getTodoDynamicTextBeforeAdd();
    });


    describe("Add Some Control...", function () {
        it("Should be able to add a todo item and verify the # of items in the list", function () {
            home_page.addTodo("write a protractor test");
        });

    });

});


    
