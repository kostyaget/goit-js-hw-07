import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryRef = document.querySelector(".gallery");

console.log(galleryItems);

function makeImagesMarkup(imgs) {
  return imgs
    .map(({ preview, original, description }) => {
        return `
          <a class="gallery__item" href="${original}">
              <img
                  class="gallery__image"
                  src="${preview}"
                  alt="${description}"
              />
          </a>
        `;
    })
    .join("");
};

const imagesMarkup = makeImagesMarkup(galleryItems);

galleryRef.insertAdjacentHTML("beforeend", imagesMarkup);

const lightbox = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250,
});