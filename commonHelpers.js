import{S as a}from"./assets/vendor-12e78451.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const c="https://portfolio-js.b.goit.study/api",l=document.querySelector(".swiper-btn-next"),u=document.querySelector(".swiper-btn-prev");new a(".reviews-swiper-container",{direction:"horizontal",keyboard:{enabled:!0,onlyInViewport:!0},navigation:{nextEl:l,prevEl:u}});async function d(){try{const o=await fetch(`${c}/reviews`);if(!o.ok)throw new Error("Failed to get reviews");const t=await o.json();p(t)}catch{alert("An error occurred while getting reviews"),document.querySelector(".swiper-wrapper").innerHTML="<p>Not found</p>"}}function p(o){const t=o.map(n=>`<div class="review">
        <li class="reviews-card">
        <img src="${c}/${n.avatar_url}" alt="${n.author}">
        <h3>${n.author}</h3>
        <p>${n.review}</p>
        </li>
           
        </div>`).join("");document.querySelector(".swiper-wrapper").innerHTML=t}document.addEventListener("DOMContentLoaded",d);
//# sourceMappingURL=commonHelpers.js.map
