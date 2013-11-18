# Naming conventions angularjs development (still work in progress)
## Module name 
	<companyname>.<optional-namespace>.<thing-name>-<optional-thing-type>
	<companyname>: Organization name (bmc)
	<optional-namespace>: package name/ application name
	<thing-name>: module name
	<optional-thing-type> : app/directive/service etc
	
	eg., bmc.common.spinner-directive

## Service/Directive name 
	Choose a (short) namespace to prefix the names. (bmc)
	<companyname><thing-name> 
	
	eg., bmcSpinner

## File name
	<thing-name>.js
	
	eg., spinner.js
