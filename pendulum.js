// Class to draw the pendulum
class Pendulum {
    constructor(x, y, canvas, context) {
        this.x = x;
        this.y = y;
        this.canvas = canvas;
        this.context = context;
    }
    // Conditions for position of pendulum (left, center ,right)
    setstate(state) {
        this.state = state;
        // For left
        if (this.state == 0) {
            this.endx = this.x + 130 * Math.sin(225 * Math.PI / 180);
            this.endy = this.y - 130 * Math.cos(225 * Math.PI / 180);
        }
        //For right
        else if (this.state == 1) {
            this.endx = this.x + 130 * Math.sin(135 * Math.PI / 180);
            this.endy = this.y - 120 * Math.cos(135 * Math.PI / 180);
        }
        // For Center
        else {
            this.endx = this.x + 130 * Math.sin(180 * Math.PI / 180);
            this.endy = this.y - 130 * Math.cos(180 * Math.PI / 180);
        }
    }
    // to create the shapes for pendulum
    draw() {
        this.context.beginPath();
        //create bob
        this.context.fillStyle = "black";
        this.context.arc(this.endx, this.endy, 20, 0, 2 * Math.PI, true);
        context.lineWidth = 4;
        //create string
        this.context.moveTo(this.x, this.y);
        this.context.lineTo(this.endx, this.endy);
        this.context.moveTo(this.x - 30, this.y);
        this.context.lineTo(this.x + 30, this.y);
        context.lineWidth = 6;
        this.context.strokeStyle = "black";
        context.fill();
        this.context.stroke();
    }
}
//# sourceMappingURL=pendulum.js.map