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
      <p>I am a CS major student right now, and I am also working on Statistics Minor. </p>
      <p>I am still actively learning new web technologies and learning game dev as well</p>
      <p>I like <span>cycling</span> very much, and I play <span>piano</span> at free time. I am a big fan of <span>Asian food and Indian food</span></p>
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