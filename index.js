//? функция открытия меню

let burger = document.querySelector('.header__burger');
    burger.addEventListener('click', showMenu);
let menu = document.querySelector('.header__menu');
    menu.addEventListener('click', showMenu);
let linkMenu = document.querySelectorAll('.menu__link');
    for(let i of linkMenu){
        i.addEventListener('click', showMenu)
    }

function showMenu(e){
    if(e.target.className == 'menu__link hover'){
        burger.classList.remove('active');
        menu.classList.remove('active');
        document.body.classList.remove('active');
    } else{
        document.body.classList.toggle('active');
        burger.classList.toggle('active');
        menu.classList.toggle('active');
    }
}

//! фукнция добавления и убора класса нажатой кнопки
//* function changeClassBtn(arr, e){
//*     if(e.target.className != 'portfolio__button button btn-active hover'){
//*         for(let i of arr){
//*             i.className = 'portfolio__button button hover';
//*         }
//*         e.target.className = 'portfolio__button button btn-active hover';
//*     } else{
//*         e.target.className == 'portfolio__button button btn-active hover'
//*     }
//* }

const buttonSeasonArr = document.querySelectorAll('.portfolio__button');
    for(let i of buttonSeasonArr){
        i.addEventListener('click', changePortofolioImg);
        i.addEventListener('click', preloadImages);
        i.setAttribute('data-season', `${i.textContent}`);
    }

function changePortofolioImg(e){
    //* changeClassBtn(buttonSeasonArr, e);
    const portfolioImg = document.querySelectorAll('.portfolio__img img');
    portfolioImg.forEach((item, index) => item.src = `assets/img/porfolio_img/${e.target.getAttribute('data-season').toLowerCase().trim()}/${index + 1}.jpg`);

    for(let i of buttonSeasonArr){
        i.classList.remove('btn-active');
    }
    e.target.classList.add('btn-active');
}

//? Функция кеширования изображений

function preloadImages(e){
    if(e != undefined){
        for(let i = 1; i <= 6; i++){
            const img = new Image();
            img.src += `assets/img/porfolio_img/${e.target.getAttribute('data-season').toLowerCase().trim()}/${i}.jpg`;
        }
    } else{
        for(let i = 1; i <= 6; i++){
            const img = new Image();
            img.src = `assets/img/porfolio_img/autumn/${i}.jpg`;
        }
    }
}
preloadImages()


//? функция перевода с англ на русс

const allDataLang = document.querySelectorAll('[data-lang]');

const lang = {
    'en': {
      'skills': 'Skills',
      'portfolio': 'Portfolio',
      'video': 'Video',
      'price': 'Price',
      'contacts': 'Contacts',
      'hero-title': 'Alexa Rise',
      'hero-text': 'Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise',
      'hire': 'Hire me',
      'skill-title-1': 'Digital photography',
      'skill-text-1': 'High-quality photos in the studio and on the nature',
      'skill-title-2': 'Video shooting',
      'skill-text-2': 'Capture your moments so that they always stay with you',
      'skill-title-3': 'Rotouch',
      'skill-text-3': 'I strive to make photography surpass reality',
      'skill-title-4': 'Audio',
      'skill-text-4': 'Professional sounds recording for video, advertising, portfolio',
      'winter': 'Winter',
      'spring': 'Spring',
      'summer': 'Summer',
      'autumn': 'Autumn',
      'price-description-1-span-1': 'One location',
      'price-description-1-span-2': '120 photos in color',
      'price-description-1-span-3': '12 photos in retouch',
      'price-description-1-span-4': 'Readiness 2-3 weeks',
      'price-description-1-span-5': 'Make up, visage',
      'price-description-2-span-1': 'One or two locations',
      'price-description-2-span-2': '200 photos in color',
      'price-description-2-span-3': '20 photos in retouch',
      'price-description-2-span-4': 'Readiness 1-2 weeks',
      'price-description-2-span-5': 'Make up, visage',
      'price-description-3-span-1': 'Three locations or more',
      'price-description-3-span-2': '300 photos in color',
      'price-description-3-span-3': '50 photos in retouch',
      'price-description-3-span-4': 'Readiness 1 week',
      'price-description-3-span-5': 'Make up, visage, hairstyle',
      'order': 'Order shooting',
      'contact-me': 'Contact me',
      'send-message': 'Send message',
      'E-mail' : 'E-mail',
      'Phone' : 'Phone',
      'Message' : 'Message',
      'standart' : 'Standart',
      'premium' : 'Premium',
      'gold' : 'Gold',
    },
    'ru': {
      'skills': 'Навыки',
      'portfolio': 'Портфолио',
      'video': 'Видео',
      'price': 'Цены',
      'contacts': 'Контакты',
      'hero-title': 'Алекса Райс',
      'hero-text': 'Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом',
      'hire': 'Пригласить',
      'skill-title-1': 'Фотография',
      'skill-text-1': 'Высококачественные фото в студии и на природе',
      'skill-title-2': 'Видеосъемка',
      'skill-text-2': 'Запечатлите лучшие моменты, чтобы они всегда оставались с вами',
      'skill-title-3': 'Ретушь',
      'skill-text-3': 'Я стремлюсь к тому, чтобы фотография превосходила реальность',
      'skill-title-4': 'Звук',
      'skill-text-4': 'Профессиональная запись звука для видео, рекламы, портфолио',
      'winter': 'Зима',
      'spring': 'Весна',
      'summer': 'Лето',
      'autumn': 'Осень',
      'price-description-1-span-1': 'Одна локация',
      'price-description-1-span-2': '120 цветных фото',
      'price-description-1-span-3': '12 отретушированных фото',
      'price-description-1-span-4': 'Готовность через 2-3 недели',
      'price-description-1-span-5': 'Макияж, визаж',
      'price-description-2-span-1': 'Одна-две локации',
      'price-description-2-span-2': '200 цветных фото',
      'price-description-2-span-3': '20 отретушированных фото',
      'price-description-2-span-4': 'Готовность через 1-2 недели',
      'price-description-2-span-5': 'Макияж, визаж',
      'price-description-3-span-1': 'Три локации и больше',
      'price-description-3-span-2': '300 цветных фото',
      'price-description-3-span-3': '50 отретушированных фото',
      'price-description-3-span-4': 'Готовность через 1 неделю',
      'price-description-3-span-5': 'Макияж, визаж, прическа',
      'order': 'Заказать съемку',
      'contact-me': 'Свяжитесь со мной',
      'send-message': 'Отправить',
      'E-mail' : 'Почта',
      'Phone' : 'Телефон',
      'Message' : 'Сообщение',
      'standart' : 'Стандарт',
      'premium' : 'Премиум',
      'gold' : 'Золотой',
    }
  }

