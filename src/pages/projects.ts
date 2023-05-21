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
import showModalWrapper from "../components/modal";


enum ProjectsFilter {
   all,
   web,
   game,
   AI
}

const projects_content = `
<div class="container">
   <div class="black-page"></div>
   <div class="heading">
      <h3>Projects</h3>
   </div>
   <div class="projects-menu">
      <div class="filter active all">All</div>
      <div class="filter web">Web</div>
      <div class="filter game">Game</div>
      <div class="filter AI">AI</div>
   </div>
   <div class="box"></div>
   <div class="btn">
      <a href="#">More</a>
   </div>
</div>`;

const projects = [
   {
      img_src: "images/geni.png",
      title: "GENI.ZONE",
      tech_used: "Next.ts, React.ts, MongoDB, AI Products, TailwindCSS",
      description: `Geni streamlines personalized education by enabling educators and caregivers to effortlessly develop targeted curricula. 
         Our platform not only elevates the learning experience but also contributes valuable, hard-to-obtain data for Alignment research.
         I created the first version of our app with the founder, made most of the front-end part, created our database and some API endpoints, 
         and helped integrate our app with google classroom`,
      link: "",
      tag: [ProjectsFilter.web, ProjectsFilter.AI]
   },
   {
      img_src: "images/scribear.png",
      title: "ScribeAR",
      tech_used: "React.ts, Javascript and Typescript, CSS",
      description: `ScribeAR provides live Transcription for Augmented Reality Glasses.
         I help made live Transcription web app and other web pages`,
      link: "https://scribear.illinois.edu/v/index.html",
      tag: [ProjectsFilter.web, ProjectsFilter.AI]
   },
   {
      img_src: "images/online-store.png",
      title: "Online Store",
      tech_used: "React.ts, Javascript and Typescript, CSS",
      description: `I used React.js to build the frontend of this e-commerce website, still working on backend`,
      link: "http://store.isaaczheng.com",
      tag: [ProjectsFilter.web]
   },
   {
      img_src: "images/portfolio.png",
      title: "Portfolio website",
      tech_used: "Typescript, CSS, HTML",
      description: `Current portfolio website in use, first built with vanilla HTML, CSS, and Javascript, 
         later switched to Typescript + Webpack. I also had a old portfolio website built with Wordpress`,
      link: "http://isaaczheng.com",
      tag: [ProjectsFilter.web]
   },
   {
      img_src: "images/object-detect.png",
      title: "Object detection web app",
      tech_used: "Tensorflow, Javascript, CSS",
      description: `Object detection is popular due to the rise of machine learning and computer vision technology. 
         The advance of detection technology would benefit everyone and do some automation work to reduce their workload. 
         Therefore, we established a platform that serves users without programming knowledge to use our web detection application.`,
      link: "http://thezone-detection.com.s3-website-us-east-1.amazonaws.com",
      tag: [ProjectsFilter.web, ProjectsFilter.AI]
   },
   {
      img_src: "images/text-summarization.png",
      title: "Text summarization project",
      tech_used: "Machine Learning, Python, Huggingface",
      description: `This project contains two parts. In the first part, I tried to implement the model described in 
         the paper Long Document Summarization With Top-Down And Bottom-up Inference(https://doi.org/10.48550/arXiv.2203.07586) 
         This model is specialized for long document summarization and currently has the highest score at the arXiv and Pubmed 
         dataset and performs well on long document summarization, but the original paper didn't share their code.
         In the second part, I made a chrome extension with backend that can summarization the whole webpage.`,
      link: "https://github.com/isaac-0414/text-summarization",
      tag: [ProjectsFilter.web, ProjectsFilter.AI]
   },
   {
      img_src: "images/centrality.png",
      title: "Betweeness centrality and Page rank",
      tech_used: "C++, Python",
      description: `Our team uses citation networks of high-energy physics paper from 1993 to 2003 in Stanford Large Network
       Dataset Collection to search the proper importance of any high-energy physics paper presented in the dataset. 
       To reach the goal, we implement both Betweeness Centrality and PageRank for ranking the importance of paper. 
       We would compare the results of running Betweeness Centrality and PageRank in determine quality and importance of papers.`,
      link: "https://github.com/isaac-0414/CS225-Final-Project/tree/main",
      tag: []
   },
   {
      img_src: "images/2048.png",
      title: "Web games",
      tech_used: "Javascript, CSS, HTML",
      description: `Some simple web games I made, currently has a 2048 game and a snake game`,
      link: "http://games.isaaczheng.com.s3-website.us-east-2.amazonaws.com",
      tag: [ProjectsFilter.web, ProjectsFilter.game]
   }
]

