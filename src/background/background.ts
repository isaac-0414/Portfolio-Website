import { getW, getH } from "../global/window_size";
import { skip_animation, home } from "../global/elements";
import { setBackgroundTimer, getBackgroundTimer, getCurrentPage, Page  } from "../global/globalStates";

//BACKGROUND ANIMATION
let bg_hacker: HTMLCanvasElement = document.querySelector("#bg_hacker") as HTMLCanvasElement;

let ctx: CanvasRenderingContext2D;

// an zero array /w length w/10
let p: number[]; // = Array(Math.floor(w / 10) + 1).fill(0);

// generate random element from an array
const random = (items: string[]) => items[Math.floor(Math.random() * items.length)];

//the array of hex numbers
const hex = "0123456789ABCDEFG".split("");

export function backgroundAnimation() {
  let background_timer = window.setInterval(() => {
    // in each cycle, fill the page with opacity 0.5 black, to achieve the effect of text become more dim
    ctx.fillStyle = "rgba(0, 0, 0, .05)";
    ctx.fillRect(0, 0, getW(), getH());
    ctx.fillStyle = "green";

    // fill random text at coordinate (i * 10, v)
    p.forEach((v, i) => {
      ctx.fillText(random(hex), i * 10, v);

      // if v, which stands for current height, is greater than h or v > 50 + 10000 * Math.random(), v goes back to 0
      p[i] = v >= getH() || v > 50 + 10000 * Math.random() ? 0 : v + 10;
    });
  }, 1000 / 30);

  setBackgroundTimer(background_timer);
}

export function loadBackground() {
  // load w, h, ctx, p for background animation
  bg_hacker.width = getW();
  bg_hacker.height = getH();
  ctx = bg_hacker.getContext("2d") as CanvasRenderingContext2D;
  p = Array(Math.floor(getW() / 10) + 1).fill(0);
  skip_animation.classList.remove("inactive");
  backgroundAnimation();
  // bg_animation_activated = true;
}

export function clearBackground() {
  clearInterval(getBackgroundTimer());
  setBackgroundTimer(undefined);
  ctx.clearRect(0, 0, getW(), getH());
}

export function rebuildBackground() {
  bg_hacker.remove();
  bg_hacker = document.createElement("canvas");
  bg_hacker.setAttribute("id", "bg_hacker");
  home.appendChild(bg_hacker);
  bg_hacker.width = getW();
  bg_hacker.height = getH();
  ctx = bg_hacker.getContext("2d") as CanvasRenderingContext2D;

  // reset the p array of background.js
  p = Array(Math.floor(getW() / 10) + 1).fill(0);

  // not start background animation when at project page since animation will start when leaving
    // project page, starting the animation two times will mess up the program
    if (getCurrentPage() !== Page.projects) {
      backgroundAnimation();
    }
}