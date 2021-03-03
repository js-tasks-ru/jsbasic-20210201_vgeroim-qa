function initCarousel() {
  const btnRight = document.querySelector('.carousel__arrow_right');
  const btnLeft = document.querySelector('.carousel__arrow_left');
  const carouselInner = document.querySelector('.carousel__inner');
  const slides = carouselInner.querySelectorAll('.carousel__slide');


  //set default state for the first slide and left button on page load
  slides[0].classList.add('current');
  btnLeft.style.display = 'none';

  btnRight.addEventListener('click', () => {
    btnLeft.style.display = ''; //enable left btn on right click

    for (const [index, slide] of slides.entries()) {
      let nextSlide = slides[index+1];

      if (slide.classList.contains('current')) {
        slide.classList.remove('current');
        nextSlide.classList.add('current');

        carouselInner.style.transform = `translateX(-${(index+1) * carouselInner.offsetWidth}px)`; //slide to the next
        if (nextSlide.dataset.id === 'chicken-springrolls') btnRight.style.display = 'none'; //disable right button if the last slide is current 
        break;
      }
    }
  });

  btnLeft.addEventListener('click', () => {
    btnRight.style.display = ''; //enable right btn on left click

    for(const [index, slide] of slides.entries()) {
      let prevSlide = slides[index-1];

      if (slide.classList.contains('current')) {
        slide.classList.remove('current');
        prevSlide.classList.add('current');

        carouselInner.style.transform = `translateX(-${(index-1) * carouselInner.offsetWidth}px)`; //slide to the previous
        if (prevSlide.dataset.id === 'penang-shrimp') btnLeft.style.display = 'none'; //disable left button if the first slide is current
        break;
      }
    }
  });
}

