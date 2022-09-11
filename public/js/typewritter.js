// TYPEWRITTER EFFECT HELP FUNCTIONS
var cursor;

function typeWriter(text, type, speed) {
  let to_insert = document.createElement(type);
  console_1.append(to_insert);
  var text_position = 0;
  return new Promise((resolve, reject) => {
    function typeWriterHelper() {
      if (currentPage !== about_btn) {
        return;
      }
      if (skip === true) {
        reject(new Error("SKIP"));
        return;
      }

      // add one letter to the text going to insert every time, and add cursor to the end
      to_insert.innerHTML =
        text.substring(0, text_position) + `<span class="cursor">&#124;</span>`;
      if (text_position++ != text.length) {
        setTimeout(typeWriterHelper, speed);
      } else {
        //after finished, if it's h1_text or h2_text, remove the cursor, if it's p_text, leave the cursor blinks
        resolve();
        cursor = to_insert.querySelector(".cursor");
        if (type != "p") {
          cursor.remove();
        } else {
          cursorBlinkOn();
        }
      }
    }
    typeWriterHelper();
  });
}

//similar to above except all plus becomes minus
function deleter(text_object, speed) {
  let text = text_object.innerText;
  let text_position = text.length - 1;
  return new Promise((resolve, reject) => {
    function deleteHelper() {
      if (currentPage !== about_btn) {
        return;
      }
      if (skip === true) {
        reject(new Error("SKIP"));
        return;
      }

      text_object.innerHTML =
        text.substring(0, text_position) + `<span class="cursor">&#124;</span>`;
      if (text_position-- != -1) {
        setTimeout(deleteHelper, speed);
      } else {
        text_object.remove();
        resolve();
      }
    }
    deleteHelper();
  });
}

async function wait(time) {
  return new Promise((resolve, reject) => {
    var timeout = setTimeout(() => {
      resolve();
    }, time);
    // if skip-animaiton clicked, stop process
    if (skip === true) {
      clearTimeout(timeout);
      reject(new Error("SKIP"));
      return;
    }
  });
}

//cursor blink functions
function cursorBlinkOn() {
  cursor.classList.add("blinker");
}

function cursorBlinkOff() {
  cursor.classList.remove("blinker");
}

//cursor enter function
function cursorEnter(type) {
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
function cursorRemove(ele) {
  ele.remove();
}