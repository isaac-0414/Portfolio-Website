//INITIALIZE THE WEB PAGE

var progress_text = "Progress: [....................]";
var progress = document.createElement("h2");
progress.innerText = progress_text;

var portfolio_btn = document.querySelector("#button");

async function initialize() {
  initializing = true;
  try {
    await typeWriter(h2_text, "h2", 200);
    await typeWriter(h1_text, "h1", 100);
    // do not show animation on mobile
    if (w > 768 && o === "landscape") {
      //add a horizontal break
      let br = document.createElement("br");
      console_1.append(br);
      //let cursor blink at the next line for 1 second
      cursorEle = cursorEnter("h2");
      await wait(1000);
      cursorRemove(cursorEle);

      await typeWriter("***********************************", "h2", 20);
      await typeWriter(
        "// Let's add some fake code to make it look nicer :)",
        "h2",
        50
      );
      await wait(1000);
      console_1.append(progress);
      await progressAnimation();

      // let two consoles appear
      console_2.classList.remove("hidden", "middle");
      console_1.classList.remove("middle");

      //the red blinking scanning alert at the top
      let tpl = document.createElement("template");
      tpl.innerHTML = `<div class="msg">Scanning</div>`;
      header.prepend(tpl.content);

      //another thread
      await console2AutoType();

      await wait(1000);
      cursorBlinkOn();
      //remove the red scanning alert
      document.querySelector("header .msg").remove();
      await wait(1600);
      cursorBlinkOff();

      //delete all the other stuff at console1 except h1_text and h2_text
      progress.remove();
      await deleter(document.querySelector("h2:last-of-type"), 50);
      await deleter(document.querySelector("h2:last-of-type"), 50);

      // cursor blinking for another 0.5s
      var cursorEle = cursorEnter("h2");
      await wait(500);
      cursor.remove(cursorEle);
      //remove horizontal break
      br.remove();
    }
    if (w <= 768 || o === "portrait") {
      await wait(1000);
    }
    typeWriter(p_text, "p", 50).then((res) => {
      // stop auto scroll
      if (scrollStopId != undefined) {
        clearInterval(scrollStopId);
        scrollStopId = undefined;
      }
      // after the introduction finished typing, change color of text
      console_1.innerHTML = `<h2>${h2_text}</h2>
      <h1>${h1_text_revised}</h1>
      <p>${p_text}</p>`;
      home.classList.remove("init");
    });
    await wait(9000);
    autoScroll();
    await wait(1000);
    // show the 'go to portfolio' btn
    portfolio_btn.classList.remove("hidden");

    // show the header (for mobile)
    header.classList.remove("hidden");

    // show to site logo
    logo.classList.remove("hidden");

    skip_animation.classList.add("hidden"); // hide the skip-animation button
    initializing = false;

  } catch (e) { // this whole section is handling skip animation
    if (e.message === "SKIP") {
      skip_animation.classList.add("hidden"); // hide the skip-animation button

      skip = false; // disallow skip from influencing the second console

      // same as about_btn.onclick
      modifyCurrentPage(about_btn);
      if (w > 768 && o === "landscape") {
        console_1.classList.remove("middle", "contact");
        console_2.classList.remove("middle", "hidden");
      }
      portfolio_btn.classList.remove("hidden");
      // show the header (for mobile)
      header.classList.remove("hidden");
      logo.classList.remove("hidden");
      // if the red scanning warning is still there, remove it.
      document.querySelector("header .msg") &&
        document.querySelector("header .msg").remove();
      await clearConsole();
      loadAbout();
      btn_ls.forEach((btn) => {
        btn.classList.remove("on-page");
      });
      about_btn.classList.add("on-page");
      menu_btn.classList.remove("inactive");
      
      if (w > 768 && o === "landscape") {
        menu.classList.remove("inactive");
        document.querySelector("#button h2").innerText = "More about me";
        portfolio_btn.onclick = moreAboutMe;
      }
      home.classList.remove("init");
      initializing = false;
    }
  }
}

// Progress: [######...........] (dot becomes #)
function progressAnimation() {
  return new Promise((resovle, reject) => {
    let i = 11;
    function progressAnimationHelper() {
      var timeout_interval = setTimeout(() => {
        //return if animation ends
        if (i === progress_text.length - 1) {
          resovle();
          return;
        }

        //replace dot with pound
        progress_text =
          progress_text.substring(0, i) +
          "#" +
          progress_text.substring(i + 1, progress_text.length);
        progress.innerText = progress_text;
        console_1.append(progress);
        i++;
        progressAnimationHelper();
      }, 100);
      // if page changes, stop process
      if (currentPage !== about_btn) {
        clearTimeout(timeout_interval);
        return;
      }
      // if skip-animaiton clicked, stop process
      if (skip === true) {
        clearTimeout(timeout_interval);
        reject(new Error("SKIP"));
      }
    }
    progressAnimationHelper();
  });
}
