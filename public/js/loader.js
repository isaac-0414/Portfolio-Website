// html to load
const skills_content_1 = `
    <div class="skill-container">
      <div class="skill-box">
        <span class="title">HTML</span>
  
        <div class="skill-bar">
          <span class="skill-per html">
            <span class="tooltip">90%</span>
          </span>
        </div>
      </div>
  
      <div class="skill-box">
        <span class="title">CSS</span>
  
        <div class="skill-bar">
          <span class="skill-per css">
            <span class="tooltip">90%</span>
          </span>
        </div>
      </div>
      <div class="skill-box">
        <span class="title">JavaScript</span>
  
        <div class="skill-bar">
          <span class="skill-per javascript">
            <span class="tooltip">85%</span>
          </span>
        </div>
      </div>
      <div class="skill-box">
        <span class="title">React</span>
  
        <div class="skill-bar">
          <span class="skill-per react">
            <span class="tooltip">80%</span>
          </span>
        </div>
      </div>
      <div class="skill-box">
        <span class="title">Sass/SCSS</span>
  
        <div class="skill-bar">
          <span class="skill-per sass">
            <span class="tooltip">80%</span>
          </span>
        </div>
      </div>
      <div class="skill-box">
        <span class="title">jQuery</span>
  
        <div class="skill-bar">
          <span class="skill-per jquery">
            <span class="tooltip">60%</span>
          </span>
        </div>
      </div>
      <div class="skill-box">
        <span class="title">NodeJS</span>
  
        <div class="skill-bar">
          <span class="skill-per nodejs">
            <span class="tooltip">80%</span>
          </span>
        </div>
      </div>
      <div class="skill-box">
        <span class="title">ExpressJS</span>
  
        <div class="skill-bar">
          <span class="skill-per expressjs">
            <span class="tooltip">70%</span>
          </span>
        </div>
      </div>
    </div>`;
const skills_content_2 = `<div class="skill-container">
    <div class="skill-box">
      <span class="title">MongoDB</span>
  
      <div class="skill-bar">
        <span class="skill-per mongodb">
          <span class="tooltip">70%</span>
        </span>
      </div>
    </div>
    <div class="skill-box">
      <span class="title">MySQL</span>
  
      <div class="skill-bar">
        <span class="skill-per mysql">
          <span class="tooltip">70%</span>
        </span>
      </div>
    </div>
    <div class="skill-box">
      <span class="title">PHP</span>
  
      <div class="skill-bar">
        <span class="skill-per php">
          <span class="tooltip">40%</span>
        </span>
      </div>
    </div>
    <div class="skill-box">
      <span class="title">Bootstrap</span>
  
      <div class="skill-bar">
        <span class="skill-per bootstrap">
          <span class="tooltip">70%</span>
        </span>
      </div>
    </div>
    <div class="skill-box">
      <span class="title">Wordpress</span>
  
      <div class="skill-bar">
        <span class="skill-per wordpress">
          <span class="tooltip">75%</span>
        </span>
      </div>
    </div>
    <div class="tool-container">
      <div class="col">
        <h3>Libraries/APIs:</h3>
        <ul>
          <li>HTML Canvas</li>
          <li>GSAP3</li>
          <li>Three.js</li>
          <li>Anime.js</li>
          <li>ScrollMagic</li>
        </ul>
      </div>
      <div class="col">
        <h3>Dev Tools:</h3>
        <ul>
          <li>VS Code</li>
          <li>Git</li>
          <li>Command Line</li>
          <li>Chrome Dev Tool</li>
          <li>CodePen</li>
        </ul>
      </div>
    </div>
  </div>`;

  var projects_content = `
  <div class="container">
          <div class="black-page"></div>
          <div class="heading">
            <h3>Projects</h3>
          </div>
          <div class="projects-menu">
            <div class="filter active">All</div>
            <div class="filter">Web</div>
            <div class="filter">Game</div>
            <div class="filter">Mobile</div>
          </div>
          <div class="box"></div>
          <div class="btn">
            <a href="#">More</a>
          </div>
        </div>`

