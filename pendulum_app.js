var canvas = document.getElementById("mycanvas");
var context = canvas.getContext('2d');
// Function to draw pendulum based on users choice
function show(state) {
    // Clearing the canvas area
    context.clearRect(0, 0, canvas.width, canvas.height);
    // Creating object of class Pendulum
    let p = new Pendulum(250, 130, canvas, context);
    p.setstate(state);
    p.draw();
}
show(2);
//# sourceMappingURL=pendulum_app.js.map