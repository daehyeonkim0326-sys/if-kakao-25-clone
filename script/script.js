//전역변수선언
//요소 가져오기
const menuBtn=document.querySelector('.menu-btn');
const popupMenu=document.querySelector('.popup');
const closeBtn=document.querySelector('.menu-close');
const kvVideo = document.querySelector('.kv_video');
menuBtn.addEventListener('click',()=>{
    popupMenu.classList.add('show');
});
closeBtn.addEventListener('click',()=>{
    popupMenu.classList.remove('show');
});
if (kvVideo) {
    const mediaQuery = window.matchMedia('(min-width: 768px)');
    const setKvVideo = () => {
        const nextSrc = mediaQuery.matches ? kvVideo.dataset.desktopSrc : kvVideo.dataset.mobileSrc;
        if (kvVideo.getAttribute('src') === nextSrc) {
            return;
        }
        kvVideo.setAttribute('src', nextSrc);
        kvVideo.load();
        kvVideo.play().catch(() => {});
    };

    setKvVideo();
    if (mediaQuery.addEventListener) {
        mediaQuery.addEventListener('change', setKvVideo);
    } else {
        mediaQuery.addListener(setKvVideo);
    }
}
//slide 처리
const slideViews = document.querySelectorAll('.slide-wrap');

const slideinit = (slideWrap) => {
    const slidelist = slideWrap.querySelector('.slide-list');
    const slideimg = slidelist.querySelectorAll('li');
    const indicator = slideWrap.querySelector('.indicator');
    const imgsize = slideimg.length;

    indicator.innerHTML = '';
    for (let i = 0; i < imgsize; i++) {
        const elem = document.createElement('li');
        elem.dataset.index = i;
        if (i === 0) {
            elem.className = 'active';
        }
        indicator.append(elem);
    }

    const totalsize = imgsize + 2;
    const firstClone = slideimg[0].cloneNode(true);
    const lastClone = slideimg[imgsize - 1].cloneNode(true);
    slidelist.append(firstClone);
    slidelist.prepend(lastClone);

    slidelist.style.width = `${100 * totalsize}%`;
    slidelist.querySelectorAll('li').forEach((li) => {
        li.style.width = `${100 / totalsize}%`;
    });

    let current = 1;
    const widthGap = 100 / totalsize;

    const currentGoto = (time) => {
        slidelist.style.transition = time;
        slidelist.style.transform = `translateX(-${current * widthGap}%)`;
    };

    const updateindicator = () => {
        const active = indicator.querySelector('li.active');
        active && active.classList.remove('active');

        let activeIndex = current - 1;
        if (current === 0) {
            activeIndex = imgsize - 1;
        }
        if (current === totalsize - 1) {
            activeIndex = 0;
        }
        indicator.children[activeIndex].classList.add('active');
    };

    currentGoto('none');

    const prevBtn = slideWrap.querySelector('.prev');
    const nextBtn = slideWrap.querySelector('.next');

    prevBtn && prevBtn.addEventListener('click', () => {
        current--;
        currentGoto('0.5s');
        updateindicator();
    });

    nextBtn && nextBtn.addEventListener('click', () => {
        current++;
        currentGoto('0.5s');
        updateindicator();
    });

    slidelist.addEventListener('transitionend', () => {
        if (current === totalsize - 1) {
            current = 1;
            currentGoto('none');
        }
        if (current === 0) {
            current = totalsize - 2;
            currentGoto('none');
        }
        updateindicator();
    });

    indicator.addEventListener('click', (e) => {
        const liElem = e.target;
        if (liElem.tagName === 'LI') {
            const idx = Number(liElem.dataset.index);
            current = idx + 1;
            currentGoto('0.5s');
            updateindicator();
        }
    });
};

slideViews.forEach((slideWrap) => {
    slideinit(slideWrap);
});

//자주묻는 질문 탭 처리
//ul.top에서 클릭되면 li-menu값을 읽어서 active
//menu에 설정된 index번호에 맞는 ul에 active
const tapMenus = document.querySelectorAll('#section-5 > ul.top > li');
const tapItems = document.querySelectorAll('#section-5 .item');

tapMenus.forEach((menu, idx) => {
  menu.addEventListener('click', () => {
    tapMenus.forEach((list) => {
      list.classList.remove('active');
    });

    menu.classList.add('active');

    tapItems.forEach((item) => {
      item.classList.remove('active');
    });

    tapItems[idx].classList.add('active');
  });
});

//tabitem에 있는 각각의 
tapItems.forEach((ulElem)=>{
    const liElems=ulElem.querySelectorAll('li');
    liElems.forEach((list)=>{
        list.addEventListener('click',()=>{
            list.classList.toggle('show'); 
        });
    });
});
//header 영역에 scroll-popup에 show라는 클래스가 추가/삭제
const scrollElem = document.querySelector('.scroll-popup');

window.addEventListener('scroll',()=>{
    if(window.scrollY > 0) {
        scrollElem.classList.add('show');
    } else {
        scrollElem.classList.remove('show');
    }
});

const popup = document.querySelector('.popup');

window.addEventListener('scroll',function () {
    if (window.scrollY > 100) {
        popup.classList.add('active');
    }else{
        popup.classList.remove('active');
    }
});

const topBtn = document.querySelectorAll('.btn')

topBtn.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        window.scrollTo({
            top:0,
            behavior:'smooth'
    })
})});