import { getW, getO, Orientation } from "../global/window_size";
import {
  console_1,
  console_2,
  menu,
  social_icon_box,
  portfolio_btn,
  skills_btn,
  btn_ls,
  btn_text,
} from "../global/elements";
import {
  getCurrentPage,
  setCurrentPage,
  Page,
  isMoreAboutMeOn,
  setMoreAboutMeOn,
} from "../global/globalStates";
import { goToProjects, quitProjects } from "./projects";
import { clearConsole } from "../util/clear";

const skills_content_1 = `
<div class="skill-container">

   <div class="skill-box">
      <span class="title">HTML</span>

      <div class="skill-bar">
         <span class="skill-per html">
         <span class="tooltip">90%</span>
         </span>
      </div>
   </div>

   <div class="skill-box">
      <span class="title">CSS</span>

      <div class="skill-bar">
         <span class="skill-per css">
         <span class="tooltip">90%</span>
         </span>
      </div>
   </div>

   <div class="skill-box">
      <span class="title">JavaScript / Typescript</span>

      <div class="skill-bar">
         <span class="skill-per javascript">
         <span class="tooltip">85%</span>
         </span>
      </div>
   </div>

   <div class="skill-box">
      <span class="title">ReactJs</span>

      <div class="skill-bar">
         <span class="skill-per react">
         <span class="tooltip">80%</span>
         </span>
      </div>
   </div>

   <div class="skill-box">
      <span class="title">NodeJS</span>

      <div class="skill-bar">
         <span class="skill-per nodejs">
            <span class="tooltip">80%</span>
         </span>
      </div>
   </div>

   <div class="skill-box">
      <span class="title">ExpressJS</span>

      <div class="skill-bar">
         <span class="skill-per expressjs">
            <span class="tooltip">70%</span>
         </span>
      </div>
   </div>

    <div class="skill-box">
      <span class="title">NextJS</span>

      <div class="skill-bar">
         <span class="skill-per nextjs">
            <span class="tooltip">80%</span>
         </span>
      </div>
   </div>

   <div class="skill-box">
      <span class="title">Wordpress</span>

      <div class="skill-bar">
         <span class="skill-per wordpress">
         <span class="tooltip">75%</span>
         </span>
      </div>
   </div>

</div>`;

const skills_content_2 = `
<div class="skill-container">

   <div class="skill-box">
      <span class="title">Python</span>

      <div class="skill-bar">
         <span class="skill-per python">
            <span class="tooltip">90%</span>
         </span>
      </div>
   </div>

   <div class="skill-box">
      <span class="title">Java</span>

      <div class="skill-bar">
         <span class="skill-per java">
            <span class="tooltip">60%</span>
         </span>
      </div>
   </div>

   <div class="skill-box">
      <span class="title">C++/C</span>

      <div class="skill-bar">
         <span class="skill-per cpp">
            <span class="tooltip">80%</span>
         </span>
      </div>
   </div>
   
   <div class="skill-box">
      <span class="title">MongoDB</span>

      <div class="skill-bar">
         <span class="skill-per mongodb">
            <span class="tooltip">70%</span>
         </span>
      </div>
   </div>

   <div class="skill-box">
      <span class="title">PostgreSQL</span>

      <div class="skill-bar">
         <span class="skill-per postgresql">
            <span class="tooltip">70%</span>
         </span>
      </div>
   </div>

   <div class="skill-box">
      <span class="title">Swift</span>

      <div class="skill-bar">
         <span class="skill-per swift">
         <span class="tooltip">50%</span>
         </span>
      </div>
   </div>

   <div class="skill-box">
      <span class="title">Unreal Engine 5</span>

      <div class="skill-bar">
         <span class="skill-per ue">
         <span class="tooltip">70%</span>
         </span>
      </div>
   </div>

   <div class="skill-box">
      <span class="title">Blender</span>

      <div class="skill-bar">
         <span class="skill-per blender">
         <span class="tooltip">65%</span>
         </span>
      </div>
   </div>
    
</div>`;

export function loadSkills() {
  if (getW() <= 768 || getO() === Orientation.portrait) {
    console_1.innerHTML = skills_content_1 + skills_content_2;
    return;
  }
  console_1.innerHTML = skills_content_1;
  console_2.innerHTML = skills_content_2;
}

export async function goToSkills() {
  // if on mobile device, collapse the menu every time clicked a new button
  if (getW() <= 768 || getO() === Orientation.portrait) {
    menu.classList.add("inactive");
  }
  // if quitting from project page
  if (getCurrentPage() === Page.projects) await quitProjects();
  //if quitting from about page with more about me on
  if (isMoreAboutMeOn() === true) setMoreAboutMeOn(false);
  setCurrentPage(Page.skills);
  social_icon_box.classList.add("inactive");
  console_1.classList.remove("contact");
  if (getW() > 768 && getO() === Orientation.landscape) {
    // reset the two consoles
    console_1.classList.remove("middle");
    console_2.classList.remove("middle", "hidden");
  }
  portfolio_btn.classList.remove("hidden");
  btn_text.innerText = "View my works";
  portfolio_btn.onclick = goToProjects;
  await clearConsole();
  loadSkills();
  btn_ls.forEach((btn) => {
    btn.classList.remove("on-page");
  });
  skills_btn.classList.add("on-page");
}
