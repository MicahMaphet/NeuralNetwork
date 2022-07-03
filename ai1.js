import { AI1 } from './AIFormat.js'
import { AI2 } from './AIFormat.js'
import { tick } from "./AIFormat.js";

let mot = 0; let prog = getdis(); let mx = 10; let lx = 10; let my = 10; let ly = 10;
let speed = 1;
//Explain inputs
AI1.x++;
export function expin() {
  if(mx > 0) {
    trymx();
    if(mot < 0) {
      mx--;
    }
  }
  if(mx < 1) {
    if(lx > 0) {
      trylx();
      if(mot < 0) {
        lx--;
      }
    }
  }
  if(my > 0) {
    trymy();
    if(mot < 0) {
      my--;
    }
  }
  if(my < 1) {
    if(ly > 0) {
      tryly();
      if(mot < 0) {
        ly--;
      }
    }
  }
  console.log(mot);
}

//Get Distance
function getdis() {
  return Math.sqrt(Math.abs(AI1.x - AI2.x) ** 2 + Math.abs(AI1.y - AI2.y) ** 2);  
// it's litteraly just pythagream theorem
}
//try more x
function trymx() {
  AI1.x += speed;
  mot = prog - getdis();
  tick();
  prog = getdis();
}

function trylx() {
  AI1.x += speed;
  mot = prog - getdis();
  tick();
  prog = getdis();

}

function trymy() {
  AI1.y += speed;
  mot = prog - getdis();
  tick();
  prog = getdis();
}

function tryly() {
  AI1.y += speed;
  mot = prog - getdis();
  tick();
  prog = getdis();

}