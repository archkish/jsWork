import {Box} from "./src/hm1/Box.js";
import {Circle} from "./src/hm1/Circle.js";
// import './src/hm2/homework2.js'

class Main {
    createBox() {
        const bgColor = document.getElementById('colorBox').value;
        const box = new Box(100, 100, bgColor);
        box.draw();
    }

    createCircle() {
        const bgColor = document.getElementById('colorCircle').value;
        const circle = new Circle(100, 100, bgColor);
        circle.draw();
    }
}

window.app = new Main();