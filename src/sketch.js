// sketch.js
var s = function(sketch) {
    sketch.setup = function() {
      sketch.createCanvas(700, 410); // Create a canvas of the desired size
      // Your setup code here
    };
  
    sketch.draw = function() {
      // Your draw code here (if needed)
    };
  };
  
  var myp5 = new p5(s); // Initialize p5.js with your sketch
  