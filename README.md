#Purpose
Define the client side application stack & tool set for web development at bmc.
#Principles
* DRY: Architecture should support 'Don't Repeat Yourself'
* Readable: easy to read, understand, and maintain
* Responsive: Support desktop, tablet, and mobile
* Upgradable: Should be able to maintain applications such that they can be simple upgraded to the latest version of their dependencies
* Modular 
	* Loose Coupling, High Cohesion
	* Prefer tools, libraries, and frameworks that seek to do one thing and do it well
	* Application structure should encourage reuse
	* Application artifacts should be loadable on demand via URI
* Prefer standards and 3rd party libraries
* Applications must be web standards compliant
	* define standards??
* Applications will support evergreen browsers that support these evolving standards.  Browsers will be tested to ensure standards compatibility. 
* Smart Client Application Architecture
	* Client has behavoir and state.  It is independant of server.
	* Restful [RMM](http://martinfowler.com/articles/richardsonMaturityModel.html):
		* HTTP as transport
		* Everything is a resource addressable by URI
		* Use HTTP Verbs appropriately
		* HATEOAS: hypertext as the engine of application state 
	* Cacheable & Cache aware: Appropriate tags, decachers, etc should be used such that caching servers & browsers refresh at the appropriate time.
	* Layered: client cannot tell whether it is connected directly to the end server
	* Defined API: client and services can evolve independantly based on defined contracts
* Structured: structure should be consistent across applications
* Tool Independant: specific tools should not be reasonably required to maintain applications or author applications

#Goals
* Seperate Structure and Skin, Container and Content. Use web technologies as intended (HTML:structure, CSS: look, JS: behavoir)
* Acheive Reuse of UI designs, code, libraries, and components across applications
	* Support Mixins/Plugins
	* Support UI Composition
	* Support Extension
	* Support resuse Models, Views, Controllers, View Models, etc across applications and independently.  For example, there may be a single SalesOrderModel that multiple applications reference.
* Application state addressable by URI
* Platform should be easy to evolve as technology changes, new projects supercede old projects, new tools supercede old tools, and new standards enable new techniques
* Utilize a Grid System for layout and design
* Dependencies (internal and 3rd party) should be centrally managed (or hosted) to simplify cross application upgrades.
* Browser inspectors should be supported for debuging & diagnosing applications
* Javascript should use "strict mode"
* Linters should be used to ensure standard compliance
* Unit tests should be written & maintained to validate complex client side behavoir
* Use feature detection instead of user agent sniffing
* FAST.  Application pages should load quickly and maintain 60 frames per second though usage. Utilize hardware acceleration and other best practices to ensure a fast feeling.
* Aggressively adopt new standards like: shadow dom, es6, custom elements, regions, flex box, etc
* A solution for web applications that need near realtime data updates
* A solution for kiosk style application that needs to show users what has changed since they last interacted with the application
* A notification mechanism for alerting users to critical events
* Faster development through reuse (as opposed to gui componentization) of high level screen designs and their implementation

##Delivery
We will deliver:
* A benchmark to determine minumum supported hardware
* The list of standards that will be the basis of broad browser compatibility
* A list of tools that will be used in the development process
* A list of libraries and frameworks that will become the backbone of the architecture
* Process diagrams for application maintenance
* Deployment diagrams for applications, tools, and other dependencies
* A standardized application structure
* A development process document along with sample code

##Minimum Hardware Performance Requirements
Need to define a minimum requirement for Sunspider/V8 benchmark.
* Mobile
* Tablet
* Workstation

## Standards
	1. HTML5
	2. CSS3 (with an eye toward CSS4)
	3. ECMAScript 5.1 strict mode (with an eye toward ES6) 
	4. Web Sockets??
	4. ??


#Stack
The modern client stack is broken down into the following components:
* Module System
* Build System
* Template Library
* MV* Framework
* Communication
* Style Library/Framework
* Testing Library/Framework
2. Languages
	1. Javascript
	2. Should we adopt a compile to javascript language?
		1. CoffeeScript
		2. Dart
3. Application Framework
	1. Backbone (MVP)
	2. Angular (MVVM)
	3. Ember (MVC)
	4. Meteor
	5. Epitome
	6. YUI
4. Templating
	1. Mustache
	2. Underscore
	3. HandleBar
	4. Dust
5. Interaction
	1. Hammer.js
	2. Platform.js(Polymer-project)
4. Module System
	1. Transitive Dependencies?
	2. Lazy Load?
	3. Format
		1. AMD
		2. Common
	4. Script Loader?
		1. Require?
5. Application Structure
	1. May come from the build tool
	2. Framework Provides?
	2. ??
6. Look & Feel
	1. CSS Frameworks
		1. Bootstrap
		2. Foundation
		3. Grid Systems
			1. Intuit
			2. Skeleton
			3. Gumby
			4. Blueprint
			5. 960
			6. Susy
			7. W3C - http://dev.w3.org/csswg/css-grid/
	2. CSS Tools
		1. Compass
		2. SASS
		3. LESS
	3. Considerations
		1. Validation
		2. Alerts and Notifications
		3. Grid System
		4. UI Pattern Library
		5. Normalize Lib
		6. Visualization Lib
		7. 
7. Build, Management & Deployment
	1. Boilerplates
		1. HTML5Boilerplate
		2. Yoeman Generators
		2. ??
	2. Build
		1. Yeoman
		2. Grunt
		3. Brunch
	3. Package Manager
		1. Bower
		2. Component


#Bookmarks / Reading List / To Check Out
* Client Stacks - http://dailyjs.com/2013/02/04/stack/
* Resthub Backbone Stack - http://resthub.org/backbone-stack.html
* http://ryanflorence.com/2013/es6-modules-and-browser-app-delivery/
* http://9elements.com/io/index.php/hybrid-javascript-apps/
* http://net.tutsplus.com/tutorials/javascript-ajax/building-apps-with-the-yeoman-workflow/
* http://www.nczonline.net/blog/2013/07/16/introducing-eslint/
* http://codeofrob.com/entries/a-comparison-of-various-js-frameworks-using-cold-hard-data.html
* http://gun.io/blog/finding-javascript-libraries/
* http://sporto.github.io/blog/2013/04/12/comparison-angular-backbone-can-ember/
* http://9elements.com/io/index.php/comparison-of-marionette-and-chaplin/
* http://dybskiy.com/js-mvc-angular-vs-ember/
* http://net.tutsplus.com/tutorials/javascript-ajax/important-considerations-when-building-single-page-web-apps/
* http://speckyboy.com/2012/08/21/15-more-responsive-css-frameworks-boilerplates-worth-considering/
* http://www.slideshare.net/SC5/building-single-page-applications-16543203
* https://github.com/yeoman/yeoman/wiki/Yeoman-and-Express
* 

