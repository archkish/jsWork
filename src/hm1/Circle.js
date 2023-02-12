import {Box} from "./Box.js";

export class Circle extends Box {
    #borderRadius = "50%";
    draw() {
        super.draw();
        this.el.style.borderRadius = this.#borderRadius;
    }
}