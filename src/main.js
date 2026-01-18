
import iziToast from 'izitoast';
import "izitoast/dist/css/iziToast.min.css";
import { getImagesByQuery } from './js/pixabay-api';
import { createGallery, clearGallery, showLoader, hideLoader } from './js/render-functions';



const searchForm = document.querySelector('.form');
const searchInput = document.querySelector('.input-form');
const submitBtn = document.querySelector('.submit-btn');
const galleryList = document.querySelector('.gallery');


searchForm.addEventListener('submit', event => {
    event.preventDefault();
    const query = searchInput.value.trim();
  
    if (!query) {
        iziToast.warning({message: "Please enter a search query!", position: "topRight"});
        return;
    }
    clearGallery(); 
    showLoader();
    getImagesByQuery(query)
   
        .then(data => {
           
            if (data.hits.length === 0) {
                iziToast.info({ message: "Sorry, there are no images matching your search query. Please try again!", position: "topRight" });
                return;
            }
            createGallery(data.hits, galleryList);
        })
        .catch(error => {
            iziToast.error({ message: error.message });
        })
        .finally(() => {
            hideLoader(); 
        });
});


