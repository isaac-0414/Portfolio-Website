import { clearConsole2IntervalId } from "./console2";
import { console_1, console_2 } from "../global/elements";
import { wait } from "./typewriter";

// CLEAR AND RESET THE TWO CONSOLES
export async function clearConsole() {
  clearConsole2IntervalId();
  await wait(200);
  console_1.innerHTML = "";
  console_2.innerHTML = "";
}

//clear console_2 only
export async function clearConsole2() {
  clearConsole2IntervalId();
  await wait(200);
  console_2.innerHTML = "";
}
