//BACKGROUND ANIMATION
bg_hacker = document.getElementById("bg_hacker");

var ctx;

// an zero array /w length w/10
var p; // = Array(Math.floor(w / 10) + 1).fill(0);

// generate random element from an array
const random = (items) => items[Math.floor(Math.random() * items.length)];

//the array of hex numbers
const hex = "0123456789ABCDEFG".split("");

function backgroundAnimation() {
  background_timer = setInterval(() => {
    // in each cycle, fill the page with opacity 0.5 black, to achieve the effect of text become more dim
    ctx.fillStyle = "rgba(0, 0, 0, .05)";
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = "green";

    // fill random text at coordinate (i * 10, v)
    p.forEach((v, i) => {
      ctx.fillText(random(hex), i * 10, v);

      // if v, which stands for current height, is greater than h or v > 50 + 10000 * Math.random(), v goes back to 0
      p[i] = v >= h || v > 50 + 10000 * Math.random() ? 0 : v + 10;
    });
  }, 1000 / 30);
}