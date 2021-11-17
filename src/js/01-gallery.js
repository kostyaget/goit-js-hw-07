import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryRef = document.querySelector(".gallery");

function makeImagesMarkup(imgs) {
  return imgs
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
        <a class="gallery__link" href=${original}>
          <img
            class="gallery__image"
            src=${preview}
            data-source=${original}
            alt=${description}
          />
        </a>
      </div>`;
    })
    .join("");
}

const imagesMarkup = makeImagesMarkup(galleryItems);

galleryRef.insertAdjacentHTML("beforeend", imagesMarkup);

galleryRef.addEventListener("click", onGalleryItemClick);

function onGalleryItemClick(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }
  galleryItems.map((item) => {
    if (item.original === e.target.dataset.source) {
      const instance = basicLightbox.create(
        ` <img src=${item.original} width="800" height="600">`
      );

      instance.show();
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
          instance.close();
        }
      });
    }
  });
}