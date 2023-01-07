//GLOBAL VARIABLES

// window width and height, initialize when the window loads
var w;
var h;
var o; // orientation

// copy of window width and height to compare with current w and h, use in resize.js
var last_w;
var last_h;

var bg_animation_activated = false; // becomes true after background animation starts
var initializing = true; // true if initialize() is still running


const size_handler = {
  set(target, prop, receiver) {
    console.log(`${prop} set to ${receiver}`);
      target[prop] = receiver;
      return true;
  },
};

var sizeProxy = new Proxy(window, size_handler);

//home page
var home = document.getElementById("home");
var header = document.querySelector("header");
var logo = document.querySelector("header .logo");
var menu_btn = document.getElementById("menu-btn");
var menu = document.querySelector("header nav menu");

//two consoles
var console_1 = document.getElementById("console_1");
var console_2 = document.getElementById("console_2");

//main menu buttons
var about_btn = document.getElementById("about");
var skills_btn = document.getElementById("skills");
var projects_btn = document.getElementById("projects");
var resume_btn = document.getElementById("resume");
var contact_btn = document.getElementById("contact");

// social media box
var social_icon_box = document.querySelector(".social-icon-box");

// current page user at
var currentPage = about_btn;
// if console_2 is displaying more about me
var moreAboutMeOn = false;
// current page modifier
const modifyCurrentPage = (page) => {
  currentPage = page;
};
about_btn.classList.add("on-page");

var h2_text = "Hello World, I'm Isaac Zheng";
var h1_text =
  "A Frontend Web Developer. I deliver quality solutions to the clients";
var p_text = `I'm a student at University of Illinois at Urbana-Champaign.
    I have serious passion for UI effects, animations and creating fast and responsive website, 
    using my knowledge in frontend engineering and web3 development.`;


var h1_text_revised = `A <span>Frontend Web Developer.</span> I deliver <span>quality solutions</span> to the clients`;

//timer of setInterval of backgroundAnimation
var background_timer = undefined;

// it becomes true when the skip-animation button is clicked
var skip = false;