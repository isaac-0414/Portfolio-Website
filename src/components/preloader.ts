export function preloader() {
   return new Promise((resolve) => {
      var count = 0;
      var counter = setInterval(function() {
         if (count < 101) {
            (document.querySelector('.count') as HTMLDivElement).innerText = count + '%';
            count++;
         } else {
            clearInterval(counter);
            resolve(null);
         }
      }, 50);
   })
}