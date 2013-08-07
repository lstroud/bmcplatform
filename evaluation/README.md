#Things Eval Projs Should Be Sure to Try
Eval app should be a single page Master Detail with actions/edits

###UI Elements
  * Table
    * Sortable
	  * Filterable
	  * Grouping
    * Paging
	  * Complex/Multi Line Rows
	  * Multiple Actions per Row
	  * Row Updating
    * Embeded Visualizations
  * Popover
  * Input Elements (date,time,text,etc)
  * Tag Lists
  * Detail section
    * Data edits and propogation
  * Notifications & Alerts
    * Websockets?
    * displaying dismissing alerts
  * Validation - does the framework provide validation mechanisms
  * Optional Components
    * support for trees/hiearchy?
    * ios style slide in?
    * charts? visualizations? - need to find a standard lib here
    * badges - counts, etc
    * layouts
      * flow grid style for list select
      * hamburger button/basement
      * fixed (no page scroll)
      
###Responsiveness
Eval should have at least a mobile and desktop view to understand framework support for such

###Auto Updating
Apps may have 'kiosk' mode where they need to stay up to date without refresh
	* Change alerting
    * Row flash
    * What changed since the last time I looked list
    * Sort important changes to top
  * Push/Pull Mechanism?

###Data/Services
* Data transformation - if a service isn't quite right for the app, or some objects need to be composed from multiple services, how easy or difficult is that to achieve in the framework?
* Caching
  * How to implement local data caching
  * support for asynchronous transational delivery?
* Data Limits
  * How much is too much for the framework?
  * Paging support?
  * inifinite scroll support?
  * search/filter when paged?

###Maintainability
* Code Organization & Patterns
  * How easy/difficult is it to use proper code seperation and design patterns
  * Is it enforcable?  Requires a style guide and reviews?
* Ugrades
  * is there a forseeable way to construct apps such that library upgrades can occur by updating a central definition?
  * how difficult will the apps be to upgrade as web standards change?
  * how difficult will the apps be to upgrade as the business requirements change?
* Reuse
  * How easy is it to create shared libraries and components for common needs?
  * How easy is it to share/reuse portions of applications across other applications?

