let mosca = document.getElementById("mosca");
let contenedor = document.getElementById("contenedor");
let x;
let y;

const mover = (event) => {
  x = mosca.offsetLeft;
  y = mosca.offsetTop;

  switch (event.keyCode) {
    case 37:
      if (x > 10) {
        mosca.style.left = x - 10 + "px";
      }
      break;
    case 39:
      if (x < contenedor.clientWidth - mosca.clientWidth - 10) {
        mosca.style.left = x + 10 + "px";
      }
      break;
    case 38:
      if (y > 10) {
        mosca.style.top = y - 10 + "px";
      }
      break;
    case 40:
      if (y < contenedor.clientHeight - mosca.clientHeight - 10) {
        mosca.style.top = y + 10 + "px";
      }
      break;
  }
};

document.addEventListener("keydown", mover);
