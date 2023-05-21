import { console_1 } from "../global/elements";

export function scrollToBottom() {
   console_1.scrollTop = console_1.scrollHeight;
}

export function scrollToTop() {
   console_1.scrollTo(0, 0);
}