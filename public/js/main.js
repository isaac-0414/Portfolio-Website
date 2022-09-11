// Created by Isaac Zheng at August, 2022

//main function
window.onload = main;

async function main() {
  // preloader().then(() => {
  //   initialize();
  // })

  // wait 2s to prevent window resize at the first
  await wait(2000);
  // load w, h, ctx, p for background animation
  w = window.innerWidth;
  h = window.innerHeight;
  last_w = w;
  last_h = h;
  if (w >= h) {
    o = "landscape";
  } else {
    o = "portrait";
  }
  if (w <= 768 || o === "portrait") {
    single_console = true;
  } else {
    single_console = false;
  }
  bg_hacker.width = w;
  bg_hacker.height = h;
  ctx = bg_hacker.getContext("2d");
  p = Array(Math.floor(w / 10) + 1).fill(0);
  skip_animation.classList.remove("inactive");
  initialize();
  backgroundAnimation();
}