import { getW, getO, Orientation } from "../global/window_size";
import { menu, btn_ls, resume_btn } from "../global/elements";

export function goToResume() {
   // if on mobile device, collapse the menu every time clicked a new button
   if (getW() <= 768 || getO() === Orientation.portrait) {
      menu.classList.add("inactive");
   }
   window.open("resume.pdf");
   btn_ls.forEach((btn) => {
      btn.classList.remove("on-page");
   });
   resume_btn.classList.add("on-page");
};