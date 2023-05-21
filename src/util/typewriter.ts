import { console_1 } from "../global/elements";
import { getCurrentPage, Page, skipped } from "../global/globalStates";

// TYPEWRITER EFFECT HELP FUNCTIONS
export let cursor: HTMLSpanElement | null;

export function typeWriter(text: string, type: string, speed: number) {
  let to_insert = document.createElement(type);
  console_1.append(to_insert);
  var text_position = 0;
  return new Promise((resolve, reject) => {
    function typeWriterHelper() {
      if (getCurrentPage() !== Page.about) {
         return;
      }
      if (skipped() === true) {
        reject(new Error("SKIP"));
         return;
      }

      // add one letter to the text going to insert every time, and add cursor to the end
      to_insert.innerHTML =
        text.substring(0, text_position) + `<span class="cursor">&#124;</span>`;
      to_insert.querySelector(".cursor")?.scrollIntoView();
      if (text_position++ != text.length) {
         setTimeout(typeWriterHelper, speed);
      } else {
         //after finished, if it's h1_text or h2_text, remove the cursor, if it's p_text, leave the cursor blinks
         resolve(null);
         cursor = to_insert.querySelector(".cursor");
         if (type != "p") {
            cursor!.remove();
         } else {
            cursorBlinkOn();
         }
      }
    }
    typeWriterHelper();
  });
}

//similar to above except all plus becomes minus
export function deleter(text_object: HTMLElement, speed: number) {
   let text = text_object.innerText;
   let text_position = text.length - 1;
   return new Promise((resolve, reject) => {
      function deleteHelper() {
         if (getCurrentPage() !== Page.about) {
            return;
         }
         if (skipped() === true) {
            reject(new Error("SKIP"));
            return;
         }

         text_object.innerHTML =
         text.substring(0, text_position) + `<span class="cursor">&#124;</span>`;
         if (text_position-- != -1) {
            setTimeout(deleteHelper, speed);
         } else {
            text_object.remove();
            resolve(null);
         }
      }
      deleteHelper();
   });
}

export async function wait(time: number) {
   return new Promise((resolve, reject) => {
      var timeout = setTimeout(() => {
         resolve(null);
      }, time);
      // if skip-animaiton clicked, stop process
      if (skipped() === true) {
         clearTimeout(timeout);
         reject(new Error("SKIP"));
         return;
      }
   });
}

//cursor blink functions
export function cursorBlinkOn() {
   cursor && cursor.classList.add("blinker");
}

export function cursorBlinkOff() {
   cursor && cursor.classList.remove("blinker");
}

//cursor enter function
export function cursorEnter(type: string) {
   //remove current cursor element
   if (cursor != undefined) cursor.remove();
   //create a new cursor
   cursor = document.createElement("span");
   cursor.classList.add("cursor", "blinker");
   cursor.innerHTML = "&#124;";
   var type_ele = document.createElement(type);
   type_ele.append(cursor);
   console_1.append(type_ele);
   return type_ele;
}

// remove cursor
export function remove(ele: HTMLElement) {
   ele.remove();
}
