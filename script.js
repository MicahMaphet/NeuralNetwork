import { tick } from "./AIFormat.js";
import { expin } from "./ai1.js";

function run(){
  tick();
  expin();
    setTimeout(run, 50);
}

run();