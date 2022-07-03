import { tick } from "./ai1.js";

function run(){
  tick();
    setTimeout(run, 50);
}

run();