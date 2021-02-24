function toggleText() {
  const button = document.querySelector('.toggle-text-button');
  const text = document.querySelector('#text');

  button.addEventListener('click', () => {
    const isTextHidden = text.hidden;

    isTextHidden ? text.hidden = false : text.hidden = true;
  });
}
