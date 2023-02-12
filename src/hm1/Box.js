export class Box {
  #width;
  #height;
  #color;
  el;
  constructor(width, height, color) {
    this.#width = width;
    this.#height = height;
    this.#color = color;
  }

  draw() {
    this.el = document.body.appendChild(document.createElement("div"));
    this.el.style = `
            width: ${this.#width}px;
            height: ${this.#height}px;
            background-color: ${this.#color};
        `;
  }
}
