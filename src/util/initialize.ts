import { console_1, console_2, header, menu, portfolio_btn, btn_ls, about_btn, skip_animation, home, logo, menu_btn } from "../global/elements";
import { h1_text, h2_text, h1_text_revised, p_text } from "../global/text";
import { getW, getO, Orientation } from "../global/window_size";
import { console2AutoType } from "../util/console2";
import { getCurrentPage, setCurrentPage, Page, setIsInitializing, skipped, setSkip } from "../global/globalStates";
import { clearConsole } from "../util/clear";
import { moreAboutMe } from "../components/moreAboutMe";
import { typeWriter, deleter, cursorEnter, wait, remove, cursorBlinkOn, cursorBlinkOff } from "./typewriter";
import { autoScroll, stopAutoScroll } from "./autoScroll";
import { loadAbout } from "../components/about";

//INITIALIZE THE WEB PAGE

var progress_text = "Progress: [....................]";
var progress = document.createElement("h2");
progress.innerText = progress_text;

export async function initialize() {
  setIsInitializing(true);
  try {
    await typeWriter(h2_text, "h2", 200);
    await typeWriter(h1_text, "h1", 100);
    // do not show animation on mobile
    if (getW() > 768 && getO() === Orientation.landscape) {
      //add a horizontal break
      let br = document.createElement("br");
      console_1.append(br);
      //let cursor blink at the next line for 1 second
      cursorEle = cursorEnter("h2");
      await wait(1000);
      remove(cursorEle);

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
      document.querySelector("header .msg")!.remove();
      await wait(1600);
      cursorBlinkOff();

      //delete all the other stuff at console1 except h1_text and h2_text
      progress.remove();
      await deleter(document.querySelector("h2:last-of-type") as HTMLElement, 50);
      await deleter(document.querySelector("h2:last-of-type") as HTMLElement, 50);

      // cursor blinking for another 0.5s
      var cursorEle = cursorEnter("h2");
      await wait(500);
      remove(cursorEle);
      //remove horizontal break
      br.remove();
    }
    if (getW() <= 768 || getO() === Orientation.portrait) {
      await wait(1000);
    }

    wait(2000).then(()=> {
      console.log("start scroll");
      autoScroll();
    })

    await typeWriter(p_text, "p", 50);

    skip_animation.classList.add("hidden"); // hide the skip-animation button

    stopAutoScroll();
    // after the introduction finished typing, change color of text
    console_1.innerHTML = `<h2>${h2_text}</h2>
    <h1>${h1_text_revised}</h1>
    <p>${p_text}</p>`;
    home.classList.remove("init");
    // show the 'go to portfolio' btn
    portfolio_btn.classList.remove("hidden");

    // show the header (for mobile)
    header.classList.remove("hidden");

    // show to site logo
    logo.classList.remove("hidden");

    setIsInitializing(false);

  } catch (e: any) { // this whole section is handling skip animation
    if (e.message === "SKIP") {
      skip_animation.classList.add("hidden"); // hide the skip-animation button

      setSkip(false); // disallow skip from influencing the second console

      wait(2500).then(() => {
        stopAutoScroll
      })

      // same as about_btn.onclick
      setCurrentPage(Page.about);
      if (getW() > 768 && getO() === Orientation.landscape) {
        console_1.classList.remove("middle", "contact");
        console_2.classList.remove("middle", "hidden");
      }
      portfolio_btn.classList.remove("hidden");
      // show the header (for mobile)
      header.classList.remove("hidden");
      logo.classList.remove("hidden");
      // if the red scanning warning is still there, remove it.
      document.querySelector("header .msg") &&
        document.querySelector("header .msg")!.remove();
      await clearConsole();
      loadAbout();
      btn_ls.forEach((btn) => {
        btn.classList.remove("on-page");
      });
      about_btn.classList.add("on-page");
      menu_btn.classList.remove("inactive");
      
      if (getW() > 768 && getO() === Orientation.landscape) {
        menu.classList.remove("inactive");
        (document.querySelector("#button h2") as HTMLHeadingElement).innerText = "More about me";
        portfolio_btn.onclick = moreAboutMe;
      }
      
      home.classList.remove("init");
      setIsInitializing(false);
    }
  }
}

// Progress: [######...........] (dot becomes #)
function progressAnimation() {
  return new Promise((resolve, reject) => {
    let i = 11;
    function progressAnimationHelper() {
      var timeout_interval = setTimeout(() => {
        //return if animation ends
        if (i === progress_text.length - 1) {
          resolve(null);
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
      if (getCurrentPage() !== Page.about) {
        clearTimeout(timeout_interval);
        return;
      }
      // if skip-animaiton clicked, stop process
      if (skipped() === true) {
        clearTimeout(timeout_interval);
        reject(new Error("SKIP"));
      }
    }
    progressAnimationHelper();
  });
}
