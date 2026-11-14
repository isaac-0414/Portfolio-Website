import { console_2 } from "../global/elements";
import { setMoreAboutMeOn } from "../global/globalStates";
import { clearConsole2 } from "../util/clear";

const more_about_me_content = `
<div class="heading">
   <h2>01. More about me</h2>
   <div class="line"></div>
</div>
<div class="fun-facts">
   <div class="image-container">
      <img src="images/ski.jpg" alt="picture of myself">
   </div>
   <div class="text-container">
      <p>My legal name is <span>Zhiheng</span>, which pronounces like <span>Jrr-heng</span></p>
      <p>I work on <span>AI systems & infrastructure</span> and <span>LLM agents</span>, with a background in NLP, graphs, and multimodal models.</p>
      <p>I enjoy playing <span>billiards</span> and <span>cycling</span> very much, and I like video games, poker, and mahjong</p>
   </div>
</div>`;

function loadMoreAboutMe() {
   console_2.innerHTML = more_about_me_content;
}
 
 // helper function to load more about me page
export async function moreAboutMe() {
   setMoreAboutMeOn(true);
   await clearConsole2();
   loadMoreAboutMe();
}