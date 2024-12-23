const animItems = document.querySelectorAll('.anim-item');


if (animItems.length > 0) {
    window.addEventListener('load', animScroll);

    window.addEventListener('scroll', animScroll);
    function animScroll() {
        for(let i = 0; i < animItems.length; i++) {
           const  animItem = animItems[i];
           const animItemHeight = animItem.offsetHeight;
           const animItemOffset = offset(animItem).top;
           const animStart = 5;

           let animItemPoint = window.innerHeight - animItemHeight / animStart;

           if(animItemHeight > window.innerHeight) {
            animItemPoint = window.innerHeight - window.innerHeight / animStart;
           }

           if(pageYOffset > animItemOffset - animItemPoint && pageYOffset < (animItemOffset + animItemHeight)) {
             animItem.classList.add('s-active');
           } else {
            if(!animItem.classList.contains('anim-no-hide')){
               animItem.classList.remove('s-active');
            }
           }
        }
    }

    function offset(el) {
        const rect = el.getBoundingClientRect(),
              scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
              scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }
}