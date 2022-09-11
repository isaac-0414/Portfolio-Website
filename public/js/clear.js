// CLEAR AND RESET THE TWO CONSOLES
async function clearConsole() {
  clearConsole2IntervalId();
  await wait(200);
  console_1.innerHTML = "";
  console_2.innerHTML = "";
}

//clear console_2 only
async function clearConsole2() {
  clearConsole2IntervalId();
  await wait(200);
  console_2.innerHTML = "";
}
