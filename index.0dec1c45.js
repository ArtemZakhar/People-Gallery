window.addEventListener("DOMContentLoaded",()=>{let e;let t=document.querySelector(".js-wrapper").querySelector(".js-slider"),s=t.querySelectorAll(".js-slide"),l=document.querySelector(".js-dots"),i=Number(getComputedStyle(s[0]).width.slice(0,-2)),d=getComputedStyle(t).gap.split(" "),o=(Number(d.length>1)?Number(d[1].slice(0,-2)):0)+i,a=s.length;t.style.width=`${o*a}px`,s[0].classList.add("active-slide"),window.innerWidth>=768&&s[1].classList.add("active-slide");for(let e=0;e<a;e++){let t=document.createElement("li");t.classList.add("dots__item"),0===e&&t.classList.add("active-dot"),l.append(t)}(e=l.querySelectorAll(".dots__item")).forEach((l,i)=>{l.addEventListener("click",()=>{s.forEach(e=>e.classList.remove("active-slide")),e.forEach(e=>e.classList.remove("active-dot")),e[i].classList.add("active-dot"),0===i?(s[i].classList.add("active-slide"),t.style.transform="translateX(0px)",window.innerWidth>=768&&s[i+1].classList.add("active-slide")):(s[i].classList.add("active-slide"),t.style.transform=`translateX(${-o*i}px)`,window.innerWidth>=768&&s[i+1]&&s[i+1].classList.add("active-slide"))})})});const e=document.querySelector(".js-subscription-form");e.onsubmit=t=>{for(let[s,l]of(t.preventDefault(),new FormData(e).entries()))console.log(s,":",l);e.reset(),window.scrollTo(0,0)};const t=document.querySelector(".js-to-top");window.addEventListener("scroll",e=>{e.target.scrollingElement.scrollTop>1500?(t.style.opacity=1,t.style.pointerEvents="all"):(t.style.opacity=0,t.style.pointerEvents="none")}),t.addEventListener("click",()=>{window.scrollTo(0,0)});
//# sourceMappingURL=index.0dec1c45.js.map
