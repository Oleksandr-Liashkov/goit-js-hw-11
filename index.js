import{a as m,S as p,i as a}from"./assets/vendor-BezXTN6Z.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const g="56322343-d60e20edbd0bfd9a78689fe35";function h(o){return m.get("https://pixabay.com/api/",{params:{key:g,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data)}const l=document.querySelector(".gallery"),c=document.querySelector(".loader"),y=new p(".gallery a",{captionsData:"alt",captionDelay:250});function b(o){const r=o.map(({largeImageURL:i,webformatURL:n,tags:e,likes:t,views:s,comments:u,downloads:f})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${i}">
          <img
            class="gallery-image"
            src="${n}"
            alt="${e}"
          />
        </a>
        <div class="info">
          <div class="info-item"><b>Likes</b><span>${t}</span></div>
          <div class="info-item"><b>Views</b><span>${s}</span></div>
          <div class="info-item"><b>Comments</b><span>${u}</span></div>
          <div class="info-item"><b>Downloads</b><span>${f}</span></div>
        </div>
      </li>
    `).join("");l.insertAdjacentHTML("beforeend",r),y.refresh()}function v(){l.innerHTML=""}function L(){c.classList.remove("hidden")}function S(){c.classList.add("hidden")}const d=document.querySelector(".form");d.addEventListener("submit",q);function q(o){o.preventDefault();const r=o.currentTarget.elements["search-text"].value.trim();if(!r){a.warning({message:"Please enter a search query!",position:"topRight"});return}v(),L(),h(r).then(i=>{if(!i.hits||i.hits.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}b(i.hits)}).catch(i=>{console.error(i),a.error({message:"Something went wrong. Please try again.",position:"topRight"})}).finally(()=>{S()}),d.reset()}
//# sourceMappingURL=index.js.map
