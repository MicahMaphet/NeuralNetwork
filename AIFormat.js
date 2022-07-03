class AI {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}
export let AI1 = new AI(0, 0);
export let AI2 = new AI(100, 100);
export function tick() {
  AI1.x++;
  movement();
}
function movement() {
  ai1.style.top = AI1.y + "px";
  ai1.style.left = AI1.x + "px";
  ai2.style.top = AI2.y + "px";
  ai2.style.left = AI2.x + "px";
}
