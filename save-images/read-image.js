var _ = require('lodash');
var webpage = require('webpage');

var outputDir = "save-images/output/";
var url = "http://localhost:8080";

var numShots = 18;
var currentShot = 0;
var time = new Date();
var viewportSize = {
    width: 600,
    height: 600
};


function getImage(timestamp, seriesNum) {
    var page = webpage.create();
    page.viewportSize = viewportSize;
    console.log("reading...");
    page.open(url, function() {
      window.setTimeout(function() {
          var time = new Date();
          page.render(outputDir + 'gradient_' + timestamp + '_' + seriesNum + '.png');
          if (currentShot == numShots) {
              phantom.exit();
          } else {
            currentShot++;
            getImage(time.getTime(), currentShot);
          }
      }, 100);
    });
}

getImage(time.getTime(), currentShot);
