// Created by Isaac Zheng at August, 2022
import { initialize } from "./util/initialize";
import {
  menu,
  portfolio_btn,
  about_btn,
  skills_btn,
  projects_btn,
  resume_btn,
  contact_btn,
  skip_animation,
  logo,
  menu_btn,
} from "./global/elements";
import { setSingleConsole, setSkip } from "./global/globalStates";
import {
  getW,
  getH,
  getO,
  Orientation,
  setW,
  setH,
  setO,
} from "./global/window_size";
import { wait } from "./util/typewriter";
import { loadBackground } from "./background/background";
import { goToAbout } from "./pages/about";
import { goToSkills } from "./pages/skills";
import { goToProjects } from "./pages/projects";
import { goToContact } from "./pages/contact";
import { startPortfolio } from "./util/startPortfolio";
import { goToResume } from "./pages/resume";

//main function
window.onload = main;

async function main() {
  // preloader().then(() => {
  //   initialize();
  // });
  wait(1500).then(() => {
    initialize();
  })

  // wait 0.5s to prevent window resize at the first
  await wait(500);
  setW(window.innerWidth);
  setH(window.innerHeight);
  if (getW() >= getH()) {
    setO(Orientation.landscape);
  } else {
    setO(Orientation.portrait);
  }
  if (getW() <= 768 || getO() === Orientation.portrait) {
    setSingleConsole(true);
  } else {
    setSingleConsole(false);
  }
  loadBackground();

  about_btn.classList.add("on-page");

  // go to home page when logo clicked
  logo.onclick = goToAbout;

  // toggle header menu
  menu_btn.onclick = function () {
    menu.classList.toggle("inactive");
  };

  //"go to portfolio" btn event

  portfolio_btn.onclick = startPortfolio;

  // when the skip animation button is clicked
  skip_animation.onclick = function (e) {
    e.preventDefault();
    setSkip(true);
  };

  about_btn.onclick = goToAbout;

  skills_btn.onclick = goToSkills;

  projects_btn.onclick = goToProjects;

  resume_btn.onclick = goToResume;

  contact_btn.onclick = goToContact;
}