const contact_content = `
        <div class="contact-container">
          <h1>Contact Me</h1>
          <div class="row100">
            <div class="col">
              <div class="inputBox">
                <input type="text" name="" required="required" />
                <span class="text">First Name</span>
                <span class="line"></span>
              </div>
            </div>
            <div class="col">
              <div class="inputBox">
                <input type="text" name="" required="required" />
                <span class="text">Last Name</span>
                <span class="line"></span>
              </div>
            </div>
          </div>
          <div class="row100">
            <div class="col">
              <div class="inputBox">
                <input type="text" name="" required="required" />
                <span class="text">Email</span>
                <span class="line"></span>
              </div>
            </div>
            <div class="col">
              <div class="inputBox">
                <input type="text" name="" required="required" />
                <span class="text">Phone</span>
                <span class="line"></span>
              </div>
            </div>
          </div>
          <div class="row100">
            <div class="col">
              <div class="inputBox textarea">
                <textarea required="required"></textarea>
                <span class="text">Type your message here...</span>
                <span class="line"></span>
              </div>
            </div>
          </div>
          <div class="row100">
            <div class="col">
              <input type="submit" value="Send" />
            </div>
          </div>
          <div class="row100">
            <p>
              Straight shot to my inbox:
              <a href="isaaczheng0414@gmail.com">isaaczheng0414@gmail.com</a>
            </p>
          </div>
        </div>`;

const more_about_me_content = `
<div class="heading">
          <h2>01. More about me</h2>
          <div class="line"></div>
        </div>
        <div class="fun-facts">
          <div class="image-container">
            <img src="/images/ski.jpg" alt="picture of myself">
          </div>
          <div class="text-container">
            <p>I am a pre-Engineering major student right now, and I am working on transferring to CS major. </p>
            <p>I am still actively learning new web technologies and learning game dev as well</p>
            <p>I like <span>cycling</span> very much, and I play <span>piano</span> at free time. I am a big fan of <span>Asian food and Indian food</span></p>
          </div>
        </div>`;
// loader of pages

async function loadAbout() {
  console_1.innerHTML = `<h2>${h2_text}</h2>
    <h1>${h1_text_revised}</h1>
    <p>${p_text}</p>`;
  if (w > 768 && o === "landscape") {
    console2AutoType();
  }
}

function loadSkills() {
  if (w <= 768 || o === "portrait") {
    console_1.innerHTML = skills_content_1 + skills_content_2;
    return;
  }
  console_1.innerHTML = skills_content_1;
  console_2.innerHTML = skills_content_2;
}

// define the number of columns base on screen size

var num_col = 3;
const img_amount = 15;
const card_arr = Array(img_amount).fill({card_title: "Something Awesome", tech_used: "Vanilla HTML, CSS and JS"})

function loadProjects() {
  if (w <= 480) {
    num_col = 1;
  }
  if (w > 480 && w <= 768) {
    num_col = 2;
  }
  if (w > 768 && w <= 1400) {
    num_col = 3;
  }
  if (w > 1400) {
    num_col = 4;
  }
  console_1.innerHTML = projects_content;
  var box = document.querySelector(".container .box");
  var img_idx = 1;
  for (let i = 1; i <= num_col; i++) {
    var col = document.createElement("div");
    col.classList.add("dream");
    box.appendChild(col);
    // add cards to columns, for the rows before, stop when index reach the average amount, but for the last col, stop
    // until every image is added. (if loop is over but not every image is added, keep running the loop, if the loop is
    // not over but every image is added, stop the loop)
    for (let j = 0; (j < Math.round(img_amount / num_col) || (i == num_col && img_idx <= img_amount)); j++, img_idx++) {
      if (img_idx > img_amount) {
        return;
      }
      let tpl = document.createElement("template");
      tpl.innerHTML = `
        <div class="card">
          <div class="upper-half">
            <h2 class="card-title">${card_arr[j].card_title}</h2>
            <p class="tech-used">${card_arr[j].tech_used}</p>
          </div>
          <img src="/images/${img_idx}.jpg" />
          <div class="lower-half">
            <button>Learn More</button>
          </div>
        </div>`;
      col.append(tpl.content);
    }
  }
}

function loadContact() {
  console_1.innerHTML = contact_content;
}

function loadMoreAbout() {
  console_2.innerHTML = more_about_me_content;
}
