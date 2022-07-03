import { tick } from "./ai1.js";

function run(){
  tick();
  ai2.tick();
    setTimeout(run, 50);
}

run();