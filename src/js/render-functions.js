import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryList = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

let lightbox = null;

export function showLoader() {
    loader.classList.remove('hidden');
}
export function hideLoader() {
    loader.classList.add('hidden');
}
export function clearGallery() {
    galleryList.innerHTML = '';
}
export function createGallery(images) {
    

    const markup = images.map(image => {
        return `
        <li class="gallery-item">
    <a class="gallery-link" href="${image.largeImageURL}">
      <img class="gallery-image" src="${image.webformatURL}" alt="${image.tags}">
    </a>
    <div class="info">
    <div class="info-item">
    <h3 class="gallery-subtitle">Likes:</h3>
      <p class="gallery-text">${image.likes}</p>
</div>
<div class="info-item">
      <h3 class="gallery-subtitle">Views:</h3>
      <p class="gallery-text">${image.views}</p>
      </div>
      <div class="info-item">
      <h3 class="gallery-subtitle">Comments:</h3>
      <p class="gallery-text">${image.comments}</p>
      </div>
      <div class="info-item">
      <h3 class="gallery-subtitle">Downloads:</h3>
      <p class="gallery-text">${image.downloads}</p>
      </div>
    </div>
  </li>`;
    }).join('');
    galleryList.insertAdjacentHTML('beforeend', markup);
    if (!lightbox) {
        lightbox = new SimpleLightbox('.gallery a', {
            captionsData: 'alt',
            captionDelay: 250,
        });
    } else {
        lightbox.refresh();
    }
}