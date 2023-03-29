// program when window resize

var single_console = false;

function debounce(fn, ms) {
    let timer
    return () => {
        clearTimeout(timer)
        timer = setTimeout(() => {
            timer = null
            fn.apply(this, arguments)
        }, ms)
    };
}

const debouncedHandleResize = debounce(handleResize, 1000)
window.addEventListener('resize', debouncedHandleResize);

function handleResize () {
    // if it turns out that w and h doesn't change, quit the function
    if (w === window.innerWidth && h === window.innerHeight)
        return;
    
    let w = window.innerWidth;
    let h = window.innerHeight;
    clearInterval(background_timer);
    background_timer = undefined;
    ctx.clearRect(0, 0, w, h);

    if (w >= h) {
        o = "landscape";
    } else {
        o = "portrait";
    }

    //rebuild the background
    bg_hacker.remove();
    bg_hacker = document.createElement("canvas");
    bg_hacker.setAttribute("id", "bg_hacker");
    home.appendChild(bg_hacker);
    bg_hacker.width = w;
    bg_hacker.height = h;
    ctx = bg_hacker.getContext("2d");

    // reset the p array of background.js
    p = Array(Math.floor(w / 10) + 1).fill(0);

    // not start background animation when at project page since animation will start when leaving
    // project page, starting the animation two times will mess up the program
    if (currentPage !== projects_btn) {
        backgroundAnimation();
    }

    // quit program if is initializing since when initializing change the background animation is
    // the only thing needs to do when window resizes
    if (initializing === true) return;

    if (w <= 768 || o === "portrait") {
        // if should only show one consle, set this variable to true to stop the animation at console 2
        single_console = true;
        console_1.classList.add("middle");
        console_2.classList.add("middle", "hidden");
        menu.classList.add("inactive");
        if (currentPage === about_btn) {
            // stop animation at console 2 if it is not shown
            clearConsole2();
        }
        if (currentPage === skills_btn) {
            // reload skills content if number of consoles is changed
            loadSkills();
        }
    } else {
        single_console = false;
        if (currentPage !== contact_btn && currentPage !== projects_btn) {
            console_1.classList.remove("middle");
            console_2.classList.remove("middle", "hidden");
        }
        menu.classList.remove("inactive");
        if (currentPage === about_btn) {
            if (console_2_timeout_id === undefined && console_2_interval_id === undefined) {
                console2AutoType();
            }
        }
        if (currentPage === skills_btn) {
            // reload skills content if number of consoles is changed
            loadSkills();
        }
    }
    if (currentPage === projects_btn) {
        if((w <= 480 && num_col !== 1) || (w > 480 && w <= 768 && num_col !== 2) || (w > 768 && w <= 1400 && num_col !== 3) || (w > 1400 && num_col !== 4)) {
            loadProjects();
        }
    }
}