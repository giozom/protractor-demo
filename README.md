# protractor-demo
Protractor Demo Using PageObjects To Test The AngularJS Web App

## Setup
* Use npm to install Protractor globally with:<code>npm install -g protractor</code>
* This will install two command line tools, **_protractor_** and **_webdriver-manager_**
* Try running <code>protractor --version</code> to make sure it's working.
* The webdriver-manager is a helper tool to easily get an instance of a Selenium Server running. 
* Use it to download the necessary binaries with: <code>webdriver-manager update</code>
* Now start up a server with: <code>webdriver-manager start</code>
* This will start up a Selenium Server and will output a bunch of info logs. Your Protractor test will send requests to this server to control a local browser. Leave this server running throughout the tutorial. You can see information about the status of the server at http://localhost:4444/wd/hub


## Running the test
* git clone **_repo_**
* cd **_repo_**
* cd config
* Type <code>protractor conf.js</code>


## Protractor Online Reference
* API Docs - http://www.protractortest.org/#/api
* Tutorial - http://www.protractortest.org/#/tutorial
