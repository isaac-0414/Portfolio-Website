//GLOBAL STATES

// let bg_animation_activated = false;
let initializing = true; // true if initialize() is still running
export function isInitializing() {
   return initializing;
}
export function setIsInitializing(value: boolean) {
   initializing = value;
}

// current page user at
export enum Page {
   about,
   skills,
   projects,
   resume,
   contact
}

let currentPage = Page.about;
export function getCurrentPage() {
   return currentPage;
}
export function setCurrentPage (page: Page) {
   currentPage = page;
};


// if console_2 is displaying more about me
let moreAboutMeOn = false;
export function isMoreAboutMeOn() {
   return moreAboutMeOn;
}
export function setMoreAboutMeOn(value: boolean) {
   moreAboutMeOn = value;
}


//timer of setInterval of backgroundAnimation
let background_timer: number | undefined = undefined;

export function getBackgroundTimer() {
   return background_timer;
}

export function setBackgroundTimer(timer: number | undefined) {
   background_timer = timer;
}


// it becomes true when the skip-animation button is clicked
let skip = false;
export function skipped() {
   return skip;
}
export function setSkip(value: boolean) {
   skip = value;
}

let single_console = false;
export function isSingleConsole() {
   return single_console;
}
export function setSingleConsole(value: boolean) {
   single_console = value;
}