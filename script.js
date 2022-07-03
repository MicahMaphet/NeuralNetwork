import { expin } from "./ai1.js";

function run(){
  expin();
    setTimeout(run, 50);
}

run();