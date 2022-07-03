var x = 0;
var y = 0;

export function tick() {
  y += 1;
  movement();
}
function movement() {
  ai1.style.top = y + "px";
  ai1.style.left = x + "px";
}
