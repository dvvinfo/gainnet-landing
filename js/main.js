document.addEventListener("DOMContentLoaded", function () {
    let firstScreen = document.querySelectorAll(".first-screen"),
    titleWrapper = document.querySelectorAll(".title-wrapper"), 
    titleWrapper1 = document.querySelectorAll(".title-wrapper-1"),
    titleWrapper2 = document.querySelectorAll(".title-wrapper-2"),
    item = document.querySelectorAll("#item"),
    item1 = document.querySelectorAll("#item-1"),
    item2 = document.querySelectorAll("#item-2"),
    registrations = document.querySelector("#registrations"),
    modalEntrance = document.querySelector("#modal-entrance"),
    loginBtn = document.querySelectorAll(".login-btn"),
    loginMenu = document.querySelector(".login__menu"),
    loginMenuItemLink = document.querySelectorAll(".login__menu__item__link"),
    loginSubMenuLlink = document.querySelectorAll(".login-sub-menu__link"),
    overlay = document.querySelector("#overlay"),
    modalRegistration = document.querySelector("#modal-registration"),
    contentItem = document.querySelectorAll(".item-content"),
    itemContent= document.querySelectorAll("#item-content"),
    itemContent1= document.querySelectorAll("#item-content-1"),
    itemContent2= document.querySelectorAll("#item-content-2"),
    modalBtnClose = document.querySelectorAll(".modal__btn-close"),
    imputName = document.querySelector("#name");
    loginBtnMenu = document.querySelector("#login-btn-menu"),
    loginSubMenu = document.querySelector("#login-sub-menu"),
    modalBody = document.querySelectorAll(".modal-registration-body"),
    registrationsBtnMenu = document.querySelector(".registrations-btn__menu"),
    loginMenuAfter = document.querySelector(".login__menu__after"),
    linkClick = document.querySelector("#link-click"),
    popUp = document.querySelector(".pop-up"),
    ratesBtn = document.querySelectorAll(".rates-btn");
    partnerInputBtn = document.querySelector(".partner-form__input__btn"),
    btnCode = document.querySelector(".btn-code"),
    modalCode = document.querySelector("#modal-code"),
    modalBtnClose1 = document.querySelector("#modal-btn-close"),
    menuOverlay = document.querySelector(".menu-overlay"),
   menu_overlay_hidden = document.querySelector(".menu-overlay-hidden"),
   menuWrapper = document.querySelector(".menu-wrapper"),
   closeBtn = document.querySelector(".close-btn"),
   menu = document.querySelector(".menu"),
   mobileBtn = document.querySelector(".mobile-btn");
    login__menu__item = document.querySelectorAll(".login__menu__item");

item.forEach(element => {
   element.addEventListener("click", () => {
       titleWrapper.forEach(element => {
           element.style.display = 'block';
       });
       titleWrapper1.forEach(element => {
           element.style.display = 'none';
       });
       titleWrapper2.forEach(element => {
           element.style.display = 'none';
       });
       item.forEach(element => {
           element.classList.add("item-active");
       });
       itemContent.forEach(element => {
           element.classList.add("item-content-active");
       });
       itemContent1.forEach(element => {
           element.classList.remove("item-content-active");
       });
       itemContent2.forEach(element => {
           element.classList.remove("item-content-active");
       });
       item1.forEach(element => {
           element.classList.remove("item-active");
       });
       item2.forEach(element => {
           element.classList.remove("item-active");
       });
       firstScreen.forEach(element => {
           element.classList.add("first-screen");
       });
       firstScreen.forEach(element => {
           element.classList.remove("first-screen-two");
       });
       firstScreen.forEach(element => {
           element.classList.remove("first-screen-three");
       });
   })
});
item1.forEach(element => {
   element.addEventListener("click", () => {
       itemContent.forEach(element => {
           element.classList.remove("item-content-active");
       });
       itemContent1.forEach(element => {
           element.classList.add("item-content-active");
       });
       itemContent2.forEach(element => {
           element.classList.remove("item-content-active");
       });
       titleWrapper.forEach(element => {
           element.style.display = 'none';
       });
       titleWrapper2.forEach(element => {
           element.style.display = 'none';
       });
       titleWrapper1.forEach(element => {
           element.style.display = 'block';
       });
       item.forEach(element => {
           element.classList.remove("item-active");
       });
       item1.forEach(element => {
           element.classList.add("item-active");
       });
       item2.forEach(element => {
           element.classList.remove("item-active");
       });
       firstScreen.forEach(element => {
           element.classList.add("first-screen-two");
       });
       firstScreen.forEach(element => {
           element.classList.remove("first-screen");
       });
       firstScreen.forEach(element => {
           element.classList.remove("first-screen-three");
       });
   })
});

item2.forEach(element => {
   element.addEventListener("click", () => {
       itemContent.forEach(element => {
           element.classList.remove("item-content-active");
       });
       itemContent1.forEach(element => {
           element.classList.remove("item-content-active");
       });
       itemContent2.forEach(element => {
           element.classList.add("item-content-active");
       });
       titleWrapper.forEach(element => {
           element.style.display = 'none';
       });
       titleWrapper2.forEach(element => {
           element.style.display = 'block';
       });
       titleWrapper1.forEach(element => {
           element.style.display = 'none';
       });
       item.forEach(element => {
           element.classList.remove("item-active");
       });
       item1.forEach(element => {
           element.classList.remove("item-active");
       });
       item2.forEach(element => {
           element.classList.add("item-active");
       });
       firstScreen.forEach(element => {
           element.classList.add("first-screen-three");
       });
       firstScreen.forEach(element => {
           element.classList.remove("first-screen");
       });
       firstScreen.forEach(element => {
           element.classList.remove("first-screen-two");
       });
   })
});

ratesBtn.forEach(element => element.addEventListener("click", () => {
    overlay.style.display= "flex";
    modalRegistration.style.display= "block";
    modalEntrance.style.display= "none";
    popUp.style.display="none";
})
    
);
if(partnerInputBtn) {
    partnerInputBtn.addEventListener("click", (e) => {
        e.preventDefault();
       overlay.style.display= "flex";
       modalRegistration.style.display= "block";
       modalEntrance.style.display= "none";
       popUp.style.display="none";
    });
};

function menuSubClick() {
   // submenu login
loginBtn.forEach(element => element.addEventListener('click', () => {
    loginSubMenu.classList.toggle("d-block");
}))
// submenu login mobile
loginBtnMenu.addEventListener("click", () => {
    loginSubMenu.classList.toggle("d-block");
    registrationsBtnMenu.classList.toggle("mt-btn")
 });
 // submenu login registration
 registrationsBtnMenu.addEventListener("click", () => {
    loginMenu.classList.toggle("d-block");
    
 });
 // submenu login registration mobile
registrations.addEventListener("click", () => {
   loginMenu.classList.toggle("d-block");
   loginMenu.classList.toggle("login__menu__after");
});
// click вне loginMenu
window.addEventListener("click", e => {
    const targent = e.target
    if (!targent.closest(".login__menu") && !targent.closest(".registrations-btn") && !targent.closest(".registrations-btn__menu"))  {
        loginMenu.classList.remove("d-block")
    }
})
window.addEventListener("click", e => {
    const targent = e.target
    if (!targent.closest(".login-sub-menu") && !targent.closest(".login-btn") && !targent.closest(".login-btn__menu"))  {
        loginSubMenu.classList.remove("d-block");
        registrationsBtnMenu.classList.remove("mt-btn")

    }
})
// modal registration
loginMenuItemLink.forEach(element => element.addEventListener('click',()=> {
   overlay.style.display= "flex";
   modalRegistration.style.display= "block";
   modalEntrance.style.display= "none";
   popUp.style.display="none";
   menuWrapper.classList.remove("menu-open");
    menu_overlay_hidden.classList.remove("open");
    loginMenu.classList.remove("d-block");
  
}));
// modal login
loginSubMenuLlink.forEach(element => element.addEventListener('click',()=> {
    overlay.style.display= "flex";
    modalEntrance.style.display= "block";
    modalRegistration.style.display= "none";
    popUp.style.display="none";
    menuWrapper.classList.remove("menu-open");
    menu_overlay_hidden.classList.remove("open");
    loginSubMenu.classList.remove("d-block")
    
    
   
 })); 
 
}
menuSubClick() ;

function modal() {
    //overlay modal
overlay.addEventListener("click", () => {
    overlay.style.display = "none";
    modalCode.style.display = 'none';
    modalEntrance.style.display= "none";
    
});

window.addEventListener("keydown", (e) => {
    if(e.keyCode ===27) {
        overlay.style.display = "none";
    }
})
modalBody.forEach(element => element.addEventListener('click',(e)=> {
    e.stopPropagation();
   
 }));

 //button close modal
 modalBtnClose.forEach(element => element.addEventListener('click',()=> {
    overlay.style.display = "none";
    popUp.style.display="none";
    modalCode.style.display = 'none';
    modalEntrance.style.display= "none";
   
 }));
//  btnCode.addEventListener("click", () => {
//     modalEntrance.style.display= "none";
//     modalCode.style.display = 'block';
//  })
}
modal();


// menu
function menuMobile() {
    


mobileBtn.addEventListener("click", () => {
   menu_overlay_hidden.classList.add("menu-overlay"),
   menu_overlay_hidden.classList.add("open");
   menuWrapper.classList.add("menu-open");
});
closeBtn.addEventListener("click", () => {
   menu_overlay_hidden.classList.remove(".menu-overlay-hidden"),
   menu_overlay_hidden.classList.remove("open");
   menuWrapper.classList.remove("menu-open");
   
   
  
   
});
menu_overlay_hidden.addEventListener("click", () => {
    menu_overlay_hidden.classList.remove(".menu-overlay-hidden"),
    menu_overlay_hidden.classList.remove("open");
})
menuWrapper.addEventListener("click", (e) => {
    e.stopPropagation()
});
}
menuMobile();

function ModalR() {
   

        linkClick.addEventListener("click",(e) => {
            e.preventDefault();
            
            overlay.style.display = "flex";
            popUp.style.display="block";
            modalRegistration.style.display= "none";
            modalEntrance.style.display= "none";

        })
       
          
}
ModalR();


function validateFormBig() {
    // валидация формы
let validateBtn = document.querySelector(".big-form__btn"),
bigForm = document.querySelector(".big-form"),
formName = document.querySelector("name"),
formInput = document.querySelectorAll(".big-form__input"),
formTel = document.querySelector("tel");

if(bigForm) {
bigForm.addEventListener("submit", (e) => {
 e.preventDefault()
  
 const errors = bigForm.querySelectorAll(".error")
 for (let i = 0; i < errors.length; i++) {
     errors[i].remove()
 }

 for (let i = 0; i < formInput.length; i++) {
     if(!formInput[i].value) {
         console.log("fild is blank", formInput[i])
         const error = document.createElement('div')
         error.className = 'error'
         formInput[i].classList.add("error-border")
         error.innerHTML = 'Заполните данное поле'
         bigForm[i].parentElement.insertBefore(error, formInput[i])
     } else{
        formInput[i].classList.remove("error-border")
     }
     
 }
}) ;  
}
}
validateFormBig();

function validateRgistration() {
    // Validate form registration
 let modalValidateBtn = document.querySelector(".modal-registration__btn"),
 modalForm = document.querySelector(".modal-registration__form"),
 modalName = document.querySelector("#name"),
 modalInput = document.querySelectorAll(".modal-registration__input"),
 modalTel = document.querySelector("#tel");


modalForm.addEventListener("submit", (e) => {
 e.preventDefault()
 
 const errors = modalForm.querySelectorAll(".error")
 for (let i = 0; i < errors.length; i++) {
     errors[i].remove()
 }

 for (let i = 0; i < modalInput.length; i++) {
     if(!modalInput[i].value) {
         console.log("fild is blank", modalInput[i])
         const error = document.createElement('div')
         error.className = 'error'
         modalInput[i].classList.add("error-border")
         error.innerHTML = 'Заполните данное поле'
         modalForm[i].parentElement.insertBefore(error, modalInput[i])
     }
     else{
        modalForm[i].classList.remove("error-border")
     }
     
 }
}) 
}
validateRgistration();

function validateLogin() {
    // Validate form login
let modalValidateBtnLogin = document.querySelector("#modal-registration__btn"),
modalLoginForm = document.querySelector("#modal-login-form"),
modalLoginInput = document.querySelectorAll(".modal-login__input");

modalLoginForm.addEventListener("submit", (e) => {
e.preventDefault()

const errors = modalLoginForm.querySelectorAll(".error")
for (let i = 0; i < errors.length; i++) {
    errors[i].remove()
}

for (let i = 0; i < modalLoginInput.length; i++) {
    if(!modalLoginInput[i].value) {
        console.log("fild is blank", modalLoginInput[i])
        const error = document.createElement('div')
        error.className = 'error'
        modalLoginInput[i].classList.add("error-border")
        error.innerHTML = 'Заполните данное поле'
        modalLoginForm[i].parentElement.insertBefore(error, modalLoginInput[i])
    }
    else{
        modalLoginForm[i].classList.remove("error-border");
        modalEntrance.style.display= "none";
        modalCode.style.display = 'block';
        
        //timer
        (function(d){
            var display = d.querySelector('#code') // меняющаяся цифра
            var timeLeft = parseInt(display.innerHTML) // оставшееся время
            var timer = setInterval(function(){
              if (--timeLeft >= 0) { // если таймер всё еще больше нуля
                  display.innerHTML = timeLeft // обновляем цифру
              }else if(--timeLeft <= 0){
             timeLeft = 30// оставшееся время
                display.innerHTML = timeLeft // обновляем цифру
              }
               else {
                clearInterval(timer) // удаляем таймер
              }
              
            }, 1000);  // таймер срабатывает каждые 1000 msec (1 sec)
          })(document)
         
    }
    
}
});
}

validateLogin();
function validateCode() {
    // Validate form code
let modalValidateBtnCode = document.querySelector("#btn-code"),
modalFormCode = document.querySelector("#modal-code"),
modalInputCode = document.querySelectorAll(".modal-code__input");

modalFormCode.addEventListener("submit", (e) => {
e.preventDefault()

const errors = modalFormCode.querySelectorAll(".error")
for (let i = 0; i < errors.length; i++) {
    errors[i].remove()
}

for (let i = 0; i < modalInputCode.length; i++) {
    if(!modalInputCode[i].value) {
        const error = document.createElement('div')
        error.className = 'error'
        modalInputCode[i].classList.add("error-border")
        
    }
    else{
        modalFormCode[i].classList.remove("error-border");
        
    }
    
}
});
}

validateCode() ;

 function scroll() {
     //   scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector(".header"),
          headerWrapper = document.querySelector(".header-wrapper");
          Y = window.scrollY;
 
     if(Y > 50) {
         headerWrapper.classList.add("sticky-header") 
     } else if(Y < 100) {
         headerWrapper.classList.remove("sticky-header") 
     }
 })
 }    
 scroll();

 function inputRage() {
     //  input rage

    for (let e of document.querySelectorAll('input[type="range"].calculator__content__form__rage')) {
        let number = document.querySelector(".calculator__content__form__rage__label");
        e.style.setProperty('--value', e.value);
        e.style.setProperty('--min', e.min == '' ? '0' : e.min);
        e.style.setProperty('--max', e.max == '' ? '100' : e.max);
        e.addEventListener('input', () =>number.innerHTML = e.value);
        
      };
 }
 inputRage() ;

 function faqContentItem() {
     //   faq-content__item
    let faqContentItemCloseBtn = document.querySelectorAll(".faq-content__item__close__btn"),
    faqContentItemTextWrapper = document.querySelectorAll(".faq-content__item__text-wrapper") ;
document.addEventListener('click', ({ target }) => {
    const button = target.closest('.faq-content__item__title');
    const buttonClose = target.closest('.faq-content__item__close__btn');
    
    if (button) {
      button.parentNode.querySelector('.faq-content__item__text-wrapper').classList.toggle('open');
      console.log(target)
    }
    
    if (buttonClose ) {
        buttonClose.parentNode.querySelector('.faq-content__item__text-wrapper').classList.toggle('close');
        
        
      }
    
  });
 
faqContentItemCloseBtn.forEach(element => element.addEventListener('click', () => {
    faqContentItemTextWrapper.classList.add("close")
  }));

 }
 faqContentItem();

 

  
}) 


    
        
    
 

