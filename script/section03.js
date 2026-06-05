const sec03Elem = document.querySelector('#section-3');
const sec03_slideInit = () => {
    const IMG_WIDTH = 300; //카드이미지 width size
    //1.왼쪽버튼, 오른쪽 버튼을 클릭했을 때
    const left = sec03Elem.querySelector('.prev')
    const right = sec03Elem.querySelector('.next')
    const cardElem = sec03Elem.querySelector('.card-list')
    //함수선언
    const listGoto = ()=>{
        cardElem.style.transition = '0.5s';
        cardElem.style.transform = `translateX(-${currentIndex*IMG_WIDTH}px)`;
    }

    let currentIndex = 0; 
    const TOTAL_SIZE = cardElem.children.length;
    // 한 페이지에 보이는 카드의 개수: math.floor(전체/300)
    const VIEW_COUNT = Math.floor(sec03Elem.clientWidth / IMG_WIDTH);
    left.addEventListener('click',()=>{
        currentIndex--;
        if(currentIndex <= 0){currentIndex=0;}
        listGoto();
    });
    right.addEventListener('click',()=>{
        currentIndex++;
        const MAX = TOTAL_SIZE - VIEW_COUNT;
        
        if(currentIndex >=MAX ){currentIndex=MAX;}
        listGoto();
    });
}
sec03_slideInit();