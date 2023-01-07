var scrollStopId;

function scrollToBottom() {
    console_1.scrollTop = console_1.scrollHeight;
}

function scrollToTop() {
    console_1.scrollTo(0, 0);
}

function autoScroll() {
    scrollStopId = setInterval(scrollToBottom, 200);
}