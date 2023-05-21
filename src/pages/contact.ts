import {
  console_1,
  console_2,
  menu,
  social_icon_box,
  portfolio_btn,
  btn_ls,
  contact_btn,
} from "../global/elements";
import { getW, getO, Orientation } from "../global/window_size";
import {
  getCurrentPage,
  setCurrentPage,
  Page,
  isMoreAboutMeOn,
  setMoreAboutMeOn,
} from "../global/globalStates";
import { quitProjects } from "./projects";
import { clearConsole } from "../util/clear";
import { sendMail } from "../util/email";

const contact_content = `
<div class="contact-container">
   <h1>Contact Me</h1>
   <div class="row100">
   <div class="col">
      <div class="inputBox">
         <input id="first_name" type="text" name="" required />
         <span class="text">First Name</span>
         <span class="line"></span>
      </div>
   </div>
   <div class="col">
      <div class="inputBox">
         <input id="last_name" type="text" name="" required />
         <span class="text">Last Name</span>
         <span class="line"></span>
      </div>
   </div>
   </div>
   <div class="row100">
   <div class="col">
      <div class="inputBox">
         <input id="email_id" type="text" name="" required />
         <span class="text">Email</span>
         <span class="line"></span>
      </div>
   </div>
   <div class="col">
      <div class="inputBox">
         <input id="phone_id" type="text" name="" required />
         <span class="text">Phone</span>
         <span class="line"></span>
      </div>
   </div>
   </div>
   <div class="row100">
   <div class="col">
      <div class="inputBox textarea">
         <textarea id="message" required></textarea>
         <span class="text">Type your message here...</span>
         <span class="line"></span>
      </div>
   </div>
   </div>
   <div class="row100">
   <div class="col">
      <input id="send-mail-btn" type="submit" value="Send" />
   </div>
   </div>
   <div class="row100">
   <p>
      Straight shot to my inbox:
      <a href="mailto: isaaczheng0414@gmail.com">isaaczheng0414@gmail.com</a>
   </p>
   </div>
</div>`;

function loadContact() {
  console_1.innerHTML = contact_content;
}

export async function goToContact() {
  // if on mobile device, collapse the menu every time clicked a new button
  if (getW() <= 768 || getO() === Orientation.portrait) {
    menu.classList.add("inactive");
  }
  if (isMoreAboutMeOn() === true) setMoreAboutMeOn(false);
  if (getCurrentPage() === Page.projects) await quitProjects();
  setCurrentPage(Page.contact);
  await clearConsole();
  loadContact();
  //toggle social media
  social_icon_box.classList.remove("inactive");
  btn_ls.forEach((btn) => {
    btn.classList.remove("on-page");
  });
  //move the console to the middle and hide the portfolio button
  contact_btn.classList.add("on-page");
  console_1.classList.add("middle", "contact");
  console_2.classList.add("middle", "hidden");
  portfolio_btn.classList.add("hidden");

  (document.querySelector("#send-mail-btn") as HTMLInputElement).onclick =
    sendMail;
}
