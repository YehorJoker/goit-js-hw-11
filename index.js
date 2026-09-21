import{a as m,S as d,i as n}from"./assets/vendor-B4VkUtbg.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const g="57677215-5b9f79ed07fc95428f21aaa62",y="https://pixabay.com/api/";function p(i){return m.get(y,{params:{key:g,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data)}const l=document.querySelector(".gallery"),c=document.querySelector(".loader"),h=new d(".gallery a",{captionsData:"alt",captionDelay:250});function b(i){const r=i.map(({webformatURL:o,largeImageURL:a,tags:e,likes:t,views:s,comments:u,downloads:f})=>`<li class="gallery-item">
  <a class="gallery-link" href="${a}">
    <img class="gallery-image" src="${o}" alt="${e}" />
  </a>
  <ul class="info">
    <li><b>Likes</b>${t}</li>
    <li><b>Views</b>${s}</li>
    <li><b>Comments</b>${u}</li>
    <li><b>Downloads</b>${f}</li>
  </ul>
</li>`).join("");l.insertAdjacentHTML("beforeend",r),h.refresh()}function L(){l.innerHTML=""}function S(){c.classList.add("is-visible")}function q(){c.classList.remove("is-visible")}const w=document.querySelector(".form");w.addEventListener("submit",i=>{i.preventDefault();const r=i.currentTarget.elements["search-text"].value.trim();if(!r){n.warning({message:"Please enter a search query!",position:"topRight"});return}L(),S(),p(r).then(o=>{if(o.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}b(o.hits)}).catch(()=>{n.error({message:"Something went wrong. Please try again later!",position:"topRight"})}).finally(q)});
//# sourceMappingURL=index.js.map