// slider Team


$(document).ready(function(){
    $('.team__gallery-mobile').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
        responsive: [
            {
              breakpoint: 660,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    });
  });

  // slider mobile scren 1
  $(document).ready(function(){
    $('.first-screen__slider').slick({
        
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
        adaptiveHeight: true
    });
  });


//   let slideIndex = 1,
// // Слайд
// slides = document.querySelectorAll('.slider-item'),
// // Элементы управления. Стрелочки вперед назад
// prev = document.querySelector('.prev'),
// next = document.querySelector('.next'),
// // Элементы упраления. Точки
// dotsWrap = document.querySelector('.slider-dots'),
// dots = document.querySelectorAll('.dot');

// showSlides(slideIndex);

// // Создаем функцию показа одного слайда
// function showSlides(n) {

// if (n > slides.length) {
//     slideIndex = 1;
// }
// if (n < 1) {
//     slideIndex = slides.length;
// }

// slides.forEach((item) => item.style.display = 'none');

// dots.forEach((item) => item.classList.remove('dot-active'));

// slides[slideIndex - 1].style.display = 'block';
// dots[slideIndex - 1].classList.add('dot-active');

// }

// function plusSlides(n) {
// showSlides(slideIndex += n);
// }
// // Функция которая устанавливает текущий слайд
// function currentSlide(n) {
// showSlides(slideIndex = n);
// }

// // Обработчик событий для "точек"
// dotsWrap.addEventListener('click',function (event) {
// for (let i = 0; i < dots.length + 1; i++) {
//     if (event.target.classList.contains('dot') && event.target == dots[i-1]) {
//         currentSlide(i);
//     }
// }
// });

