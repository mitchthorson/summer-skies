var server = require('node-static');
var exec= require('child_process').exec;

var appDir = __dirname + "/public";
var fileServer = new server.Server(appDir);

function serve() {

    require('http').createServer(function (request, response) {
        request.addListener('end', function () {
            //
            // Serve files!
            //
            fileServer.serve(request, response);
        }).resume();
    }).listen(8080);


}

function saveImage() {
    console.log("grabbing images...");
    exec("phantomjs save-images/read-image.js", function (error, stdout, stderr) {
        if(error) {
            console.log(error.code);
        } else {
            console.log("done!");
            process.exit(0);
        }
    });
}

function init() {
    console.log("starting up server");
    serve();
    saveImage();
}

init();

