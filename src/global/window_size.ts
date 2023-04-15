// window width and height, initialize when the window loads
let w: number; // width
let h: number; // height
export enum Orientation {
   portrait,
   landscape
}
let o: Orientation; // orientation

export function getW() {
   return w;
}
export function getH() {
   return h;
}
export function getO() {
   return o;
}

export function setW(value: number) {
   w = value;
}
export function setH(value: number) {
   h = value;
}
export function setO(value: Orientation) {
   o = value;
}