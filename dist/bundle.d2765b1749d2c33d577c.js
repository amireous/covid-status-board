(()=>{"use strict";const e=document.querySelector(".user-input"),t=document.querySelector(".search-btn"),n=document.getElementById("error"),c=document.querySelector(".loading"),o=document.getElementById("country-name"),r=document.getElementById("active-cases-number"),s=document.getElementById("critical-cases-number"),u=document.getElementById("recovered-cases-number"),a=document.getElementById("total-cases-number"),l=document.getElementById("deathes-cases-number"),d=document.getElementById("tests-cases-number");let m="iran";t.addEventListener("click",(function(t){t.preventDefault(),""===e.value||e.value.length<3?n.textContent="required at least 3 characters":(m=e.value,i(m),n.textContent=""),e.value="",e.blur()}));const i=function(e){c.style.opacity=1,fetch(`https://corona.lmao.ninja/v2/countries/${e}`).then((e=>{if(!e.ok)throw new Error(`Country not found (${e.status})`);return e.json()})).then((e=>{y(e),c.style.opacity=0})).catch((e=>{c.style.opacity=0,n.textContent=e.message}))};i(m);const y=function(e){o.textContent=e.country,r.textContent=e.active,s.textContent=e.critical,u.textContent=e.recovered,a.textContent=e.cases,l.textContent=e.deaths,d.textContent=e.tests}})();