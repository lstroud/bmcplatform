var modernizr_dict = modernizr_dict_getdata();
modernizr_dict = _.object(_.map(modernizr_dict, function(item) {
   return [item.id, item]
}));

////////////////////////////////////////////////////////////////////////////////////
function modernizr_dict_getdata(){
	return [
		{
			id: 'js',
			name: 'Javascript',
			url: 'http://www.ecma-international.org/publications/standards/Ecma-262.htm',
			rurl: 'http://www.ecma-international.org/publications/standards/Ecma-262.htm'
		},
		{
			id: 'datalistelem',
			name: 'Datalist Element',
			url: 'http://www.whatwg.org/specs/web-apps/current-work/multipage/the-button-element.html#the-datalist-element',
			rurl: 'http://www.whatwg.org/specs/web-apps/current-work/multipage/the-button-element.html#the-datalist-element'
		},
		{
			id: 'placeholder',
			name: 'Placeholder Attribute',
			url: 'http://www.w3.org/TR/2011/WD-html5-20110525/common-input-element-attributes.html#the-placeholder-attribute',
			rurl: 'http://www.w3.org/TR/2011/WD-html5-20110525/common-input-element-attributes.html#the-placeholder-attribute'
		},
		{
			id: 'adownload',
			name: 'A [download] attribute    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/72',
			rurl: 'http://www.w3.org/TR/html5/links.html#downloading-resources'
		},
		{
			id: 'apng',
			name: 'Image Format apng    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/149',
			rurl: 'https://wiki.mozilla.org/APNG_Specification'
		},
		{
			id: 'applicationcache',
			name: 'applicationCache    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/20',
			rurl: 'http://www.whatwg.org/specs/web-apps/current-work/multipage/offline.html'
		},
		{
			id: 'audio',
			name: 'HTML5 Audio m4a    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/30',
			rurl: 'https://en.wikipedia.org/wiki/H.264/MPEG-4_AVC'
		},
		{
			id: 'audio',
			name: 'HTML5 Audio    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/26',
			rurl: 'http://www.whatwg.org/specs/web-apps/current-work/multipage/the-video-element.html#audio'
		},
		{
			id: 'audio',
			name: 'HTML5 Audio ogg    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/27',
			rurl: 'http://theora.org/doc/'
		},
		{
			id: 'audio',
			name: 'HTML5 Audio mp3    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/28',
			rurl: 'https://en.wikipedia.org/wiki/H.264/MPEG-4_AVC'
		},
		{
			id: 'audio',
			name: 'HTML5 Audio wav    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/29',
			rurl: 'https://ccrma.stanford.edu/courses/422/projects/WaveFormat/'
		},
		{
			id: 'audiodata',
			name: 'Mozilla Audio Data API    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/73',
			rurl: 'https://wiki.mozilla.org/Audio_Data_API'
		},
		{
			id: 'backgroundsize',
			name: 'background-size    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/1',
			rurl: 'http://www.w3.org/TR/css3-background/#background-size'
		},
		{
			id: 'battery',
			name: 'Battery Status API    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/75',
			rurl: 'http://www.w3.org/TR/battery-status/'
		},
		{
			id: 'bgpositionshorthand',
			name: 'CSS background-position Shorthand    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/86',
			rurl: 'http://www.w3.org/TR/css3-background/#the-background'
		},
		{
			id: 'bgpositionxy',
			name: 'CSS background-position-x/y    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/87',
			rurl: 'http://www.w3.org/Style/CSS/Tracker/issues/9'
		},
		{
			id: 'bgrepeatround',
			name: 'CSS background-repeat: round    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/89',
			rurl: 'http://www.w3.org/TR/css3-background/#the-background-repeat'
		},
		{
			id: 'bgrepeatspace',
			name: 'CSS background-repeat: space    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/88',
			rurl: 'http://www.w3.org/TR/css3-background/#the-background-repeat'
		},
		{
			id: 'bgsizecover',
			name: 'CSS background-size: cover    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/90',
			rurl: 'http://www.w3.org/TR/css3-background/#the-background-size'
		},
		{
			id: 'blobconstructor',
			name: 'Blob Constructor    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/77',
			rurl: 'http://www.w3.org/TR/FileAPI/#blob'
		},
		{
			id: 'borderimage',
			name: 'border-image    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/2',
			rurl: 'http://www.w3.org/TR/css3-background/#the-border-image'
		},
		{
			id: 'borderradius',
			name: 'border-radius    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/3',
			rurl: 'http://www.w3.org/TR/css3-background/#the-border-radius'
		},
		{
			id: 'boxshadow',
			name: 'box-shadow    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/4',
			rurl: 'http://www.w3.org/TR/css3-background/#box-shadow'
		},
		{
			id: 'boxsizing',
			name: 'CSS Box Sizing    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/91',
			rurl: 'http://www.w3.org/TR/css3-ui/#box-sizing'
		},
		{
			id: 'canvas',
			name: 'Canvas    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/21',
			rurl: 'http://www.w3.org/TR/2dcontext2/'
		},
		{
			id: 'canvastext',
			name: 'Canvas Text    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/22',
			rurl: 'http://www.w3.org/TR/2dcontext2/#drawing-text-to-the-canvas'
		},
		{
			id: 'classlist',
			name: 'HTML5 ClassList API    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/120',
			rurl: 'http://www.w3.org/TR/dom/#dom-element-classlist'
		},
		{
			id: 'contenteditable',
			name: 'HTML5 Content Editable Attribute    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/81',
			rurl: 'http://www.w3.org/TR/html5/editing.html#contenteditable'
		},
		{
			id: 'contentsecuritypolicy',
			name: 'Content Security Policy    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/82',
			rurl: 'http://www.w3.org/TR/CSP/'
		},
		{
			id: 'contextmenu',
			name: 'HTML5 Context Menu    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/83',
			rurl: 'http://www.w3.org/TR/html5/interactive-elements.html#context-menus'
		},
		{
			id: 'cookies',
			name: 'Cookie    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/84',
			rurl: 'http://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-8747038'
		},
		{
			id: 'cors',
			name: 'Cross-Origin Resource Sharing    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/85',
			rurl: 'http://www.w3.org/TR/cors/'
		},
		{
			id: 'cssanimations',
			name: 'CSS Animations    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/12',
			rurl: 'http://www.w3.org/TR/css3-animations/'
		},
		{
			id: 'csscalc',
			name: 'CSS Calc    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/92',
			rurl: 'http://www.w3.org/TR/css3-values/#calc-notation'
		},
		{
			id: 'csscolumns',
			name: 'CSS Columns    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/13',
			rurl: 'http://www.w3.org/TR/css3-multicol/'
		},
		{
			id: 'cssfilters',
			name: 'CSS Filters    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/96',
			rurl: 'http://www.w3.org/TR/filter-effects/#FilterProperty'
		},
		{
			id: 'cssgradients',
			name: 'CSS Gradients    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/15',
			rurl: 'http://www.w3.org/TR/css3-images/#gradients'
		},
		{
			id: 'csshyphens',
			name: 'CSS Hyphens    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/97',
			rurl: 'http://www.w3.org/TR/css3-text/#hyphenation'
		},
		{
			id: 'cssmask',
			name: 'CSS Mask    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/101',
			rurl: 'http://www.w3.org/TR/css-masking/'
		},
		{
			id: 'csspositionsticky',
			name: 'CSS position: sticky    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/106',
			rurl: 'https://bugs.webkit.org/show_bug.cgi?id=90046'
		},
		{
			id: 'cssreflections',
			name: 'CSS Reflections    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/16',
			rurl: 'https://www.webkit.org/blog/182/css-reflections/'
		},
		{
			id: 'cssremunit',
			name: 'CSS Font rem Units    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/107',
			rurl: 'http://www.w3.org/TR/css3-values/#font-relative-lengths'
		},
		{
			id: 'cssresize',
			name: 'CSS resize    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/109',
			rurl: 'http://www.w3.org/TR/css3-ui/#resize'
		},
		{
			id: 'cssscrollbar',
			name: 'CSS Styleable Scrollbars    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/110',
			rurl: 'http://www.w3.org/TR/cssom-view/#dom-element-scrollwidth'
		},
		{
			id: 'csstransforms',
			name: 'CSS 2D Transforms    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/17',
			rurl: 'http://www.w3.org/TR/css3-transforms/'
		},
		{
			id: 'csstransforms3d',
			name: 'CSS 3D Transforms    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/18',
			rurl: 'http://www.w3.org/TR/css3-transforms/#transform-3d-rendering'
		},
		{
			id: 'csstransitions',
			name: 'CSS Transitions    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/19',
			rurl: 'http://www.w3.org/TR/css3-transitions/'
		},
		{
			id: 'cssvhunit',
			name: 'CSS Viewport Units vh    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/114',
			rurl: 'http://www.w3.org/TR/css3-values/#viewport-relative-lengths'
		},
		{
			id: 'cssvmaxunit',
			name: 'CSS Viewport Units vmax    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/115',
			rurl: 'http://www.w3.org/TR/css3-values/#viewport-relative-lengths'
		},
		{
			id: 'cssvminunit',
			name: 'CSS Viewport Units vmin    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/116',
			rurl: 'http://www.w3.org/TR/css3-values/#viewport-relative-lengths'
		},
		{
			id: 'cssvwunit',
			name: 'CSS Viewport Units vw    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/117',
			rurl: 'http://www.w3.org/TR/css3-values/#viewport-relative-lengths'
		},
		{
			id: 'cubicbezierrange',
			name: 'CSS Cubic Bezier Range    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/93',
			rurl: 'http://www.w3.org/TR/css3-transitions/#transition-timing-function-property'
		},
		{
			id: 'customprotocolhandler',
			name: 'Custom Protocol Handler    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/118',
			rurl: 'http://www.w3.org/TR/html5/webappapis.html#custom-handlers'
		},
		{
			id: 'dataset',
			name: 'HTML5 Datasets    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/121',
			rurl: 'http://www.w3.org/TR/html5/dom.html#embedding-custom-non-visible-data-with-the-data-*-attributes'
		},
		{
			id: 'datauri',
			name: 'Data URI Scheme    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/167',
			rurl: 'https://www.ietf.org/rfc/rfc2397.txt'
		},
		{
			id: 'dataview',
			name: 'DataView (JavaScript Typed Arrays)    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/119',
			rurl: 'https://www.khronos.org/registry/typedarray/specs/latest/'
		},
		{
			id: 'details',
			name: 'HTML5 Details & Summary    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/123',
			rurl: 'http://www.w3.org/TR/html5/interactive-elements.html#the-details-element'
		},
		{
			id: 'devicemotion',
			name: 'HTML5 Device Motion    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/133',
			rurl: 'http://www.w3.org/TR/orientation-event/#devicemotion'
		},
		{
			id: 'deviceorientation',
			name: 'HTML5 Device Orientation    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/134',
			rurl: 'http://www.w3.org/TR/orientation-event/#deviceorientation'
		},
		{
			id: 'display-runin',
			name: 'CSS display: run-in    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/94',
			rurl: 'http://www.w3.org/TR/css3-box/#run-in-boxes'
		},
		{
			id: 'display-table',
			name: 'CSS display: table    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/95',
			rurl: 'http://www.w3.org/TR/CSS21/tables.html'
		},
		{
			id: 'draganddrop',
			name: 'Drag and Drop    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/23',
			rurl: 'http://www.w3.org/html/wg/drafts/html/master/editing.html#dnd'
		},
		{
			id: 'emoji',
			name: 'Canvas Text Emoji    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/131',
			rurl: 'https://sites.google.com/site/unicodesymbols/Home/emoji-symbols'
		},
		{
			id: 'eventsource',
			name: 'Server-Sent Events    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/155',
			rurl: 'http://www.w3.org/TR/eventsource/'
		},
		{
			id: 'exif-orientation',
			name: 'EXIF Orientation    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/135',
			rurl: 'https://en.wikipedia.org/wiki/EXIF'
		},
		{
			id: 'fileinput',
			name: 'Input Type file    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/138',
			rurl: 'http://www.w3.org/TR/html5/forms.html#file-upload-state-(type=file)'
		},
		{
			id: 'filereader',
			name: 'File API    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/136',
			rurl: 'http://www.w3.org/TR/FileAPI/'
		},
		{
			id: 'filesystem',
			name: 'Filesystem API    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/137',
			rurl: 'http://www.w3.org/TR/file-system-api/'
		},
		{
			id: 'flexbox',
			name: 'Flexible Box Model    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/5',
			rurl: 'http://www.w3.org/TR/css3-flexbox/'
		},
		{
			id: 'flexboxlegacy',
			name: 'Flexbox legacy    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/6',
			rurl: 'http://www.w3.org/TR/2009/WD-css3-flexbox-20090723/'
		},
		{
			id: 'fontface',
			name: '@font-face    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/0',
			rurl: 'http://www.w3.org/TR/css3-fonts/#font-face-rule'
		},
		{
			id: 'formattribute',
			name: 'Input Attribute form    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/139',
			rurl: 'http://www.w3.org/TR/html5/forms.html#association-of-controls-and-forms'
		},
		{
			id: 'formvalidation',
			name: 'Interactive Form Validation    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/141',
			rurl: 'http://www.w3.org/TR/html5/forms.html#client-side-form-validation'
		},
		{
			id: 'framed',
			name: 'Window Framed    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/172',
			rurl: 'http://www.w3.org/TR/Window/'
		},
		{
			id: 'fullscreen',
			name: 'Fullscreen API    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/142',
			rurl: 'http://www.w3.org/TR/fullscreen/'
		},
		{
			id: 'gamepads',
			name: 'GamePad API    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/143',
			rurl: 'http://www.w3.org/TR/gamepad/'
		},
		{
			id: 'generatedcontent',
			name: 'CSS Generated Content (:before/:after)    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/14',
			rurl: 'http://www.w3.org/TR/CSS21/generate.html'
		},
		{
			id: 'geolocation',
			name: 'Geolocation API    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/65',
			rurl: 'http://www.w3.org/TR/geolocation-API/'
		},
		{
			id: 'getusermedia',
			name: 'Stream API    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/144',
			rurl: 'http://www.w3.org/TR/mediacapture-streams/'
		},
		{
			id: 'hashchange',
			name: 'hashchange Event    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/24',
			rurl: 'http://www.whatwg.org/specs/web-apps/current-work/multipage/history.html#event-hashchange'
		},
		{
			id: 'history',
			name: 'History Management    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/25',
			rurl: 'http://www.w3.org/html/wg/drafts/html/master/browsers.html#history'
		},
		{
			id: 'hsla',
			name: 'Color Values hsla()    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/7',
			rurl: 'http://www.w3.org/TR/css3-color/#hsla-color'
		},
		{
			id: 'ie8compat',
			name: 'IE8 compat mode    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/145',
			rurl: 'http://blogs.msdn.com/b/askie/archive/2009/03/23/understanding-compatibility-modes-in-internet-explorer-8.aspx'
		},
		{
			id: 'indexeddb',
			name: 'IndexedDB    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/35',
			rurl: 'http://www.w3.org/TR/IndexedDB/'
		},
		{
			id: 'inlinesvg',
			name: 'Inline SVG in HTML5    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/66',
			rurl: 'http://www.w3.org/TR/html5/embedded-content-0.html#svg'
		},
		{
			id: 'input',
			name: 'Input Attribute autocomplete    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/36',
			rurl: 'http://www.w3.org/TR/html51/forms.html#autofilling-form-controls:-the-autocomplete-attribute'
		},
		{
			id: 'input',
			name: 'Input Attribute autofocus    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/37',
			rurl: 'http://www.w3.org/TR/html51/forms.html#autofocusing-a-form-control:-the-autofocus-attribute'
		},
		{
			id: 'input',
			name: 'Input Attribute list    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/38',
			rurl: 'http://www.w3.org/TR/html51/forms.html#the-list-attribute'
		},
		{
			id: 'input',
			name: 'Input Attribute placeholder    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/39',
			rurl: 'http://www.w3.org/TR/html51/forms.html#the-placeholder-attribute'
		},
		{
			id: 'input',
			name: 'Input Attribute step    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/45',
			rurl: 'http://www.w3.org/TR/html51/forms.html#the-step-attribute'
		},
		{
			id: 'input',
			name: 'Input Attribute multiple    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/42',
			rurl: 'http://www.w3.org/TR/html51/forms.html#the-multiple-attribute'
		},
		{
			id: 'input',
			name: 'Input Attribute pattern    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/43',
			rurl: 'http://www.w3.org/TR/html51/forms.html#the-pattern-attribute'
		},
		{
			id: 'input',
			name: 'Input Attribute min    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/41',
			rurl: 'http://www.w3.org/TR/html51/forms.html#the-min-and-max-attributes'
		},
		{
			id: 'input',
			name: 'Input Attribute required    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/44',
			rurl: 'http://www.w3.org/TR/html51/forms.html#the-required-attribute'
		},
		{
			id: 'input',
			name: 'Input Attribute max    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/40',
			rurl: 'http://www.w3.org/TR/html51/forms.html#the-min-and-max-attributes'
		},
		{
			id: 'inputtypes',
			name: 'Input Date and Time (type=datetime)    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/50',
			rurl: 'http://www.w3.org/TR/html51/forms.html#date-and-time-state-(type=datetime)'
		},
		{
			id: 'inputtypes',
			name: 'Input E-mail (type=email)    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/49',
			rurl: 'http://www.w3.org/TR/html51/forms.html#e-mail-state-(type=email)'
		},
		{
			id: 'inputtypes',
			name: 'Input URL (type=url)    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/48',
			rurl: 'http://www.w3.org/TR/html51/forms.html#url-state-(type=url)'
		},
		{
			id: 'inputtypes',
			name: 'Input Telephone (type=tel)    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/47',
			rurl: 'http://www.w3.org/TR/html51/forms.html#telephone-state-(type=tel)'
		},
		{
			id: 'inputtypes',
			name: 'Input Search (type=search)    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/46',
			rurl: 'http://www.w3.org/TR/html51/forms.html#text-(type=text)-state-and-search-state-(type=search)'
		},
		{
			id: 'inputtypes',
			name: 'Input Color (type=color)    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/58',
			rurl: 'http://www.w3.org/TR/html51/forms.html#color-state-(type=color)'
		},
		{
			id: 'inputtypes',
			name: 'Input Range (type=range)    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/57',
			rurl: 'http://www.w3.org/TR/html51/forms.html#range-state-(type=range)'
		},
		{
			id: 'inputtypes',
			name: 'Input Number (type=number)    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/56',
			rurl: 'http://www.w3.org/TR/html51/forms.html#number-state-(type=number)'
		},
		{
			id: 'inputtypes',
			name: 'Input Local Date and Time (type=datetime-local)    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/55',
			rurl: 'http://www.w3.org/TR/html51/forms.html#local-date-and-time-state-(type=datetime-local)'
		},
		{
			id: 'inputtypes',
			name: 'Input Time (type=time)    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/54',
			rurl: 'http://www.w3.org/TR/html51/forms.html#time-state-(type=time)'
		},
		{
			id: 'inputtypes',
			name: 'Input Week (type=week)    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/53',
			rurl: 'http://www.w3.org/TR/html51/forms.html#week-state-(type=week)'
		},
		{
			id: 'inputtypes',
			name: 'Input Month (type=month)    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/52',
			rurl: 'http://www.w3.org/TR/html51/forms.html#month-state-(type=month)'
		},
		{
			id: 'inputtypes',
			name: 'Input Date (type=date)    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/51',
			rurl: 'http://www.w3.org/TR/html51/forms.html#date-state-(type=date)'
		},
		{
			id: 'json',
			name: 'Native JSON Parsing    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/151',
			rurl: 'http://es5.github.com/#x15.12'
		},
		{
			id: 'lastchild',
			name: 'CSS Pseudo-Class :last-child    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/100',
			rurl: 'http://www.w3.org/TR/css3-selectors/#last-child-pseudo'
		},
		{
			id: 'localstorage',
			name: 'localStorage    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/60',
			rurl: 'http://www.w3.org/TR/webstorage/#the-localstorage-attribute'
		},
		{
			id: 'lowbandwidth',
			name: 'Network Information API    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/154',
			rurl: 'http://www.w3.org/TR/netinfo-api/'
		},
		{
			id: 'lowbattery',
			name: 'Low Battery Level    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/76',
			rurl: 'http://www.w3.org/TR/battery-status/'
		},
		{
			id: 'mathml',
			name: 'MathML    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/153',
			rurl: 'http://www.w3.org/TR/MathML/'
		},
		{
			id: 'mediaqueries',
			name: 'CSS Media Queries    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/102',
			rurl: 'http://www.w3.org/TR/css3-mediaqueries/'
		},
		{
			id: 'meter',
			name: 'HTML5 Meter    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/126',
			rurl: 'http://www.w3.org/TR/html5/forms.html#the-meter-element'
		},
		{
			id: 'microdata',
			name: 'HTML5 Microdata    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/122',
			rurl: 'http://www.w3.org/html/wg/drafts/microdata/master/'
		},
		{
			id: 'multiplebgs',
			name: 'Multiple backgrounds    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/9',
			rurl: 'http://www.w3.org/TR/css3-background/#layering'
		},
		{
			id: 'notification',
			name: 'Web Notifications    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/157',
			rurl: 'http://www.w3.org/TR/notifications/'
		},
		{
			id: 'object-fit',
			name: 'CSS Object Fit    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/103',
			rurl: 'http://www.w3.org/TR/css3-images/#the-object-fit'
		},
		{
			id: 'olreversed',
			name: 'Reverse Ordered Lists    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/152',
			rurl: 'http://www.w3.org/TR/html5/grouping-content.html#attr-ol-reversed'
		},
		{
			id: 'opacity',
			name: 'opacity    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/10',
			rurl: 'http://www.w3.org/TR/css3-color/#transparency'
		},
		{
			id: 'outputelem',
			name: 'HTML5 Output    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/124',
			rurl: 'http://www.w3.org/TR/html5/forms.html#the-output-element'
		},
		{
			id: 'overflowscrolling',
			name: 'CSS Overflow Scrolling    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/104',
			rurl: 'https://developer.apple.com/library/safari/#documentation/appleapplications/reference/SafariCSSRef/Articles/StandardCSSProperties.html#//apple_ref/css/property/-webkit-overflow-scrolling'
		},
		{
			id: 'performance',
			name: 'Navigation Timing    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/158',
			rurl: 'http://www.w3.org/TR/navigation-timing/'
		},
		{
			id: 'pointerevents',
			name: 'CSS Pointer Events    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/105',
			rurl: 'http://www.w3.org/TR/pointerevents/'
		},
		{
			id: 'pointerlock',
			name: 'Pointer Lock API    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/159',
			rurl: 'http://www.w3.org/TR/pointerlock/'
		},
		{
			id: 'postmessage',
			name: 'Cross-window Messaging    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/61',
			rurl: 'http://www.whatwg.org/specs/web-apps/current-work/multipage/web-messaging.html#crossDocumentMessages'
		},
		{
			id: 'progressbar',
			name: 'HTML5 Progress Bar    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/125',
			rurl: 'http://www.w3.org/TR/html5/forms.html#the-progress-element'
		},
		{
			id: 'quotamanagement',
			name: 'Quota Storage Management API    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/160',
			rurl: 'http://www.w3.org/TR/quota-api/'
		},
		{
			id: 'raf',
			name: 'Timing Control for Script-Based Animations    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/161',
			rurl: 'http://www.w3.org/TR/animation-timing/'
		},
		{
			id: 'regions',
			name: 'CSS Regions    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/108',
			rurl: 'http://www.w3.org/TR/css3-regions/'
		},
		{
			id: 'rgba',
			name: 'Color Values rgba()    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/8',
			rurl: 'http://www.w3.org/TR/css3-color/#rgba-color'
		},
		{
			id: 'ruby',
			name: 'HTML5 Ruby, Rt, Rp elements    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/127',
			rurl: 'http://www.w3.org/TR/html5/text-level-semantics.html#the-ruby-element'
		},
		{
			id: 'sandbox',
			name: 'IFrame sandbox    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/146',
			rurl: 'http://www.w3.org/TR/html5/embedded-content-0.html#attr-iframe-sandbox'
		},
		{
			id: 'scriptasync',
			name: 'Script async    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/162',
			rurl: 'http://www.w3.org/TR/html5/scripting-1.html#attr-script-async'
		},
		{
			id: 'scriptdefer',
			name: 'Script defer    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/163',
			rurl: 'http://www.w3.org/TR/html5/scripting-1.html#attr-script-defer'
		},
		{
			id: 'seamless',
			name: 'IFrame seamless    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/147',
			rurl: 'http://www.w3.org/html/wg/drafts/html/master/embedded-content-0.html#attr-iframe-seamless'
		},
		{
			id: 'sessionstorage',
			name: 'sessionStorage    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/59',
			rurl: 'http://www.w3.org/TR/webstorage/#the-sessionstorage-attribute'
		},
		{
			id: 'sharedworkers',
			name: 'Shared Web Workers    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/173',
			rurl: 'http://www.w3.org/TR/workers/#shared-workers-introduction'
		},
		{
			id: 'smil',
			name: 'SVG SMIL animation    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/67',
			rurl: 'http://www.w3.org/TR/SVG/animate.html'
		},
		{
			id: 'softhyphens',
			name: 'CSS Soft Hyphens (shy)    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/98',
			rurl: 'http://www.w3.org/TR/css3-text/#hyphenation'
		},
		{
			id: 'softhyphensfind',
			name: 'CSS Soft Hyphens find-on-page    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/99',
			rurl: 'http://www.w3.org/TR/css3-text/#hyphenation'
		},
		{
			id: 'speechinput',
			name: 'Web Speech API    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/140',
			rurl: 'https://dvcs.w3.org/hg/speech-api/raw-file/tip/speechapi.html'
		},
		{
			id: 'srcdoc',
			name: 'IFrame srcdoc    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/148',
			rurl: 'http://www.w3.org/TR/html5/embedded-content-0.html#attr-iframe-srcdoc'
		},
		{
			id: 'strictmode',
			name: 'ECMAScript 5 Strict Mode    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/132',
			rurl: 'http://ecma-international.org/ecma-262/5.1/#sec-14.1'
		},
		{
			id: 'stylescoped',
			name: 'CSS Style Scoped    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/164',
			rurl: 'http://www.w3.org/TR/html5/document-metadata.html#attr-style-scoped'
		},
		{
			id: 'subpixelfont',
			name: 'SubPixel Font Rendering    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/111',
			rurl: 'https://github.com/gerritvanaaken/subpixeldetect'
		},
		{
			id: 'supports',
			name: 'CSS Feature Queries @supports    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/112',
			rurl: 'http://www.w3.org/TR/css3-conditional/#at-supports'
		},
		{
			id: 'svg',
			name: 'SVG    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/68',
			rurl: 'http://www.w3.org/TR/SVG/'
		},
		{
			id: 'svgclippaths',
			name: 'SVG Clipping Paths    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/69',
			rurl: 'http://www.w3.org/TR/SVG/masking.html#ClippingPaths'
		},
		{
			id: 'svgfilters',
			name: 'SVG Filters    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/165',
			rurl: 'http://www.w3.org/TR/SVG/filters.html'
		},
		{
			id: 'textshadow',
			name: 'text-shadow    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/11',
			rurl: 'http://www.w3.org/TR/css-text-decor-3/#text-shadow-property'
		},
		{
			id: 'texttrackapi',
			name: 'HTML5 Text Track API    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/130',
			rurl: 'http://www.w3.org/TR/html5/embedded-content-0.html#text-track-api'
		},
		{
			id: 'time',
			name: 'HTML5 Time    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/128',
			rurl: 'http://www.w3.org/TR/html5/text-level-semantics.html#the-time-element'
		},
		{
			id: 'todataurljpeg',
			name: 'Canvas toDataURL image/jpeg    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/78',
			rurl: 'http://www.w3.org/TR/html5/embedded-content-0.html#dom-canvas-todataurl'
		},
		{
			id: 'todataurlpng',
			name: 'Canvas toDataURL image/png    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/79',
			rurl: 'http://www.w3.org/TR/html5/embedded-content-0.html#dom-canvas-todataurl'
		},
		{
			id: 'todataurlwebp',
			name: 'Canvas toDataURL image/webp    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/80',
			rurl: 'http://www.w3.org/TR/html5/embedded-content-0.html#dom-canvas-todataurl'
		},
		{
			id: 'touch',
			name: 'Touch Events    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/70',
			rurl: 'http://www.w3.org/TR/touch-events/'
		},
		{
			id: 'track',
			name: 'HTML5 Track    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/129',
			rurl: 'http://www.w3.org/TR/html5/embedded-content-0.html#the-track-element'
		},
		{
			id: 'unicode',
			name: 'Unicode Special Characters    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/166',
			rurl: 'http://www.unicode.org/standard/standard.html'
		},
		{
			id: 'userdata',
			name: 'IE userData    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/168',
			rurl: 'http://msdn.microsoft.com/en-us/library/ms531424(v=vs.85).aspx'
		},
		{
			id: 'userselect',
			name: 'CSS user-select    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/113',
			rurl: 'https://developer.mozilla.org/en-US/docs/CSS/user-select'
		},
		{
			id: 'vibrate',
			name: 'Vibration API    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/169',
			rurl: 'http://www.w3.org/TR/vibration/'
		},
		{
			id: 'video',
			name: 'HTML5 Video webm    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/33',
			rurl: 'http://www.webmproject.org/'
		},
		{
			id: 'video',
			name: 'HTML5 Video ogg    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/32',
			rurl: 'http://theora.org/doc/'
		},
		{
			id: 'video',
			name: 'HTML5 Video h264    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/34',
			rurl: 'https://en.wikipedia.org/wiki/H.264/MPEG-4_AVC'
		},
		{
			id: 'video',
			name: 'HTML5 Video    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/31',
			rurl: 'http://www.whatwg.org/specs/web-apps/current-work/multipage/the-video-element.html#the-video-element'
		},
		{
			id: 'webaudio',
			name: 'HTML5 Web Audio API    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/74',
			rurl: 'http://www.w3.org/TR/webaudio/'
		},
		{
			id: 'webgl',
			name: 'WebGL    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/71',
			rurl: 'https://www.khronos.org/registry/webgl/specs/1.0/'
		},
		{
			id: 'webintents',
			name: 'Web Intents    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/170',
			rurl: 'http://www.w3.org/TR/web-intents/'
		},
		{
			id: 'webp',
			name: 'Image Format webp    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/150',
			rurl: 'https://developers.google.com/speed/webp/'
		},
		{
			id: 'websockets',
			name: 'Web Sockets    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/62',
			rurl: 'http://www.w3.org/TR/websockets/'
		},
		{
			id: 'websocketsbinary',
			name: 'Web Sockets binaryType    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/171',
			rurl: 'http://www.w3.org/TR/websockets/#dom-websocket-binarytype'
		},
		{
			id: 'websqldatabase',
			name: 'Web SQL Database    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/63',
			rurl: 'http://www.w3.org/TR/webdatabase/'
		},
		{
			id: 'webworkers',
			name: 'Web Workers    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/64',
			rurl: 'http://www.w3.org/TR/workers/'
		},
		{
			id: 'xhr2',
			name: 'XMLHttpRequest Level 2    ',
			url: 'http://www.browserleaks.com/modernizr/external/0/156',
			rurl: 'http://www.w3.org/TR/XMLHttpRequest2/'
		}];
	}