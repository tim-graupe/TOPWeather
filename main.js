(()=>{"use strict";var e={d:(t,n)=>{for(var a in n)e.o(n,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:n[a]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{n5:()=>h,R5:()=>w,c5:()=>g,Fn:()=>C});const t=document.getElementById("display-current-conditions");function n(e,n,a,o,i,c,d){t.textContent="";const r=document.createElement("div");r.textContent="feels like: "+Math.round(10*e)/10,t.appendChild(r);const m=document.createElement("div");m.textContent=`humidity: ${n}%`,t.appendChild(m);const p=document.createElement("div"),l=new Date(1e3*a);p.textContent="sunrise:"+l.getHours()+":"+l.getMinutes(),t.appendChild(p);const s=document.createElement("div"),u=new Date(1e3*o);s.textContent="sunset:"+u.getHours()+":"+u.getMinutes(),t.appendChild(s);const h=document.createElement("div");h.textContent=i,t.appendChild(h);const f=document.createElement("div");f.textContent=`wind speed: ${c}`,t.appendChild(f);const y=document.createElement("img");y.src=d,h.appendChild(y)}function a(e,t){const n=Math.round(10*e)/10;g.textContent=`${n}F`,w.textContent=t}function o(e,t){const n=Math.round(10*e)/10;g.textContent=`${n}C`,w.textContent=t}function i(e,t,n,a){const o=document.createElement("div"),i=document.createElement("div"),d=document.createElement("div"),r=document.createElement("img");o.textContent=e,d.textContent=t,i.textContent=n,r.src=a,i.className="forecast-card",i.appendChild(o),i.appendChild(d),i.appendChild(r),c.appendChild(i)}const c=document.getElementById("display-forecast"),d=document.getElementById("week-header");function r(e){d.textContent="The Week Ahead",fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${h.value},us&units=${e}&appid=f4c2e88d89f530a5c961cffa302dc0b9`,{mode:"cors"}).then((function(e){return e.json()})).then((function(t){fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${t.city.coord.lat}&lon=${t.city.coord.lon}&units=${e}&exclude=hourly,minutely&appid=f4c2e88d89f530a5c961cffa302dc0b9`,{mode:"cors"}).then((function(e){return e.json()})).then((function(t){let n=[],a=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];for(let e=0;e<t.daily.length-1;e++)n.push(t.daily[e]);const o=n.map((t=>"imperial"==e?Math.round(10*t.temp.max)/10+"F":Math.round(10*t.temp.max)/10+"C")),c=n.map((t=>"imperial"==e?Math.round(10*t.temp.min)/10+"F":Math.round(10*t.temp.min)/10+"C")),d=n.map((e=>{let t=new Date(1e3*e.dt);return a[t.getDay()]})),r=n.map((e=>`http://openweathermap.org/img/wn/${e.weather[0].icon}@2x.png`));for(let e=0;e<o.length;e++)i(o[e],c[e],d[e],r[e])}))}))}async function m(e){const t=h.value;isNaN(t)?(c.textContent="",C.textContent="",async function(e){const t=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${h.value}&units=${e}&appid=f4c2e88d89f530a5c961cffa302dc0b9`,{mode:"cors"}).catch((function(e){console.log(e)})),i=await t.json();"imperial"==e?(a(i.main.temp,i.name),n(i.main.feels_like,i.main.humidity,i.sys.sunrise,i.sys.sunset,i.weather[0].description,i.wind.speed,`http://openweathermap.org/img/wn/${i.weather[0].icon}@2x.png`),console.log(i)):(o(i.main.temp,i.name),n(i.main.feels_like,i.main.humidity,i.sys.sunrise,i.sys.sunset,i.weather[0].description,i.wind.speed,`http://openweathermap.org/img/wn/${i.weather[0].icon}@2x.png`))}(e)):isNaN(t)||(c.textContent="",C.textContent="",async function(e){const t=await fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${h.value},us&units=${e}&appid=f4c2e88d89f530a5c961cffa302dc0b9`,{mode:"cors"}).catch((function(e){console.log(e)})),i=await t.json();"imperial"==e?a(i.main.temp,i.name):o(i.main.temp,i.name),n(i.main.feels_like,i.main.humidity,i.sys.sunrise,i.sys.sunset,i.weather[0].description,i.wind.speed,`http://openweathermap.org/img/wn/${i.weather[0].icon}@2x.png`)}(e))}const p=document.getElementById("display-hourly");function l(e,t,n){const a=document.createElement("div"),o=document.createElement("div"),i=document.createElement("img");a.textContent=e,o.textContent=t,i.src=n,a.appendChild(o),p.appendChild(a),a.appendChild(i),p.className="hourly-card"}function s(e){fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${h.value},us&units=${e}&appid=f4c2e88d89f530a5c961cffa302dc0b9`,{mode:"cors"}).then((function(e){return e.json()})).then((function(t){fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${t.city.coord.lat}&lon=${t.city.coord.lon}&units=${e}&exclude=daily,minutely&appid=f4c2e88d89f530a5c961cffa302dc0b9`,{mode:"cors"}).then((function(e){return e.json()})).then((function(t){let n=[];for(let e=0;e<t.hourly.length-36;e++)n.push(t.hourly[e]);const a=n.map((t=>"imperial"==e?Math.round(10*t.temp)/10+"F":Math.round(10*t.temp)/10+"C")),o=n.map((e=>{let t=new Date(1e3*e.dt),n=t.getHours(),a=t.getMinutes();return`${n}:${a}${a}`})),i=n.map((e=>`http://openweathermap.org/img/wn/${e.weather[0].icon}@2x.png`));for(let e=0;e<a.length;e++)l(o[e],a[e],i[e])}))}))}document.getElementById("display-hourly");const u=document.getElementById("submit-btn"),h=document.getElementById("city-input"),f=document.getElementById("change-to-C"),y=document.getElementById("change-to-F"),g=document.getElementById("display-temp"),w=document.getElementById("display-city-name"),C=document.getElementById("display-hourly");f.addEventListener("click",(()=>{m("metric"),r("metric"),s("metric")})),y.addEventListener("click",(()=>{m("imperial"),r("imperial"),s("imperial"),console.log("hi")})),u.addEventListener("click",(()=>{m("imperial"),r("imperial"),s("imperial")})),h.addEventListener("keypress",(e=>{"Enter"===e.key&&(m("imperial"),r("imperial"),s("imperial"))}))})();