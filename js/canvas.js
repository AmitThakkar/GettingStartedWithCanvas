/**
 * Created by amit on 5/10/14.
 */
(function (document, window) {
  function draw() {
    var canvas = document.getElementById('intersectingRectangle');
    if (canvas.getContext) {
      drawIntersectingRectangles();
      drawVerticalRectangles();
      drawTriangle();
    } else {
      // Canvas unsupported code will go here.
    }
  }

  function drawIntersectingRectangles() {
    var canvas = document.getElementById('intersectingRectangle');
    var context = canvas.getContext('2d');
    // Defining drawing color.
    context.fillStyle = "rgb(200,0,0)";
    // Drawing Rectangle.
    context.fillRect(10, 10, 55, 50);

    // Defining drawing color with 0.5 opacity.
    context.fillStyle = "rgba(0, 0, 200, 0.5)";
    context.fillRect(30, 30, 55, 50);
  }

  function drawVerticalRectangles() {
    var canvas = document.getElementById('verticalRectangles');
    var context = canvas.getContext('2d');
    // Drawing Rectangle
    context.fillRect(25, 25, 100, 100);
    // Clearing specific area.
    context.clearRect(45, 45, 60, 60);
    // Drawing Rectangle outline inside the specific clear area.
    context.strokeRect(50, 50, 50, 50);
  }

  function drawTriangle() {
    var canvas = document.getElementById('triangle');
    var context = canvas.getContext('2d');
    // Creating New Path
    context.beginPath();
    // Moving to a point, by default point is on (0,0)
    context.moveTo(60, 60);
    // Drawing line from (60, 60) to (60, 100)
    context.lineTo(60, 100);
    // Drawing line from (60, 100) to (100, 80)
    context.lineTo(100, 80);
    // filling diagram with fill() method, so no need to close the path
    // fill() method automatically close the path
    context.fill();
  }

  window.onload = draw;
}(document, window));