const sec3Elem = document.querySelector('#section-3');

const sec3_slideInit = () => {
    const IMG_WIDTH = 300;
    const leftBtn =sec3Elem.querySelector('.prev');
    const rightBtn =sec3Elem.querySelector('.next');
    const cardElem = sec3Elem.querySelector('.card-list');
    const listGoto = () =>{
        cardElem.computedStyleMap.transition = '0.5s';
    }
}