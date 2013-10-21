# BMC Web Application Runtime Platform
This document defines the minimum requirements and standards required for the execution of BMC Web Applications.

Instead of specifying a specific hardware and software platform, the baseline is defined by specifying:
* display characteristics
* performance metrics
* browser standards 
As long as these characteristics, metrics, and standards are fullfilled BMC Web Applications will function as intended.  By using this approach, infrastructure has the freedom to define and refine specific hardware, operating systems, and browsers specifications based on user need, economics, and/or maintainability.

## Desktops
* Display
	* Display Resolution 
		* Minimum Width:1280
		* Minimum Height: 1024
		* Wide screen format preferred
	* Minimum Size: 20"
	* Color Support: 16.7 million
	* Color Gamut > 72%
	* Delta E < 2.1 
* Performance
	* Sunspider < 200ms
	* Canvasmark > 5000 
## Tablets
* Display Resolution
	* Min-Width: 1024
	* Min-Height: 768
* Performance
	* Sunspider < 
	* CanvasMark > 
## Mobile
* Display Resolution
	* Min-Width: 320
	* Min-Height: 480
* Performance
	* Sunspider < 
	* CanvasMark > 

## Browser Platform
Acid Test 3: 100%
* HTML5 
	* Offline Support - localStorage, application cache, online/offline events
	* Events - Hashchange, Touch
	* Tags - Content Editable, Input Types (range, date, time, number, color), Input placeholder attribute, Progress & Meter Tags, Form Validation, dataset & data-* attributes, async & defer attribute for external scripts, audio & video tags, Canvas, PNG Alpha Transparency, Data URLs
	* Javascript API & DOM - History API, XHR2, Geolocation, Webworkers, Web Sockets, JSON, Notifications, Drag & Drop, requestAnimationFrame, classlist, queryselector/all
	* CORS
	* SVG (inline)
* CSS Standards
	* CSS 2.1 and below
	* CSS3 Modules - Color, Selectors, Media Queries, Syle Attributes, Multi Column Layout, 2D Transformations, Transitions, Animation, Flexible Box Layout, Fonts Level 3, Text overflow, 3D Transformations, Values & Units, SVG in CSS backgrounds, rem units, Outline, Multiple backgrounds, getComputedStyle, Web Fonts, Opacity, Box Shadow, calc, Border Radius, Text Shadow, Gradients, Border, Generated Content, Images, Box-Sizing
	* Browser should hardware accelerate transforms, transitions, etc to GPU.
* Future - html templates, scoped css, shadow dom, support for all html5 input types, pointer events


## Performance Benchmark Links
* Sunspider | http://www.webkit.org/perf/sunspider/sunspider.html
* Robohornet | http://www.robohornet.org
* CanvasMark | http://www.kevs3d.co.uk/dev/canvasmark/