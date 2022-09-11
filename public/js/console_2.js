// ANIMAITON AT CONSOLE 2
// fake code to pretend I'm working
var txt = [
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

  var txt_copy = txt;
  
  var docfrag = document.createDocumentFragment();
  var txt_index = 0; //current row
  var console_2_interval_id = undefined; // interval id of hacker animation at console 2
  var console_2_timeout_id = undefined; // timeout id of hacker animation at console 2


  // reset intervalId to undefined
  const clearConsole2IntervalId = () => {
    if (console_2_interval_id !== undefined) {
      clearInterval(console_2_interval_id);
      console_2_interval_id = undefined;
      txt_index = 0;
      txt = txt_copy;
    }
  };
  
  async function console2AutoType() {
    return new Promise((resolve, reject) => {
      function console2AutoTypeHelper() {
        console_2_timeout_id = setTimeout(() => {
          //push the first element to the end
          txt.push(txt.shift());
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
            resolve();
          }
        }, 200);
        // if page changes, stop process
        if (currentPage !== about_btn || moreAboutMeOn === true) {
          clearTimeout(console_2_timeout_id);
          console_2_timeout_id = undefined;
          txt_index = 0;
          txt = txt_copy;
          return;
        }
        // if skip-animaiton clicked, stop process
        if (skip === true) {
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
    txt.push(txt.shift());
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
  
  async function throwError() {
    return new Promise((resolve, reject) => {
      reject(new Error("SKIP"));
    });
  }
  