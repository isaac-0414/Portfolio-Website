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

const programming_category = `
   <div class="skills-cat">
      <h3 class="cat-title">// Programming</h3>
      <ul class="skill-tags">
         <li>C / C++</li>
         <li>Python</li>
         <li>CUDA</li>
         <li>JavaScript</li>
         <li>TypeScript</li>
         <li>Java</li>
         <li>SQL</li>
         <li>OCaml</li>
         <li>Shell Scripting</li>
      </ul>
   </div>`;

const systems_category = `
   <div class="skills-cat">
      <h3 class="cat-title">// Systems & Architecture</h3>
      <ul class="skill-tags">
         <li>Distributed Systems</li>
         <li>Parallel Computing</li>
         <li>ML Systems</li>
         <li>Computer Architecture</li>
         <li>Compilers</li>
      </ul>
   </div>`;

const hardware_category = `
   <div class="skills-cat">
      <h3 class="cat-title">// Hardware & EDA</h3>
      <ul class="skill-tags">
         <li>SystemVerilog (UVM)</li>
         <li>Verilator</li>
         <li>Vivado</li>
      </ul>
   </div>`;

const ml_category = `
   <div class="skills-cat">
      <h3 class="cat-title">// Machine Learning & AI</h3>
      <ul class="skill-tags">
         <li>PyTorch</li>
         <li>TensorFlow</li>
         <li>scikit-learn</li>
         <li>Large Language Models</li>
         <li>Diffusion Models</li>
         <li>Multi-Modal Models</li>
      </ul>
   </div>`;

const cloud_category = `
   <div class="skills-cat">
      <h3 class="cat-title">// Cloud & DevOps</h3>
      <ul class="skill-tags">
         <li>AWS (EC2, S3, Lambda)</li>
         <li>Azure</li>
         <li>GCP</li>
         <li>Kubernetes</li>
         <li>Docker</li>
         <li>Git</li>
      </ul>
   </div>`;

const frameworks_category = `
   <div class="skills-cat">
      <h3 class="cat-title">// Web Development</h3>
      <ul class="skill-tags">
         <li>HTML</li>
         <li>CSS</li>
         <li>Tailwind CSS</li>
         <li>Node.js</li>
         <li>React.js</li>
         <li>Next.js</li>
         <li>Vue.js</li>
         <li>Express.js</li>
         <li>FastAPI / Flask</li>
         <li>MongoDB</li>
         <li>MySQL</li>
         <li>jQuery</li>
         <li>RESTful APIs</li>
         <li>WebAssembly</li>
      </ul>
   </div>`;

const skills_content_1 = `
<div class="skill-container">
   ${programming_category}
   ${ml_category}
   ${cloud_category}
</div>`;

const skills_content_2 = `
<div class="skill-container">
   ${systems_category}
   ${hardware_category}
   ${frameworks_category}
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
