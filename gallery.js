import images from './gallery-items.js'

const galleryConteiner = document.querySelector(".js-gallery");
const lightbox = document.querySelector(".js-lightbox");
const overlay = document.querySelector(".lightbox__overlay");
const lightboxImg = document.querySelector(".lightbox__image");
const lightboxCloseBtn = document.querySelector(
  '[data-action="close-lightbox"]'
);


function galleryListMarkupCreate(images) {
  return images
    .map(({ preview, original, description }) => {
      return `
      <li class="gallery__item">
    <a
      class="gallery__link"
      href="${original}"
    >
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>`;
    })
    .join("");
}

const imgMarkupCreate = galleryListMarkupCreate(images);

galleryConteiner.insertAdjacentHTML('beforeend', imgMarkupCreate);
lightboxCloseBtn.addEventListener('click', onCloseModal);

galleryConteiner.addEventListener('click', onGalleryConteinerClick)

function onGalleryConteinerClick(evt) {
  evt.preventDefault();
  const isSwathEl = evt.target.classList.contains("gallery__image");
   
  if (!isSwathEl) {
    return;
  }
  const imageSource = evt.target.dataset.source;

  lightboxImg.src = imageSource;
  lightbox.classList.add('is-open');   
}

function onCloseModal() {
  lightboxImg.src = '';
  lightbox.classList.remove('is-open');    
}