//home page
export const home: HTMLDivElement = document.querySelector("#home") as HTMLDivElement;
export const header: HTMLDivElement = document.querySelector("header") as HTMLDivElement;
export const logo: HTMLDivElement = document.querySelector("header .logo") as HTMLDivElement;
export const menu_btn: HTMLElement = document.querySelector("#menu-btn") as HTMLElement;
export const menu: HTMLDivElement = document.querySelector("header nav menu") as HTMLDivElement;

//two consoles
export const console_1: HTMLDivElement = document.querySelector("#console_1") as HTMLDivElement;
export const console_2: HTMLDivElement = document.querySelector("#console_2") as HTMLDivElement;

//main menu buttons
export const about_btn: HTMLSpanElement = document.querySelector("#about") as HTMLSpanElement;
export const skills_btn: HTMLSpanElement = document.querySelector("#skills") as HTMLSpanElement;
export const projects_btn: HTMLSpanElement = document.querySelector("#projects") as HTMLSpanElement;
export const resume_btn: HTMLSpanElement = document.querySelector("#resume") as HTMLSpanElement;
export const contact_btn: HTMLSpanElement = document.querySelector("#contact") as HTMLSpanElement;

// big button at the bottom
export const portfolio_btn: HTMLDivElement = document.querySelector("#button") as HTMLDivElement;

// skip animation button
export const skip_animation: HTMLParagraphElement = document.querySelector("#skip-animation") as HTMLParagraphElement;

// social media box
export const social_icon_box: HTMLDivElement = document.querySelector(".social-icon-box") as HTMLDivElement;

export const btn_ls = [about_btn, skills_btn, projects_btn, resume_btn, contact_btn];
export const btn_text: HTMLHeadingElement = document.querySelector("#button h2") as HTMLHeadingElement;