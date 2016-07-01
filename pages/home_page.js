var home_page = function () {

    this.enterName = function (value) {
        element(by.model('yourName')).sendKeys(value);
    };

    this.getDynamicText = function () {
        return element(by.xpath('html/body/div[2]/div[1]/div[2]/div[2]/div/h1')).getText();
    };

    //verify current state before adding items
    this.getTodoDynamicTextBeforeAdd = function () {
        element.all(by.css('label.checkbox')).then(function (items) {
            expect(items.length).toBe(2);
            expect(items[0].getText()).toBe('learn angular');
            expect(items[1].getText()).toBe("build an angular app");
        });
    };

    this.addTodo = function (value) {
        var todoList = element.all(by.repeater('todo in todoList.todos'));
        var addTodo = element(by.model('todoList.todoText'));
        var addButton = element(by.css('[value="add"]'));

        addTodo.sendKeys(value);
        addButton.click();

        expect(todoList.count()).toEqual(3);
        expect(todoList.get(2).getText()).toEqual('write a protractor test');
        
    };
    

    /*Example of a Try/Catch Block
    **
    this.clickAddButton = function () {
     try {
     element(by.css('[value="add"]')).sendKeys(protractor.Key.ENTER).then(function () {
     console.log('add button found and clicked successfully');
     }, function (err) {
     console.error('Button NOT found: ' + err);
     throw err;
     });
     }
     catch (err) {
     console.log('Oops...something went wrong');
     }
     };
     **/

};


module.exports = new home_page();

