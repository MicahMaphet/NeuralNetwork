import { expin } from "./ai1.js";
import { hide } from "./ai2.js";

function run(){
  expin();
  hide();
    setTimeout(run, 50);
}

run();