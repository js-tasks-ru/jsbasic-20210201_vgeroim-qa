import createElement from '../../assets/lib/create-element.js';
import initCarousel from './initCarousel.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.elem = this.render();
  }

  render() {
    //create root element
    const carousel = document.createElement('div');
    carousel.classList.add('carousel');

    const rightBtn = this.renderRightBtn();
    const leftBtn = this.renderLeftBtn();

    //add buttons
    carousel.appendChild(rightBtn);
    carousel.appendChild(leftBtn);

    const carouselInner = document.createElement('div');
    carouselInner.classList.add('carousel__inner');

    this.slides.forEach(slide => {
      carouselInner.appendChild(this.renderSlide(slide));
    })

    //add slides
    carousel.appendChild(carouselInner);
    initCarousel(carousel);
    return carousel;
  }

  renderSlide(data) {
    const slide = document.createElement('div');
    slide.classList.add('carousel__slide');
    slide.dataset.id = data.id;

    //create slide img
    const slideImg = document.createElement('img');
    slideImg.classList.add('carousel__img');
    slideImg.alt = 'slide';
    slideImg.src = `/assets/images/carousel/${data.image}`;

    //create slide caption
    const slideCaption = document.createElement('div');
    slideCaption.classList.add('carousel__caption');

    //create slide price
    const slidePrice = document.createElement('span');
    slidePrice.classList.add('carousel__price');
    const priceValue = document.createTextNode(`€${Number.parseFloat(data.price).toFixed(2)}`);
    slidePrice.appendChild(priceValue);

    //create slide title
    const slideTitle = document.createElement('div');
    slideTitle.classList.add('carousel__title');
    const titleValue = document.createTextNode(`${data.name}`);
    slideTitle.appendChild(titleValue);

    //create slide button
    const slideBtn = document.createElement('button');
    slideBtn.classList.add('carousel__button');
    slideBtn.type = 'button';

    //create slide button img
    const slideBtnImg = document.createElement('img');
    slideBtnImg.src = '/assets/images/icons/plus-icon.svg';
    slideBtnImg.alt = 'icon';

    slideBtn.appendChild(slideBtnImg);
    slideBtn.addEventListener('click', this.onCarouselBtnClick.bind(this, data));

    //collect slide caption
    slideCaption.appendChild(slidePrice);
    slideCaption.appendChild(slideTitle);
    slideCaption.appendChild(slideBtn);

    //collect slide
    slide.appendChild(slideImg);
    slide.appendChild(slideCaption);

    return slide;
  }



  renderRightBtn() {
    //create right btn
    const rightBtn = document.createElement('div');
    rightBtn.classList.add('carousel__arrow', 'carousel__arrow_right');

    const rightBtnIcon = document.createElement('img');
    rightBtnIcon.src = '/assets/images/icons/angle-icon.svg';
    rightBtnIcon.alt = 'icon';

    //collect right btn
    rightBtn.appendChild(rightBtnIcon);

    return rightBtn;
  }

  renderLeftBtn() {
    //create left btn
    const leftBtn = document.createElement('div');
    leftBtn.classList.add('carousel__arrow', 'carousel__arrow_left');
    const leftBtnIcon = document.createElement('img');
    leftBtnIcon.src = '/assets/images/icons/angle-left-icon.svg';
    leftBtnIcon.alt = 'icon';

    //collect left btn
    leftBtn.appendChild(leftBtnIcon);

    return leftBtn;
  }

  onCarouselBtnClick(data) {
    this.elem.dispatchEvent(new CustomEvent(
      "product-add", {
        detail: data.id,
        bubbles: true
      }));
  }
}
