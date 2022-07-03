import { AI1 } from './AIFormat.js'
import { AI2 } from './AIFormat.js'
import { tick } from "./AIFormat.js";

let mot = 0; let prog = getdis(); let mx = 10; let lx = 10; let my = 10; let ly = 10;
let speed = 1; let cycle = 0;
//Explain inputs
AI2.x++;
export function hide() {
  if (cycle > 19) {
    lx = 10;
    mx = 10;
    ly = 10;
    my = 10;
    cycle = 0;
    }
  if(mx > 0) {
    trymx();
    if(mot < 0) {
      mx--;
    }
  }
    if(lx > 0) {
      trylx();
      if(mot < 0) {
        lx--;
      }
    }
  if(my > 0) {
    trymy();
    if(mot < 0) {
      my--;
    }
  }
    if(ly > 0) {
      tryly();
      if(mot < 0) {
        ly--;
      }
    }
  console.log(mot);
  cycle++;
}

//Get Distance
function getdis() {
  return Math.sqrt(Math.abs(AI1.x - AI2.x) ** 2 + Math.abs(AI1.y - AI2.y) ** 2);  
// it's litteraly just pythagream theorem
}
//try more x
function trymx() {
  AI2.x += speed;
  mot = getdis() - prog;
  tick();
  prog = getdis();
}

function trylx() {
  AI2.x -= speed;
  mot = getdis() - prog;
  tick();
  prog = getdis();

}

function trymy() {
  AI2.y += speed;
  mot = getdis() - prog;
  tick();
  prog = getdis();
}

function tryly() {
  AI2.y -= speed;
  mot = getdis() - prog;
  tick();
  prog = getdis();
}