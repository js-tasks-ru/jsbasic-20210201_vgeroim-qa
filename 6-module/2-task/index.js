import createElement from '../../assets/lib/create-element.js';

export default class ProductCard {
  constructor(product) {
    this.product = product;
    this.elem = this.renderCard();
  }

  renderCard() {
    let card = document.createElement('div');
    card.classList.add('card');

    //card top block
    let cardTop = document.createElement('div');
    cardTop.classList.add('card__top');

    let imgTop = document.createElement('img');
    imgTop.classList.add('card__image');
    imgTop.alt = 'product';
    imgTop.src = `/assets/images/products/${this.product.image}`;

    let spanTop = document.createElement('span');
    spanTop.classList.add('card__price');
    let spanText = document.createTextNode(`€${Number.parseFloat(this.product.price).toFixed(2)}`);
    spanTop.appendChild(spanText);

    //collect card top block
    cardTop.appendChild(imgTop);
    cardTop.appendChild(spanTop);

    //card body block
    let cardBody = document.createElement('div');
    cardBody.classList.add('card__body');

    let cardTitle = document.createElement('div');
    cardTitle.classList.add('card__title');
    let titleName = document.createTextNode(`${this.product.name}`);
    cardTitle.appendChild(titleName);

    let cardBtn = document.createElement('button');
    cardBtn.classList.add('card__button');
    cardBtn.type = 'button';

    let imgBody = document.createElement('img');
    imgBody.src = '/assets/images/icons/plus-icon.svg';
    imgBody.alt = 'icon';
    
    cardBtn.appendChild(imgBody);
    cardBtn.addEventListener('click', this.onCardBtnClick.bind(this));

    //collect card body block
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardBtn);

    //collect full card
    card.appendChild(cardTop);
    card.appendChild(cardBody);

    return card;
  }

  onCardBtnClick() {
    this.elem.dispatchEvent(new CustomEvent(
      "product-add", {
        detail: this.product.id,
        bubbles: true
      }));
  }
}

