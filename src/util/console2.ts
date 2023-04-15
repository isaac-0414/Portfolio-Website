import { console_2 } from "../global/elements";
import { getCurrentPage, Page, isMoreAboutMeOn, isSingleConsole, skipped } from "../global/globalStates";

// ANIMAITON AT CONSOLE 2

// fake code to pretend I'm working
let txt = [
   "FORCE: XX0022. ENCYPT://000.222.2345",
   "TRYPASS: ********* AUTH CODE: ALPHA GAMMA: 1___ PRIORITY 1",
   "RETRY: REINDEER FLOTILLA",
   "Z:> /FALKEN/GAMES/TICTACTOE/ EXECUTE -PLAYERS 0",
   "================================================",
   "Priority 1 // local / scanning...",
   "scanning ports...",
   "BACKDOOR FOUND (23.45.23.12.00000000)",
   "BACKDOOR FOUND (13.66.23.12.00110000)",
   "BACKDOOR FOUND (13.66.23.12.00110044)",
   "...",
   "...",
   "BRUTE.EXE -r -z",
   "...locating vulnerabilities...",
   "...vulnerabilities found...",
   "MCP/> DEPLOY CLU",
   "SCAN: __ 0100.0000.0554.0080",
   "SCAN: __ 0020.0000.0553.0080",
   "SCAN: __ 0001.0000.0554.0550",
   "SCAN: __ 0012.0000.0553.0030",
   "SCAN: __ 0100.0000.0554.0080",
   "SCAN: __ 0020.0000.0553.0080",
];

let txt_copy = txt;

let docfrag = document.createDocumentFragment();
let txt_index = 0; //current row
let console_2_interval_id: number | undefined = undefined; // interval id of hacker animation at console 2
let console_2_timeout_id: number | undefined = undefined; // timeout id of hacker animation at console 2
export function getConsole2IntervalId() {
   return console_2_interval_id;
}
export function getConsole2TimeoutId() {
   return console_2_timeout_id;
}


// reset intervalId to undefined
export const clearConsole2IntervalId = () => {
   if (console_2_interval_id !== undefined) {
   clearInterval(console_2_interval_id);
   console_2_interval_id = undefined;
   txt_index = 0;
   txt = txt_copy;
   }
};

export async function console2AutoType() {
   return new Promise((resolve, reject) => {
   function console2AutoTypeHelper() {
      console_2_timeout_id = window.setTimeout(() => {
         //push the first element to the end
         txt.push(txt.shift() as string);
         let p = document.createElement("p");
         //append the first row to the console
         p.textContent = txt[0];
         console_2.appendChild(p);
         //if all the text is already on the screen, starts looping
         if (txt_index++ != txt.length) {
         console2AutoTypeHelper();
         } else {
         console_2_timeout_id = undefined;
         console_2_interval_id = window.setInterval(updateConsole, 200);
         txt_index = 0;
         resolve(null);
         }
      }, 200);
      // if page changes, stop process
      if (getCurrentPage() !== Page.about || isMoreAboutMeOn() || isSingleConsole()) {
         clearTimeout(console_2_timeout_id);
         console_2_timeout_id = undefined;
         txt_index = 0;
         txt = txt_copy;
         return;
      }
      // if skip-animaiton clicked, stop process
      if (skipped()) {
         clearTimeout(console_2_timeout_id);
         reject(new Error("SKIP"));
         txt_index = 0;
         txt = txt_copy;
         return;
      }
   }
   console2AutoTypeHelper();
   });
}

function updateConsole() {
   //Shuffle the "txt" array
   txt.push(txt.shift() as string);
   //Rebuild document fragment
   txt.forEach(function (e) {
   let p = document.createElement("p");
   p.textContent = e;
   docfrag.appendChild(p);
   });
   //Clear DOM body
   console_2.innerHTML = "";
   //append new docfrag to the console
   console_2.appendChild(docfrag);
}