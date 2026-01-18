import{a as d,S as f,i as a}from"./assets/vendor-Cq7ZUixy.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const m="https://pixabay.com/api/",y="54209889-58d3cb94a4da7a2360dbb6f61";function h(o){const s={key:y,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0};return d.get(m,{params:s}).then(e=>e.data).catch(e=>{throw e})}const c=document.querySelector(".gallery"),u=document.querySelector(".loader");let l=null;function p(){u.classList.remove("hidden")}function g(){u.classList.add("hidden")}function b(){c.innerHTML=""}function L(o){const s=o.map(e=>`
        <li class="gallery-item">
    <a class="gallery-link" href="${e.largeImageURL}">
      <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}">
    </a>
    <div class="info">
    <div class="info-item">
    <h3 class="gallery-subtitle">Likes:</h3>
      <p class="gallery-text">${e.likes}</p>
</div>
<div class="info-item">
      <h3 class="gallery-subtitle">Views:</h3>
      <p class="gallery-text">${e.views}</p>
      </div>
      <div class="info-item">
      <h3 class="gallery-subtitle">Comments:</h3>
      <p class="gallery-text">${e.comments}</p>
      </div>
      <div class="info-item">
      <h3 class="gallery-subtitle">Downloads:</h3>
      <p class="gallery-text">${e.downloads}</p>
      </div>
    </div>
  </li>`).join("");c.insertAdjacentHTML("beforeend",s),l?l.refresh():l=new f(".gallery a",{captionsData:"alt",captionDelay:250})}const v=document.querySelector(".form"),q=document.querySelector(".input-form");document.querySelector(".submit-btn");document.querySelector(".gallery");v.addEventListener("submit",o=>{o.preventDefault();const s=q.value.trim();if(!s){a.warning({message:"Please enter a search query!",position:"topRight"});return}b(),p(),h(s).then(e=>{if(e.hits.length===0){a.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}L(e.hits)}).catch(e=>{a.error({message:e.message})}).finally(()=>{g()})});
//# sourceMappingURL=index.js.map
