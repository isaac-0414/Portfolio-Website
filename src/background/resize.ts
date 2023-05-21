import {
  getW,
  getH,
  setW,
  setH,
  getO,
  setO,
  Orientation,
} from "../global/window_size";
import { clearBackground, rebuildBackground } from "./background";
import { isInitializing } from "../global/globalStates";
import { console_1, console_2, menu } from "../global/elements";
import { getCurrentPage, Page, setSingleConsole } from "../global/globalStates";
import {
  console2AutoType,
  getConsole2IntervalId,
  getConsole2TimeoutId,
} from "../util/console2";
import { loadSkills } from "../pages/skills";
import { loadProjects, projectsPageNumCol } from "../pages/projects";
import { clearConsole2 } from "../util/clear";

// program when window resize

function debounce(fn: () => void, ms: number) {
  let timer: number | undefined;
  return () => {
    clearTimeout(timer);
    timer = window.setTimeout(() => {
      timer = undefined;
      fn();
    }, ms);
  };
}

const debouncedHandleResize = debounce(handleResize, 1000);
window.addEventListener("resize", debouncedHandleResize);

function handleResize() {
  // if it turns out that w and h doesn't change, quit the function
  if (getW() === window.innerWidth && getH() === window.innerHeight) return;

  clearBackground();

  setW(window.innerWidth);
  setH(window.innerHeight);

  if (getW() >= getH()) {
    setO(Orientation.landscape);
  } else {
    setO(Orientation.portrait);
  }

  rebuildBackground();

  // quit program if is initializing since when initializing change the background animation is
  // the only thing needs to do when window resizes
  if (isInitializing()) return;

  if (getW() <= 768 || getO() === Orientation.portrait) {
    // if should only show one consle, set this variable to true to stop the animation at console 2
    setSingleConsole(true);
    console_1.classList.add("middle");
    console_2.classList.add("middle", "hidden");
    menu.classList.add("inactive");
    if (getCurrentPage() === Page.about) {
      // stop animation at console 2 if it is not shown
      clearConsole2();
    }
    if (getCurrentPage() === Page.skills) {
      // reload skills content if number of consoles is changed
      loadSkills();
    }
  } else {
    setSingleConsole(false);
    if (
      getCurrentPage() !== Page.contact &&
      getCurrentPage() !== Page.projects
    ) {
      console_1.classList.remove("middle");
      console_2.classList.remove("middle", "hidden");
    }
    menu.classList.remove("inactive");
    if (getCurrentPage() === Page.about) {
      if (
        getConsole2IntervalId() === undefined &&
        getConsole2TimeoutId() === undefined
      ) {
        console2AutoType();
      }
    }
    if (getCurrentPage() === Page.skills) {
      // reload skills content if number of consoles is changed
      loadSkills();
    }
  }
  if (getCurrentPage() === Page.projects) {
    if (
      (getW() <= 480 && projectsPageNumCol() !== 1) ||
      (getW() > 480 && getW() <= 768 && projectsPageNumCol() !== 2) ||
      (getW() > 768 && getW() <= 1400 && projectsPageNumCol() !== 3) ||
      (getW() > 1400 && projectsPageNumCol() !== 4)
    ) {
      loadProjects();
    }
  }
}

export default handleResize;
