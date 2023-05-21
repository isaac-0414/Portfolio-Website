import {
  console_1,
  console_2,
  menu,
  social_icon_box,
  portfolio_btn,
  btn_ls,
  btn_text,
  about_btn,
} from "../global/elements";
import { h2_text, h1_text_revised, p_text } from "../global/text";
import { getW, getO, Orientation } from "../global/window_size";
import { console2AutoType } from "../util/console2";
import {
  getCurrentPage,
  setCurrentPage,
  Page,
  isMoreAboutMeOn,
  setMoreAboutMeOn,
} from "../global/globalStates";
import { quitProjects } from "./projects";
import { clearConsole } from "../util/clear";
import { moreAboutMe } from "../components/moreAboutMe";

export async function loadAbout() {
  console_1.innerHTML = `<h2>${h2_text}</h2>
      <h1>${h1_text_revised}</h1>
      <p>${p_text}</p>`;
  if (getW() > 768 && getO() === Orientation.landscape) {
    console2AutoType();
  }
}

export async function goToAbout() {
  // if on mobile device, collapse the menu every time clicked a new button
  if (getW() <= 768 || getO() === Orientation.portrait) {
    menu.classList.add("inactive");
  }
  if (getCurrentPage() === Page.projects) await quitProjects();
  if (isMoreAboutMeOn() === true) setMoreAboutMeOn(false);
  setCurrentPage(Page.about);
  // hide social medias
  social_icon_box.classList.add("inactive");
  console_1.classList.remove("contact");
  if (getW() > 768 && getO() === Orientation.landscape) {
    // reset the two consoles
    console_1.classList.remove("middle");
    console_2.classList.remove("middle", "hidden");
  }
  await clearConsole();
  loadAbout();
  // show the portfolio button and modify the innerText
  portfolio_btn.classList.remove("hidden");
  btn_text.innerText = "More about me";
  portfolio_btn.onclick = moreAboutMe;
  //remove the on-page class of all the other nav buttons except the current one
  btn_ls.forEach((btn) => {
    btn.classList.remove("on-page");
  });
  about_btn.classList.add("on-page");
}
