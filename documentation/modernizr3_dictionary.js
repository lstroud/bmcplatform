 var ModernizrDict = (function()
 {

 	var data = [
 	{
 		"name": "a[download] Attribute",
 		"property": "adownload",
 		"caniuse": "download",
 		"tags": ["media", "attribute"],
 		"notes": [
 		{
 			"name": "WhatWG Reference",
 			"href": "http://developers.whatwg.org/links.html#downloading-resources"
 		}]
 	},
 	{
 		"name": "Application Cache",
 		"property": "applicationcache",
 		"caniuse": "offline-apps",
 		"tags": ["storage", "offline"],
 		"notes": [
 		{
 			"name": "MDN documentation",
 			"href": "https://developer.mozilla.org/en/docs/HTML/Using_the_application_cache"
 		}],
 		"polyfills": ["html5gears"]
 	},
 	{
 		"name": "Audio Loop Attribute",
 		"property": "audioloop",
 		"tags": ["audio", "media"]
 	},
 	{
 		"name": "Audio Preload Attribute",
 		"property": "audiopreload",
 		"tags": ["audio", "media"]
 	},
 	{
 		"name": "Web Audio API",
 		"property": "webaudio",
 		"caniuse": "audio-api",
 		"polyfills": ["xaudiojs", "dynamicaudiojs", "audiolibjs"],
 		"tags": ["audio", "media"],
 		"authors": ["Addy Osmani"],
 		"notes": [
 		{
 			"name": "W3 Specification",
 			"href": "https://dvcs.w3.org/hg/audio/raw-file/tip/webaudio/specification.html"
 		}]
 	},
 	{
 		"name": "HTML5 Audio Element",
 		"property": "audio",
 		"aliases": [],
 		"tags": ["html5", "audio", "media"],
 		"doc": "/docs/#audio",
 		"knownBugs": [],
 		"authors": []
 	},
 	{
 		"name": "Low Battery Level",
 		"property": "lowbattery",
 		"tags": ["hardware", "mobile"],
 		"authors": ["Paul Sayre"],
 		"notes": [
 		{
 			"name": "MDN Docs",
 			"href": "http://developer.mozilla.org/en/DOM/window.navigator.mozBattery"
 		}]
 	},
 	{
 		"name": "Battery API",
 		"property": "batteryapi",
 		"aliases": ["battery-api"],
 		"tags": ["device", "media"],
 		"authors": ["Paul Sayre"],
 		"notes": [
 		{
 			"name": "MDN documentation",
 			"href": "https://developer.mozilla.org/en/DOM/window.navigator.mozBattery"
 		}]
 	},
 	{
 		"name": "Blob constructor",
 		"property": "blobconstructor",
 		"aliases": ["blob-constructor"],
 		"caniuse": "blobbuilder",
 		"notes": [
 		{
 			"name": "W3C spec",
 			"href": "http://dev.w3.org/2006/webapi/FileAPI/#constructorBlob"
 		}],
 		"polyfills": ["blobjs"]
 	},
 	{
 		"name": "canvas.toDataURL type support",
 		"property": ["todataurljpeg", "todataurlpng", "todataurlwebp"],
 		"tags": ["canvas"],
 		"async": false,
 		"notes": [
 		{
 			"name": "HTML5 Spec",
 			"href": "http://www.w3.org/TR/html5/the-canvas-element.html#dom-canvas-todataurl"
 		}]
 	},
 	{
 		"name": "Canvas",
 		"property": "canvas",
 		"caniuse": "canvas",
 		"tags": ["canvas", "graphics"],
 		"polyfills": ["flashcanvas", "excanvas", "slcanvas", "fxcanvas"]
 	},
 	{
 		"name": "Canvas text",
 		"property": "canvastext",
 		"caniuse": "canvas-text",
 		"tags": ["canvas", "graphics"],
 		"polyfills": ["canvastext"]
 	},
 	{
 		"name": "Content Editable",
 		"property": "contenteditable",
 		"caniuse": "contenteditable",
 		"notes": [
 		{
 			"name": "WHATWG spec",
 			"href": "http://www.whatwg.org/specs/web-apps/current-work/multipage/editing.html#contenteditable"
 		}]
 	},
 	{
 		"name": "Content Security Policy",
 		"property": "contentsecuritypolicy",
 		"caniuse": "contentsecuritypolicy",
 		"tags": ["security"],
 		"notes": [
 		{
 			"name": "W3C spec",
 			"href": "http://www.w3.org/TR/CSP/"
 		},
 		{
 			"name": "MDN documentation",
 			"href": "https://developer.mozilla.org/en-US/docs/Security/CSP"
 		}]
 	},
 	{
 		"name": "Context menus",
 		"property": "contextmenu",
 		"caniuse": "menu",
 		"notes": [
 		{
 			"name": "W3C spec",
 			"href": "http://www.w3.org/TR/html5/interactive-elements.html#context-menus"
 		},
 		{
 			"name": "thewebrocks.com Demo",
 			"href": "http://thewebrocks.com/demos/context-menu/"
 		}],
 		"polyfills": ["jquery-contextmenu"]
 	},
 	{
 		"name": "Cookies",
 		"property": "cookies",
 		"tags": ["storage"],
 		"authors": ["tauren"]
 	},
 	{
 		"name": "Cross-Origin Resource Sharing",
 		"property": "cors",
 		"caniuse": "cors",
 		"authors": ["Theodoor van Donge"],
 		"notes": [
 		{
 			"name": "MDN documentation",
 			"href": "https://developer.mozilla.org/en-US/docs/HTTP/Access_control_CORS"
 		}],
 		"polyfills": ["pmxdr", "ppx", "flxhr"]
 	},
 	{
 		"name": "Web Cryptography API getRandomValues method",
 		"property": "getrandomvalues",
 		"caniuse": "window.crypto.getRandomValues",
 		"tags": ["crypto"],
 		"authors": ["komachi"],
 		"notes": [
 		{
 			"name": "W3C Editor’s Draft",
 			"href": "https://dvcs.w3.org/hg/webcrypto-api/raw-file/tip/spec/Overview.html#RandomSource-method-getRandomValues"
 		}],
 		"polyfills": ["polycrypt"]
 	},
 	{
 		"name": "CSS Animations",
 		"property": "cssanimations",
 		"caniuse": "css-animation",
 		"polyfills": ["transformie", "csssandpaper"],
 		"tags": ["css"],
 		"warnings": ["Android < 4 will pass this test, but can only animate a single property at a time"],
 		"notes": [
 		{
 			"name": "Article: 'Dispelling the Android CSS animation myths'",
 			"href": "http://goo.gl/CHVJm"
 		}]
 	},
 	{
 		"name": "CSS Background Clip Text",
 		"property": "backgroundcliptext",
 		"authors": ["ausi"],
 		"tags": ["css"],
 		"notes": [
 		{
 			"name": "CSS Tricks Article",
 			"href": "http://css-tricks.com/image-under-text/"
 		},
 		{
 			"name": "MDN Docs",
 			"href": "http://developer.mozilla.org/en/CSS/background-clip"
 		},
 		{
 			"name": "Related Github Issue",
 			"href": "http://github.com/Modernizr/Modernizr/issues/199"
 		}]
 	},
 	{
 		"name": "Background Position Shorthand",
 		"property": "bgpositionshorthand",
 		"tags": ["css"],
 		"notes": [
 		{
 			"name": "MDN Docs",
 			"href": "https://developer.mozilla.org/en/CSS/background-position"
 		},
 		{
 			"name": "W3 Spec",
 			"href": "http://www.w3.org/TR/css3-background/#background-position"
 		},
 		{
 			"name": "Demo",
 			"href": "http://jsfiddle.net/Blink/bBXvt/"
 		}]
 	},
 	{
 		"name": "Background Position XY",
 		"property": "bgpositionxy",
 		"tags": ["css"],
 		"authors": ["Allan Lei", "Brandom Aaron"],
 		"notes": [
 		{
 			"name": "Demo",
 			"href": "http://jsfiddle.net/allanlei/R8AYS/"
 		},
 		{
 			"name": "Adapted From",
 			"href": "https://github.com/brandonaaron/jquery-cssHooks/blob/master/bgpos.js"
 		}]
 	},
 	{
 		"name": "Background Repeat",
 		"property": ["bgrepeatspace", "bgrepeatround"],
 		"tags": ["css"],
 		"authors": ["Ryan Seddon"],
 		"notes": [
 		{
 			"name": "MDN Docs",
 			"href": "http://developer.mozilla.org/en/CSS/background-repeat"
 		},
 		{
 			"name": "Test Page",
 			"href": "http://jsbin.com/uzesun/"
 		},
 		{
 			"name": "Demo",
 			"href": "http://jsfiddle.net/ryanseddon/yMLTQ/6/"
 		}]
 	},
 	{
 		"name": "Background Size",
 		"property": "backgroundsize",
 		"tags": ["css"],
 		"knownBugs": ["This will false positive in Opera Mini - http://github.com/Modernizr/Modernizr/issues/396"],
 		"notes": [
 		{
 			"name": "Related Issue",
 			"href": "http://github.com/Modernizr/Modernizr/issues/396"
 		}]
 	},
 	{
 		"name": "Background Size Cover",
 		"property": "bgsizecover",
 		"tags": ["css"],
 		"notes": [
 		{
 			"name": "MDN Docs",
 			"href": "http://developer.mozilla.org/en/CSS/background-size"
 		}]
 	},
 	{
 		"name": "Border Image",
 		"property": "borderimage",
 		"caniuse": "border-image",
 		"polyfills": ["css3pie"],
 		"knownBugs": ["Android < 2.0 is true, but has a broken implementation"],
 		"tags": ["css"]
 	},
 	{
 		"name": "Border Radius",
 		"property": "borderradius",
 		"caniuse": "border-radius",
 		"polyfills": ["css3pie"],
 		"tags": ["css"],
 		"notes": [
 		{
 			"name": "Comprehensive Compat Chart",
 			"href": "http://muddledramblings.com/table-of-css3-border-radius-compliance"
 		}]
 	},
 	{
 		"name": "Box Shadow",
 		"property": "boxshadow",
 		"caniuse": "css-boxshadow",
 		"tags": ["css"],
 		"knownBugs": ["WebOS false positives on this test.", "The Kindle Silk browser false positives"]
 	},
 	{
 		"name": "Box Sizing",
 		"property": "boxsizing",
 		"caniuse": "css3-boxsizing",
 		"polyfills": ["borderboxmodel", "boxsizingpolyfill", "borderbox"],
 		"tags": ["css"],
 		"notes": [
 		{
 			"name": "MDN Docs",
 			"href": "http://developer.mozilla.org/en/CSS/box-sizing"
 		},
 		{
 			"name": "Related Github Issue",
 			"href": "http://github.com/Modernizr/Modernizr/issues/248"
 		}]
 	},
 	{
 		"name": "CSS Calc",
 		"property": "csscalc",
 		"caniuse": "calc",
 		"tags": ["css"],
 		"authors": ["@calvein"]
 	},
 	{
 		"name": "CSS :checked pseudo-selector",
 		"caniuse": "css-sel3",
 		"property": "checked",
 		"tags": ["css"],
 		"notes": [
 		{
 			"name": "Related Github Issue",
 			"href": "https://github.com/Modernizr/Modernizr/pull/879"
 		}]
 	},
 	{
 		"name": "CSS Columns",
 		"property": "csscolumns",
 		"caniuse": "multicolumn",
 		"polyfills": ["css3multicolumnjs"],
 		"tags": ["css"]
 	},
 	{
 		"name": "CSS Cubic Bezier Range",
 		"property": "cubicbezierrange",
 		"tags": ["css"],
 		"doc": null,
 		"authors": ["@calvein"],
 		"warnings": ["cubic-bezier values can't be > 1 for Webkit until [bug #45761](https://bugs.webkit.org/show_bug.cgi?id=45761) is fixed"]
 	},
 	{
 		"name": "CSS Display run-in",
 		"property": "displayrunin",
 		"authors": ["alanhogan"],
 		"tags": ["css"],
 		"notes": [
 		{
 			"name": "CSS Tricks Article",
 			"href": "http://css-tricks.com/596-run-in/"
 		},
 		{
 			"name": "Related Github Issue",
 			"href": "https://github.com/Modernizr/Modernizr/issues/198"
 		}]
 	},
 	{
 		"name": "CSS Display table",
 		"property": "displaytable",
 		"caniuse": "css-table",
 		"authors": ["scottjehl"],
 		"tags": ["css"],
 		"notes": [
 		{
 			"name": "All additional table display values",
 			"href": "http://pastebin.com/Gk9PeVaQ"
 		}]
 	},
 	{
 		"name": "CSS text-overflow ellipsis",
 		"property": "ellipsis",
 		"caniuse": "text-overflow",
 		"polyfills": ["text-overflow"],
 		"tags": ["css"]
 	},
 	{
 		"name": "CSS.escape()",
 		"property": "cssescape",
 		"polyfills": ["css-escape"],
 		"tags": ["css", "cssom"]
 	},
 	{
 		"name": "CSS Filters",
 		"property": "cssfilters",
 		"caniuse": "css-filters",
 		"polyfills": ["polyfilter"],
 		"tags": ["css"]
 	},
 	{
 		"name": "Flexbox",
 		"property": "flexbox",
 		"caniuse": "flexbox",
 		"tags": ["css"],
 		"notes": [
 		{
 			"name": "The _new_ flexbox",
 			"href": "http://dev.w3.org/csswg/css3-flexbox"
 		}],
 		"warnings": ["A `true` result for this detect does not imply that the `flex-wrap` property is supported; see the `flexwrap` detect."]
 	},
 	{
 		"name": "Flexbox (legacy)",
 		"property": "flexboxlegacy",
 		"tags": ["css"],
 		"polyfills": ["flexie"],
 		"notes": [
 		{
 			"name": "The _old_ flexbox",
 			"href": "http://www.w3.org/TR/2009/WD-css3-flexbox-20090723/"
 		}]
 	},
 	{
 		"name": "Flexbox (tweener)",
 		"property": "flexboxtweener",
 		"tags": ["css"],
 		"polyfills": ["flexie"],
 		"notes": [
 		{
 			"name": "The _inbetween_ flexbox",
 			"href": "http://www.w3.org/TR/2011/WD-css3-flexbox-20111129/"
 		}]
 	},
 	{
 		"name": "Flex Line Wrapping",
 		"property": "flexwrap",
 		"tags": ["css", "flexbox"],
 		"notes": [
 		{
 			"name": "W3C Flexible Box Layout spec",
 			"href": "http://dev.w3.org/csswg/css3-flexbox"
 		}],
 		"warnings": ["Does not imply a modern implementation – see documentation."]
 	},
 	{
 		"name": "@font-face",
 		"property": "fontface",
 		"authors": ["Diego Perini", "Mat Marquis"],
 		"tags": ["css"],
 		"knownBugs": ["False Positive: WebOS http://github.com/Modernizr/Modernizr/issues/342", "False Postive: WP7 http://github.com/Modernizr/Modernizr/issues/538"],
 		"notes": [
 		{
 			"name": "@font-face detection routine by Diego Perini",
 			"href": "http://javascript.nwbox.com/CSSSupport/"
 		},
 		{
 			"name": "Filament Group @font-face compatibility research",
 			"href": "https://docs.google.com/presentation/d/1n4NyG4uPRjAA8zn_pSQ_Ket0RhcWC6QlZ6LMjKeECo0/edit#slide=id.p"
 		},
 		{
 			"name": "Filament Grunticon/@font-face device testing results",
 			"href": "https://docs.google.com/spreadsheet/ccc?key=0Ag5_yGvxpINRdHFYeUJPNnZMWUZKR2ItMEpRTXZPdUE#gid=0"
 		},
 		{
 			"name": "CSS fonts on Android",
 			"href": "http://stackoverflow.com/questions/3200069/css-fonts-on-android"
 		},
 		{
 			"name": "@font-face and Android",
 			"href": "http://archivist.incutio.com/viewlist/css-discuss/115960"
 		}]
 	},
 	{
 		"name": "CSS Generated Content",
 		"property": "generatedcontent",
 		"tags": ["css"],
 		"warnings": ["Android won't return correct height for anything below 7px #738"]
 	},
 	{
 		"name": "CSS Gradients",
 		"caniuse": "css-gradients",
 		"property": "cssgradients",
 		"tags": ["css"],
 		"knownBugs": ["False-positives on webOS (https://github.com/Modernizr/Modernizr/issues/202)"],
 		"notes": [
 		{
 			"name": "Webkit Gradient Syntax",
 			"href": "http://webkit.org/blog/175/introducing-css-gradients/"
 		},
 		{
 			"name": "Mozilla Linear Gradient Syntax",
 			"href": "http://developer.mozilla.org/en/CSS/-moz-linear-gradient"
 		},
 		{
 			"name": "Mozilla Radial Gradient Syntax",
 			"href": "http://developer.mozilla.org/en/CSS/-moz-radial-gradient"
 		},
 		{
 			"name": "W3C Gradient Spec",
 			"href": "dev.w3.org/csswg/css3-images/#gradients-"
 		}]
 	},
 	{
 		"name": "CSS HSLA Colors",
 		"caniuse": "css3-colors",
 		"property": "hsla",
 		"tags": ["css"],
 		"notes": ["Same as rgba(), in fact, browsers re-map hsla() to rgba() internally, except IE9 who retains it as hsla"]
 	},
 	{
 		"name": "CSS Hyphens",
 		"caniuse": "css-hyphens",
 		"property": ["csshyphens", "softhyphens", "softhyphensfind"],
 		"tags": ["css"],
 		"async": true,
 		"authors": ["David Newton"],
 		"warnings": ["These tests currently require document.body to be present", "If loading Hyphenator.js via Modernizr.load, be cautious of issue 158: http://code.google.com/p/hyphenator/issues/detail?id=158", "This is very large – only include it if you absolutely need it"],
 		"notes": ["csshyphens - tests hyphens:auto actually adds hyphens to text", "softhyphens - tests that &shy; does its job", "softhyphensfind - tests that in-browser Find functionality still works correctly with &shy;",
 		{
 			"name": "The Current State of Hyphenation on the Web.",
 			"href": "http://davidnewton.ca/the-current-state-of-hyphenation-on-the-web"
 		},
 		{
 			"name": "Hyphenation Test Page",
 			"href": "http://davidnewton.ca/demos/hyphenation/test.html"
 		},
 		{
 			"name": "Hyphenation is Language Specific",
 			"href": " http://code.google.com/p/hyphenator/source/diff?spec=svn975&r=975&format=side&path=/trunk/Hyphenator.js#sc_svn975_313"
 		},
 		{
 			"name": "Related Modernizr Issue",
 			"href": "https://github.com/Modernizr/Modernizr/issues/312"
 		}]
 	},
 	{
 		"name": "CSS :last-child pseudo-selector",
 		"caniuse": "css-sel3",
 		"property": "lastchild",
 		"tags": ["css"],
 		"notes": [
 		{
 			"name": "Related Github Issue",
 			"href": "https://github.com/Modernizr/Modernizr/pull/304"
 		}]
 	},
 	{
 		"name": "CSS Mask",
 		"caniuse": "css-masks",
 		"property": "cssmask",
 		"tags": ["css"],
 		"notes": ["This is for the -webkit-mask feature, not for the similar svg mask in Firefox.",
 		{
 			"name": "Webkit blog on CSS Masks",
 			"href": "http://www.webkit.org/blog/181/css-masks/"
 		},
 		{
 			"name": "Safari Docs",
 			"href": "http://developer.apple.com/library/safari/#documentation/InternetWeb/Conceptual/SafariVisualEffectsProgGuide/Masks/Masks.html"
 		},
 		{
 			"name": "Mozilla css svg mask (not this)",
 			"href": "http://developer.mozilla.org/en/CSS/mask"
 		},
 		{
 			"name": "Combine with clippaths for awesomeness",
 			"href": "http://generic.cx/for/webkit/test.html"
 		}]
 	},
 	{
 		"name": "CSS Media Queries",
 		"caniuse": "css-mediaqueries",
 		"property": "mediaqueries",
 		"tags": ["css"]
 	},
 	{
 		"name": "CSS Multiple Backgrounds",
 		"caniuse": "multibackgrounds",
 		"property": "multiplebgs",
 		"tags": ["css"]
 	},
 	{
 		"name": "CSS :nth-child pseudo-selector",
 		"caniuse": "css-sel3",
 		"property": "nthchild",
 		"tags": ["css"],
 		"notes": [
 		{
 			"name": "Related Github Issue",
 			"href": "https://github.com/Modernizr/Modernizr/pull/685"
 		},
 		{
 			"name": "Sitepoint :nth-child documentation",
 			"href": "http://reference.sitepoint.com/css/pseudoclass-nthchild"
 		}],
 		"authors": ["@emilchristensen"],
 		"warnings": ["Known false negative in Safari 3.1 and Safari 3.2.2"]
 	},
 	{
 		"name": "CSS Object Fit",
 		"caniuse": "object-fit",
 		"property": "objectfit",
 		"tags": ["css"],
 		"notes": [
 		{
 			"name": "Opera Article on Object Fit",
 			"href": "http://dev.opera.com/articles/view/css3-object-fit-object-position/"
 		}]
 	},
 	{
 		"name": "CSS Opacity",
 		"caniuse": "css-opacity",
 		"property": "opacity",
 		"tags": ["css"],
 		"notes": ["Opacity must be be in the range of [0.0,1.0], according to the spec."]
 	},
 	{
 		"name": "CSS Overflow Scrolling",
 		"property": "overflowscrolling",
 		"tags": ["css"],
 		"warnings": ["Introduced in iOS5b2. API is subject to change."],
 		"notes": [
 		{
 			"name": "Article on iOS overflow scrolling",
 			"href": "http://johanbrook.com/browsers/native-momentum-scrolling-ios-5/"
 		}]
 	},
 	{
 		"name": "CSS Pointer Events",
 		"caniuse": "pointer-events",
 		"property": "csspointerevents",
 		"authors": ["ausi"],
 		"tags": ["css"],
 		"notes": [
 		{
 			"name": "MDN Docs",
 			"href": "http://developer.mozilla.org/en/CSS/pointer-events"
 		},
 		{
 			"name": "Test Project Page",
 			"href": "http://ausi.github.com/Feature-detection-technique-for-pointer-events/"
 		},
 		{
 			"name": "Test Project Wiki",
 			"href": "http://github.com/ausi/Feature-detection-technique-for-pointer-events/wiki"
 		},
 		{
 			"name": "Related Github Issue",
 			"href": "http://github.com/Modernizr/Modernizr/issues/80"
 		}]
 	},
 	{
 		"name": "CSS position: sticky",
 		"property": "csspositionsticky",
 		"tags": ["css"]
 	},
 	{
 		"name": "CSS Generated Content Animations",
 		"property": "csspseudoanimations",
 		"tags": ["css"]
 	},
 	{
 		"name": "CSS Generated Content Transitions",
 		"property": "csspseudotransitions",
 		"tags": ["css"]
 	},
 	{
 		"name": "CSS Reflections",
 		"caniuse": "css-reflections",
 		"property": "cssreflections",
 		"tags": ["css"]
 	},
 	{
 		"name": "CSS Regions",
 		"caniuse": "css-regions",
 		"authors": ["Mihai Balan"],
 		"property": "regions",
 		"tags": ["css"],
 		"notes": [
 		{
 			"name": "W3C Specification",
 			"href": "http://www.w3.org/TR/css3-regions/"
 		}]
 	},
 	{
 		"name": "CSS Font rem Units",
 		"caniuse": "rem",
 		"authors": ["nsfmc"],
 		"property": "cssremunit",
 		"tags": ["css"],
 		"notes": [
 		{
 			"name": "W3C Spec",
 			"href": "http://www.w3.org/TR/css3-values/#relative0"
 		},
 		{
 			"name": "Font Size with rem by Jonathan Snook",
 			"href": "http://snook.ca/archives/html_and_css/font-size-with-rem"
 		}]
 	},
 	{
 		"name": "CSS UI Resize",
 		"property": "cssresize",
 		"caniuse": "css-resize",
 		"tags": ["css"],
 		"notes": [
 		{
 			"name": "W3C Specification",
 			"href": "http://www.w3.org/TR/css3-ui/#resize"
 		},
 		{
 			"name": "MDN Docs",
 			"href": "https://developer.mozilla.org/en/CSS/resize"
 		}]
 	},
 	{
 		"name": "CSS rgba",
 		"caniuse": "css3-colors",
 		"property": "rgba",
 		"tags": ["css"],
 		"notes": [
 		{
 			"name": "CSSTricks Tutorial",
 			"href": "http://css-tricks.com/rgba-browser-support/"
 		}]
 	},
 	{
 		"name": "CSS Stylable Scrollbars",
 		"property": "cssscrollbar",
 		"tags": ["css"]
 	},
 	{
 		"name": "CSS Shapes",
 		"property": "shapes",
 		"tags": ["css"],
 		"notes": [
 		{
 			"name": "CSS Shapes W3C specification",
 			"href": "http://www.w3.org/TR/css-shapes"
 		},
 		{
 			"name": "Examples from Adobe",
 			"href": "http://html.adobe.com/webplatform/layout/shapes"
 		},
 		{
 			"name": "Samples showcasing uses of Shapes",
 			"href": "http://codepen.io/collection/qFesk"
 		}]
 	},
 	{
 		"name": "CSS general sibling selector",
 		"caniuse": "css-sel3",
 		"property": "siblinggeneral",
 		"tags": ["css"],
 		"notes": [
 		{
 			"name": "Related Github Issue",
 			"href": "https://github.com/Modernizr/Modernizr/pull/889"
 		}]
 	},
 	{
 		"name": "CSS Subpixel Fonts",
 		"property": "subpixelfont",
 		"tags": ["css"],
 		"authors": ["@derSchepp", "@gerritvanaaken", "@rodneyrehm", "@yatil", "@ryanseddon"],
 		"notes": [
 		{
 			"name": "Origin Test",
 			"href": "https://github.com/gerritvanaaken/subpixeldetect"
 		}]
 	},
 	{
 		"name": "CSS Supports",
 		"property": "supports",
 		"caniuse": "css-featurequeries",
 		"tags": ["css"],
 		"notes": [
 		{
 			"name": "W3 Spec",
 			"href": "http://dev.w3.org/csswg/css3-conditional/#at-supports"
 		},
 		{
 			"name": "Related Github Issue",
 			"href": "github.com/Modernizr/Modernizr/issues/648"
 		},
 		{
 			"name": "W3 Info",
 			"href": "http://dev.w3.org/csswg/css3-conditional/#the-csssupportsrule-interface"
 		}]
 	},
 	{
 		"name": "CSS :target pseudo-class",
 		"caniuse": "css-sel3",
 		"property": "target",
 		"tags": ["css"],
 		"notes": [
 		{
 			"name": "MDN documentation",
 			"href": "https://developer.mozilla.org/en-US/docs/Web/CSS/:target"
 		}],
 		"authors": ["@zachleat"],
 		"warnings": ["Opera Mini supports :target but doesn't update the hash for anchor links."]
 	},
 	{
 		"name": "CSS textshadow",
 		"property": "textshadow",
 		"caniuse": "css-textshadow",
 		"tags": ["css"],
 		"knownBugs": ["FF3.0 will false positive on this test"]
 	},
 	{
 		"name": "CSS Transforms",
 		"property": "csstransforms",
 		"caniuse": "transforms2d",
 		"tags": ["css"]
 	},
 	{
 		"name": "CSS Transforms 3D",
 		"property": "csstransforms3d",
 		"caniuse": "transforms3d",
 		"tags": ["css"],
 		"warnings": ["Chrome may occassionally fail this test on some systems; more info: https://code.google.com/p/chromium/issues/detail?id=129004"]
 	},
 	{
 		"name": "CSS Transform Style preserve-3d",
 		"property": "preserve3d",
 		"authors": ["edmellum"],
 		"tags": ["css"],
 		"notes": [
 		{
 			"name": "MDN Docs",
 			"href": "https://developer.mozilla.org/en-US/docs/Web/CSS/transform-style"
 		},
 		{
 			"name": "Related Github Issue",
 			"href": "https://github.com/Modernizr/Modernizr/issues/762"
 		}]
 	},
 	{
 		"name": "CSS Transitions",
 		"property": "csstransitions",
 		"caniuse": "css-transitions",
 		"tags": ["css"]
 	},
 	{
 		"name": "CSS user-select",
 		"property": "userselect",
 		"caniuse": "user-select-none",
 		"authors": ["ryan seddon"],
 		"tags": ["css"],
 		"notes": [
 		{
 			"name": "Related Modernizr Issue",
 			"href": "https://github.com/Modernizr/Modernizr/issues/250"
 		}]
 	},
 	{
 		"name": "CSS vh unit",
 		"property": "cssvhunit",
 		"caniuse": "viewport-units",
 		"tags": ["css"],
 		"notes": [
 		{
 			"name": "Related Modernizr Issue",
 			"href": "https://github.com/Modernizr/Modernizr/issues/572"
 		},
 		{
 			"name": "Similar JSFiddle",
 			"href": "http://jsfiddle.net/FWeinb/etnYC/"
 		}]
 	},
 	{
 		"name": "CSS vmax unit",
 		"property": "cssvmaxunit",
 		"caniuse": "viewport-units",
 		"tags": ["css"],
 		"notes": [
 		{
 			"name": "Related Modernizr Issue",
 			"href": "https://github.com/Modernizr/Modernizr/issues/572"
 		},
 		{
 			"name": "JSFiddle Example",
 			"href": "http://jsfiddle.net/glsee/JDsWQ/4/"
 		}]
 	},
 	{
 		"name": "CSS vmin unit",
 		"property": "cssvminunit",
 		"caniuse": "viewport-units",
 		"tags": ["css"],
 		"notes": [
 		{
 			"name": "Related Modernizr Issue",
 			"href": "https://github.com/Modernizr/Modernizr/issues/572"
 		},
 		{
 			"name": "JSFiddle Example",
 			"href": "http://jsfiddle.net/glsee/JRmdq/8/"
 		}]
 	},
 	{
 		"name": "CSS vw unit",
 		"property": "cssvwunit",
 		"caniuse": "viewport-units",
 		"tags": ["css"],
 		"notes": [
 		{
 			"name": "Related Modernizr Issue",
 			"href": "https://github.com/Modernizr/Modernizr/issues/572"
 		},
 		{
 			"name": "JSFiddle Example",
 			"href": "http://jsfiddle.net/FWeinb/etnYC/"
 		}]
 	},
 	{
 		"name": "CSS wrap-flow",
 		"property": "wrapflow",
 		"tags": ["css"],
 		"notes": ["This is a separate test from the rest of CSS Exclusions as as IE10 has just implemented this alone.",
 		{
 			"name": "W3C Exclusions spec",
 			"href": "http://www.w3.org/TR/css3-exclusions"
 		},
 		{
 			"name": "Example by Adobe",
 			"href": "http://html.adobe.com/webstandards/cssexclusions"
 		}]
 	},
 	{
 		"name": "Custom protocol handler",
 		"property": "customprotocolhandler",
 		"authors": ["Ben Schwarz"],
 		"notes": [
 		{
 			"name": "WHATWG overview",
 			"href": "http://developers.whatwg.org/timers.html#custom-handlers"
 		},
 		{
 			"name": "MDN documentation",
 			"href": "https://developer.mozilla.org/en-US/docs/Web/API/navigator.registerProtocolHandler"
 		}],
 		"warnings": [],
 		"polyfills": []
 	},
 	{
 		"name": "Dart",
 		"property": "dart",
 		"authors": ["Theodoor van Donge"],
 		"notes": [
 		{
 			"name": "Language website",
 			"href": "http://www.dartlang.org/"
 		}]
 	},
 	{
 		"name": "DataView",
 		"property": "dataview",
 		"authors": ["Addy Osmani"],
 		"notes": [
 		{
 			"name": "MDN documentation",
 			"href": "https://developer.mozilla.org/en/JavaScript_typed_arrays/DataView"
 		}],
 		"polyfills": ["jdataview"]
 	},
 	{
 		"name": "classList",
 		"caniuse": "classlist",
 		"property": "classlist",
 		"tags": ["dom"],
 		"notes": [
 		{
 			"name": "MDN Docs",
 			"href": "https://developer.mozilla.org/en/DOM/element.classList"
 		}]
 	},
 	{
 		"name": "createElement with Attributes",
 		"property": ["createelementattrs", "createelement-attrs"],
 		"tags": ["dom"],
 		"authors": ["James A. Rosen"],
 		"notes": [
 		{
 			"name": "Related Github Issue",
 			"href": "https://github.com/Modernizr/Modernizr/issues/258"
 		}]
 	},
 	{
 		"name": "dataset API",
 		"caniuse": "dataset",
 		"property": "dataset",
 		"tags": ["dom"],
 		"authors": ["@phiggins42"]
 	},
 	{
 		"name": "Document Fragment",
 		"property": "documentfragment",
 		"notes": [
 		{
 			"name": "W3C DOM Level 1 Reference",
 			"href": "http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#ID-B63ED1A3"
 		},
 		{
 			"name": "SitePoint Reference",
 			"href": "http://reference.sitepoint.com/javascript/DocumentFragment"
 		},
 		{
 			"name": "QuirksMode Compatibility Tables",
 			"href": "http://www.quirksmode.org/m/w3c_core.html#t112"
 		}],
 		"authors": ["Ron Waldon (@jokeyrhyme)"],
 		"knownBugs": ["false-positive on Blackberry 9500, see QuirksMode note"],
 		"tags": []
 	},
 	{
 		"name": "microdata",
 		"property": "microdata",
 		"tags": ["dom"],
 		"notes": [
 		{
 			"name": "W3 Spec",
 			"href": "http://www.w3.org/TR/html5/microdata.html"
 		}]
 	},
 	{
 		"name": "Drag & Drop",
 		"property": "draganddrop",
 		"caniuse": "dragndrop",
 		"notes": [
 		{
 			"name": "W3C spec",
 			"href": "http://www.w3.org/TR/2010/WD-html5-20101019/dnd.html"
 		}],
 		"polyfills": ["dropfile", "moxie", "fileapi"]
 	},
 	{
 		"name": "datalist Element",
 		"caniuse": "datalist",
 		"property": "datalistelem",
 		"tags": ["elem"],
 		"warnings": ["This test is a dupe of Modernizr.input.list. Only around for legacy reasons."],
 		"notes": [
 		{
 			"name": "CSS Tricks Article",
 			"href": "http://css-tricks.com/15346-relevant-dropdowns-polyfill-for-datalist/"
 		},
 		{
 			"name": "Mike Taylor Test",
 			"href": "http://miketaylr.com/test/datalist.html"
 		},
 		{
 			"name": "Mike Taylor Code",
 			"href": "http://miketaylr.com/code/datalist.html"
 		}]
 	},
 	{
 		"name": "details Element",
 		"caniuse": "details",
 		"property": "details",
 		"tags": ["elem"],
 		"authors": ["@mathias"],
 		"notes": [
 		{
 			"name": "Mathias' Original",
 			"href": "http://mths.be/axh"
 		}]
 	},
 	{
 		"name": "output Element",
 		"property": "outputelem",
 		"tags": ["elem"],
 		"notes": [
 		{
 			"name": "WhatWG Spec",
 			"href": "http://www.whatwg.org/specs/web-apps/current-work/multipage/the-button-element.html#the-output-element"
 		}]
 	},
 	{
 		"name": "Progress & Meter Element",
 		"caniuse": "progressmeter",
 		"property": "progressbar",
 		"tags": ["elem"],
 		"authors": ["Stefan Wallin"],
 		"notes": [
 		{
 			"href": "http://www.whatwg.org/specs/web-apps/current-work/multipage/the-button-element.html#the-progress-element"
 		}]
 	},
 	{
 		"name": "ruby, rp, rt Elements",
 		"caniuse": "ruby",
 		"property": "ruby",
 		"tags": ["elem"],
 		"authors": ["Cătălin Mariș"],
 		"notes": [
 		{
 			"name": "WHATWG Specification",
 			"href": "http://www.whatwg.org/specs/web-apps/current-work/multipage/text-level-semantics.html#the-ruby-element"
 		}]
 	},
 	{
 		"name": "Template Tag",
 		"property": "template",
 		"tags": ["elem"],
 		"notes": [
 		{
 			"name": "HTML5Rocks Article",
 			"href": "http://www.html5rocks.com/en/tutorials/webcomponents/template/"
 		},
 		{
 			"name": "W3 Spec",
 			"href": "https://dvcs.w3.org/hg/webcomponents/raw-file/tip/spec/templates/index.html"
 		}]
 	},
 	{
 		"name": "time Element",
 		"caniuse": "html5semantic",
 		"property": "time",
 		"tags": ["elem"],
 		"notes": [
 		{
 			"name": "WhatWG Spec",
 			"href": "http://www.whatwg.org/specs/web-apps/current-work/multipage/rendering.html#the-time-element-0"
 		}]
 	},
 	{
 		"name": "Track element and Timed Text Track API",
 		"property": ["texttrackapi", "track"],
 		"tags": ["elem"],
 		"authors": ["Addy Osmani"],
 		"notes": [
 		{
 			"name": "W3 track Element Spec",
 			"href": "http://www.w3.org/TR/html5/video.html#the-track-element"
 		},
 		{
 			"name": "W3 track API Spec",
 			"href": "http://www.w3.org/TR/html5/media-elements.html#text-track-api"
 		}],
 		"warnings": ["While IE10 has implemented the track element, IE10 does not expose the underlying APIs to create timed text tracks by JS (really sad)"]
 	},
 	{
 		"name": "Emoji",
 		"property": "emoji"
 	},
 	{
 		"name": "ES5 Array",
 		"property": "es5array",
 		"notes": [
 		{
 			"name": "ECMAScript 5.1 Language Specification",
 			"href": "http://www.ecma-international.org/ecma-262/5.1/"
 		}],
 		"polyfills": ["es5shim"],
 		"authors": ["Ron Waldon (@jokeyrhyme)"],
 		"tags": ["es5"]
 	},
 	{
 		"name": "ES5 Date",
 		"property": "es5date",
 		"notes": [
 		{
 			"name": "ECMAScript 5.1 Language Specification",
 			"href": "http://www.ecma-international.org/ecma-262/5.1/"
 		}],
 		"polyfills": ["es5shim"],
 		"authors": ["Ron Waldon (@jokeyrhyme)"],
 		"tags": ["es5"]
 	},
 	{
 		"name": "ES5 Function",
 		"property": "es5function",
 		"notes": [
 		{
 			"name": "ECMAScript 5.1 Language Specification",
 			"href": "http://www.ecma-international.org/ecma-262/5.1/"
 		}],
 		"polyfills": ["es5shim"],
 		"authors": ["Ron Waldon (@jokeyrhyme)"],
 		"tags": ["es5"]
 	},
 	{
 		"name": "ES5 Object",
 		"property": "es5object",
 		"notes": [
 		{
 			"name": "ECMAScript 5.1 Language Specification",
 			"href": "http://www.ecma-international.org/ecma-262/5.1/"
 		}],
 		"polyfills": ["es5shim", "es5sham"],
 		"authors": ["Ron Waldon (@jokeyrhyme)"],
 		"tags": ["es5"]
 	},
 	{
 		"name": "ES5 Strict Mode",
 		"property": "strictmode",
 		"caniuse": "sctrict-mode",
 		"notes": [
 		{
 			"name": "ECMAScript 5.1 Language Specification",
 			"href": "http://www.ecma-international.org/ecma-262/5.1/"
 		}],
 		"authors": ["@kangax"],
 		"tags": ["es5"]
 	},
 	{
 		"name": "ES5 String",
 		"property": "es5string",
 		"notes": [
 		{
 			"name": "ECMAScript 5.1 Language Specification",
 			"href": "http://www.ecma-international.org/ecma-262/5.1/"
 		}],
 		"polyfills": ["es5shim"],
 		"authors": ["Ron Waldon (@jokeyrhyme)"],
 		"tags": ["es5"]
 	},
 	{
 		"name": "ES5 String.prototype.contains",
 		"property": "contains",
 		"authors": ["Robert Kowalski"],
 		"tags": ["es6"]
 	},
 	{
 		"name": "ES6 Promises",
 		"property": "promises",
 		"caniuse": "promises",
 		"polyfills": ["es6promises"],
 		"authors": ["Krister Kari", "Jake Archibald"],
 		"tags": ["es6"],
 		"notes": [
 		{
 			"name": "The ES6 promises spec",
 			"href": "https://github.com/domenic/promises-unwrapping"
 		},
 		{
 			"name": "Chromium dashboard - ES6 Promises",
 			"href": "http://www.chromestatus.com/features/5681726336532480"
 		},
 		{
 			"name": "JavaScript Promises: There and back again - HTML5 Rocks",
 			"href": "http://www.html5rocks.com/en/tutorials/es6/promises/"
 		}]
 	},
 	{
 		"name": "Device Orientation and Motion Events",
 		"property": ["devicemotion", "deviceorientation"],
 		"caniuse": "deviceorientation",
 		"notes": [
 		{
 			"name": "W3C Editor's Draft",
 			"href": "http://dev.w3.org/geo/api/spec-source-orientation.html"
 		},
 		{
 			"name": "Implementation by iOS Safari (Orientation)",
 			"href": "http://goo.gl/fhce3"
 		},
 		{
 			"name": "Implementation by iOS Safari (Motion)",
 			"href": "http://goo.gl/rLKz8"
 		}],
 		"authors": ["Shi Chuan"],
 		"tags": ["event"]
 	},
 	{
 		"name": "onInput Event",
 		"property": "oninput",
 		"notes": [
 		{
 			"name": "MDN article",
 			"href": "https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers.oninput"
 		},
 		{
 			"name": "WHATWG spec",
 			"href": "http://www.whatwg.org/specs/web-apps/current-work/multipage/common-input-element-attributes.html#common-event-behaviors"
 		},
 		{
 			"name": "Detecting onInput support",
 			"href": "http://danielfriesen.name/blog/2010/02/16/html5-browser-maze-oninput-support"
 		}],
 		"authors": ["Patrick Kettner"],
 		"tags": ["event"]
 	},
 	{
 		"name": "EXIF Orientation",
 		"property": "exiforientation",
 		"tags": ["image"],
 		"async": true,
 		"authors": ["Paul Sayre"],
 		"notes": [
 		{
 			"name": "Article by Dave Perrett",
 			"href": "http://recursive-design.com/blog/2012/07/28/exif-orientation-handling-is-a-ghetto/"
 		},
 		{
 			"name": "Article by Calvin Hass",
 			"href": "http://www.impulseadventure.com/photo/exif-orientation.html"
 		}]
 	},
 	{
 		"name": "File API",
 		"property": "filereader",
 		"caniuse": "fileapi",
 		"notes": [
 		{
 			"name": "W3C Working Draft",
 			"href": "http://www.w3.org/TR/FileAPI/"
 		}],
 		"tags": ["file"],
 		"knownBugs": ["Will fail in Safari 5 due to its lack of support for the standards defined FileReader object"]
 	},
 	{
 		"name": "Filesystem API",
 		"property": "filesystem",
 		"caniuse": "filesystem",
 		"notes": [
 		{
 			"name": "W3 Draft",
 			"href": "dev.w3.org/2009/dap/file-system/file-dir-sys.html"
 		}],
 		"authors": ["Eric Bidelman (@ebidel)"],
 		"tags": ["file"],
 		"knownBugs": ["The API will be present in Chrome incognito, but will throw an exception. See crbug.com/93417"]
 	},
 	{
 		"name": "Flash",
 		"property": "flash",
 		"tags": ["flash"],
 		"polyfills": ["shumway"]
 	},
 	{
 		"name": "input[capture] Attribute",
 		"property": "capture",
 		"tags": ["video", "image", "audio", "media", "attribute"],
 		"notes": [
 		{
 			"name": "W3C draft: HTML Media Capture",
 			"href": "http://www.w3.org/TR/html-media-capture/"
 		}]
 	},
 	{
 		"name": "input[file] Attribute",
 		"property": "fileinput",
 		"caniuse": "forms",
 		"tags": ["file", "forms", "input"]
 	},
 	{
 		"name": "input[directory] Attribute",
 		"property": "directory",
 		"authors": ["silverwind"],
 		"tags": ["file", "input", "attribute"]
 	},
 	{
 		"name": "input[form] Attribute",
 		"property": "formattribute",
 		"tags": ["attribute", "forms", "input"]
 	},
 	{
 		"name": "input[type=\"number\"] Localization",
 		"property": "localizednumber",
 		"tags": ["forms", "localization", "attribute"],
 		"authors": ["Peter Janes"],
 		"notes": [
 		{
 			"name": "Webkit Bug Tracker Listing",
 			"href": "https://bugs.webkit.org/show_bug.cgi?id=42484"
 		},
 		{
 			"name": "Based on This",
 			"href": "http://trac.webkit.org/browser/trunk/LayoutTests/fast/forms/script-tests/input-number-keyoperation.js?rev=80096#L9"
 		}]
 	},
 	{
 		"name": "placeholder attribute",
 		"property": "placeholder",
 		"tags": ["forms", "attribute"]
 	},
 	{
 		"name": "form#requestAutocomplete()",
 		"property": "requestautocomplete",
 		"tags": ["form", "forms", "requestAutocomplete", "payments"],
 		"notes": [
 		{
 			"name": "WHATWG proposed spec",
 			"href": "http://wiki.whatwg.org/wiki/RequestAutocomplete"
 		}]
 	},
 	{
 		"name": "Speech Input API",
 		"property": "speechinput",
 		"tags": ["forms", "speech", "attribute"],
 		"authors": ["Cătălin Mariș"],
 		"knownBugs": ["This detect only checks the webkit version because the Speech Input API was only implemented in Chrome and it was deprecated in favor of the Web Speech API."],
 		"notes": [
 		{
 			"name": "W3C Speech Input API Specification",
 			"href": "http://lists.w3.org/Archives/Public/public-xg-htmlspeech/2011Feb/att-0020/api-draft.html"
 		}],
 		"warnings": ["Do not use the Speech Input API as it was deprecated in favor of the Web Speech API.", "Only Chrome ever implemented this API, and they are planning to deprecate and remove the related code: https://code.google.com/p/chromium/issues/detail?id=223198."]
 	},
 	{
 		"name": "Form Validation",
 		"property": "formvalidation",
 		"tags": ["forms", "validation", "attribute"]
 	},
 	{
 		"name": "Fullscreen API",
 		"property": "fullscreen",
 		"caniuse": "fullscreen",
 		"notes": [
 		{
 			"name": "MDN documentation",
 			"href": "https://developer.mozilla.org/en/API/Fullscreen"
 		}],
 		"polyfills": ["screenfulljs"]
 	},
 	{
 		"name": "GamePad API",
 		"property": "gamepads",
 		"authors": ["Eric Bidelman"],
 		"tags": ["media"],
 		"notes": [
 		{
 			"name": "W3C spec",
 			"href": "http://www.w3.org/TR/gamepad/"
 		},
 		{
 			"name": "HTML5 Rocks tutorial",
 			"href": "http://www.html5rocks.com/en/tutorials/doodles/gamepad/#toc-featuredetect"
 		}],
 		"warnings": [],
 		"polyfills": []
 	},
 	{
 		"name": "Geolocation API",
 		"property": "geolocation",
 		"caniuse": "geolocation",
 		"tags": ["media"],
 		"notes": [
 		{
 			"name": "MDN documentation",
 			"href": "https://developer.mozilla.org/en-US/docs/WebAPI/Using_geolocation"
 		}],
 		"polyfills": ["joshuabell-polyfill", "webshims", "geolocationshim", "geo-location-javascript", "geolocation-api-polyfill"]
 	},
 	{
 		"name": "Hashchange event",
 		"property": "hashchange",
 		"caniuse": "hashchange",
 		"tags": ["history"],
 		"notes": [
 		{
 			"name": "MDN documentation",
 			"href": "https://developer.mozilla.org/en-US/docs/Web/API/window.onhashchange"
 		}],
 		"polyfills": ["jquery-hashchange", "moo-historymanager", "jquery-ajaxy", "hasher", "shistory"]
 	},
 	{
 		"name": "History API",
 		"property": "history",
 		"caniuse": "history",
 		"tags": ["history"],
 		"authors": ["Hay Kranen", "Alexander Farkas"],
 		"notes": [
 		{
 			"name": "W3C Spec",
 			"href": "http://www.w3.org/TR/html51/browsers.html#the-history-interface"
 		},
 		{
 			"name": "MDN documentation",
 			"href": "https://developer.mozilla.org/en-US/docs/Web/API/window.history"
 		}],
 		"polyfills": ["historyjs", "html5historyapi"]
 	},
 	{
 		"name": "IE8 compat mode",
 		"property": "ie8compat",
 		"authors": ["Erich Ocean"]
 	},
 	{
 		"name": "iframe[sandbox] Attribute",
 		"property": "sandbox",
 		"tags": ["iframe"],
 		"notes": [
 		{
 			"name": "WhatWG Spec",
 			"href": "http://www.whatwg.org/specs/web-apps/current-work/multipage/the-iframe-element.html#attr-iframe-sandbox"
 		}]
 	},
 	{
 		"name": "iframe[seamless] Attribute",
 		"property": "seamless",
 		"tags": ["iframe"],
 		"notes": [
 		{
 			"name": "WhatWG Spec",
 			"href": "http://www.whatwg.org/specs/web-apps/current-work/multipage/the-iframe-element.html#attr-iframe-seamless"
 		}]
 	},
 	{
 		"name": "iframe[srcdoc] Attribute",
 		"property": "srcdoc",
 		"tags": ["iframe"],
 		"notes": [
 		{
 			"name": "WhatWG Spec",
 			"href": "http://www.whatwg.org/specs/web-apps/current-work/multipage/the-iframe-element.html#attr-iframe-srcdoc"
 		}]
 	},
 	{
 		"name": "Animated PNG",
 		"async": true,
 		"property": "apng",
 		"tags": ["image"],
 		"notes": [
 		{
 			"name": "Wikipedia Article",
 			"href": "http://en.wikipedia.org/wiki/APNG"
 		}]
 	},
 	{
 		"name": "JPEG XR (extended range)",
 		"async": true,
 		"aliases": ["jpeg-xr"],
 		"property": "jpegxr",
 		"tags": ["image"],
 		"notes": [
 		{
 			"name": "Wikipedia Article",
 			"href": "http://en.wikipedia.org/wiki/JPEG_XR"
 		}]
 	},
 	{
 		"name": "srcset attribute",
 		"property": "srcset",
 		"tags": ["image"],
 		"notes": [
 		{
 			"name": "Smashing Magazine Article",
 			"href": "http://en.wikipedia.org/wiki/APNG"
 		},
 		{
 			"name": "Generate multi-resolution images for srcset with Grunt",
 			"href": "http://addyosmani.com/blog/generate-multi-resolution-images-for-srcset-with-grunt/"
 		}]
 	},
 	{
 		"name": "Webp Alpha",
 		"async": true,
 		"property": "webpalpha",
 		"aliases": ["webp-alpha"],
 		"tags": ["image"],
 		"authors": ["Krister Kari", "Rich Bradshaw", "Ryan Seddon", "Paul Irish"],
 		"notes": [
 		{
 			"name": "WebP Info",
 			"href": "http://code.google.com/speed/webp/"
 		},
 		{
 			"name": "Article about WebP support on Android browsers",
 			"href": "http://www.wope-framework.com/en/2013/06/24/webp-support-on-android-browsers/"
 		},
 		{
 			"name": "Chormium WebP announcement",
 			"href": "http://blog.chromium.org/2011/11/lossless-and-transparency-encoding-in.html?m=1"
 		}]
 	},
 	{
 		"name": "Webp Animation",
 		"async": true,
 		"property": "webpanimation",
 		"aliases": ["webp-animation"],
 		"tags": ["image"],
 		"authors": ["Krister Kari", "Rich Bradshaw", "Ryan Seddon", "Paul Irish"],
 		"notes": [
 		{
 			"name": "WebP Info",
 			"href": "http://code.google.com/speed/webp/"
 		},
 		{
 			"name": "Chormium blog - Chrome 32 Beta: Animated WebP images and faster Chrome for Android touch input",
 			"href": "http://blog.chromium.org/2013/11/chrome-32-beta-animated-webp-images-and.html"
 		}]
 	},
 	{
 		"name": "Webp Lossless",
 		"async": true,
 		"property": ["webplossless", "webp-lossless"],
 		"tags": ["image"],
 		"authors": ["@amandeep", "Rich Bradshaw", "Ryan Seddon", "Paul Irish"],
 		"notes": [
 		{
 			"name": "Webp Info",
 			"href": "http://code.google.com/speed/webp/"
 		},
 		{
 			"name": "Webp Lossless Spec",
 			"href": "https://developers.google.com/speed/webp/docs/webp_lossless_bitstream_specification"
 		}]
 	},
 	{
 		"name": "Webp",
 		"async": true,
 		"property": "webp",
 		"tags": ["image"],
 		"authors": ["Rich Bradshaw", "Ryan Seddon", "Paul Irish"],
 		"notes": [
 		{
 			"name": "Webp Info",
 			"href": "http://code.google.com/speed/webp/"
 		}]
 	},
 	{
 		"name": "IndexedDB",
 		"property": "indexeddb",
 		"caniuse": "indexeddb",
 		"tags": ["storage"],
 		"polyfills": ["indexeddb"]
 	},
 	{
 		"name": "input formaction",
 		"property": "inputformaction",
 		"aliases": ["input-formaction"],
 		"notes": [
 		{
 			"name": "WHATWG Spec",
 			"href": "http://www.whatwg.org/specs/web-apps/current-work/multipage/association-of-controls-and-forms.html#attr-fs-formaction"
 		},
 		{
 			"name": "Wufoo demo",
 			"href": "http://www.wufoo.com/html5/attributes/13-formaction.html"
 		}],
 		"polyfills": ["webshims"]
 	},
 	{
 		"name": "input formenctype",
 		"property": "inputformenctype",
 		"aliases": ["input-formenctype"],
 		"notes": [
 		{
 			"name": "WHATWG Spec",
 			"href": "http://www.whatwg.org/specs/web-apps/current-work/multipage/association-of-controls-and-forms.html#attr-fs-formenctype"
 		},
 		{
 			"name": "Wufoo demo",
 			"href": "http://www.wufoo.com/html5/attributes/16-formenctype.html"
 		}],
 		"polyfills": ["html5formshim"]
 	},
 	{
 		"name": "Input attributes",
 		"property": "input",
 		"tags": ["forms"],
 		"authors": ["Mike Taylor"],
 		"notes": [
 		{
 			"name": "WHATWG spec",
 			"href": "http://www.whatwg.org/specs/web-apps/current-work/multipage/the-input-element.html#input-type-attr-summary"
 		}]
 	},
 	{
 		"name": "input[search] search event",
 		"property": "search",
 		"tags": ["input", "search"],
 		"authors": ["Calvin Webster"],
 		"notes": [
 		{
 			"name": "Wufoo demo",
 			"href": "http://www.wufoo.com/html5/types/5-search.html?"
 		},
 		{
 			"name": "CSS Tricks",
 			"href": "http://css-tricks.com/webkit-html5-search-inputs/"
 		}]
 	},
 	{
 		"name": "Form input types",
 		"property": "inputtypes",
 		"caniuse": "forms",
 		"tags": ["forms"],
 		"authors": ["Mike Taylor"],
 		"polyfills": ["jquerytools", "webshims", "h5f", "webforms2", "nwxforms", "fdslider", "html5slider", "galleryhtml5forms", "jscolor", "html5formshim", "jqueryformshim", "selectedoptionsjs", "formvalidationjs"]
 	},
 	{
 		"name": "Internationalization API",
 		"property": "Intl",
 		"notes": [
 		{
 			"name": "MDN documentation",
 			"href": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl"
 		},
 		{
 			"name": "ECMAScript spec",
 			"href": "http://www.ecma-international.org/ecma-402/1.0/"
 		}]
 	},
 	{
 		"name": "JSON",
 		"property": "json",
 		"caniuse": "json",
 		"notes": [
 		{
 			"name": "MDN documentation",
 			"href": "http://developer.mozilla.org/en/JSON"
 		}],
 		"polyfills": ["json2"]
 	},
 	{
 		"name": "Reverse Ordered Lists",
 		"property": "olreversed",
 		"notes": [
 		{
 			"name": "Impressive Webs article",
 			"href": "http://impressivewebs.com/reverse-ordered-lists-html5"
 		}],
 		"polyfills": ["impressivewebs"]
 	},
 	{
 		"name": "MathML",
 		"property": "mathml",
 		"caniuse": "mathml",
 		"authors": ["Addy Osmani", "Davide P. Cervone", "David Carlisle"],
 		"notes": [
 		{
 			"name": "W3C spec",
 			"href": "http://www.w3.org/Math/"
 		}],
 		"polyfills": ["mathjax"]
 	},
 	{
 		"name": "Low Bandwidth Connection",
 		"property": "lowbandwidth",
 		"tags": ["network"]
 	},
 	{
 		"name": "Server Sent Events",
 		"property": "eventsource",
 		"tags": ["network"],
 		"notes": [
 		{
 			"name": "W3 Spec",
 			"href": "http://dev.w3.org/html5/eventsource/"
 		}]
 	},
 	{
 		"name": "XMLHttpRequest xhr.responseType='arraybuffer'",
 		"property": "xhrresponsetypearraybuffer",
 		"tags": ["network"],
 		"notes": [
 		{
 			"name": "XMLHttpRequest Living Standard",
 			"href": "http://xhr.spec.whatwg.org/#the-responsetype-attribute"
 		}]
 	},
 	{
 		"name": "XMLHttpRequest xhr.responseType='blob'",
 		"property": "xhrresponsetypeblob",
 		"tags": ["network"],
 		"notes": [
 		{
 			"name": "XMLHttpRequest Living Standard",
 			"href": "http://xhr.spec.whatwg.org/#the-responsetype-attribute"
 		}]
 	},
 	{
 		"name": "XMLHttpRequest xhr.responseType='document'",
 		"property": "xhrresponsetypedocument",
 		"tags": ["network"],
 		"notes": [
 		{
 			"name": "XMLHttpRequest Living Standard",
 			"href": "http://xhr.spec.whatwg.org/#the-responsetype-attribute"
 		}]
 	},
 	{
 		"name": "XMLHttpRequest xhr.responseType='json'",
 		"property": "xhrresponsetypejson",
 		"tags": ["network"],
 		"notes": [
 		{
 			"name": "XMLHttpRequest Living Standard",
 			"href": "http://xhr.spec.whatwg.org/#the-responsetype-attribute"
 		},
 		{
 			"name": "Explanation of xhr.responseType='json'",
 			"href": "http://mathiasbynens.be/notes/xhr-responsetype-json"
 		}]
 	},
 	{
 		"name": "XMLHttpRequest xhr.responseType='text'",
 		"property": "xhrresponsetypetext",
 		"tags": ["network"],
 		"notes": [
 		{
 			"name": "XMLHttpRequest Living Standard",
 			"href": "http://xhr.spec.whatwg.org/#the-responsetype-attribute"
 		}]
 	},
 	{
 		"name": "XMLHttpRequest xhr.responseType",
 		"property": "xhrresponsetype",
 		"tags": ["network"],
 		"notes": [
 		{
 			"name": "XMLHttpRequest Living Standard",
 			"href": "http://xhr.spec.whatwg.org/#the-responsetype-attribute"
 		}]
 	},
 	{
 		"name": "XML HTTP Request Level 2 XHR2",
 		"property": "xhr2",
 		"tags": ["network"],
 		"notes": [
 		{
 			"name": "W3 Spec",
 			"href": "http://www.w3.org/TR/XMLHttpRequest2/"
 		},
 		{
 			"name": "Details on Related Github Issue",
 			"href": "http://github.com/Modernizr/Modernizr/issues/385"
 		}]
 	},
 	{
 		"name": "Notification",
 		"property": "notification",
 		"caniuse": "notifications",
 		"authors": ["Theodoor van Donge", "Hendrik Beskow"],
 		"notes": [
 		{
 			"name": "HTML5 Rocks tutorial",
 			"href": "http://www.html5rocks.com/en/tutorials/notifications/quick/"
 		},
 		{
 			"name": "W3C spec",
 			"href": "www.w3.org/TR/notifications/"
 		}],
 		"polyfills": ["desktop-notify", "html5-notifications"]
 	},
 	{
 		"name": "Page Visibility API",
 		"property": "pagevisibility",
 		"caniuse": "pagevisibility",
 		"tags": ["performance"],
 		"notes": [
 		{
 			"name": "MDN documentation",
 			"href": "https://developer.mozilla.org/en-US/docs/DOM/Using_the_Page_Visibility_API"
 		},
 		{
 			"name": "W3C spec",
 			"href": "http://www.w3.org/TR/2011/WD-page-visibility-20110602/"
 		},
 		{
 			"name": "HTML5 Rocks tutorial",
 			"href": "http://www.html5rocks.com/en/tutorials/pagevisibility/intro/"
 		}],
 		"polyfills": ["visibilityjs", "visiblyjs", "jquery-visibility"]
 	},
 	{
 		"name": "Navigation Timing API",
 		"property": "performance",
 		"caniuse": "nav-timing",
 		"tags": ["performance"],
 		"authors": ["Scott Murphy (@uxder)"],
 		"notes": [
 		{
 			"name": "W3C Spec",
 			"href": "http://www.w3.org/TR/navigation-timing/"
 		},
 		{
 			"name": "HTML5 Rocks article",
 			"href": "http://www.html5rocks.com/en/tutorials/webperformance/basics/"
 		}],
 		"polyfills": ["perfnow"]
 	},
 	{
 		"name": "DOM Pointer Events API",
 		"property": "pointerevents",
 		"tags": ["input"],
 		"authors": ["Stu Cox"],
 		"notes": ["This property name used to refer to the CSS `pointer-events` property, which is now named `csspointerevents`.",
 		{
 			"name": "W3C spec submission",
 			"href": "http://www.w3.org/Submission/pointer-events/"
 		}],
 		"warnings": ["This property name now refers to W3C DOM PointerEvents: https://github.com/Modernizr/Modernizr/issues/548#issuecomment-12812099"],
 		"polyfills": ["handjs"]
 	},
 	{
 		"name": "Pointer Lock API",
 		"property": "pointerlock",
 		"notes": [
 		{
 			"name": "MDN documentation",
 			"href": "https://developer.mozilla.org/en-US/docs/API/Pointer_Lock_API"
 		}]
 	},
 	{
 		"name": "postMessage",
 		"property": "postmessage",
 		"caniuse": "x-doc-messaging",
 		"notes": [
 		{
 			"name": "W3C Spec",
 			"href": "http://www.w3.org/TR/html5/comms.html#posting-messages"
 		}],
 		"polyfills": ["easyxdm", "postmessage-jquery"]
 	},
 	{
 		"name": "Quota Storage Management API",
 		"property": "quotamanagement",
 		"tags": ["storage"],
 		"notes": [
 		{
 			"name": "W3C Spec",
 			"href": "http://www.w3.org/TR/quota-api/"
 		}]
 	},
 	{
 		"name": "requestAnimationFrame",
 		"property": "requestanimationframe",
 		"aliases": ["raf"],
 		"caniuse": "requestanimationframe",
 		"tags": ["animation"],
 		"authors": ["Addy Osmani"],
 		"notes": [
 		{
 			"name": "W3C spec",
 			"href": "http://www.w3.org/TR/animation-timing/"
 		}],
 		"polyfills": ["raf"]
 	},
 	{
 		"name": "script[async]",
 		"property": "scriptasync",
 		"caniuse": "script-async",
 		"tags": ["script"],
 		"authors": ["Theodoor van Donge"]
 	},
 	{
 		"name": "script[defer]",
 		"property": "scriptdefer",
 		"caniuse": "script-defer",
 		"tags": ["script"],
 		"authors": ["Theodoor van Donge"],
 		"warnings": ["Browser implementation of the `defer` attribute vary: http://stackoverflow.com/questions/3952009/defer-attribute-chrome#answer-3982619"]
 	},
 	{
 		"name": "ServiceWorker API",
 		"property": "serviceworker",
 		"notes": [
 		{
 			"name": "ServiceWorkers Explained",
 			"href": "https://developer.mozilla.org/en-US/docs/WebAPI/Using_geolocation"
 		}]
 	},
 	{
 		"authors": ["Cătălin Mariș"],
 		"name": "Speech Recognition API",
 		"notes": [
 		{
 			"name": "W3C Web Speech API Specification - The SpeechRecognition Interface",
 			"href": "https://dvcs.w3.org/hg/speech-api/raw-file/tip/speechapi.html#speechreco-section"
 		},
 		{
 			"name": "Introduction to the Web Speech API",
 			"href": "http://updates.html5rocks.com/2013/01/Voice-Driven-Web-Apps-Introduction-to-the-Web-Speech-API"
 		}],
 		"property": "speechrecognition",
 		"tags": ["input", "speech"]
 	},
 	{
 		"authors": ["Cătălin Mariș"],
 		"name": "Speech Synthesis API",
 		"notes": [
 		{
 			"name": "W3C Web Speech API Specification - The SpeechSynthesis Interface",
 			"href": "https://dvcs.w3.org/hg/speech-api/raw-file/tip/speechapi.html#tts-section"
 		}],
 		"property": "speechsynthesis",
 		"tags": ["input", "speech"]
 	},
 	{
 		"name": "Local Storage",
 		"property": "localstorage",
 		"caniuse": "namevalue-storage",
 		"tags": ["storage"],
 		"knownBugs": [],
 		"notes": [],
 		"warnings": [],
 		"notes": [
 		{
 			"href": "http://www.w3.org/TR/webstorage/#the-localstorage-attribute"
 		}],
 		"polyfills": ["joshuabell-polyfill", "cupcake", "storagepolyfill", "amplifyjs", "yui-cacheoffline", "textstorage"]
 	},
 	{
 		"name": "Session Storage",
 		"property": "sessionstorage",
 		"tags": ["storage"],
 		"polyfills": ["joshuabell-polyfill", "cupcake", "sessionstorage"]
 	},
 	{
 		"name": "Web SQL Database",
 		"property": "websqldatabase",
 		"caniuse": "sql-storage",
 		"tags": ["storage"]
 	},
 	{
 		"name": "style[scoped]",
 		"property": "stylescoped",
 		"caniuse": "style-scoped",
 		"tags": ["dom"],
 		"authors": ["Cătălin Mariș"],
 		"notes": [
 		{
 			"name": "WHATWG Specification",
 			"href": "http://www.whatwg.org/specs/web-apps/current-work/multipage/semantics.html#attr-style-scoped"
 		}],
 		"polyfills": ["scoped-styles"]
 	},
 	{
 		"name": "SVG as an <img> tag source",
 		"property": "svgasimg",
 		"caniuse": "svg-img",
 		"tags": ["svg"],
 		"authors": ["Stu Cox"],
 		"async": true,
 		"notes": [
 		{
 			"name": "HTML5 Spec",
 			"href": "http://www.w3.org/TR/html5/embedded-content-0.html#the-img-element"
 		}]
 	},
 	{
 		"name": "SVG clip paths",
 		"property": "svgclippaths",
 		"tags": ["svg"],
 		"notes": [
 		{
 			"name": "Demo",
 			"href": "http://srufaculty.sru.edu/david.dailey/svg/newstuff/clipPath4.svg"
 		}]
 	},
 	{
 		"name": "SVG filters",
 		"property": "svgfilters",
 		"caniuse": "svg-filters",
 		"tags": ["svg"],
 		"authors": ["Erik Dahlstrom"],
 		"notes": [
 		{
 			"name": "W3C Spec",
 			"href": "http://www.w3.org/TR/SVG11/filters.html"
 		}]
 	},
 	{
 		"name": "Inline SVG",
 		"property": "inlinesvg",
 		"caniuse": "svg-html5",
 		"tags": ["svg"],
 		"notes": [
 		{
 			"name": "Test page",
 			"href": "http://paulirish.com/demo/inline-svg"
 		}],
 		"polyfills": ["inline-svg-polyfill"]
 	},
 	{
 		"name": "SVG SMIL animation",
 		"property": "smil",
 		"caniuse": "svg-smil",
 		"tags": ["svg"],
 		"notes": [
 		{
 			"name": "W3C Synchronised Multimedia spec",
 			"href": "http://www.w3.org/AudioVideo/"
 		}]
 	},
 	{
 		"name": "SVG",
 		"property": "svg",
 		"caniuse": "svg",
 		"tags": ["svg"],
 		"authors": ["Erik Dahlstrom"],
 		"polyfills": ["svgweb", "raphael", "amplesdk", "canvg", "svg-boilerplate", "sie", "dojogfx", "fabricjs"]
 	},
 	{
 		"name": "textarea maxlength",
 		"property": "textareamaxlength",
 		"aliases": ["textarea-maxlength"],
 		"notes": [
 		{
 			"name": "MDN documentation",
 			"href": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea"
 		}],
 		"polyfills": ["maxlength"]
 	},
 	{
 		"name": "Touch Events",
 		"property": "touchevents",
 		"caniuse": "touch",
 		"tags": ["media", "attribute"],
 		"notes": [
 		{
 			"name": "Touch Events spec",
 			"href": "http://www.w3.org/TR/2013/WD-touch-events-20130124/"
 		}],
 		"warnings": ["Indicates if the browser supports the Touch Events spec, and does not necessarily reflect a touchscreen device"],
 		"knownBugs": ["False-positive on some configurations of Nokia N900", "False-positive on some BlackBerry 6.0 builds – https://github.com/Modernizr/Modernizr/issues/372#issuecomment-3112695"]
 	},
 	{
 		"name": "Typed arrays",
 		"property": "typedarrays",
 		"caniuse": "typedarrays",
 		"tags": ["js"],
 		"authors": ["Stanley Stuart (@fivetanley)"],
 		"notes": [
 		{
 			"name": "MDN documentation",
 			"href": "https://developer.mozilla.org/en-US/docs/JavaScript_typed_arrays"
 		},
 		{
 			"name": "Kronos spec",
 			"href": "http://www.khronos.org/registry/typedarray/specs/latest/"
 		}],
 		"polyfills": ["joshuabell-polyfill"]
 	},
 	{
 		"name": "Unicode Range",
 		"property": "unicoderange",
 		"notes": [
 		{
 			"name": "W3C reference",
 			"href": "http://www.w3.org/TR/2013/CR-css-fonts-3-20131003/#descdef-unicode-range"
 		},
 		{
 			"name": "24 Way article",
 			"href": "http://24ways.org/2011/creating-custom-font-stacks-with-unicode-range"
 		}]
 	},
 	{
 		"name": "Unicode characters",
 		"property": "unicode",
 		"tags": ["encoding"],
 		"warnings": ["positive Unicode support doesn't mean you can use it inside <title>, this seams more related to OS & Language packs"]
 	},
 	{
 		"name": "Data URI",
 		"property": "datauri",
 		"caniuse": "datauri",
 		"tags": ["url"],
 		"async": true,
 		"notes": [
 		{
 			"name": "Wikipedia article",
 			"href": "http://en.wikipedia.org/wiki/Data_URI_scheme"
 		}],
 		"warnings": ["Support in Internet Explorer 8 is limited to images and linked resources like CSS files, not HTML files"]
 	},
 	{
 		"name": "IE User Data API",
 		"property": "userdata",
 		"tags": ["storage"],
 		"authors": ["@stereobooster"],
 		"notes": [
 		{
 			"name": "MSDN Documentation",
 			"href": "http://msdn.microsoft.com/en-us/library/ms531424(v=vs.85).aspx"
 		}]
 	},
 	{
 		"name": "Vibration API",
 		"property": "vibrate",
 		"notes": [
 		{
 			"name": "MDN documentation",
 			"href": "https://developer.mozilla.org/en/DOM/window.navigator.mozVibrate"
 		},
 		{
 			"name": "W3C spec",
 			"href": "http://www.w3.org/TR/vibration/"
 		}]
 	},
 	{
 		"name": "Video Autoplay",
 		"property": "videoautoplay",
 		"tags": ["video"],
 		"async": true,
 		"warnings": ["This test is very large – only include it if you absolutely need it"]
 	},
 	{
 		"name": "Video Loop Attribute",
 		"property": "videoloop",
 		"tags": ["video", "media"]
 	},
 	{
 		"name": "Video Preload Attribute",
 		"property": "videopreload",
 		"tags": ["video", "media"]
 	},
 	{
 		"name": "HTML5 Video",
 		"property": "video",
 		"caniuse": "video",
 		"tags": ["html5"],
 		"knownBugs": ["Without QuickTime, `Modernizr.video.h264` will be `undefined`; http://github.com/Modernizr/Modernizr/issues/546"],
 		"polyfills": ["html5media", "mediaelementjs", "sublimevideo", "videojs", "leanbackplayer", "videoforeverybody"]
 	},
 	{
 		"name": "VML",
 		"property": "vml",
 		"caniuse": "vml",
 		"tags": ["vml"],
 		"authors": ["Craig Andrews (@candrews)"],
 		"notes": [
 		{
 			"name": "W3C VML reference",
 			"href": "http://www.w3.org/TR/NOTE-VML"
 		},
 		{
 			"name": "Microsoft VML reference",
 			"href": "http://msdn.microsoft.com/en-us/library/bb263898%28VS.85%29.aspx"
 		}]
 	},
 	{
 		"name": "Web Intents",
 		"property": "webintents",
 		"authors": ["Eric Bidelman"],
 		"notes": [
 		{
 			"name": "Web Intents project site",
 			"href": "http://webintents.org/"
 		}],
 		"polyfills": ["webintents"]
 	},
 	{
 		"name": "Web Animation API",
 		"property": "animation",
 		"tags": ["webanimations"],
 		"polyfills": ["webanimationsjs"],
 		"notes":
 		{
 			"name": "Introducing Web Animations",
 			"href": "http://brian.sol1.net/svg/2013/06/26/introducing-web-animations/"
 		}
 	},
 	{
 		"name": "WebGL Extensions",
 		"property": "webglextensions",
 		"tags": ["webgl", "graphics"],
 		"async": true,
 		"authors": ["Ilmari Heikkinen"],
 		"knownBugs": [],
 		"notes": [
 		{
 			"name": "Kronos extensions registry",
 			"href": "http://www.khronos.org/registry/webgl/extensions/"
 		}]
 	},
 	{
 		"name": "WebGL",
 		"property": "webgl",
 		"caniuse": "webgl",
 		"tags": ["webgl", "graphics"],
 		"polyfills": ["jebgl", "webglcompat", "cwebgl", "iewebgl"]
 	},
 	{
 		"name": "getUserMedia",
 		"property": "getusermedia",
 		"caniuse": "stream",
 		"tags": ["webrtc"],
 		"authors": ["Eric Bidelman"],
 		"notes": [
 		{
 			"name": "W3C Media Capture and Streams spec",
 			"href": "http://www.w3.org/TR/mediacapture-streams/"
 		}],
 		"polyfills": ["getusermedia"]
 	},
 	{
 		"name": "RTC Peer Connection",
 		"property": "peerconnection",
 		"tags": ["webrtc"],
 		"authors": ["Ankur Oberoi"],
 		"notes": [
 		{
 			"name": "W3C Web RTC spec",
 			"href": "http://www.w3.org/TR/webrtc/"
 		}]
 	},
 	{
 		"name": "Binary WebSockets",
 		"property": "websocketsbinary",
 		"tags": ["websockets"]
 	},
 	{
 		"name": "WebSockets Support",
 		"property": "websockets",
 		"authors": ["Phread [fearphage]", "Mike Sherov [mikesherov]", "Burak Yigit Kaya [BYK]"],
 		"caniuse": "websockets",
 		"tags": ["html5"],
 		"warnings": ["This test will reject any old version of WebSockets even if it is not prefixed such as in Safari 5.1"],
 		"notes": [
 		{
 			"name": "CLOSING State and Spec",
 			"href": "http://www.w3.org/TR/websockets/#the-websocket-interface"
 		}],
 		"polyfills": ["sockjs", "socketio", "kaazing-websocket-gateway", "websocketjs", "atmosphere", "graceful-websocket", "portal", "datachannel"]
 	},
 	{
 		"name": "Framed window",
 		"property": "framed",
 		"tags": ["window"]
 	},
 	{
 		"name": "Workers from Blob URIs",
 		"property": "blobworkers",
 		"caniuse": "blobworkers",
 		"tags": ["performance", "workers"],
 		"notes": [
 		{
 			"name": "W3C Reference",
 			"href": "http://www.w3.org/TR/workers/"
 		}],
 		"knownBugs": ["This test may output garbage to console."],
 		"authors": ["Jussi Kalliokoski"],
 		"async": true
 	},
 	{
 		"name": "Workers from Data URIs",
 		"property": "dataworkers",
 		"caniuse": "dataworkers",
 		"tags": ["performance", "workers"],
 		"notes": [
 		{
 			"name": "W3C Reference",
 			"href": "http://www.w3.org/TR/workers/"
 		}],
 		"knownBugs": ["This test may output garbage to console."],
 		"authors": ["Jussi Kalliokoski"],
 		"async": true
 	},
 	{
 		"name": "Shared Workers",
 		"property": "sharedworkers",
 		"caniuse": "sharedworkers",
 		"tags": ["performance", "workers"],
 		"notes": [
 		{
 			"name": "W3C Reference",
 			"href": "http://www.w3.org/TR/workers/"
 		}]
 	},
 	{
 		"name": "Web Workers",
 		"property": "webworkers",
 		"caniuse": "webworkers",
 		"tags": ["performance", "workers"],
 		"notes": [
 		{
 			"name": "W3C Reference",
 			"href": "http://www.w3.org/TR/workers/"
 		},
 		{
 			"name": "HTML5 Rocks article",
 			"href": "http://www.html5rocks.com/en/tutorials/workers/basics/"
 		},
 		{
 			"name": "MDN documentation",
 			"href": "https://developer.mozilla.org/en-US/docs/Web/Guide/Performance/Using_web_workers"
 		}],
 		"polyfills": ["fakeworker", "html5shims"]
 	}];

 	var indexed_data = _.object(_.map(data, function(item)
 	{
 		return [item.property, item]
 	}));

 	return {
 		get_name: function(modernizr_id)
 		{
 			try
 			{
 				return indexed_data[modernizr_id].name;
 			}
 			catch (e)
 			{
 				console.log(modernizr_id + ' not found.');
 			}
 		},
 		get_href: function(modernizr_id)
 		{
 			try
 			{
 				var notes = indexed_data[modernizr_id].notes;
 				if (notes)
 				{
 					return notes[0].href;
 				}
 				return "https://developer.mozilla.org/en-US/search?q=" + modernizr_id;
 			}
 			catch (e)
 			{
 				console.log(modernizr_id + ' not found.');
 			}
 		},
 		get_object: function(modernizr_id)
 		{
 			try
 			{
 				return indexed_data[modernizr_id];
 			}
 			catch (e)
 			{
 				console.log(modernizr_id + ' not found.');
 			}
 		},
 		get_index: function()
 		{
 			return indexed_data;
 		},
 		get_data: function()
 		{
 			return data;
 		}
 	};
 })();