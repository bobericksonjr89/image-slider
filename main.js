(()=>{const e=document.querySelectorAll(".picture"),t=document.querySelectorAll(".dot"),n=document.querySelector(".previous"),c=document.querySelector(".next"),l=[0,1,2,3,4];let r=0;function i(e){e.classList.toggle("picture--visible")}function a(e){e.classList.toggle("dot--active")}function o(n=r){r=n,i(e[r]),a(t[r]),r++,r===l.length&&(r=0),i(e[r]),a(t[r])}window.index=r;let s=setInterval(o,5e3);function u(){clearInterval(s);const n=document.querySelector(".picture--visible"),c=parseInt(this.dataset.id);i(n),a(t[parseInt(n.dataset.picture)]),r=c,i(e[r]),a(t[r]),s=setInterval(o,5e3)}t.forEach((e=>e.addEventListener("click",u))),c.addEventListener("click",(()=>{o(r),clearInterval(s),s=setInterval(o,5e3)})),n.addEventListener("click",(()=>{var n;i(e[n=r]),a(t[n]),r-=1,r<0&&(r=l.length-1),i(e[r]),a(t[r]),clearInterval(s),s=setInterval(o,5e3)}))})();