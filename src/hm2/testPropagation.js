let el = document.body;

export function create() {
  const arr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

  for (let i = 0; i < arr.length; i++) {
    el = el.appendChild(document.createElement("div"));
    el.id = arr[i];
    el.innerText = arr[i];
    el.style = `
            margin-top: 70px;
            width: 70px;
            height: 70px;
            background: black;
            border-radius: 100%;    
        `;
    el.onclick = function (event) {
      console.log(this.id, event.target);
      if (this.id === "5") {
        event.stopPropagation();
      }
    };
  }
}

create();