// define the number of columns base on screen size

let num_col = 3;

export function loadProjects(filter?: ProjectsFilter | undefined) {
   console_1.innerHTML = projects_content;

   populateProjects(filter);
}

function populateProjects(filter?: ProjectsFilter | undefined) {
   // update num_col first
   if (getW() <= 480) {
      num_col = 1;
   }
   if (getW() > 480 && getW() <= 768) {
      num_col = 2;
   }
   if (getW() > 768 && getW() < 1920) {
      num_col = 3;
   }
   if (getW() >= 1920) {
      num_col = 4;
   }

   const filteredProjects = filter ? projects.filter(project => project.tag.includes(filter)) : projects;

   let box = document.querySelector(".container .box") as HTMLElement;

   // first generate num_col columns
   for (let i = 1; i <= num_col; i++) {
      let col = document.createElement("div");
      col.classList.add("dream");
      box.appendChild(col);
   }

   // then append cards one by one into the columns
   for (let j = 0; j < filteredProjects.length; j++) {
      let tpl = document.createElement("template");
      tpl.innerHTML = `
      <div class="card card-${j}">
         <div class="upper-half">
            <h2 class="card-title">${filteredProjects[j].title}</h2>
            <p class="tech-used">${filteredProjects[j].tech_used}</p>
         </div>
         <img src="${filteredProjects[j].img_src}" />
         <div class="lower-half">
            <button>Learn More</button>
         </div>
      </div>`;
      box.querySelector(`.dream:nth-of-type(${(j % num_col) + 1})`)?.append(tpl.content);

      let currentCardBtn = box.querySelector(`.card-${j} .lower-half button`);
      const showModal = showModalWrapper(filteredProjects[j])
      currentCardBtn?.addEventListener('click', showModal);
   }
}

function removeProjects() {
   console.log('called remove projects');
   let box = document.querySelector(".container .box") as HTMLElement;
   box.innerHTML = "";
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
   (document.querySelector("#button-container") as HTMLDivElement).style.display = "none";
   const projects_menu = document.querySelector(".projects-menu");

   projects_menu?.querySelector('.filter.all')?.addEventListener('click', () => {
      removeProjects();
      populateProjects();
      changeFilterActive(ProjectsFilter.all);
   });

   projects_menu?.querySelector('.filter.web')?.addEventListener('click', () => {
      removeProjects();
      populateProjects(ProjectsFilter.web);
      changeFilterActive(ProjectsFilter.web);
   });

   projects_menu?.querySelector('.filter.game')?.addEventListener('click', () => {
      removeProjects();
      populateProjects(ProjectsFilter.game);
      changeFilterActive(ProjectsFilter.game);
   });

   projects_menu?.querySelector('.filter.AI')?.addEventListener('click', () => {
      removeProjects();
      populateProjects(ProjectsFilter.AI);
      changeFilterActive(ProjectsFilter.AI);
   });
}

function changeFilterActive(filter?: ProjectsFilter | undefined) {
   const projects_menu = document.querySelector(".projects-menu");
   projects_menu?.querySelector('.filter.all')?.classList.remove('active');
   projects_menu?.querySelector('.filter.web')?.classList.remove('active');
   projects_menu?.querySelector('.filter.game')?.classList.remove('active');
   projects_menu?.querySelector('.filter.AI')?.classList.remove('active');
   switch (filter) {
      case ProjectsFilter.all:
         projects_menu?.querySelector('.filter.all')?.classList.add('active');
         break;
      case ProjectsFilter.web:
         projects_menu?.querySelector('.filter.web')?.classList.add('active');
         break;
      case ProjectsFilter.game:
         projects_menu?.querySelector('.filter.game')?.classList.add('active');
         break;
      case ProjectsFilter.AI:
         projects_menu?.querySelector('.filter.AI')?.classList.add('active');
         break;
      default:
         projects_menu?.querySelector('.filter.all')?.classList.add('active');
   }
}

export async function quitProjects() {
   (document.querySelector("#button-container") as HTMLDivElement).style.removeProperty('display');
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
