'use strict';

const changeCard = () => {
  const cards = document.querySelectorAll('.user__select__card'),
        macterVisa = document.querySelector('.card-master-visa'),
        imgMacterVisa = macterVisa.querySelector('img'),
        rrb = document.querySelector('.card-rrb'),
        imgRrb = rrb.querySelector('img');
  cards.forEach(item => {
    item.addEventListener('click', (e) => {

      if(e.target.closest('.card-master-visa')) {
        imgRrb.src = 'img/card-unchecked.svg';
        imgMacterVisa.src = 'img/card-checked.svg';
        macterVisa.classList.add('card-active');
        rrb.classList.remove('card-active');  
      }
      if(e.target.closest('.card-rrb')) {
        imgRrb.src = 'img/card-checked.svg';
        imgMacterVisa.src = 'img/card-unchecked.svg';
        macterVisa.classList.remove('card-active');
        rrb.classList.add('card-active');  
      }
      
    })
  })
};
changeCard();

const activeOptions = () => {
  const parent = document.querySelector('.user__options__list'),
        optionsLink = document.querySelectorAll('.user__options__item-link'),
        options = document.querySelectorAll('.user__options__item'),
        wayTo = document.querySelectorAll('.breadcrumb-list__link');
    parent.addEventListener('click', (e) => {
      e.preventDefault();
      optionsLink.forEach((item, i) => {
       if(e.target == item){
         options[i].classList.add('user__options__item_active');
         optionsLink[i].classList.add('user__options__item-link_active');
         wayTo[2].textContent = optionsLink[i].textContent;

       } else  {
         options[i].classList.remove('user__options__item_active');
         optionsLink[i].classList.remove('user__options__item-link_active');
       }
    });
  })
};
activeOptions();

const closeAdd = () => {
  const add = document.querySelector('.add');
  add.addEventListener('click', (e) => {
    if(e.target.closest('.add__decline')){
      add.style.display = 'none';
    }
  });
};
closeAdd();

const status = () => {
  const sum = document.getElementById('sum'),
        line = document.querySelector('.user__options__line'),
        statusLine = document.querySelector('.user__options__line-status');   
  function longLIne(){
    let a = line.clientWidth,
        b = a/100,
        result = 100 - Math.floor(+sum.textContent/b);
    statusLine.style.width = `${result}%`;
  }
  longLIne();
};
status();

const openCardModal = () => {
   const cardModal = document.getElementById('card-modal'),
         cards = cardModal.querySelectorAll('.user__form__name_modal-card'),
         cardName = document.querySelector('[name=card-name]');

        document.addEventListener('click', (e) => {
          if(e.target.closest('[name=card-name]')){
            e.preventDefault();
            cardModal.style.display = 'block';
          } else if(!e.target.closest('#card-modal')) {
            cardModal.style.display = 'none';
          }
        }); 
       const checked = document.createElement('span');
       checked.className ='user__form__name_modal-card-checked';
       checked.innerHTML = `<img src="img/modal/icon-check.svg" alt="">`;
        cardModal.addEventListener('click', (e) => {
          cards.forEach((item, i) => {
            if(e.target === item || e.target == item.children[0].children[0] || e.target == item.children[0].children[1] || e.target == item.children[1] || e.target == item.children[0] ){
             cards[i].style.background = '#EBEFF2';
             cards[i].append(checked);

             cardName.value = cards[i].children[0].children[1].innerHTML;
           } else {
             cards[i].style.background = '';
             
           }

          })
          
        });
};
openCardModal();

const showInfoCard = () => {
  const cards = document.querySelectorAll('.user__lastpayments__item'),
        parent = document.querySelector('.user__lastpayments__item-wrapper'),
        statusText = document.querySelectorAll('.user__lastpayments__item_status-text'),
        infoCard = document.createElement('div');
        infoCard.className = 'user__lastpayments__info';
  
        parent.addEventListener('click', (e) => {

          cards.forEach((item, i) => {
            if(e.target == item
              || e.target == item.children[0]
              || e.target == item.children[0].children[0]
              || e.target == item.children[0].children[1]
              || e.target == item.children[0].children[2]
              || e.target == item.children[1]
              || e.target == item.children[2]
              || e.target == item.children[2].children[0]
              || e.target == item.children[2].children[1]
              || e.target == item.children[3] ){
              item.insertAdjacentElement('afterend', infoCard);
              const date = item.children[1].textContent,
                    
                    sum = item.children[3].textContent,
                    status = item.children[2].textContent.toLowerCase(),
                    inDollars = Math.round((parseInt(sum) / 2.56) * 100) / 100 ;

              statusText[i].classList.add('black');
              item.classList.add('bg-active');      
              infoCard.innerHTML = `
                 <span class="user__lastpayments__line"></span>
                 <div class="user__lastpayments__info-card">
                   <span class="user__lastpayments__info-number">Номер заказа: <b>TO-2020-02-02-240430</b></span>
                   <span class="user__lastpayments__info-sum">Сумма заказа: ${sum} (${inDollars}$)</span>
                   <span class="user__lastpayments__info-date">Дата заказа: ${date} </span>
                 </div>
                 <span class="user__lastpayments__info-execution">
                     Кэшбэк ${status}
                 </span>
                 `;
              item.children[0].children[0].attributes.src.value = "img/payments/row-down.svg";
            }else {
               item.children[0].children[0].attributes.src.value = "img/payments/row-right.svg";
              statusText[i].classList.remove('black');
              item.classList.remove('bg-active'); 
            }
             
        });
      })              
};
showInfoCard();