import {
  console_1,
  console_2,
  menu,
  social_icon_box,
  portfolio_btn,
  projects_btn,
  btn_ls,
  header,
} from "../global/elements";
import { getW, getO, Orientation } from "../global/window_size";
import {
  getCurrentPage,
  setCurrentPage,
  Page,
  isMoreAboutMeOn,
  setMoreAboutMeOn,
} from "../global/globalStates";
import { clearConsole } from "../util/clear";
import { wait } from "../util/typewriter";
import { getBackgroundTimer, setBackgroundTimer } from "../global/globalStates";
import { backgroundAnimation } from "../background/background";
import { scrollToTop } from "../util/autoScroll";

var projects_content = `
<div class="container">
   <div class="black-page"></div>
   <div class="heading">
      <h3>Projects</h3>
   </div>
   <div class="projects-menu">
      <div class="filter active">All</div>
      <div class="filter">Web</div>
      <div class="filter">Game</div>
      <div class="filter">Mobile</div>
   </div>
   <div class="box"></div>
   <div class="btn">
      <a href="#">More</a>
   </div>
</div>`;

// define the number of columns base on screen size

var num_col = 3;
const img_amount = 15;
const card_arr = Array(img_amount).fill({
  card_title: "Something Awesome",
  tech_used: "Vanilla HTML, CSS and JS",
});

export function loadProjects() {
  if (getW() <= 480) {
    num_col = 1;
  }
  if (getW() > 480 && getW() <= 768) {
    num_col = 2;
  }
  if (getW() > 768 && getW() <= 1400) {
    num_col = 3;
  }
  if (getW() > 1400) {
    num_col = 4;
  }
  console_1.innerHTML = projects_content;
  var box = document.querySelector(".container .box") as HTMLElement;
  var img_idx = 1;
  for (let i = 1; i <= num_col; i++) {
    var col = document.createElement("div");
    col.classList.add("dream");
    box.appendChild(col);
    // add cards to columns, for the rows before, stop when index reach the average amount, but for the last col, stop
    // until every image is added. (if loop is over but not every image is added, keep running the loop, if the loop is
    // not over but every image is added, stop the loop)
    for (
      let j = 0;
      j < Math.round(img_amount / num_col) ||
      (i == num_col && img_idx <= img_amount);
      j++, img_idx++
    ) {
      if (img_idx > img_amount) {
        return;
      }
      let tpl = document.createElement("template");
      tpl.innerHTML = `
        <div class="card">
          <div class="upper-half">
            <h2 class="card-title">${card_arr[j].card_title}</h2>
            <p class="tech-used">${card_arr[j].tech_used}</p>
          </div>
          <img src="images/${img_idx}.jpg" />
          <div class="lower-half">
            <button>Learn More</button>
          </div>
        </div>`;
      col.append(tpl.content);
    }
  }
}

export async function goToProjects() {
  // if on mobile device, collapse the menu every time clicked a new button
  if (getW() <= 768 || getO() === Orientation.portrait) {
    menu.classList.add("inactive");
  }
  if (isMoreAboutMeOn() === true) setMoreAboutMeOn(false);
  if (getCurrentPage() === Page.projects) return;
  setCurrentPage(Page.projects);
  social_icon_box.classList.add("inactive");
  header.classList.add("disabled");
  console_1.classList.remove("contact");
  console_1.classList.add("middle");
  console_2.classList.add("middle", "hidden");
  portfolio_btn.classList.add("hidden");
  await clearConsole();
  // wait 500ms till both css animations complete
  await wait(500);
  header.classList.add("projects");
  console_1.classList.add("projects");
  await wait(500);
  //stop the background animation
  clearInterval(getBackgroundTimer());
  setBackgroundTimer(undefined);

  loadProjects();
  btn_ls.forEach((btn) => {
    btn.classList.remove("on-page");
  });
  projects_btn.classList.add("on-page");
  header.classList.remove("disabled");
  // hide the button container
  (document.querySelector("#button-container") as HTMLDivElement).classList.add("hidden");
  // NOTICE THIS PAGE IS STILL UNDER CONSTRUCTION
  wait(1000).then(() => alert("This page is not finished yet."));
}

export async function quitProjects() {
  (document.querySelector("#button-container") as HTMLDivElement).classList.remove("hidden");
  header.classList.add("disabled");
  let black_page = document.querySelector("#console_1 .black-page") as HTMLDivElement;
  black_page.classList.add("activate");
  backgroundAnimation();
  await wait(600);
  scrollToTop();
  header.classList.remove("projects");
  console_1.classList.remove("projects");
  await wait(600);
  header.classList.remove("disabled");
}

export function projectsPageNumCol() {
  return num_col;
}
