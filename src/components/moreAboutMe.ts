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
      <p>My legal name is <span>Zhiheng</span>, which pronounces like <span>Dreuheng</span></p>
      <p>Besides web development, I also did security, game dev, mobile dev, 3D modeling before.</p>
      <p>I am also an ML researcher focus on NLP and graph, but I am also experienced with visual and audio models.</p>
      <p>I like playing <span>pool</span> very much, and I like <span>cycling</span> at free time.</p>
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