let choseLang = '';

const buttonLang = document.querySelectorAll('.language');
    buttonLang.forEach(item => item.addEventListener('click', translateText));

function translateText(e){
    if(e.target.className != 'language hover lang'){
        for(let j of buttonLang){
            j.classList.remove('lang');
        }
        for(let key in lang[`${e.target.textContent.trim()}`]){
            for(let i of allDataLang){
                if(key == i.getAttribute('data-lang')){
                    i.textContent = lang[`${e.target.textContent.trim()}`][key];
                }
                if(i.placeholder == key){
                    i.placeholder = lang[`${e.target.textContent.trim()}`][key];
                }
            }
        }
        e.target.classList.add('lang')
    }

    if(String(e.target.textContent.trim()) == 'ru'){
        choseLang = 'ru'
    } else{
        choseLang = 'en'
    }
    return choseLang
}

//? функция смена цвета фона

let choseTheme = 'dark';

const back = document.querySelector('#switch');
    back.addEventListener('click', switchBack);

function switchBack(){
    let arrBack = document.querySelectorAll('[data-back]');

    if(back.className == 'header__back'){
        back.classList.add('switch')
        switchWhite()
    } else{
        back.classList.remove('switch')
        switchNight()
    }
    function switchWhite(){
        for(let i of arrBack){
            i.classList.add('backsubject');
        }
        back.style['background-image'] = 'url(assets/img/back/sun.svg)';
        choseTheme = 'light';
        return choseTheme
    }
    function switchNight(){
        for(let i of arrBack){
            i.classList.remove('backsubject')
        }
        back.style['background-image'] = 'url(assets/img/back/black.svg)';
        choseTheme = 'dark';
        return choseTheme
    }
}

//! Функция меняющая цвет фона (работает от Eventa), к сожалению не подходит для реализации
//! функционала при перезагрузке страницы

//* function switchBack(e){
//*     let arrBack = document.querySelectorAll('[data-back]');
//*     if(e.target.className == 'header__back'){
//*         e.target.classList.add('switch');
//*         switchWhite()
//*     } else{
//*         e.target.classList.remove('switch');
//*         switchNight()
//*     }
//*     function switchWhite(){
//*         for(let i of arrBack){
//*             i.classList.add('backsubject');
//*         }
//*         choseTheme = 'light';
//*         return choseTheme
//*     }
//*     function switchNight(){
//*         for(let i of arrBack){
//*             i.classList.remove('backsubject')
//*         }
//*         choseTheme = 'dark';
//*         return choseTheme
//*     }
//*     return choseTheme;
//* }


//? функция localStorage (загрузка отображения выбранных параметров)

function setLocalStorage() {
    localStorage.setItem('lang', choseLang);
    localStorage.setItem('theme', choseTheme);
}
    window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
    if(localStorage.getItem('theme') != 'dark') {
        switchBack()
    }
    if(localStorage.getItem('lang') != 'en'){
        buttonLang[0].classList.remove('lang');
        buttonLang[1].classList.add('lang');
        for(let key in lang['ru']){
            for(let i of allDataLang){
                if(key == i.getAttribute('data-lang')){
                    i.textContent = lang['ru'][key];
                }
                if(i.placeholder == key){
                    i.placeholder = lang['ru'][key];
                }
            }
        }
    }
}
    window.addEventListener('load', getLocalStorage)