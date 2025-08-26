document.addEventListener("DOMContentLoaded", function () {
   let bodyEl = document.body;
    	/*open mobile menu */
    const menuButton = document.querySelector('#menu-toggle');
    const mobileMenu = document.querySelector('#nav-menu-wrapper');
    
    menuButton.addEventListener('click', ()=> {
      
      if( menuButton.classList.contains('active')){
        menuButton.classList.remove('active');
        mobileMenu.classList.remove('active');
        bodyEl.classList.remove('lock');
        
      }else{
        menuButton.classList.add('active');
        mobileMenu.classList.add('active');
        bodyEl.classList.add('lock');
      }
    });
   //STICKY HEADER
   const header = document.querySelector("#header");
  

    if (header) {
      let lastScrollTop = window.scrollY || document.documentElement.scrollTop;

      window.addEventListener("scroll", () => {
        const currentScrollTop = window.scrollY || document.documentElement.scrollTop;

        const isScrollingUp = currentScrollTop < lastScrollTop;

        if (isScrollingUp && !header.classList.contains("fix-header")) {
          header.classList.add("fix-header");
          
        }

        if (!isScrollingUp && header.classList.contains("fix-header")) {
          header.classList.remove("fix-header");
          
        }

        lastScrollTop = currentScrollTop;
      });

      // 🔒 Блокируем удаление .fix-header при resize
      window.addEventListener("resize", () => {
        // Ничего не делаем с .fix-header!
        // Просто можно обновить layout или вызвать перерисовку, если нужно
      });
    }
})