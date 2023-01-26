// BUTTON ONCLICK EVENTS

// go to home page when logo clicked
logo.onclick = aboutOnclick;

// toggle header menu
menu_btn.onclick = function () {
  menu.classList.toggle("inactive");
};

//"go to portfolio" btn event
var portfolio_btn = document.querySelector("#button");
var btn_text = document.querySelector("#button h2");
portfolio_btn.onclick = function () {
  menu_btn.classList.remove("inactive");
  menu.classList.remove("inactive");
  if (w > 768 && o === "landscape") {
    btn_text.innerText = "More about me";
    portfolio_btn.onclick = moreAboutMe;
  }
};

// when the skip animation button is clicked
var skip_animation = document.querySelector("#skip-animation");
skip_animation.onclick = function (e) {
  e.preventDefault();
  skip = true;
};

// main menu btns on click events

var btn_ls = [about_btn, skills_btn, projects_btn, resume_btn, contact_btn];
var btn_text = document.querySelector("#button h2");

about_btn.onclick = aboutOnclick;
// make it as a function so logo onclick can use it as well
async function aboutOnclick() {
  // if on mobile device, collapse the menu every time clicked a new button
  if (w <= 768 || o === "portrait") {
    menu.classList.add("inactive");
  }
  if (currentPage === projects_btn) await quitProjects();
  if (moreAboutMeOn === true) moreAboutMeOn = false;
  modifyCurrentPage(about_btn);
  // hide social medias
  social_icon_box.classList.add('inactive');
  console_1.classList.remove("contact");
  if (w > 768 && o === "landscape") {
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
};

// rest of them all similar
skills_btn.onclick = async function () {
  // if on mobile device, collapse the menu every time clicked a new button
  if (w <= 768 || o === "portrait") {
    menu.classList.add("inactive");
  }
  // if quitting from project page
  if (currentPage === projects_btn) await quitProjects();
  //if quitting from about page with more about me on
  if (moreAboutMeOn === true) moreAboutMeOn = false;
  modifyCurrentPage(skills_btn);
  social_icon_box.classList.add('inactive');
  console_1.classList.remove("contact");
  if (w > 768 && o === "landscape") {
    // reset the two consoles
    console_1.classList.remove("middle");
    console_2.classList.remove("middle", "hidden");
  }
  portfolio_btn.classList.remove("hidden");
  btn_text.innerText = "View my works";
  portfolio_btn.onclick = projects_btn.onclick;
  await clearConsole();
  loadSkills();
  btn_ls.forEach((btn) => {
    btn.classList.remove("on-page");
  });
  skills_btn.classList.add("on-page");
};

projects_btn.onclick = async function () {
  // if on mobile device, collapse the menu every time clicked a new button
  if (w <= 768 || o === "portrait") {
    menu.classList.add("inactive");
  }
  if (moreAboutMeOn === true) moreAboutMeOn = false;
  if (currentPage === projects_btn) return;
  modifyCurrentPage(projects_btn);
  social_icon_box.classList.add('inactive');
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
  clearInterval(background_timer);
  background_timer = undefined;

  loadProjects();
  btn_ls.forEach((btn) => {
    btn.classList.remove("on-page");
  });
  projects_btn.classList.add("on-page");
  header.classList.remove("disabled");
  // hide the button container
  document.querySelector("#button-container").classList.add("hidden");
  // NOTICE THIS PAGE IS STILL UNDER CONSTRUCTION
  wait(1000).then(res => alert("This page is not finished yet."))
};

resume_btn.onclick = function () {
  // if on mobile device, collapse the menu every time clicked a new button
  if (w <= 768 || o === "portrait") {
    menu.classList.add("inactive");
  }
  window.open("resume.pdf");
  btn_ls.forEach((btn) => {
    btn.classList.remove("on-page");
  });
  resume_btn.classList.add("on-page");
};

contact_btn.onclick = async function () {
  // if on mobile device, collapse the menu every time clicked a new button
  if (w <= 768 || o === "portrait") {
    menu.classList.add("inactive");
  }
  if (moreAboutMeOn === true) moreAboutMeOn = false;
  if (currentPage === projects_btn) await quitProjects();
  modifyCurrentPage(contact_btn);
  await clearConsole();
  loadContact();
  //toggle social media
  social_icon_box.classList.remove('inactive');
  btn_ls.forEach((btn) => {
    btn.classList.remove("on-page");
  });
  //move the console to the middle and hide the portfolio button
  contact_btn.classList.add("on-page");
  console_1.classList.add("middle", "contact");
  console_2.classList.add("middle", "hidden");
  portfolio_btn.classList.add("hidden");
};


async function quitProjects() {
  document.querySelector("#button-container").classList.remove("hidden");
  header.classList.add("disabled");
  let black_page = document.querySelector("#console_1 .black-page");
  black_page.classList.add("activate");
  backgroundAnimation();
  await wait(600);
  scrollToTop();
  header.classList.remove("projects");
  console_1.classList.remove("projects");
  await wait(600);
  header.classList.remove("disabled");
}

// helper function to load more about me page
async function moreAboutMe() {
  moreAboutMeOn = true;
  await clearConsole2();
  loadMoreAbout();
}