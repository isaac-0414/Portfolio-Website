import { menu, menu_btn, btn_text, portfolio_btn } from "../global/elements";
import { getW, getO, Orientation } from "../global/window_size";
import { moreAboutMe } from "../components/moreAboutMe";

export function startPortfolio() {
  menu_btn.classList.remove("inactive");
  menu.classList.remove("inactive");
  if (getW() > 768 && getO() === Orientation.landscape) {
    btn_text.innerText = "More about me";
    portfolio_btn.onclick = moreAboutMe;
  }
}
