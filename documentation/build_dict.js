var dir = require('node-dir');

var __dirname = "/Users/les/repos/github/Modernizr/feature-detects"

// dir.readFiles(__dirname, {
//     match: /.js$/,
//     exclude: /^\./
//     }, function(err, content, next) {
//         if (err) throw err;
//         console.log('content:', content);
//         next();
//     },
//     function(err, files){
//         if (err) throw err;
//         console.log('finished reading files:',files);
//     });

var metadata = [];

dir.readFiles(__dirname, {
    match: /.js$/,
    exclude: /^\./
    }, function(err, content, next) {
        if (err) throw err;
        try{
	        var meta = content.match(/\/\*!([\s\S]*)!\*\//g)[0];
	        if(meta){
                var metaobj = JSON.parse(meta.replace("/*!",'').replace("!*/",'').replace(/\n/g, ''));
	        	// var metaobj = JSON.parse(meta.replace(/[\/\*!|!\*\/]/g,'').replace(/\n/g, ''));
	        	metadata.push(metaobj);
	    	}
	    }catch (e){
	    	console.log("Error: " + e);
	    }
        next();
    },
    function(err, files){
        if (err) throw err;
        console.log('finished reading files:',files);
        console.log('metadata: ' + JSON.stringify(metadata));
    });
