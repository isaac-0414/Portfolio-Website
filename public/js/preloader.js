function preloader() {
    return new Promise((resolve, reject) => {
        var count = 0;
        var counter = setInterval(function() {
            if (count < 101) {
                document.querySelector('.count').innerText = count + '%';
                document.querySelector('.loader').style.width = count + '%';
                count++;
            } else {
                clearInterval(counter);
                resolve();
            }
        }, 80);
    })
}