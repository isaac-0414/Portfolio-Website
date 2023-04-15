import { console_1 } from "../global/elements";

let scrollStopId: number | undefined;

export function scrollToBottom() {
   console_1.scrollTop = console_1.scrollHeight;
}

export function scrollToTop() {
   console_1.scrollTo(0, 0);
}

export function autoScroll() {
   scrollStopId = window.setInterval(scrollToBottom, 200);
}

export function stopAutoScroll() {
   // stop auto scroll
   if (scrollStopId != undefined) {
      clearInterval(scrollStopId);
      scrollStopId = undefined;
   }
}

export function getScrollStopId() {
   return scrollStopId;
}