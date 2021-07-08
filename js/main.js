var filters = document.querySelectorAll('.filter');

filters.forEach(filter => { 

  filter.addEventListener('click', function() {

    let selectedFilter = filter.getAttribute('data-filter');
    let itemsToHide = document.querySelectorAll(`.projects .project:not([data-filter='${selectedFilter}'])`);
    let itemsToShow = document.querySelectorAll(`.projects [data-filter='${selectedFilter}']`);

    if (selectedFilter == 'all') {
      itemsToHide = [];
      itemsToShow = document.querySelectorAll('.projects [data-filter]');
    }

    itemsToHide.forEach(el => {
      el.classList.add('hide');
      el.classList.add('p-0');
      el.classList.remove('show');
    });

    itemsToShow.forEach(el => {
      el.classList.remove('hide');
      el.classList.add('show');
      el.classList.removejs-top('p-0'); 
    });

  });
});

/* bottom to top */

var basicScrollTop = function () {  
    // The button
    var btnTop = document.querySelector('#goTop');
    var headerTop = document.querySelector('.header');
    // Reveal the button
    var btnReveal = function () { 
/*         var position = document.querySelector('#position');
            position.innerHTML = window.scrollY + 'px'; */
        if (window.scrollY >= 300) {
          btnTop.classList.add('scrollshow');
        } else {
          btnTop.classList.remove('scrollshow');
        }    
      }  
   /*  btnTop.classList.add('hide'); */
    // Smooth scroll top
    // Thanks to => http://stackoverflow.com/a/22610562
    var TopscrollTo = function () {
      if(window.scrollY!=0) {
       
        setTimeout(function() {
          window.scrollTo(0,window.scrollY-10000);
          TopscrollTo();
        }, 1);
      }
      
    }
    var stickyAdd = function (){
        if (window.scrollY >= 70) {
            headerTop.classList.add('is-sticky');
          } else {
            headerTop.classList.remove('is-sticky');
          }  
    }
    // Listeners
    window.addEventListener('scroll', btnReveal);
    btnTop.addEventListener('click', TopscrollTo);
    window.addEventListener('scroll', stickyAdd);  
      
  };
  basicScrollTop();
  
  
  
  
  
  
  