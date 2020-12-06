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
  const parent = document.querySelector('.user__options'),
        optionsLink = document.querySelectorAll('.user__options__item-link'),
        options = document.querySelectorAll('.user__options__item');
    parent.addEventListener('click', (e) => {
      e.preventDefault();
      optionsLink.forEach((item, i) => {
       if(e.target == item){
         options[i].style.background = "#FFFADE";
         optionsLink[i].style.color = "black";
         optionsLink[i].style.fontWeight = "bold";
       } else {
         options[i].style.background = "";
         optionsLink[i].style.color = "";
         optionsLink[i].style.fontWeight = "";
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

