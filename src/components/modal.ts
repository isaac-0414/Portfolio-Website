type Content = {
   img_src: string
   title: string, 
   tech_used?: string, 
   description: string
   link?: string | null | undefined
}

export default function showModalWrapper({img_src, title, tech_used, description, link}: Content) {
   return () => {
      const modal_page = document.createElement("div");
      modal_page.classList.add("modal_page");
      modal_page.innerHTML = `
         <div class="modal">
            <div class="modal_upper">
               <img src=${img_src} alt="project">
            </div>
            <div class="modal_lower">
               <div class="header">
                  <h1 class="title">${title}</h1>
                  <h3 class="tech_used">${tech_used}</h3>
               </div>
               <hr />
               <div class="description">${description}</div>
               <div class="toolbar">
                  <a class='view_site' href=${link} target="_blank">
                     <i class='bx bx-link-external'></i>
                     View Site
                  </a>
                  <button class="modal_close">
                     <i class='bx bx-x'></i>
                  </button>
               </div>
            </div>
         </div>
      `;

      document.body.appendChild(modal_page);

      modal_page.querySelector(".modal_close")?.addEventListener("click", () => {
         document.body.removeChild(modal_page);
      });

      const modal = modal_page.querySelector('.modal') as HTMLDivElement;

      modal_page.addEventListener('click', (event: MouseEvent) => {
         if (modal !== null && !(event.target as HTMLElement)?.closest(".modal")) {
            document.body.removeChild(modal_page);
         }
      })
   }
}